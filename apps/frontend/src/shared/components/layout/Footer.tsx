'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/shared/components/ui/Icon';
import { envConfig } from '@/shared/config/env.config';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer enterprise-footer">
      <div className="container">
        {/* Main 5-Column Navigation Grid */}
        <div className="footer-enterprise-grid">
          {/* Brand Col */}
          <div className="footer-brand-cell">
            <Link href="/" className="footer-logo-lockup" aria-label="HealthCredSTAT Home">
              <img
                src="/healthcredstat-logo-white.png"
                alt="HealthCredSTAT"
                width={210}
                height={52}
                className="footer-logo-img"
                loading="lazy"
                decoding="async"
                style={{
                  height: '46px',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  marginBottom: '14px',
                }}
              />
            </Link>
            <p className="footer-brand-desc">
              Medical credentialing and payer enrollment services that get providers verified, in-network and billing sooner.
            </p>
            <div className="footer-accreditations">
              <span className="accred-badge">
                <Icon name="shield" /> NCQA standards
              </span>
              <span className="accred-badge">
                <Icon name="lock" /> HIPAA-aligned
              </span>
            </div>
          </div>

          {/* Col 1: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link href="/services">All services</Link></li>
              <li><Link href="/solutions/provider-enrollment">Provider enrollment</Link></li>
              <li><Link href="/solutions/cvo-credentialing">CVO credentialing</Link></li>
              <li><Link href="/solutions/roster-management">Roster management</Link></li>
              <li><Link href="/solutions/delegated-credentialing">Delegated credentialing</Link></li>
              <li><Link href="/solutions/privileging">Privileging &amp; OPPE</Link></li>
              <li><Link href="/solutions/cross-state-licensing">Cross-state licensing</Link></li>
              <li><Link href="/#workflows">Continuous monitoring</Link></li>
              <li><Link href="/#workflows">Payer contract management</Link></li>
            </ul>
          </div>

          {/* Col 2: Platform & Solutions */}
          <div className="footer-col">
            <h4 className="footer-heading">Platform</h4>
            <ul className="footer-links">
              <li><Link href="/#rtv">Provider data management</Link></li>
              <li><Link href="/#workflows">CredAlliance&trade;</Link></li>
              <li><Link href="/#workflows">AI operations engine</Link></li>
              <li><Link href="/#platform">Modern platform architecture</Link></li>
              <li><Link href="/pricing">Transparent pricing</Link></li>
            </ul>

            <h4 className="footer-heading mt-6">Who We Help</h4>
            <ul className="footer-links">
              <li><Link href="/who-we-help/provider-groups">Provider groups &amp; MSOs</Link></li>
              <li><Link href="/who-we-help/health-plans">Payers &amp; health plans</Link></li>
              <li><Link href="/who-we-help/health-systems">Health systems</Link></li>
              <li><Link href="/who-we-help/digital-health">Digital health</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources & Tools */}
          <div className="footer-col">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link href="/faq">Credentialing FAQ</Link></li>
              <li><Link href="/#estimator">Timeline estimator</Link></li>
              <li><Link href="/#timeline">How enrollment works</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
              {envConfig.portalUrl && <li><a href={envConfig.portalUrl}>Portal login</a></li>}
            </ul>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="footer-bottom-bar">
          <div className="footer-legal-copy">
            <span>&copy; {currentYear} HealthCredSTAT Inc. All rights reserved.</span>
            <span className="legal-sep">&bull;</span>
            <a href="#faq" className="legal-link">Privacy Policy</a>
            <span className="legal-sep">&bull;</span>
            <a href="#faq" className="legal-link">Terms of Service</a>
            <span className="legal-sep">&bull;</span>
            <a href="#faq" className="legal-link">HIPAA Business Associate (BAA)</a>
          </div>

          <div className="footer-trademark-note">
            The HealthCredSTAT word mark, CredAlliance&trade;, and logo are trademarks of HealthCredSTAT Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
