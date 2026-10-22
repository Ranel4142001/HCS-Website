import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join us in transforming healthcare operations and provider credentialing.',
  alternates: { canonical: '/company/careers' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#ec4899' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">🚀</div>
            <h1 className="sol-hero-title">Careers at HealthCredSTAT</h1>
            <p className="sol-hero-tagline">We&apos;re hiring! Build the infrastructure powering the future of healthcare provider operations.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">View Open Positions</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#ec4899' }} />
        </section>

        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">Our Culture</h2>
              <p className="sol-desc-text">
                We are a mission-driven team of healthcare veterans, AI engineers, and product builders dedicated to eliminating provider administrative burnout and expanding patient access to care.
              </p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Open Roles</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>Senior Credentialing Operations Specialist</li>
                <li><span className="sol-check">✓</span>Full-Stack AI Workflow Engineer</li>
                <li><span className="sol-check">✓</span>Healthcare Compliance &amp; CVO Manager</li>
                <li><span className="sol-check">✓</span>Enterprise Account Executive — Payers &amp; Health Systems</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
