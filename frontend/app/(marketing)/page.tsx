import {
  HeroSection,
  ExpertiseSection,
  WorkflowsSection,
  DashboardPreviewSection,
} from '@/features/home';
import { EstimatorCard } from '@/features/estimator';
import { TestimonialsSection, FoundingClientsSection } from '@/features/social-proof';
import { ContactWizard } from '@/features/contact';

/** Homepage: composes feature sections in reading order. Sections own their content and behavior. */
export default function HomePage() {
  return (
    <>
      <div className="bg-decor bg-decor-1" />
      <div className="bg-decor bg-decor-2" />

      <main>
        <HeroSection />
        <ExpertiseSection />
        <WorkflowsSection compact />
        <DashboardPreviewSection />
        <EstimatorCard />
        {/* Renders nothing until real, approved testimonials are added */}
        <TestimonialsSection />
        <FoundingClientsSection />
        <ContactWizard />
      </main>
    </>
  );
}
