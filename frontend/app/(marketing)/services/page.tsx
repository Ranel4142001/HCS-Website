import { SolutionsOverview } from '@/features/solutions';
import { WorkflowsSection, DashboardPreviewSection } from '@/features/home';
import { ContactWizard } from '@/features/contact';
import PageIntro from '@/shared/components/layout/PageIntro';

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        badge={{ icon: 'sparkle', label: 'Our services' }}
        title={<>Health <em>credentialing services</em></>}
        lede="Verification, committee-ready files, recredentialing and ongoing monitoring, handled by one team."
      />
      <SolutionsOverview />
      <WorkflowsSection />
      <DashboardPreviewSection />
      <ContactWizard />
    </main>
  );
}
