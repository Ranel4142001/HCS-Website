import { GuidesList } from '@/features/guides';
import PageIntro from '@/shared/components/layout/PageIntro';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'Credentialing Guides for Providers',
  description:
    'Practical guides to health credentialing: how long it takes, CAQH ProView, recredentialing and getting credentialed with insurers.',
  path: '/guides',
});

export default function GuidesPage() {
  return (
    <main>
      <PageIntro
        badge={{ icon: 'shield', label: 'Guides' }}
        title={<>Credentialing <em>guides</em></>}
        lede="How credentialing works, what slows it down and how to get providers ready sooner."
      />
      <GuidesList />
    </main>
  );
}
