import { PricingSection } from '@/features/pricing';
import { EstimatorCard } from '@/features/estimator';
import { ContactWizard } from '@/features/contact';
import PageIntro from '@/shared/components/layout/PageIntro';
import NextSteps, { PAGE_LINKS } from '@/shared/components/layout/NextSteps';

export default function PricingPage() {
  return (
    <main>
      <PageIntro
        badge={{ icon: 'sparkle', label: 'Pricing' }}
        title={<>Credentialing services <em>pricing</em></>}
        lede="Transparent rates for individual clinicians and tailored pricing for groups and health systems."
      />
      <PricingSection />
      <EstimatorCard />
      <NextSteps links={[PAGE_LINKS.faq, PAGE_LINKS.services, PAGE_LINKS.guides]} />
      <ContactWizard />
    </main>
  );
}
