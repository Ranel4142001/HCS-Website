import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privileging & OPPE',
  description: 'Hospital and clinic privileging with automated OPPE/FPPE tracking and sign-off workflows.',
  alternates: { canonical: '/solutions/privileging' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#ec4899' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">🏥</div>
            <h1 className="sol-hero-title">Privileging &amp; OPPE</h1>
            <p className="sol-hero-tagline">Hospital and clinic privileging with automated OPPE/FPPE tracking and sign-off workflows.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Get Started Free</Link>
              <Link href="/#contact" className="btn-sol-ghost">Talk to an Expert</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#ec4899' }} />
        </section>
        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>Digital</strong><span>Sign-off workflows</span></div>
            <div className="sol-stat"><strong>Joint Comm.</strong><span>Standards aligned</span></div>
            <div className="sol-stat"><strong>Auto</strong><span>OPPE data collection</span></div>
            <div className="sol-stat"><strong>Zero</strong><span>Missed renewal deadlines</span></div>
          </div>
        </section>
        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">What we do</h2>
              <p className="sol-desc-text">HealthCredSTAT digitizes the full hospital privileging lifecycle — from initial privilege request through OPPE data collection, peer review routing, and medical executive committee sign-off — aligning with Joint Commission and CMS standards.</p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Key capabilities</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>Digital privilege request and delineation forms</li>
                <li><span className="sol-check">✓</span>Automated OPPE / FPPE data pull from EHR</li>
                <li><span className="sol-check">✓</span>Peer review routing and tracking</li>
                <li><span className="sol-check">✓</span>Medical staff committee e-signature workflows</li>
                <li><span className="sol-check">✓</span>Provisional and temporary privilege management</li>
                <li><span className="sol-check">✓</span>Joint Commission audit-ready documentation</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="sol-cta-banner" style={{ '--sol-color': '#ec4899' } as React.CSSProperties}>
          <div className="container sol-cta-inner">
            <h2>Ready to streamline Privileging &amp; OPPE?</h2>
            <p>Join hundreds of healthcare organizations using HealthCredSTAT.</p>
            <Link href="/#contact" className="btn-sol-primary">Start for free →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
