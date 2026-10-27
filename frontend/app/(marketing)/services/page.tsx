import { SolutionsOverview } from '@/features/solutions';
import { WorkflowsSection, DashboardPreviewSection } from '@/features/home';
import { ContactWizard } from '@/features/contact';
import PageIntro from '@/shared/components/layout/PageIntro';

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        badge={{ icon: 'sparkle', label: 'Our services' }}
        title={<>Medical credentialing &amp; <em>provider enrollment services</em></>}
        lede="End-to-end support from signed offer to billing, and ongoing maintenance after. Engage us for a single service or the full process."
      />
      <SolutionsOverview />
      <WorkflowsSection />
      <DashboardPreviewSection />
      <ContactWizard />
    </main>
  );
}
