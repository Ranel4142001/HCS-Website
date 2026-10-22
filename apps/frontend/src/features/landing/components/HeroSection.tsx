import React from 'react';

const PARTNERS = [
  {
    name: 'Oak Street Health',
    content: (
      <div className="medallion-partner-item">
        <svg viewBox="0 0 24 24" className="partner-brand-icon" fill="currentColor">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M12 6 C9 10, 8 14, 12 18 C16 14, 15 10, 12 6 Z" fill="currentColor" />
        </svg>
        <span className="partner-brand-text brand-oakstreet">Oak St. Health</span>
      </div>
    ),
  },
  {
    name: 'VNS Health',
    content: (
      <div className="medallion-partner-item">
        <svg viewBox="0 0 24 24" className="partner-brand-icon" fill="currentColor">
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 4 L12 7 M12 17 L12 20 M4 12 L7 12 M17 12 L20 12 M6.3 6.3 L8.5 8.5 M15.5 15.5 L17.7 17.7 M6.3 17.7 L8.5 15.5 M15.5 8.5 L17.7 6.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="partner-brand-text brand-vns">VNS Health</span>
      </div>
    ),
  },
  {
    name: 'FOLX Health',
    content: (
      <div className="medallion-partner-item">
        <span className="partner-brand-text brand-folx">FOLX</span>
      </div>
    ),
  },
  {
    name: 'Antidote Health',
    content: (
      <div className="medallion-partner-item">
        <span className="partner-brand-text brand-antidote">ANTIDO+E</span>
      </div>
    ),
  },
  {
    name: 'Virta Health',
    content: (
      <div className="medallion-partner-item">
        <svg viewBox="0 0 24 24" className="partner-brand-icon" fill="currentColor">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" fill="none" />
          <path d="M7 8 L12 16 L17 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="partner-brand-text brand-virta">virta</span>
      </div>
    ),
  },
  {
    name: 'CareBridge',
    content: (
      <div className="medallion-partner-item">
        <svg viewBox="0 0 80 20" className="partner-svg-bridge" fill="currentColor">
          <path d="M5 16 C20 4, 60 4, 75 16" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M16 15 L16 11 M28 13 L28 8 M40 12 L40 6 M52 13 L52 8 M64 15 L64 11" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="partner-brand-text brand-carebridge">CAREBRIDGE</span>
      </div>
    ),
  },
  {
    name: 'Confluent Health',
    content: (
      <div className="medallion-partner-item">
        <svg viewBox="0 0 24 24" className="partner-brand-icon" fill="currentColor">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="17" r="3" />
          <circle cx="19" cy="17" r="3" />
          <path d="M12 8 L12 13 M12 13 L7 15 M12 13 L17 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <div className="partner-brand-stack">
          <span className="partner-brand-text brand-confluent">Confluent</span>
          <span className="partner-brand-sub">HEALTH</span>
        </div>
      </div>
    ),
  },
  {
    name: 'UnitedHealthcare',
    content: (
      <div className="medallion-partner-item">
        <svg viewBox="0 0 24 24" className="partner-brand-icon" fill="currentColor">
          <rect x="2" y="9" width="4.5" height="13" rx="2.25" />
          <rect x="9.5" y="3" width="4.5" height="19" rx="2.25" />
          <rect x="17" y="6" width="4.5" height="16" rx="2.25" />
        </svg>
        <div className="partner-brand-stack">
          <span className="partner-brand-text brand-united">United</span>
          <span className="partner-brand-sub brand-united-sub">Healthcare</span>
        </div>
      </div>
    ),
  },
  {
    name: 'CareSource',
    content: (
      <div className="medallion-partner-item">
        <svg viewBox="0 0 24 24" className="partner-brand-icon" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span className="partner-brand-text brand-caresource">CareSource</span>
      </div>
    ),
  },
  {
    name: 'allcare',
    content: (
      <div className="medallion-partner-item">
        <svg viewBox="0 0 24 24" className="partner-brand-icon" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          <circle cx="12" cy="10" r="2.5" fill="#fff" />
        </svg>
        <div className="partner-brand-stack">
          <span className="partner-brand-text brand-allcare">allcare</span>
          <span className="partner-brand-tiny">PRIMARY &amp; IMMEDIATE CARE</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Headspace Health',
    content: (
      <div className="medallion-partner-item">
        <svg viewBox="0 0 24 24" className="partner-brand-icon" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <circle cx="9" cy="10" r="1.5" fill="#fff" />
          <circle cx="15" cy="10" r="1.5" fill="#fff" />
          <path d="M8.5 14 Q12 17.5 15.5 14" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
        <span className="partner-brand-text brand-headspace">headspace <span className="brand-light">health</span></span>
      </div>
    ),
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section hero-section--medallion" id="top">
      <div className="container hero-container">
        {/* Medallion-Style Centered Hero Content */}
        <div className="hero-centered-content">
          <h1 className="hero-main-headline">
            Better outcomes for credentialing.<br />
            Faster paths to billable providers.
          </h1>

          <p className="hero-lead-text">
            HealthCredSTAT is the AI operations partner powering healthcare&apos;s first real-time CVO.
          </p>

          <div className="hero-actions-row">
            <a href="#contact" className="btn-medallion-get-touch">
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Medallion-Style Partner Logos Marquee */}
        <div className="medallion-partner-strip">
          <div className="medallion-partner-heading">
            Powering 300+ healthcare<br />organizations to scale
          </div>

          <div className="medallion-marquee-viewport">
            <div className="medallion-marquee-inner">
              {/* Track Set 1 */}
              <div className="medallion-marquee-track">
                {PARTNERS.map((partner, idx) => (
                  <div key={`set1-${idx}`} className="partner-badge-wrapper" title={partner.name}>
                    {partner.content}
                  </div>
                ))}
              </div>

              {/* Track Set 2 (Identical clone for seamless loop) */}
              <div className="medallion-marquee-track" aria-hidden="true">
                {PARTNERS.map((partner, idx) => (
                  <div key={`set2-${idx}`} className="partner-badge-wrapper" title={partner.name}>
                    {partner.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Medallion-Style Wide Clinical Visual Banner (Image 2) */}
        <div className="medallion-hero-banner">
          <div className="medallion-hero-banner-inner">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2200&q=85"
              alt="Healthcare operations clinical facility and medical suite"
              className="medallion-hero-banner-img"
              loading="lazy"
              decoding="async"
              width={2200}
              height={740}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
