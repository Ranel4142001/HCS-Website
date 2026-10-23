import { PricingSection } from '@/features/pricing';
import { EstimatorCard } from '@/features/estimator';
import { ContactWizard } from '@/features/contact';
import PageIntro from '@/shared/components/layout/PageIntro';

export default function PricingPage() {
  return (
    <main>
      <PageIntro
        badge={{ icon: 'sparkle', label: 'Pricing' }}
        title={<>Credentialing pricing that&apos;s <em>simple and predictable</em></>}
        lede="A flat rate for individual clinicians and custom pricing for groups and enterprises — with no hidden setup fees. Not sure what you need? Use the estimator below or ask for a free quote."
      />
      <PricingSection />
      <EstimatorCard />
      <ContactWizard />
    </main>
  );
}
