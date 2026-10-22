import { ContactFormValues } from '../validation/contact.schema';

export interface SubmitContactResponse {
  success: boolean;
  message: string;
  submissionId: string;
}

export const submitContactForm = async (data: ContactFormValues): Promise<SubmitContactResponse> => {
  // Simulate network latency (1300ms matching original animation delay)
  await new Promise((resolve) => setTimeout(resolve, 1300));

  return {
    success: true,
    message: 'Your inquiry has been received. A dedicated credentialing specialist will reach out shortly.',
    submissionId: `STAT-${Math.floor(100000 + Math.random() * 900000)}`,
  };
};
