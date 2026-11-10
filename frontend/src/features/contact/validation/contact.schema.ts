import { z } from 'zod';

// zod normally probes for eval-style code generation to speed up validation. The site's Content Security Policy
// blocks eval, so the probe only logs a policy violation in the browser; jitless mode skips it. Our schemas are
// tiny, so there's no noticeable speed difference.
z.config({ jitless: true });

// Length caps are well above any real entry; they stop oversized input before it reaches the CRM.
/** Options for "How many providers?". */
export const PROVIDER_COUNTS = ['2-5', '6-20', '21-50', '51-200', '200+'] as const;

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
  /** Groups and health systems only (the form hides both for individual clinicians). */
  organization: z.string().max(150, 'Please keep the organization name under 150 characters').optional(),
  providers: z.enum(PROVIDER_COUNTS).or(z.literal('')).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/** What the browser posts to /api/contact: the form values plus spam signals and the page it was sent from. */
export const contactSubmissionSchema = contactFormSchema.extend({
  /** Honeypot: hidden from people, so any value means a bot filled in every field. */
  website: z.string().max(500).optional(),
  /** Milliseconds between the form appearing and being submitted, measured in the browser. */
  elapsedMs: z.number().int().nonnegative(),
  /** Path of the page the form was sent from, e.g. "/pricing". */
  page: z.string().max(200).optional(),
  /** Cloudflare Turnstile token proving a person passed the human check; verified on the server. */
  turnstileToken: z.string().max(4096).optional(),
  /** Which part of the site sent it: the contact form (default) or the Quick Answers chat. */
  origin: z.enum(['form', 'chat']).optional(),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
