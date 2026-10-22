import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Provider Enrollment',
  description: 'Automate multi-payer credentialing applications from one intelligent platform.',
  alternates: { canonical: '/solutions/provider-enrollment' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#0d6efd' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">⚡</div>
            <h1 className="sol-hero-title">Provider Enrollment</h1>
            <p className="sol-hero-tagline">Automate multi-payer credentialing applications from one intelligent platform.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Get Started Free</Link>
              <Link href="/#contact" className="btn-sol-ghost">Talk to an Expert</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#0d6efd' }} />
        </section>

        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>7–14 days</strong><span>Average enrollment time</span></div>
            <div className="sol-stat"><strong>500+</strong><span>Payer portals supported</span></div>
            <div className="sol-stat"><strong>90%</strong><span>Reduction in manual data entry</span></div>
            <div className="sol-stat"><strong>99.2%</strong><span>First-pass accuracy rate</span></div>
          </div>
        </section>

        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">What we do</h2>
              <p className="sol-desc-text">
                HealthCredSTAT&apos;s Provider Enrollment workflow eliminates manual payer submissions, tracks every application milestone in real time, and auto-fills CAQH, PECOS, and payer-specific forms so your team closes gaps in days — not months.
              </p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Key capabilities</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>Auto-fill CAQH, PECOS, and 500+ payer portals</li>
                <li><span className="sol-check">✓</span>Real-time application status tracking per payer</li>
                <li><span className="sol-check">✓</span>Smart document checklist for every provider type</li>
                <li><span className="sol-check">✓</span>SLA-backed 7–14 day enrollment timelines</li>
                <li><span className="sol-check">✓</span>Automated follow-up and escalation workflows</li>
                <li><span className="sol-check">✓</span>Bulk enrollment for new practice launches</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sol-cta-banner" style={{ '--sol-color': '#0d6efd' } as React.CSSProperties}>
          <div className="container sol-cta-inner">
            <h2>Ready to modernize Provider Enrollment?</h2>
            <p>Join hundreds of healthcare organizations using HealthCredSTAT.</p>
            <Link href="/#contact" className="btn-sol-primary">Start for free →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
