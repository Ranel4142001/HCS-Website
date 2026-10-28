import ComingSoonPage from '@/shared/components/layout/ComingSoonPage';
import { buildMetadata } from '@/shared/lib/seo';

// Placeholder until real content exists — kept out of search results and the sitemap.
export const metadata = buildMetadata({
  title: 'Credentialing Blog',
  description: 'Guides and insights on health credentialing — coming soon.',
  path: '/resources/blog',
  noindex: true,
});

export default function Page() {
  return (
    <ComingSoonPage
      icon="✍️"
      title="Blog"
      intro="Practical guides on credentialing are on the way."
      meanwhile={[{ label: 'Credentialing FAQ', href: '/faq' }, { label: 'Our services', href: '/services' }, { label: 'Timeline estimator', href: '/#estimator' }]}
    />
  );
}
