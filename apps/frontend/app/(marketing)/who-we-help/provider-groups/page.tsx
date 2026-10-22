import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Provider Groups & MSOs',
  description: 'Credentialing built for multi-specialty provider groups and management services organizations.',
  alternates: { canonical: '/who-we-help/provider-groups' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#0d6efd' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">🏢</div>
            <h1 className="sol-hero-title">Provider Groups &amp; MSOs</h1>
            <p className="sol-hero-tagline">Credentialing built for multi-specialty provider groups and management services organizations.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Talk to Us</Link>
              <Link href="/#contact" className="btn-sol-ghost">See a Demo</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#0d6efd' }} />
        </section>
        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>2 days</strong><span>Average turnaround</span></div>
            <div className="sol-stat"><strong>12 states</strong><span>Average client footprint</span></div>
            <div className="sol-stat"><strong>Zero</strong><span>Revenue lag on new hires</span></div>
            <div className="sol-stat"><strong>90%</strong><span>Less admin time</span></div>
          </div>
        </section>
        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">Built for you</h2>
              <p className="sol-desc-text">Growing provider groups need credentialing that keeps pace with hiring. HealthCredSTAT gives MSOs and multi-specialty groups a single command center to manage every provider, every payer, and every state — without building an internal credentialing department.</p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">What you get</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>Centralized dashboard for all providers</li>
                <li><span className="sol-check">✓</span>Bulk credentialing for new practice acquisitions</li>
                <li><span className="sol-check">✓</span>Multi-state license management</li>
                <li><span className="sol-check">✓</span>Real-time revenue impact visibility</li>
                <li><span className="sol-check">✓</span>White-glove onboarding support</li>
                <li><span className="sol-check">✓</span>Dedicated credentialing manager</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="sol-cta-banner" style={{ '--sol-color': '#0d6efd' } as React.CSSProperties}>
          <div className="container sol-cta-inner">
            <h2>Let us handle your credentialing.</h2>
            <p>Free your team to focus on patient care, not paperwork.</p>
            <Link href="/#contact" className="btn-sol-primary">Get started →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
