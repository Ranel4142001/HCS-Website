import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'Credentialing Services Pricing',
  description:
    'Pricing for health credentialing services. Individual clinicians from $599 per assignment; custom quotes for groups and enterprises.',
  path: '/pricing',
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
