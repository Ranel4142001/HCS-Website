import { createHmac } from 'node:crypto';
import { getRecentLeads, type RecentLead } from './monday.server';

/**
 * Stops repeat submissions using the leads already on the Monday board, so the limits hold across every
 * server instance (an in-memory counter resets per instance on Vercel):
 * - the same email address again within DUPLICATE_WINDOW_MS, and
 * - more than MAX_PER_SUBMITTER leads from one network within SUBMITTER_WINDOW_MS, whatever emails it uses.
 */
const DUPLICATE_WINDOW_MS = 30 * 24 * 60 * 60 * 1000;
const SUBMITTER_WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_PER_SUBMITTER = 3;

export type RepeatVerdict = 'ok' | 'duplicate' | 'too_many';

/**
 * One address for each mailbox: lowercase, without a "+tag", and without the dots Gmail ignores,
 * so "J.Doe+quote@gmail.com" and "jdoe@gmail.com" count as the same person.
 */
export function normalizeEmail(email: string): string {
  const [rawLocal, rawDomain] = email.trim().toLowerCase().split('@');
  if (!rawDomain) return email.trim().toLowerCase();
  const gmail = rawDomain === 'gmail.com' || rawDomain === 'googlemail.com';
  let local = rawLocal.split('+')[0];
  if (gmail) local = local.replace(/\./g, '');
  return `${local}@${gmail ? 'gmail.com' : rawDomain}`;
}

/**
 * A one-way fingerprint of the visitor's IP address. Only this is stored, never the address itself, and
 * without the secret it can't be turned back into an IP. Undefined when the IP is unknown (e.g. local dev).
 */
export function submitterFingerprint(ip: string): string | undefined {
  const secret = process.env.LEAD_FINGERPRINT_SECRET || process.env.MONDAY_API_TOKEN;
  if (!ip || ip === 'unknown' || !secret) return undefined;
  return createHmac('sha256', secret).update(ip).digest('hex').slice(0, 16);
}

export function judgeRepeat(recent: RecentLead[], email: string, submitter: string | undefined, now = Date.now()): RepeatVerdict {
  const emailKey = normalizeEmail(email);
  const within = (lead: RecentLead, windowMs: number) => now - Date.parse(lead.createdAt) < windowMs;

  if (recent.some((lead) => lead.email && within(lead, DUPLICATE_WINDOW_MS) && normalizeEmail(lead.email) === emailKey)) {
    return 'duplicate';
  }
  if (submitter) {
    const fromSubmitter = recent.filter((lead) => lead.submitter === submitter && within(lead, SUBMITTER_WINDOW_MS));
    if (fromSubmitter.length >= MAX_PER_SUBMITTER) return 'too_many';
  }
  return 'ok';
}

/** Checks the board for repeats. If Monday can't be read, lets the lead through rather than lose a real request. */
export async function checkRepeatSubmission(email: string, submitter: string | undefined): Promise<RepeatVerdict> {
  try {
    return judgeRepeat(await getRecentLeads(), email, submitter);
  } catch (err) {
    console.error('[contact] Could not check for repeat submissions; accepting the lead', err);
    return 'ok';
  }
}
