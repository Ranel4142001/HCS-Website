import type { ContactFormValues } from '../validation/contact.schema';

export interface SubmitContactResponse {
  success: boolean;
  message: string;
  submissionId?: string;
}

/** Spam signals sent alongside the form; see the checks in app/api/contact/route.ts. */
export interface SubmissionMeta {
  /** Value of the hidden honeypot field; empty for real visitors. */
  website: string;
  /** Milliseconds since the form appeared. */
  elapsedMs: number;
}

/** Sends the form to /api/contact, which creates a lead on the Monday board. Throws with a readable message on failure. */
export const submitContactForm = async (
  data: ContactFormValues,
  meta: SubmissionMeta,
): Promise<SubmitContactResponse> => {
  let res: Response;
  try {
    res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, ...meta, page: window.location.pathname }),
    });
  } catch {
    throw new Error('Could not reach the server. Please check your connection and try again.');
  }

  const result = (await res.json().catch(() => null)) as SubmitContactResponse | null;
  if (!res.ok || !result?.success) {
    throw new Error(result?.message || 'Something went wrong. Please try again.');
  }
  return result;
};
