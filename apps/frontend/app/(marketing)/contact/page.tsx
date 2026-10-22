import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';
import ContactWizard from '@/features/contact/components/ContactWizard';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact Us — Get a Free Credentialing Quote',
  description:
    'Talk to a HealthCredSTAT credentialing specialist. Tell us about your providers and payers and get a free quote and realistic timeline for credentialing and enrollment.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="main-layout" id="top">
      <Navbar />
      <main>
        <section className="container" style={{ padding: '72px 24px 0', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--ink)', margin: '0 0 16px', fontWeight: 800 }}>
            Get a free credentialing quote
          </h1>
          <p style={{ maxWidth: 680, margin: '0 auto', fontSize: '1.125rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            Tell us a little about your providers and the payers you work with. A credentialing specialist will reply
            with pricing and a realistic timeline — no obligation.
          </p>
        </section>
        <ContactWizard />
      </main>
      <Footer />
    </div>
  );
}
