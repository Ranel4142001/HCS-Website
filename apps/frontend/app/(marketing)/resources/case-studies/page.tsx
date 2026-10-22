import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'See how leading health systems, digital health, and provider groups transform with HealthCredSTAT.',
  alternates: { canonical: '/resources/case-studies' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#6366f1' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">📈</div>
            <h1 className="sol-hero-title">Customer Case Studies</h1>
            <p className="sol-hero-tagline">Proven operational impact: 2-day turnarounds, 99%+ audit scores, and zero revenue lag.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Read Customer Stories</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#6366f1' }} />
        </section>

        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>2 Days</strong><span>CareBridge turnaround</span></div>
            <div className="sol-stat"><strong>99.4%</strong><span>Headspace Health audit score</span></div>
            <div className="sol-stat"><strong>12 States</strong><span>WellBe multi-state expansion</span></div>
            <div className="sol-stat"><strong>$1.4M</strong><span>Average annual savings</span></div>
          </div>
        </section>

        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">Measurable Outcomes</h2>
              <p className="sol-desc-text">
                Healthcare leaders rely on HealthCredSTAT to accelerate clinician time-to-revenue while establishing bulletproof audit trails with health plans and accreditation bodies.
              </p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Highlighted Impacts</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>CareBridge: Scaled 12 states without expanding credentialing headcount</li>
                <li><span className="sol-check">✓</span>WellBe Senior Medical: Cut turnaround from 35 days to 2 days</li>
                <li><span className="sol-check">✓</span>Headspace Health: 100% clean health plan credentialing audit pass rate</li>
                <li><span className="sol-check">✓</span>Family Care Center: Automated CAQH syncing for 300+ providers</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
