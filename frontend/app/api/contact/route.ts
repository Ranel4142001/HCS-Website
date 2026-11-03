import { after, NextResponse } from 'next/server';
import {
  checkRepeatSubmission,
  contactSubmissionSchema,
  createMondayLead,
  leadSource,
  MondayConfigError,
  sendWelcomeEmail,
  submitterFingerprint,
  verifyTurnstile,
} from '@/features/contact/server';

const SUCCESS_MESSAGE = 'Your inquiry has been received. A dedicated credentialing specialist will reach out shortly.';

// Simple per-IP limit so the form can't be used to flood the Monday board. Each server instance keeps its
// own count, so on Vercel it only slows a flood down; the spam checks below do most of the work.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

// People take longer than this to pick a practice type and fill in their details; scripts don't.
const MIN_FILL_MS = 3000;

function isRateLimited(ip: string): boolean {
  // Off in `next dev` so local testing isn't blocked.
  if (process.env.NODE_ENV === 'development') return false;
  const now = Date.now();
  // Forget visitors whose window has passed, so the map doesn't grow for as long as the instance lives.
  for (const [key, times] of recent) {
    if (now - times[times.length - 1] >= WINDOW_MS) recent.delete(key);
  }
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

/** Browsers send Origin on every POST; it must be this site, so other sites and bare scripts are refused. */
function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ success: false, message: 'Please submit the form from our website.' }, { status: 403 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, message: 'Too many requests. Please try again in a few minutes.' }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ success: false, message: 'Please check the form and try again.' }, { status: 400 });
  }

  const { website, elapsedMs, page, turnstileToken, origin, ...lead } = parsed.data;

  // Likely a bot: reply as if it worked so it learns nothing, but don't create a lead.
  if (website?.trim() || elapsedMs < MIN_FILL_MS) {
    console.warn(`[contact] Dropped likely spam (${website?.trim() ? 'honeypot filled' : `sent after ${elapsedMs}ms`})`);
    return NextResponse.json({ success: true, message: SUCCESS_MESSAGE });
  }

  // Cloudflare Turnstile human check (off until TURNSTILE_SECRET_KEY is set)
  if ((await verifyTurnstile(turnstileToken, ip)) === 'failed') {
    return NextResponse.json(
      { success: false, message: "We couldn't confirm you're not a bot. Please complete the verification and try again." },
      { status: 403 },
    );
  }

  // Repeat checks against the leads already on the board (see lead-guard.ts)
  const submitter = submitterFingerprint(ip);
  const verdict = await checkRepeatSubmission(lead.email, submitter);
  if (verdict === 'duplicate') {
    return NextResponse.json(
      {
        success: false,
        message:
          'We already received a request from this email address. A credentialing specialist will contact you soon. To add details, reply to the confirmation email we sent you.',
      },
      { status: 409 },
    );
  }
  if (verdict === 'too_many') {
    console.warn('[contact] Refused: too many requests from one network today');
    return NextResponse.json(
      {
        success: false,
        message: "We've received several requests from your network today. Please try again tomorrow, or reply to your confirmation email.",
      },
      { status: 429 },
    );
  }

  try {
    const itemId = await createMondayLead(lead, { source: leadSource(page, origin), submitter });
    // The welcome email goes out after the reply, so the visitor never waits on it, and a mail problem never
    // loses the lead. The signature image is loaded from this site's own address (the request's origin).
    // Bump ?v= whenever signature.png changes: email apps cache images by address and would keep the old one.
    const signatureUrl = `${new URL(request.url).origin}/email/signature.png?v=3`;
    after(() => sendWelcomeEmail(lead, signatureUrl).catch((err) => console.error('[contact] Welcome email failed', err)));
    return NextResponse.json({ success: true, message: SUCCESS_MESSAGE, submissionId: itemId });
  } catch (err) {
    console.error(err instanceof MondayConfigError ? `[contact] ${err.message}` : '[contact] Monday request failed', err);
    return NextResponse.json(
      { success: false, message: 'We could not send your request. Please try again, or email us directly.' },
      { status: 502 },
    );
  }
}
