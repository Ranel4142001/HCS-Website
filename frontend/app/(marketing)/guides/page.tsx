import { GuidesList } from '@/features/guides';
import PageIntro from '@/shared/components/layout/PageIntro';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'Credentialing Guides for Providers',
  description:
    'Practical guides to medical credentialing and payer enrollment: timelines, CAQH ProView and how to get credentialed with insurance companies.',
  path: '/guides',
});

export default function GuidesPage() {
  return (
    <main>
      <PageIntro
        badge={{ icon: 'shield', label: 'Guides' }}
        title={<>Credentialing <em>guides</em></>}
        lede="How credentialing and payer enrollment work, what slows them down and how to get providers billing sooner."
      />
      <GuidesList />
    </main>
  );
}
