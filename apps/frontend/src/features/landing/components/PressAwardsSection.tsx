import React from 'react';
import Icon from '@/shared/components/ui/Icon';

export const PressAwardsSection: React.FC = () => {
  return (
    <section className="press-awards-section" id="press">
      <div className="container">
        <div className="press-head">
          <h2>Honored across healthcare and beyond</h2>
          <p className="press-subtext">
            From industry accreditations to top-tier press, HealthCredSTAT is setting the new benchmark for intelligent healthcare operations.
          </p>
        </div>

        <div className="press-grid">
          {/* Featured Forbes Card */}
          <div className="press-card-featured">
            <div className="press-card-arrow">
              <span className="arrow-circle">&nearr;</span>
            </div>
            <div className="press-brand-badge">FORBES</div>
            <div className="press-featured-foot">
              <span className="press-tag">IN THE NEWS</span>
              <h3 className="press-featured-headline">
                &ldquo;This health startup aims to eliminate the massive burden of clinician credentialing paperwork.&rdquo;
              </h3>
            </div>
          </div>

          {/* 4 Recognition Cards */}
          <div className="press-cards-subgrid">
            <div className="press-card-mini">
              <div className="press-mini-top">
                <strong className="press-logo-text">Newsweek</strong>
                <span className="arrow-circle-mini">&nearr;</span>
              </div>
              <p className="press-mini-caption">
                Named to America&rsquo;s Greatest Healthcare Workplaces &amp; Innovators list.
              </p>
            </div>

            <div className="press-card-mini">
              <div className="press-mini-top">
                <strong className="press-logo-text">LinkedIn</strong>
                <span className="arrow-circle-mini">&nearr;</span>
              </div>
              <p className="press-mini-caption">
                Recognized among the Top Healthcare Startups in the U.S.
              </p>
            </div>

            <div className="press-card-mini">
              <div className="press-mini-top">
                <strong className="press-logo-text">Inc. 5000</strong>
                <span className="arrow-circle-mini">&nearr;</span>
              </div>
              <p className="press-mini-caption">
                Ranked among America&rsquo;s fastest-growing private health technology platforms.
              </p>
            </div>

            <div className="press-card-mini">
              <div className="press-mini-top">
                <strong className="press-logo-text">NCQA Aligned</strong>
                <span className="arrow-circle-mini">&nearr;</span>
              </div>
              <p className="press-mini-caption">
                Engineered from the ground up for strict NCQA and Joint Commission CVO audit readiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressAwardsSection;
