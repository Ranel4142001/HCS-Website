import { OurStorySection, PrinciplesSection, AudiencesSection } from '@/features/about';
import { ExpertiseSection } from '@/features/home';
import { ContactWizard } from '@/features/contact';
import PageIntro from '@/shared/components/layout/PageIntro';

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        badge={{ icon: 'shield', label: 'About HealthCredSTAT' }}
        title={<>We get providers credentialed, enrolled and <em>billing sooner</em></>}
        lede={
          <>
            HealthCredSTAT is a medical credentialing and payer enrollment company. We combine experienced credentialing
            specialists with automation to take the paperwork, the follow-up and the waiting off your team&apos;s plate.
          </>
        }
      />
      <OurStorySection />
      <PrinciplesSection />
      <ExpertiseSection />
      <AudiencesSection />
      <ContactWizard />
    </main>
  );
}
