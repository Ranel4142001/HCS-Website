import type { ContactFormValues } from '../validation/contact.schema';

export interface SubmitContactResponse {
  success: boolean;
  message: string;
  submissionId?: string;
}

/** Sends the form to /api/contact, which creates a lead on the Monday board. Throws with a readable message on failure. */
export const submitContactForm = async (data: ContactFormValues): Promise<SubmitContactResponse> => {
  let res: Response;
  try {
    res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
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
