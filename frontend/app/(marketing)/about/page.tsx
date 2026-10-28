import { OurStorySection, PrinciplesSection, AudiencesSection } from '@/features/about';
import { ExpertiseSection } from '@/features/home';
import { ContactWizard } from '@/features/contact';
import PageIntro from '@/shared/components/layout/PageIntro';
import NextSteps, { PAGE_LINKS } from '@/shared/components/layout/NextSteps';

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        badge={{ icon: 'shield', label: 'About HealthCredSTAT' }}
        title={<>We get providers credentialed and <em>ready sooner</em></>}
        lede={
          <>
            HealthCredSTAT is a health credentialing company. We combine experienced credentialing
            specialists with AI automation to manage verification, paperwork and follow-up on your behalf.
          </>
        }
      />
      <OurStorySection />
      <PrinciplesSection />
      <ExpertiseSection />
      <AudiencesSection />
      <NextSteps links={[PAGE_LINKS.services, PAGE_LINKS.pricing, PAGE_LINKS.guides]} />
      <ContactWizard />
    </main>
  );
}
