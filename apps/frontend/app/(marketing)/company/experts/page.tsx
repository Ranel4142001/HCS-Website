import ComingSoonPage from '@/shared/components/layout/ComingSoonPage';
import { buildMetadata } from '@/shared/lib/seo';

// Placeholder until real content exists — kept out of search results and the sitemap.
export const metadata = buildMetadata({
  title: 'Our Team',
  description: 'Meet the HealthCredSTAT credentialing team — coming soon.',
  path: '/company/experts',
  noindex: true,
});

export default function Page() {
  return (
    <ComingSoonPage
      icon="🎖️"
      title="Our Team"
      intro="Introductions to the credentialing specialists behind HealthCredSTAT are on the way."
      meanwhile={[{ label: 'About us', href: '/about' }, { label: 'Our services', href: '/services' }, { label: 'Credentialing FAQ', href: '/faq' }]}
    />
  );
}
