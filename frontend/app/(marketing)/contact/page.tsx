import { ContactWizard } from '@/features/contact';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact Us — Get a Free Credentialing Quote',
  description:
    'Talk to a credentialing specialist. Tell us about your providers to get a free quote and a realistic timeline for credentialing and recredentialing.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <main>
      <ContactWizard isPageHeading />
    </main>
  );
}
