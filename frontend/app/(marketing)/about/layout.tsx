import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'About Us — Credentialing Specialists',
  description:
    'HealthCredSTAT helps healthcare organizations get providers credentialed and ready sooner, pairing experienced credentialing specialists with AI automation.',
  path: '/about',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
