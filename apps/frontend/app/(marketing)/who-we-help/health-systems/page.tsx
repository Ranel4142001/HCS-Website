import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Health Systems & Hospitals',
  description: 'Centralized CVO and privileging for health systems — enterprise credentialing at scale.',
  alternates: { canonical: '/who-we-help/health-systems' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#6366f1' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">🏛️</div>
            <h1 className="sol-hero-title">Health Systems &amp; Hospitals</h1>
            <p className="sol-hero-tagline">Centralized CVO and privileging for health systems — enterprise credentialing at scale.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Talk to Us</Link>
              <Link href="/#contact" className="btn-sol-ghost">See a Demo</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#6366f1' }} />
        </section>
        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>Joint Comm.</strong><span>Standards aligned</span></div>
            <div className="sol-stat"><strong>CMS</strong><span>CoP compliant</span></div>
            <div className="sol-stat"><strong>Centralized</strong><span>CVO model</span></div>
            <div className="sol-stat"><strong>Digital</strong><span>MEC sign-off</span></div>
          </div>
        </section>
        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">Built for you</h2>
              <p className="sol-desc-text">Large health systems need a centralized credentialing engine that connects across facilities, departments, and medical staff offices. HealthCredSTAT replaces siloed paper-based systems with a single digital platform — Joint Commission ready, CMS compliant, and built for enterprise scale.</p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">What you get</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>System-wide centralized CVO operations</li>
                <li><span className="sol-check">✓</span>Multi-facility privilege management</li>
                <li><span className="sol-check">✓</span>Automated OPPE / FPPE data collection</li>
                <li><span className="sol-check">✓</span>Medical staff committee digital workflows</li>
                <li><span className="sol-check">✓</span>Joint Commission survey preparation</li>
                <li><span className="sol-check">✓</span>Integration with Epic, Cerner, and HealthStream</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="sol-cta-banner" style={{ '--sol-color': '#6366f1' } as React.CSSProperties}>
          <div className="container sol-cta-inner">
            <h2>Enterprise credentialing, simplified.</h2>
            <p>Connect every facility under one credentialing platform.</p>
            <Link href="/#contact" className="btn-sol-primary">Get started →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
