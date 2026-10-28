import ComingSoonPage from '@/shared/components/layout/ComingSoonPage';
import { buildMetadata } from '@/shared/lib/seo';

// Placeholder until real content exists — kept out of search results and the sitemap.
export const metadata = buildMetadata({
  title: 'Case Studies',
  description: 'Client case studies from HealthCredSTAT — coming soon.',
  path: '/resources/case-studies',
  noindex: true,
});

export default function Page() {
  return (
    <ComingSoonPage
      icon="📈"
      title="Case Studies"
      intro="Client stories are on the way. Ask us how we would approach credentialing for an organization like yours."
      meanwhile={[{ label: 'Our services', href: '/services' }, { label: 'Timeline estimator', href: '/#estimator' }, { label: 'Pricing', href: '/pricing' }]}
    />
  );
}
