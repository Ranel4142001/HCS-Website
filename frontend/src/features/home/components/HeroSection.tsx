import React from 'react';
import Image from 'next/image';
import { COVERAGE } from '../content/coverage';
import './HeroSection.css';

const CoverageItem: React.FC<{ label: string }> = ({ label }) => (
  <div className="hcs-partner-item">
    <svg viewBox="0 0 24 24" className="partner-brand-icon" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.8 2.8L16 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="partner-brand-text">{label}</span>
  </div>
);

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section hero-section--hcs" id="top">
      <div className="container hero-container">
        <div className="hero-centered-content">
          <h1 className="hero-main-headline">
            Medical credentialing &amp;{' '}<br />
            payer enrollment services
          </h1>

          <p className="hero-lead-text">
            HealthCredSTAT combines dedicated credentialing specialists with automation to verify providers, enroll them
            with payers and keep them in-network, so revenue starts sooner.
          </p>

          <div className="hero-actions-row">
            <a href="#contact" className="btn-hcs-get-touch">
              Get a free credentialing quote
            </a>
            <a href="#estimator" className="btn-hcs-secondary">
              Estimate your timeline
            </a>
          </div>
        </div>

        <div className="hcs-partner-strip">
          <div className="hcs-partner-heading">
            One team for every<br />step to billing
          </div>

          <div className="hcs-marquee-viewport">
            <div className="hcs-marquee-inner">
              <div className="hcs-marquee-track">
                {COVERAGE.map((label) => (
                  <div key={`a-${label}`} className="partner-badge-wrapper">
                    <CoverageItem label={label} />
                  </div>
                ))}
              </div>

              {/* Identical clone for a seamless loop */}
              <div className="hcs-marquee-track" aria-hidden="true">
                {COVERAGE.map((label) => (
                  <div key={`b-${label}`} className="partner-badge-wrapper">
                    <CoverageItem label={label} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hcs-hero-banner">
          <div className="hcs-hero-banner-inner">
            {/* Fills the fixed-height banner; Next serves a resized copy per screen width */}
            <Image
              src="/hero-facility.jpg"
              alt="Clinicians in a modern medical facility"
              className="hcs-hero-banner-img"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
