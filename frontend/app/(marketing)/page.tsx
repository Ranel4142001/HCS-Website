import {
  HeroSection,
  ExpertiseSection,
  WorkflowsSection,
  DashboardPreviewSection,
  BenefitsSection,
} from '@/features/home';
import { EstimatorCard } from '@/features/estimator';
import { TestimonialsSection, FoundingClientsSection } from '@/features/social-proof';
import { ContactWizard } from '@/features/contact';
import { FloatingWidgets } from '@/features/quick-answers';
import NextSteps, { PAGE_LINKS } from '@/shared/components/layout/NextSteps';

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
        {/* Renders nothing until real, approved testimonials are added */}
        <TestimonialsSection />
        <FoundingClientsSection />
        <NextSteps links={[PAGE_LINKS.pricing, PAGE_LINKS.faq, PAGE_LINKS.guides]} tint />
        <ContactWizard />
      </main>

      <FloatingWidgets />
    </>
  );
}
