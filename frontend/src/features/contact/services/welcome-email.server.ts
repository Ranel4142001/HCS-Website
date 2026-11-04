import type { ContactFormValues } from '../validation/contact.schema';
import { PRACTICE_TYPE_LABELS } from './monday.server';

/**
 * Server only: emails each new lead a branded "we've received your request" confirmation through
 * Microsoft 365 (Microsoft Graph), sent from WELCOME_EMAIL_FROM.
 * Off until MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET and WELCOME_EMAIL_FROM are all set.
 * The Entra app needs the Mail.Send application permission, ideally limited to that one mailbox.
 */

const SUBJECT = 'We’ve received your credentialing quote request';

/** Signature on the welcome email: the team, with the contact details people can reply to. */
const SIGNATURE = {
  name: 'HealthCredSTAT Team',
  email: 'ranel@healthcredstat.com',
  phone: '+63930-107-1994',
  phoneLink: '+639301071994',
};

function welcomeConfig() {
  const tenantId = process.env.MS_TENANT_ID;
  const clientId = process.env.MS_CLIENT_ID;
  const clientSecret = process.env.MS_CLIENT_SECRET;
  const from = process.env.WELCOME_EMAIL_FROM;
  return tenantId && clientId && clientSecret && from ? { tenantId, clientId, clientSecret, from } : null;
}

export const isWelcomeEmailEnabled = () => welcomeConfig() !== null;

/** Visitor text goes into HTML, so every value is escaped. */
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

const nl2br = (value: string) => escapeHtml(value).replace(/\r?\n/g, '<br>');

const TITLES = new Set(['dr', 'mr', 'mrs', 'ms', 'miss', 'mx', 'prof']);

/** "Maria Santos" → "Maria"; "Dr. Maria Santos" → "Dr. Santos". Falls back to "there" when there's no name. */
export function greetingName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'there';
  const title = parts[0].replace(/\.$/, '').toLowerCase();
  // Visitors sometimes type in lowercase; greet them with a capital first letter.
  const cap = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
  if (TITLES.has(title) && parts.length > 1) {
    const display = parts[0].endsWith('.') ? parts[0] : `${parts[0]}.`;
    return `${cap(display)} ${cap(parts[parts.length - 1])}`;
  }
  return cap(parts[0]);
}

/** The email's HTML: tables and inline styles, which every email app renders the same way. */
/** The "Your request" lines, HTML-escaped: practice type, then whatever else the visitor filled in. */
function requestSummary(lead: ContactFormValues): string {
  const lines = [`Practice type: ${escapeHtml(PRACTICE_TYPE_LABELS[lead.role])}`];
  if (lead.organization?.trim()) lines.push(`Organization: ${escapeHtml(lead.organization.trim())}`);
  if (lead.providers) lines.push(`Providers: ${lead.providers === '200+' ? 'More than 200' : escapeHtml(lead.providers.replace('-', '–'))}`);
  if (lead.message?.trim()) lines.push(`Message: ${nl2br(lead.message.trim())}`);
  return lines.join('<br>');
}

export function welcomeEmailHtml(lead: ContactFormValues, signatureUrl: string): string {
  const p = 'margin:0 0 16px;';
  return `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#ffffff;">
<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:#222222;max-width:600px;padding:8px 4px;">
<p style="${p}">Hi ${escapeHtml(greetingName(lead.name))},</p>
<p style="${p}">Thank you for reaching out to HealthCredSTAT. We’ve received your request, and one of our credentialing specialists is already looking it over.</p>
<p style="margin:0 0 4px;"><strong>What happens next</strong></p>
<ul style="margin:0 0 16px;padding-left:20px;">
<li>A specialist will contact you within 1 business day with a quote and a realistic timeline.</li>
<li>There’s no cost or obligation to speak with us.</li>
</ul>
<p style="${p}">If any questions come up in the meantime, just reply to this email. We’re always happy to help.</p>
<p style="margin:0 0 4px;"><strong>Your request</strong></p>
<p style="${p}">${requestSummary(lead)}</p>
<p style="margin:0 0 16px;font-size:13px;color:#666666;">For your privacy, please don’t include patient information in email replies.</p>
<p style="margin:0 0 18px;"><strong>Best Regards,</strong></p>
<!-- Signature: one image of the team's Canva design (public/email/signature.png). Dark mode recolours email text
     and backgrounds but never images, so this stays white and identical everywhere. The alt text carries the
     details when images are blocked, and the image links to the reply address. -->
<a href="mailto:${SIGNATURE.email}" style="text-decoration:none;"><img src="${escapeHtml(signatureUrl)}" alt="${SIGNATURE.name} · ${SIGNATURE.email} · ${SIGNATURE.phone}" width="400" height="200" style="display:block;border:0;width:400px;max-width:100%;height:auto;"></a>
</div>
</body></html>`;
}

async function graphToken(tenantId: string, clientId: string, clientSecret: string): Promise<string> {
  const res = await fetch(`https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`, {
    method: 'POST',
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      scope: 'https://graph.microsoft.com/.default',
      grant_type: 'client_credentials',
    }),
    cache: 'no-store',
    signal: AbortSignal.timeout(10_000),
  });
  const json = (await res.json().catch(() => null)) as { access_token?: string; error_description?: string } | null;
  if (!res.ok || !json?.access_token) throw new Error(`Microsoft sign-in failed (${res.status}): ${json?.error_description ?? 'no token'}`);
  return json.access_token;
}

interface MailMessage {
  to: { address: string; name?: string };
  subject: string;
  html: string;
  replyTo?: { address: string; name?: string };
}

/** Sends one email from WELCOME_EMAIL_FROM through Microsoft Graph. */
async function sendMail(config: NonNullable<ReturnType<typeof welcomeConfig>>, mail: MailMessage): Promise<void> {
  const token = await graphToken(config.tenantId, config.clientId, config.clientSecret);
  const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(config.from)}/sendMail`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: {
        subject: mail.subject,
        body: { contentType: 'HTML', content: mail.html },
        toRecipients: [{ emailAddress: mail.to }],
        ...(mail.replyTo ? { replyTo: [{ emailAddress: mail.replyTo }] } : {}),
      },
      saveToSentItems: true,
    }),
    cache: 'no-store',
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`Microsoft Graph sendMail failed (${res.status}): ${await res.text().catch(() => '')}`);
}

/** Sends the welcome email. Does nothing while the Microsoft 365 settings are missing. */
export async function sendWelcomeEmail(lead: ContactFormValues, signatureUrl: string): Promise<void> {
  const config = welcomeConfig();
  if (!config) return;
  await sendMail(config, {
    to: { address: lead.email, name: lead.name },
    subject: SUBJECT,
    html: welcomeEmailHtml(lead, signatureUrl),
    replyTo: { address: SIGNATURE.email, name: SIGNATURE.name },
  });
}

/**
 * Backup when Monday couldn't save a lead: emails the whole request to LEAD_BACKUP_EMAIL (default: the
 * sending mailbox) so it can be added to the board by hand. Returns false when email isn't configured.
 */
export async function sendLeadBackupEmail(lead: ContactFormValues, source: string): Promise<boolean> {
  const config = welcomeConfig();
  if (!config) return false;
  const rows: [string, string | undefined][] = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Phone', lead.phone],
    ['Practice type', PRACTICE_TYPE_LABELS[lead.role]],
    ['Organization', lead.organization],
    ['Providers', lead.providers],
    ['Message', lead.message],
    ['Source', source],
    ['Received', new Date().toUTCString()],
  ];
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#222;">
<p><strong>Monday could not save this website lead.</strong> Please add it to the Leads board by hand. The visitor was told their request was received.</p>
<table cellpadding="6" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#dddddd;">
${rows.filter(([, v]) => v?.trim()).map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${nl2br(v!.trim())}</td></tr>`).join('\n')}
</table></div>`;
  await sendMail(config, {
    to: { address: process.env.LEAD_BACKUP_EMAIL || config.from },
    subject: `ACTION NEEDED – website lead not saved in Monday: ${lead.name}`,
    html,
    replyTo: { address: lead.email, name: lead.name },
  });
  return true;
}
