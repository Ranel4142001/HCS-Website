import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Cross-State Licensing',
  description: '50-state medical board filings — expand your provider network nationally without the paperwork.',
  alternates: { canonical: '/solutions/cross-state-licensing' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#14b8a6' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">🌐</div>
            <h1 className="sol-hero-title">Cross-State Licensing</h1>
            <p className="sol-hero-tagline">50-state medical board filings — expand your provider network nationally without the paperwork.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Get Started Free</Link>
              <Link href="/#contact" className="btn-sol-ghost">Talk to an Expert</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#14b8a6' }} />
        </section>
        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>50</strong><span>States covered</span></div>
            <div className="sol-stat"><strong>IMLC</strong><span>Compact eligible</span></div>
            <div className="sol-stat"><strong>Auto</strong><span>Renewal tracking</span></div>
            <div className="sol-stat"><strong>14 days</strong><span>Average new state license</span></div>
          </div>
        </section>
        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">What we do</h2>
              <p className="sol-desc-text">Whether you are expanding a telehealth platform, onboarding locum providers, or growing a multi-state group practice, HealthCredSTAT handles every state medical board application, renewal, and compact registration so your providers can practice anywhere.</p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Key capabilities</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>All 50-state medical board applications</li>
                <li><span className="sol-check">✓</span>IMLC / Nurse Licensure Compact management</li>
                <li><span className="sol-check">✓</span>DEA registration and state controlled substance</li>
                <li><span className="sol-check">✓</span>License expiration alerts and auto-renewals</li>
                <li><span className="sol-check">✓</span>Telehealth-specific licensure strategy</li>
                <li><span className="sol-check">✓</span>Bulk multi-provider multi-state campaigns</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="sol-cta-banner" style={{ '--sol-color': '#14b8a6' } as React.CSSProperties}>
          <div className="container sol-cta-inner">
            <h2>Ready to go national?</h2>
            <p>Join hundreds of healthcare organizations using HealthCredSTAT.</p>
            <Link href="/#contact" className="btn-sol-primary">Start for free →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
