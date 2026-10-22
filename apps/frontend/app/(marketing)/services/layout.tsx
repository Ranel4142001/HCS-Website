import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Autonomous Operations',
  description:
    'Comprehensive AI-powered healthcare credentialing, primary source verification, delegated credentialing, and multi-state provider enrollment services.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
