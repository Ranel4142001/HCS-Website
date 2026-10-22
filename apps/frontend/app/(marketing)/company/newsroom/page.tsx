import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Newsroom',
  description: 'Press releases, media mentions, and company milestones.',
  alternates: { canonical: '/company/newsroom' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#0d6efd' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">📰</div>
            <h1 className="sol-hero-title">Newsroom &amp; Press</h1>
            <p className="sol-hero-tagline">Company announcements, industry awards, and partnership milestones.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Media Inquiries</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#0d6efd' }} />
        </section>

        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">Latest Headlines</h2>
              <p className="sol-desc-text">
                HealthCredSTAT is recognized as one of the fastest growing AI healthcare infrastructure platforms, accelerating provider access for over 150,000 clinicians nationwide.
              </p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Press Highlights</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>HealthCredSTAT expands Autonomous CVO verification across 50 states</li>
                <li><span className="sol-check">✓</span>Achieves SOC 2 Type II and HIPAA certification renewals</li>
                <li><span className="sol-check">✓</span>Partners with leading national telehealth networks to eliminate credentialing lag</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
