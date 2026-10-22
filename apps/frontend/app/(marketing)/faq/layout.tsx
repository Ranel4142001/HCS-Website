import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ & Credentialing Knowledge Base',
  description:
    'Frequently asked questions about medical credentialing, CVO operations, NCQA standards, primary source verification, and provider enrollment timelines.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
