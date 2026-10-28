import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'Health Credentialing Services',
  description:
    'Health credentialing services: primary source verification, committee-ready files, CAQH management, recredentialing and ongoing sanctions monitoring.',
  path: '/services',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
