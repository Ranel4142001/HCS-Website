import React from 'react';
import Link from 'next/link';
import BrandLogo from '@/shared/components/ui/BrandLogo';
import Icon from '@/shared/components/ui/Icon';
import { FOOTER_COLUMNS, LEGAL_LINKS } from '@/shared/config/navigation';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer enterprise-footer">
      <div className="container">
        <div className="footer-enterprise-grid">
          <div className="footer-brand-cell">
            <Link href="/" className="footer-logo-lockup" aria-label="HealthCredSTAT Home">
              <BrandLogo variant="white" width={224} height={56} className="footer-logo-img" />
            </Link>
            <p className="footer-brand-desc">
              Health credentialing services that get providers verified and ready to see patients sooner.
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

          {FOOTER_COLUMNS.map((groups) => (
            <div key={groups[0].heading} className="footer-col">
              {groups.map((group) => (
                <React.Fragment key={group.heading}>
                  <h2 className="footer-heading">{group.heading}</h2>
                  <ul className="footer-links">
                    {group.links.map((link) => (
                      <li key={`${link.href}-${link.label}`}><Link href={link.href}>{link.label}</Link></li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-legal-copy">
            <span>&copy; {currentYear} HealthCredSTAT Inc. All rights reserved.</span>
            {LEGAL_LINKS.map((link) => (
              <React.Fragment key={link.label}>
                <span className="legal-sep">&bull;</span>
                <a href={link.href} className="legal-link">{link.label}</a>
              </React.Fragment>
            ))}
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
