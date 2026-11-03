import type { ContactFormValues } from '../validation/contact.schema';

/**
 * Server only: reads MONDAY_API_TOKEN, so import it from route handlers, never from client components.
 * Creates one item on a Monday leads board per contact form submission: the "Website Leads" work board,
 * or the monday CRM "Leads" board. Columns are matched by title, so the board can be edited in Monday
 * without code changes: Email, Phone, Practice type, Message, Lead status (or the CRM's Status), Submitted,
 * Source, Submitter. Missing columns are skipped.
 */

const MONDAY_API_URL = 'https://api.monday.com/v2';

export const PRACTICE_TYPE_LABELS: Record<ContactFormValues['role'], string> = {
  individual: 'Individual clinician',
  group: 'Group practice or staffing agency',
  enterprise: 'Health system or MSO',
};

interface MondayColumn {
  id: string;
  title: string;
  type: string;
  settings_str?: string;
}

// New leads get the first of these labels the status column has: "New" on our board, "New Lead" in monday CRM.
const NEW_LEAD_LABELS = ['New', 'New Lead'];

export class MondayConfigError extends Error {}

function getConfig() {
  const token = process.env.MONDAY_API_TOKEN;
  const boardId = process.env.MONDAY_BOARD_ID;
  if (!token || !boardId) {
    throw new MondayConfigError('MONDAY_API_TOKEN and MONDAY_BOARD_ID must be set');
  }
  return { token, boardId };
}

async function mondayRequest<T>(token: string, query: string, variables: Record<string, unknown>): Promise<T> {
  const res = await fetch(MONDAY_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: token, 'API-Version': '2025-04' },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store',
    signal: AbortSignal.timeout(10_000),
  });
  const json = (await res.json().catch(() => null)) as { data?: T; errors?: unknown; error_message?: string } | null;
  if (!res.ok || !json || json.errors || json.error_message || !json.data) {
    throw new Error(`Monday API error (${res.status}): ${JSON.stringify(json?.errors ?? json?.error_message ?? json)}`);
  }
  return json.data;
}

// Column layout rarely changes, so it is fetched once per server instance.
let columnsCache: { boardId: string; columns: MondayColumn[] } | null = null;

async function getColumns(token: string, boardId: string): Promise<MondayColumn[]> {
  if (columnsCache?.boardId === boardId) return columnsCache.columns;
  const data = await mondayRequest<{ boards: { columns: MondayColumn[] }[] }>(
    token,
    'query ($ids: [ID!]) { boards(ids: $ids) { columns { id title type settings_str } } }',
    { ids: [boardId] },
  );
  const columns = data.boards[0]?.columns;
  if (!columns) throw new Error(`Monday board ${boardId} not found or not shared with the token's user`);
  columnsCache = { boardId, columns };
  return columns;
}

/** Formats a value the way Monday expects for each column type. */
function columnValue(column: MondayColumn, value: string): unknown {
  switch (column.type) {
    case 'email':
      return { email: value, text: value };
    case 'phone':
      return { phone: value.replace(/[^\d+]/g, ''), countryShortName: 'US' };
    case 'status':
    case 'color':
    case 'dropdown':
      return column.type === 'dropdown' ? { labels: [value] } : { label: value };
    case 'long_text':
      return { text: value };
    case 'date': {
      const iso = new Date().toISOString();
      return { date: iso.slice(0, 10), time: iso.slice(11, 19) };
    }
    default:
      return value;
  }
}

/** The first of `candidates` that the status column defines, or the first candidate if none match. */
function pickStatusLabel(column: MondayColumn, candidates: string[]): string {
  let labels: string[] = [];
  try {
    const parsed = JSON.parse(column.settings_str || '{}').labels;
    labels = Array.isArray(parsed) ? parsed.map((l: { name?: string }) => l.name ?? '') : Object.values(parsed ?? {});
  } catch {
    // Unreadable settings: fall back to the first candidate.
  }
  return candidates.find((c) => labels.includes(c)) ?? candidates[0];
}

interface LeadMeta {
  source: string;
  /** Fingerprint of the visitor's network, stored so repeat submissions can be counted (see lead-guard.ts). */
  submitter?: string;
}

function buildColumnValues(columns: MondayColumn[], data: ContactFormValues, includePhone: boolean, meta: LeadMeta) {
  const byTitle = new Map(columns.map((c) => [c.title.trim().toLowerCase(), c]));
  const wanted: [string, string | undefined][] = [
    ['email', data.email],
    ['phone', includePhone ? data.phone : undefined],
    ['practice type', PRACTICE_TYPE_LABELS[data.role]],
    ['message', data.message],
    ['submitted', 'now'],
    ['source', meta.source],
    ['submitter', meta.submitter],
  ];
  const values: Record<string, unknown> = {};
  for (const [title, value] of wanted) {
    const column = byTitle.get(title);
    if (column && value?.trim()) values[column.id] = columnValue(column, value.trim());
  }
  const statusColumn = byTitle.get('lead status') ?? byTitle.get('status');
  if (statusColumn) values[statusColumn.id] = columnValue(statusColumn, pickStatusLabel(statusColumn, NEW_LEAD_LABELS));
  return values;
}

async function createItem(token: string, boardId: string, name: string, values: Record<string, unknown>) {
  const data = await mondayRequest<{ create_item: { id: string } }>(
    token,
    `mutation ($board: ID!, $name: String!, $values: JSON) {
      create_item(board_id: $board, item_name: $name, column_values: $values, create_labels_if_missing: true) { id }
    }`,
    { board: boardId, name, values: JSON.stringify(values) },
  );
  return data.create_item.id;
}

export async function createMondayLead(data: ContactFormValues, meta: LeadMeta): Promise<string> {
  const { token, boardId } = getConfig();
  const columns = await getColumns(token, boardId);
  try {
    return await createItem(token, boardId, data.name, buildColumnValues(columns, data, true, meta));
  } catch (err) {
    // Monday rejects phone numbers it can't parse. Never lose the lead over it: retry with the phone in the message.
    if (!data.phone?.trim()) throw err;
    const message = [data.message?.trim(), `Phone: ${data.phone.trim()}`].filter(Boolean).join('\n\n');
    return createItem(token, boardId, data.name, buildColumnValues(columns, { ...data, message }, false, meta));
  }
}

export interface RecentLead {
  createdAt: string;
  email: string;
  submitter: string;
}

/** The newest leads on the board, newest first, with the fields needed to spot repeat submissions. */
export async function getRecentLeads(limit = 200): Promise<RecentLead[]> {
  const { token, boardId } = getConfig();
  const columns = await getColumns(token, boardId);
  const byTitle = new Map(columns.map((c) => [c.title.trim().toLowerCase(), c]));
  const emailId = byTitle.get('email')?.id;
  const submitterId = byTitle.get('submitter')?.id;
  const ids = [emailId, submitterId].filter((id): id is string => !!id);

  const data = await mondayRequest<{
    boards: { items_page: { items: { created_at: string; column_values: { id: string; text: string | null }[] }[] } }[];
  }>(
    token,
    `query ($board: [ID!], $limit: Int!, $ids: [String!]) {
      boards(ids: $board) {
        items_page(limit: $limit, query_params: { order_by: [{ column_id: "__creation_log__", direction: desc }] }) {
          items { created_at column_values(ids: $ids) { id text } }
        }
      }
    }`,
    { board: [boardId], limit, ids },
  );
  return (data.boards[0]?.items_page.items ?? []).map((item) => {
    const text = (id?: string) => item.column_values.find((v) => v.id === id)?.text ?? '';
    return { createdAt: item.created_at, email: text(emailId), submitter: text(submitterId) };
  });
}
