import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Resource Library',
  description: 'Guides, whitepapers, and operational blueprints for healthcare credentialing leaders.',
  alternates: { canonical: '/resources/library' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#0d6efd' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">📚</div>
            <h1 className="sol-hero-title">Resource Library</h1>
            <p className="sol-hero-tagline">Guides, regulatory playbooks, and operational blueprints for healthcare credentialing leaders.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Download All Guides</Link>
              <Link href="/pricing" className="btn-sol-ghost">View Pricing</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#0d6efd' }} />
        </section>

        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>50+</strong><span>Guides &amp; Whitepapers</span></div>
            <div className="sol-stat"><strong>NCQA</strong><span>Audit Checklists</span></div>
            <div className="sol-stat"><strong>50 States</strong><span>Licensing Guides</span></div>
            <div className="sol-stat"><strong>100%</strong><span>Free Access</span></div>
          </div>
        </section>

        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">Knowledge to accelerate your operations</h2>
              <p className="sol-desc-text">
                Explore our curated collection of regulatory analysis, state-by-state medical board requirements, and ROI models designed to help credentialing and provider ops executives eliminate administrative bottlenecks.
              </p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Featured Publications</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>The 2026 Payer Enrollment Playbook</li>
                <li><span className="sol-check">✓</span>NCQA CVO Survey Readiness Checklist</li>
                <li><span className="sol-check">✓</span>Cross-State Telehealth Licensure Matrix</li>
                <li><span className="sol-check">✓</span>Eliminating Ghost Providers in Payer Directories</li>
                <li><span className="sol-check">✓</span>AI-Assisted Primary Source Verification Benchmarks</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sol-cta-banner" style={{ '--sol-color': '#0d6efd' } as React.CSSProperties}>
          <div className="container sol-cta-inner">
            <h2>Need customized compliance playbooks?</h2>
            <p>Our regulatory advisors are ready to assess your credentialing workflow.</p>
            <Link href="/#contact" className="btn-sol-primary">Speak with our team →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
