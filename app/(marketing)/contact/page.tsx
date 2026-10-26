import { ContactWizard } from '@/features/contact';
import PageIntro from '@/shared/components/layout/PageIntro';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact Us — Get a Free Credentialing Quote',
  description:
    'Talk to a credentialing specialist. Tell us about your providers and payers to get a free quote and a realistic timeline for credentialing and enrollment.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        title="Get a free credentialing quote"
        lede="Tell us a little about your providers and the payers you work with. A credentialing specialist will reply with pricing and a realistic timeline — no obligation."
      />
      <ContactWizard />
    </main>
  );
}
