import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'About Us — Credentialing Specialists',
  description:
    'HealthCredSTAT helps healthcare organizations get providers credentialed, enrolled and billing sooner, pairing credentialing specialists with automation.',
  path: '/about',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
