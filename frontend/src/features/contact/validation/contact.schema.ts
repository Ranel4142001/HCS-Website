import { z } from 'zod';

// Length caps are well above any real entry; they stop oversized input before it reaches the CRM.
export const contactFormSchema = z.object({
  role: z.enum(['individual', 'group', 'enterprise'], {
    error: 'Please select a practice role.',
  }),
  name: z.string().min(2, 'Full Name is required').max(100, 'Please keep your name under 100 characters'),
  phone: z.string().max(30, 'Please enter a valid phone number').optional(),
  email: z
    .string()
    .min(1, 'Email address is required')
    .max(254, 'Please enter a valid email address')
    .pipe(z.email('Please enter a valid email address')),
  message: z.string().max(2000, 'Please keep your message under 2,000 characters').optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
