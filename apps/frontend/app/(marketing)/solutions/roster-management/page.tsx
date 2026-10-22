import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Roster Management',
  description: 'Enterprise provider directory sync — keep every payer roster accurate in real time.',
  alternates: { canonical: '/solutions/roster-management' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#6366f1' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">👥</div>
            <h1 className="sol-hero-title">Roster Management</h1>
            <p className="sol-hero-tagline">Enterprise provider directory sync — keep every payer roster accurate in real time.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Get Started Free</Link>
              <Link href="/#contact" className="btn-sol-ghost">Talk to an Expert</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#6366f1' }} />
        </section>
        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>Real-time</strong><span>Directory sync</span></div>
            <div className="sol-stat"><strong>500+</strong><span>Payer connections</span></div>
            <div className="sol-stat"><strong>Zero</strong><span>Ghost providers</span></div>
            <div className="sol-stat"><strong>Automated</strong><span>Roster submissions</span></div>
          </div>
        </section>
        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">What we do</h2>
              <p className="sol-desc-text">HealthCredSTAT maintains accurate, synchronized provider rosters across every health plan and payer portal. We eliminate ghost providers, prevent claim denials from roster errors, and automate all roster submission deadlines.</p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Key capabilities</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>Bi-directional payer roster sync</li>
                <li><span className="sol-check">✓</span>Automatic adds, terms, and updates</li>
                <li><span className="sol-check">✓</span>Ghost provider detection and remediation</li>
                <li><span className="sol-check">✓</span>Credentialing status tied to roster eligibility</li>
                <li><span className="sol-check">✓</span>Bulk roster import from EHR / HRIS</li>
                <li><span className="sol-check">✓</span>Payer submission deadline calendar</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="sol-cta-banner" style={{ '--sol-color': '#6366f1' } as React.CSSProperties}>
          <div className="container sol-cta-inner">
            <h2>Ready to modernize Roster Management?</h2>
            <p>Join hundreds of healthcare organizations using HealthCredSTAT.</p>
            <Link href="/#contact" className="btn-sol-primary">Start for free →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
