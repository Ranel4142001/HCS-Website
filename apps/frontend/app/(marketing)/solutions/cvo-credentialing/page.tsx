import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'CVO Credentialing',
  description: '1–2 day PSV file readiness with AI-powered primary source verification.',
  alternates: { canonical: '/solutions/cvo-credentialing' },
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
            <h1 className="sol-hero-title">CVO Credentialing</h1>
            <p className="sol-hero-tagline">1–2 day PSV file readiness with AI-powered primary source verification.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Get Started Free</Link>
              <Link href="/#contact" className="btn-sol-ghost">Talk to an Expert</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#10c1bb' }} />
        </section>
        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>1–2 days</strong><span>PSV file turnaround</span></div>
            <div className="sol-stat"><strong>100%</strong><span>Primary source verified</span></div>
            <div className="sol-stat"><strong>NCQA</strong><span>Aligned workflows</span></div>
            <div className="sol-stat"><strong>24/7</strong><span>Continuous sanctions monitoring</span></div>
          </div>
        </section>
        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">What we do</h2>
              <p className="sol-desc-text">Our CVO service performs full primary source verification against all required databases — DEA, NPDB, state boards, OIG, SAM, and more — delivering complete credentialing files in 1–2 business days with zero manual chasing.</p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Key capabilities</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>Automated DEA, NPDB, OIG, SAM queries</li>
                <li><span className="sol-check">✓</span>State medical board verification in all 50 states</li>
                <li><span className="sol-check">✓</span>NCQA-aligned credentialing file assembly</li>
                <li><span className="sol-check">✓</span>Re-credentialing reminders and expiration alerts</li>
                <li><span className="sol-check">✓</span>Continuous sanctions and exclusion monitoring</li>
                <li><span className="sol-check">✓</span>Audit-ready documentation export</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="sol-cta-banner" style={{ '--sol-color': '#10c1bb' } as React.CSSProperties}>
          <div className="container sol-cta-inner">
            <h2>Ready to modernize CVO Credentialing?</h2>
            <p>Join hundreds of healthcare organizations using HealthCredSTAT.</p>
            <Link href="/#contact" className="btn-sol-primary">Start for free →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
