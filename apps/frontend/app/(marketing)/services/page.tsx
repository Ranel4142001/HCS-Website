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
        lede="Everything it takes to get a provider from signed offer to billing — and keep them there. Pick one service or hand us the whole process."
      />
      <SolutionsOverview />
      <WorkflowsSection />
      <DashboardPreviewSection />
      <ContactWizard />
    </main>
  );
}
