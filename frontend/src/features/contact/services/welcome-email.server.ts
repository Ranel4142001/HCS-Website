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

/** The email's HTML: tables and inline styles, which every email app renders the same way. */
export function welcomeEmailHtml(lead: ContactFormValues, signatureUrl: string): string {
  const message = lead.message?.trim();
  const p = 'margin:0 0 16px;';
  return `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#ffffff;">
<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:#222222;max-width:600px;padding:8px 4px;">
<p style="${p}">Hi ${escapeHtml(lead.name)},</p>
<p style="${p}">Thank you for reaching out to HealthCredSTAT. We’ve received your request, and a dedicated credentialing specialist is now reviewing your details.</p>
<p style="margin:0 0 4px;"><strong>What happens next</strong></p>
<ul style="margin:0 0 16px;padding-left:20px;">
<li>A specialist will contact you within 1 business day with a quote and a realistic timeline.</li>
<li>There’s no obligation. If you have questions in the meantime, just reply to this email.</li>
</ul>
<p style="margin:0 0 4px;"><strong>Your request</strong></p>
<p style="${p}">Practice type: ${escapeHtml(PRACTICE_TYPE_LABELS[lead.role])}${message ? `<br>Message: ${nl2br(message)}` : ''}</p>
<p style="margin:0 0 18px;">Best regards,</p>
<!-- Signature: one image of the team's Canva design (public/email/signature.png). Dark mode recolours email text
     and backgrounds but never images, so this stays white and identical everywhere. The alt text carries the
     details when images are blocked, and the image links to the reply address. -->
<a href="mailto:${SIGNATURE.email}" style="text-decoration:none;"><img src="${escapeHtml(signatureUrl)}" alt="${SIGNATURE.name} · ${SIGNATURE.email} · ${SIGNATURE.phone}" width="520" style="display:block;border:0;width:520px;max-width:100%;height:auto;"></a>
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

/** Sends the welcome email. Does nothing while the Microsoft 365 settings are missing. */
export async function sendWelcomeEmail(lead: ContactFormValues, signatureUrl: string): Promise<void> {
  const config = welcomeConfig();
  if (!config) return;

  const token = await graphToken(config.tenantId, config.clientId, config.clientSecret);
  const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(config.from)}/sendMail`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: {
        subject: SUBJECT,
        body: { contentType: 'HTML', content: welcomeEmailHtml(lead, signatureUrl) },
        toRecipients: [{ emailAddress: { address: lead.email, name: lead.name } }],
        replyTo: [{ emailAddress: { address: SIGNATURE.email, name: SIGNATURE.name } }],
      },
      saveToSentItems: true,
    }),
    cache: 'no-store',
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`Microsoft Graph sendMail failed (${res.status}): ${await res.text().catch(() => '')}`);
}
