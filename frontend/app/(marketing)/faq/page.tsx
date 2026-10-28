import { FaqSection } from '@/features/faq';
import { ContactWizard } from '@/features/contact';
import PageIntro from '@/shared/components/layout/PageIntro';
import NextSteps, { PAGE_LINKS } from '@/shared/components/layout/NextSteps';

export default function FaqPage() {
  return (
    <main>
      <PageIntro
        badge={{ icon: 'shield', label: 'FAQ' }}
        title={<>Medical credentialing <em>FAQ</em></>}
        lede="Answers to common questions about credentialing, verification, CAQH, timelines, documents and costs."
      />
      <FaqSection />
      <NextSteps links={[PAGE_LINKS.guides, PAGE_LINKS.pricing, PAGE_LINKS.services]} />
      <ContactWizard />
    </main>
  );
}
