import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Mission & Healthcare Leadership',
  description:
    'Learn how HealthCredSTAT is revolutionizing healthcare credentialing with real-time AI autonomous agents and seasoned clinical compliance specialists.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
