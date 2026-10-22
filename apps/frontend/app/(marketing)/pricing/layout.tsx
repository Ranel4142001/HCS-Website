import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Guaranteed SLAs',
  description:
    'Predictable, transparent pricing for medical credentialing, provider enrollment, and delegated CVO operations with guaranteed turnaround times.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing & Plans | HealthCredSTAT',
    description:
      'Predictable pricing for medical credentialing, provider enrollment, and delegated CVO operations.',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
