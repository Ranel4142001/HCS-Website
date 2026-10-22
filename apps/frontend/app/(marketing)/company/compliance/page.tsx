import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Compliance & Security',
  description: 'HIPAA, SOC 2 Type II, NCQA-aligned security and compliance architecture.',
  alternates: { canonical: '/company/compliance' },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero" style={{ '--sol-color': '#10c1bb' } as React.CSSProperties}>
          <div className="container sol-hero-inner">
            <Link href="/" className="sol-breadcrumb">← Back to Home</Link>
            <div className="sol-icon-badge">🔒</div>
            <h1 className="sol-hero-title">Compliance &amp; Security</h1>
            <p className="sol-hero-tagline">Enterprise-grade data protection, zero-trust infrastructure, and continuous regulatory compliance.</p>
            <div className="sol-hero-cta">
              <Link href="/#contact" className="btn-sol-primary">Request Security Packet</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: '#10c1bb' }} />
        </section>

        <section className="sol-stats-bar">
          <div className="container sol-stats-inner">
            <div className="sol-stat"><strong>SOC 2 Type II</strong><span>Certified &amp; Audited</span></div>
            <div className="sol-stat"><strong>HIPAA</strong><span>Compliant Architecture</span></div>
            <div className="sol-stat"><strong>256-bit</strong><span>AES Encryption at Rest</span></div>
            <div className="sol-stat"><strong>99.99%</strong><span>Platform SLA Uptime</span></div>
          </div>
        </section>

        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">Built for Sensitive Healthcare Data</h2>
              <p className="sol-desc-text">
                Every provider dossier, DEA number, primary source verification record, and peer review document is protected by stringent access controls and encrypted end-to-end.
              </p>
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">Security Standards</h2>
              <ul className="sol-benefits-list">
                <li><span className="sol-check">✓</span>Annual third-party SOC 2 Type II audits</li>
                <li><span className="sol-check">✓</span>Business Associate Agreements (BAA) executed for all clients</li>
                <li><span className="sol-check">✓</span>Role-based access control (RBAC) with multi-factor authentication</li>
                <li><span className="sol-check">✓</span>Continuous vulnerability scanning and penetration testing</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
