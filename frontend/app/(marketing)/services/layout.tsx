import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'Credentialing & Enrollment Services',
  description:
    'Full-service medical credentialing: payer enrollment, primary source verification, recredentialing, roster management, privileging and multi-state licensing.',
  path: '/services',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
