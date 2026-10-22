import type { Metadata } from 'next';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';
import ContactWizard from '@/features/contact/components/ContactWizard';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Talk to a HealthCredSTAT credentialing specialist. Get a personalized quote and turnaround estimate for provider enrollment and CVO credentialing.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="main-layout" id="top">
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <ContactWizard />
      </main>
      <Footer />
    </div>
  );
}
