import ComingSoonPage from '@/shared/components/layout/ComingSoonPage';
import { buildMetadata } from '@/shared/lib/seo';

// Placeholder until real content exists — kept out of search results and the sitemap.
export const metadata = buildMetadata({
  title: 'Resource Library',
  description: 'Credentialing checklists and guides — coming soon.',
  path: '/resources/library',
  noindex: true,
});

export default function Page() {
  return (
    <ComingSoonPage
      icon="📚"
      title="Resource Library"
      intro="Checklists and guides for credentialing teams are on the way."
      meanwhile={[{ label: 'Credentialing FAQ', href: '/faq' }, { label: 'Our services', href: '/services' }, { label: 'Timeline estimator', href: '/#estimator' }]}
    />
  );
}
