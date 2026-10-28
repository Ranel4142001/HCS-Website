import {
  HeroSection,
  ExpertiseSection,
  WorkflowsSection,
  DashboardPreviewSection,
  BenefitsSection,
} from '@/features/home';
import { EstimatorCard } from '@/features/estimator';
import { PricingSection } from '@/features/pricing';
import { TestimonialsSection, FoundingClientsSection } from '@/features/social-proof';
import { FaqSection } from '@/features/faq';
import { ContactWizard } from '@/features/contact';
import { FloatingWidgets } from '@/features/quick-answers';

/** Homepage: composes feature sections in reading order. Sections own their content and behavior. */
export default function HomePage() {
  return (
    <>
      <div className="bg-decor bg-decor-1" />
      <div className="bg-decor bg-decor-2" />

      <main>
        <HeroSection />
        <ExpertiseSection />
        <WorkflowsSection />
        <DashboardPreviewSection />
        <BenefitsSection />
        <EstimatorCard />
        <PricingSection />
        {/* Renders nothing until real, approved testimonials are added */}
        <TestimonialsSection />
        <FoundingClientsSection />
        <FaqSection limit={6} />
        <ContactWizard />
      </main>

      <FloatingWidgets />
    </>
  );
}
