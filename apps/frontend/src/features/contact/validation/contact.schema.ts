import { z } from 'zod';

export const contactFormSchema = z.object({
  role: z.enum(['individual', 'group', 'enterprise'], {
    required_error: 'Please select a practice role.',
  }),
  name: z.string().min(2, 'Full Name is required'),
  phone: z.string().optional(),
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Please enter a valid email address'),
  message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
