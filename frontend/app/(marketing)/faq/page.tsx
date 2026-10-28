import { FaqSection } from '@/features/faq';
import { ContactWizard } from '@/features/contact';
import PageIntro from '@/shared/components/layout/PageIntro';

export default function FaqPage() {
  return (
    <main>
      <PageIntro
        badge={{ icon: 'shield', label: 'FAQ' }}
        title={<>Medical credentialing <em>FAQ</em></>}
        lede="Answers to common questions about credentialing, verification, CAQH, timelines, documents and costs."
      />
      <FaqSection />
      <ContactWizard />
    </main>
  );
}
