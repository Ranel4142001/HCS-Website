import ComingSoonPage from '@/shared/components/layout/ComingSoonPage';
import { buildMetadata } from '@/shared/lib/seo';

// Placeholder until real content exists — kept out of search results and the sitemap.
export const metadata = buildMetadata({
  title: 'Security & Compliance',
  description: 'How HealthCredSTAT protects provider and credentialing data.',
  path: '/company/compliance',
  noindex: true,
});

export default function Page() {
  return (
    <ComingSoonPage
      icon="🔒"
      title="Security & Compliance"
      intro="How we protect provider data. Our security documentation is being finalized — contact us and we will walk you through our safeguards and answer your security questionnaire."
      meanwhile={[{ label: 'About us', href: '/about' }, { label: 'Our services', href: '/services' }, { label: 'Credentialing FAQ', href: '/faq' }]}
    />
  );
}
