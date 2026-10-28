import { SolutionsOverview } from '@/features/solutions';
import { WorkflowsSection, DashboardPreviewSection } from '@/features/home';
import { ContactWizard } from '@/features/contact';
import PageIntro from '@/shared/components/layout/PageIntro';
import NextSteps, { PAGE_LINKS } from '@/shared/components/layout/NextSteps';

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
      <NextSteps links={[PAGE_LINKS.pricing, PAGE_LINKS.faq, PAGE_LINKS.guides]} />
      <ContactWizard />
    </main>
  );
}
