import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'Credentialing Services Pricing',
  description:
    'Transparent pricing for medical credentialing and payer enrollment services. Individual clinicians from $599 per assignment; custom pricing for groups and enterprises.',
  path: '/pricing',
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
