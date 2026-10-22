import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Subject Matter Experts',
  description: 'Meet our healthcare compliance, CVO, and payer credentialing specialists.',
  alternates: { canonical: '/company/experts' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#062459' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">🎖️</div>
            <h1 className="sol-hero-title">Subject Matter Experts</h1>
            <p className="sol-hero-tagline">Former health plan executives, certified NAMSS credentialing managers, and healthcare regulatory counsel.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Consult an Expert</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#062459' }} />
        </section>

        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">Deep Healthcare Expertise</h2>
              <p className="sol-desc-text">
                Technology is only as effective as the domain authority behind it. Our team brings decades of combined experience directing medical staff services, managing delegated payer contracts, and preparing health systems for NCQA and Joint Commission accreditation.
              </p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Areas of Advisory</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>CPCS &amp; CPMSM certified credentialing directors</li>
                <li><span className="sol-check">✓</span>Commercial &amp; Medicaid payer contract negotiation</li>
                <li><span className="sol-check">✓</span>Delegated credentialing audit defense</li>
                <li><span className="sol-check">✓</span>Interstate Medical Licensure Compact (IMLC) advisory</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
