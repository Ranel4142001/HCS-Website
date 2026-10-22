import ComingSoonPage from '@/shared/components/layout/ComingSoonPage';
import { buildMetadata } from '@/shared/lib/seo';

// Placeholder until real content exists — kept out of search results and the sitemap.
export const metadata = buildMetadata({
  title: 'Newsroom',
  description: 'HealthCredSTAT news and announcements.',
  path: '/company/newsroom',
  noindex: true,
});

export default function Page() {
  return (
    <ComingSoonPage
      icon="📰"
      title="Newsroom"
      intro="Company news and announcements will be published here. For media inquiries, please contact us."
      meanwhile={[{ label: 'About us', href: '/about' }, { label: 'Our services', href: '/services' }]}
    />
  );
}
