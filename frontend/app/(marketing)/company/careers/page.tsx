import ComingSoonPage from '@/shared/components/layout/ComingSoonPage';
import { buildMetadata } from '@/shared/lib/seo';

// Placeholder until real content exists — kept out of search results and the sitemap.
export const metadata = buildMetadata({
  title: 'Careers',
  description: 'Careers at HealthCredSTAT.',
  path: '/company/careers',
  noindex: true,
});

export default function Page() {
  return (
    <ComingSoonPage
      icon="🚀"
      title="Careers"
      intro="We do not have open roles listed right now. If you are an experienced credentialing professional, we would still like to hear from you."
      meanwhile={[{ label: 'About us', href: '/about' }, { label: 'Our services', href: '/services' }]}
    />
  );
}
