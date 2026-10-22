import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Health Plans & Payers',
  description: 'Delegated network credentialing for health plans — cut costs, reduce audit risk, and accelerate provider onboarding.',
  alternates: { canonical: '/who-we-help/health-plans' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#10c1bb' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">🛡️</div>
            <h1 className="sol-hero-title">Health Plans &amp; Payers</h1>
            <p className="sol-hero-tagline">Delegated network credentialing — cut costs, reduce audit risk, and accelerate provider onboarding.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Talk to Us</Link>
              <Link href="/#contact" className="btn-sol-ghost">See a Demo</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#10c1bb' }} />
        </section>
        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>99%+</strong><span>Audit pass rate</span></div>
            <div className="sol-stat"><strong>NCQA</strong><span>Audit aligned</span></div>
            <div className="sol-stat"><strong>Real-time</strong><span>Sanctions monitoring</span></div>
            <div className="sol-stat"><strong>50%</strong><span>Credentialing cost reduction</span></div>
          </div>
        </section>
        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">Built for you</h2>
              <p className="sol-desc-text">Health plans trust HealthCredSTAT to manage their delegated credentialing programs — keeping provider directories accurate, audit files complete, and sanctions checks running 24/7 so every network provider is safe to list.</p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">What you get</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>Delegated credentialing program management</li>
                <li><span className="sol-check">✓</span>Real-time provider directory accuracy</li>
                <li><span className="sol-check">✓</span>NCQA / URAC audit documentation</li>
                <li><span className="sol-check">✓</span>Continuous OIG / SAM exclusion monitoring</li>
                <li><span className="sol-check">✓</span>Payer-to-provider roster reconciliation</li>
                <li><span className="sol-check">✓</span>Downstream delegation oversight reports</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="sol-cta-banner" style={{ '--sol-color': '#10c1bb' } as React.CSSProperties}>
          <div className="container sol-cta-inner">
            <h2>Modernize your payer credentialing program.</h2>
            <p>Cut costs and pass every audit with HealthCredSTAT.</p>
            <Link href="/#contact" className="btn-sol-primary">Get started →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
