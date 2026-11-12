import type { IconName } from '@/shared/components/ui/Icon';

export const STORY = {
  eyebrow: 'Our story',
  title: 'Why we exist',
  mission: 'One dedicated team that owns credentialing, from the first application to every recredentialing date.',
  paragraphs: [
    'Credentialing is easy to overlook and costly to get wrong. A provider who is not yet credentialed cannot see most insured patients, and a missed recredentialing date can drop them from a network.',
    'The work usually falls on a small team juggling portals, spreadsheets and phone queues.',
    'We started HealthCredSTAT to fix that: one dedicated team that owns the process, with technology that keeps every file moving and every date tracked.',
  ],
};

export const PRINCIPLES = [
  {
    title: 'Own the outcome',
    text: 'We do not just submit applications. We follow every file until the provider is approved, and tell you where it stands along the way.',
  },
  {
    title: 'Get it right the first time',
    text: 'Most delays start with an incomplete file. Every application is checked by a specialist before it reaches your committee.',
  },
  {
    title: 'Ask providers once',
    text: 'Clinicians should spend their time with patients. We collect information once, keep it current and reuse it everywhere it is needed.',
  },
  {
    title: 'Protect your data',
    text: 'Provider information is sensitive. We handle it with HIPAA-aligned safeguards, role-based access and an audit trail that cannot be edited.',
  },
];

export const AUDIENCES: {
  title: string;
  intro: string;
  links: { label: string; href: string; description: string; icon: IconName }[];
} = {
  title: 'Who we help',
  intro: 'From a single clinician starting a new assignment to health systems managing thousands of providers.',
  links: [
    { label: 'Medical groups & MSOs', href: '/who-we-help/provider-groups', description: 'Get new providers credentialed and billing sooner.', icon: 'users' },
    { label: 'Health systems, hospitals & surgery centers', href: '/who-we-help/health-systems', description: 'Centralized verification across every facility.', icon: 'building' },
    { label: 'Telehealth & digital health', href: '/who-we-help/digital-health', description: 'Multi-state licensing and credentialing.', icon: 'globe' },
  ],
};
