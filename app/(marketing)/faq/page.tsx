import { FaqSection } from '@/features/faq';
import { ContactWizard } from '@/features/contact';
import PageIntro from '@/shared/components/layout/PageIntro';

export default function FaqPage() {
  return (
    <main>
      <PageIntro
        badge={{ icon: 'shield', label: 'FAQ' }}
        title={<>Medical credentialing <em>FAQ</em></>}
        lede="Plain-English answers about credentialing, payer enrollment, CAQH, timelines, documents and costs. Do not see your question? Ask a credentialing specialist."
      />
      <FaqSection />
      <ContactWizard />
    </main>
  );
}
