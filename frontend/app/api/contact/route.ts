import { NextResponse } from 'next/server';
import { contactFormSchema, createMondayLead, MondayConfigError } from '@/features/contact/server';

// Simple per-IP limit so the form can't be used to flood the Monday board. Resets when the server restarts.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  // Off in `next dev` so local testing isn't blocked.
  if (process.env.NODE_ENV === 'development') return false;
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, message: 'Too many requests. Please try again in a few minutes.' }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ success: false, message: 'Please check the form and try again.' }, { status: 400 });
  }

  try {
    const itemId = await createMondayLead(parsed.data);
    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been received. A dedicated credentialing specialist will reach out shortly.',
      submissionId: itemId,
    });
  } catch (err) {
    console.error(err instanceof MondayConfigError ? `[contact] ${err.message}` : '[contact] Monday request failed', err);
    return NextResponse.json(
      { success: false, message: 'We could not send your request. Please try again, or email us directly.' },
      { status: 502 },
    );
  }
}
