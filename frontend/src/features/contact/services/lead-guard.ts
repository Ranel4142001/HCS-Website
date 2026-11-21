import { createHmac } from 'node:crypto';
import { getRecentLeads } from './monday.server';
import { judgeRepeat, type RepeatVerdict } from './repeat-rules';

/**
 * A one-way fingerprint of the visitor's IP address. Only this is stored, never the address itself, and
 * without the secret it can't be turned back into an IP. Undefined when the IP is unknown (e.g. local dev).
 */
export function submitterFingerprint(ip: string): string | undefined {
  const secret = process.env.LEAD_FINGERPRINT_SECRET || process.env.MONDAY_API_TOKEN;
  if (!ip || ip === 'unknown' || !secret) return undefined;
  return createHmac('sha256', secret).update(ip).digest('hex').slice(0, 16);
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
