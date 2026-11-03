/**
 * Server only: verifies a Cloudflare Turnstile token with Cloudflare.
 * While TURNSTILE_SECRET_KEY is unset the check is off ('skipped'), so the form keeps working until
 * the keys are configured.
 */
const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export type TurnstileResult = 'passed' | 'failed' | 'skipped';

export async function verifyTurnstile(token: string | undefined, ip: string): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return 'skipped';
  if (!token) return 'failed';

  const body = new URLSearchParams({ secret, response: token });
  if (ip && ip !== 'unknown') body.set('remoteip', ip);
  try {
    const res = await fetch(VERIFY_URL, { method: 'POST', body, cache: 'no-store', signal: AbortSignal.timeout(8_000) });
    const result = (await res.json()) as { success?: boolean; 'error-codes'?: string[] };
    if (!result.success) console.warn('[contact] Turnstile rejected the token', result['error-codes']);
    return result.success ? 'passed' : 'failed';
  } catch (err) {
    // Cloudflare unreachable: don't turn real visitors away. The other spam and repeat checks still apply.
    console.error('[contact] Could not reach Turnstile; accepting the request', err);
    return 'passed';
  }
}
