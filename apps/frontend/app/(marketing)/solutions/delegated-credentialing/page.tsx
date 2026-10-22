import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Delegated Credentialing',
  description: 'Scale your network velocity with fully automated delegated credentialing workflows.',
  alternates: { canonical: '/solutions/delegated-credentialing' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#f59e0b' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">🔗</div>
            <h1 className="sol-hero-title">Delegated Credentialing</h1>
            <p className="sol-hero-tagline">Scale your network velocity with fully automated delegated credentialing workflows.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Get Started Free</Link>
              <Link href="/#contact" className="btn-sol-ghost">Talk to an Expert</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#f59e0b' }} />
        </section>
        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>NCQA</strong><span>Delegated audit ready</span></div>
            <div className="sol-stat"><strong>3x</strong><span>Faster network expansion</span></div>
            <div className="sol-stat"><strong>100%</strong><span>Audit trail coverage</span></div>
            <div className="sol-stat"><strong>Auto</strong><span>Oversight reporting</span></div>
          </div>
        </section>
        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">What we do</h2>
              <p className="sol-desc-text">Take on delegated credentialing agreements with confidence. HealthCredSTAT manages the full oversight workflow — from initial delegation setup to ongoing NCQA-aligned audits — so you can grow your network without growing your headcount.</p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Key capabilities</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>Delegation agreement setup and tracking</li>
                <li><span className="sol-check">✓</span>Automated oversight audit scheduling</li>
                <li><span className="sol-check">✓</span>Credentialing file sharing with delegating entities</li>
                <li><span className="sol-check">✓</span>NCQA-aligned oversight reports</li>
                <li><span className="sol-check">✓</span>Network expansion velocity tracking</li>
                <li><span className="sol-check">✓</span>Corrective action plan management</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="sol-cta-banner" style={{ '--sol-color': '#f59e0b' } as React.CSSProperties}>
          <div className="container sol-cta-inner">
            <h2>Ready to scale Delegated Credentialing?</h2>
            <p>Join hundreds of healthcare organizations using HealthCredSTAT.</p>
            <Link href="/#contact" className="btn-sol-primary">Start for free →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
