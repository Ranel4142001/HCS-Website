import { PricingSection } from '@/features/pricing';
import { EstimatorCard } from '@/features/estimator';
import { ContactWizard } from '@/features/contact';
import PageIntro from '@/shared/components/layout/PageIntro';

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
      <ContactWizard />
    </main>
  );
}
