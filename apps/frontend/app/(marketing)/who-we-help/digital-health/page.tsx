import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Digital Health & Telehealth',
  description: 'Rapid multi-state clinician onboarding for telehealth platforms and digital health companies.',
  alternates: { canonical: '/who-we-help/digital-health' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#14b8a6' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">💻</div>
            <h1 className="sol-hero-title">Digital Health &amp; Telehealth</h1>
            <p className="sol-hero-tagline">Rapid multi-state clinician onboarding for telehealth platforms and digital health companies.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Talk to Us</Link>
              <Link href="/#contact" className="btn-sol-ghost">See a Demo</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#14b8a6' }} />
        </section>
        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>50 states</strong><span>Licensing coverage</span></div>
            <div className="sol-stat"><strong>API</strong><span>Integration ready</span></div>
            <div className="sol-stat"><strong>Days</strong><span>Not months to onboard</span></div>
            <div className="sol-stat"><strong>Auto</strong><span>Compact license management</span></div>
          </div>
        </section>
        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">Built for you</h2>
              <p className="sol-desc-text">Telehealth platforms and virtual care companies live or die by how fast they can credential and deploy clinicians across state lines. HealthCredSTAT is the credentialing engine built for the velocity of digital health — with API integrations, compact licensure, and automated multi-state workflows.</p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">What you get</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>Rapid multi-state licensing campaigns</li>
                <li><span className="sol-check">✓</span>IMLC and Nurse Compact management</li>
                <li><span className="sol-check">✓</span>Telehealth-specific payer enrollment</li>
                <li><span className="sol-check">✓</span>REST API for provider onboarding automation</li>
                <li><span className="sol-check">✓</span>Real-time compliance status per provider</li>
                <li><span className="sol-check">✓</span>Webhook alerts for license expirations</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="sol-cta-banner" style={{ '--sol-color': '#14b8a6' } as React.CSSProperties}>
          <div className="container sol-cta-inner">
            <h2>Ship providers faster than ever.</h2>
            <p>Credential at the speed of digital health.</p>
            <Link href="/#contact" className="btn-sol-primary">Get started →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
