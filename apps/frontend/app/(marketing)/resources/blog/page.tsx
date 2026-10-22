import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Latest news, regulatory updates, and perspectives on AI credentialing operations.',
  alternates: { canonical: '/resources/blog' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#10c1bb' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">✍️</div>
            <h1 className="sol-hero-title">Insights &amp; Blog</h1>
            <p className="sol-hero-tagline">Latest industry trends, regulatory changes, and perspectives on modern provider operations.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Subscribe to Updates</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#10c1bb' }} />
        </section>

        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">Fresh Perspectives</h2>
              <p className="sol-desc-text">
                Stay ahead of shifts in state licensure laws, CMS mandates, commercial payer enrollment requirements, and autonomous credentialing technology.
              </p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Recent Articles</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>How Autonomous AI Verification Reduces Clinician Onboarding Lag by 80%</li>
                <li><span className="sol-check">✓</span>Navigating CMS 2026 Interoperability Rules for Health Plan Directories</li>
                <li><span className="sol-check">✓</span>Why Provider Roster Sync is Broken (and How to Fix It)</li>
                <li><span className="sol-check">✓</span>Delegated Credentialing: Is Your MSO Ready to Take on Risk?</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
