import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'About Us — Medical Credentialing Specialists',
  description:
    'HealthCredSTAT helps healthcare organizations get providers credentialed, enrolled and billing sooner by pairing experienced credentialing specialists with automation.',
  path: '/about',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
