import { PRICING_PLANS } from '../content/plans';
import FeatureText, { featureText } from '@/shared/components/ui/FeatureText';
import { GuillocheBand, GuillocheRosette } from '@/shared/components/ui/Guilloche';
import './PricingSection.css';
﻿import React from 'react';

const CheckMark: React.FC = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
    <path d="M4.5 10.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Pricing laid out as a single fee schedule: one sheet with aligned columns,
 * so names, prices and actions line up across plans for easy comparison.
 */
export const PricingSection: React.FC = () => {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <header className="pricing-head">
          <h2 id="pricing-title">Pricing that scales with your providers</h2>
          <p>
            A flat rate for individual clinicians. Groups and health systems get a custom quote based on how many
            providers you need credentialed.
          </p>
        </header>

        <div className="fee-schedule">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`fee-col${plan.featured ? ' is-featured' : ''}`}
              aria-labelledby={`plan-${plan.id}`}
            >
              {/* Certificate-style watermark behind the recommended plan; positioned, so it takes no grid row */}
              {plan.featured && <GuillocheRosette className="fee-rosette" />}
              <h3 id={`plan-${plan.id}`} className="fee-name">{plan.name}</h3>
              <p className="fee-audience">{plan.audience}</p>
              <p className="fee-price">
                <span className="fee-amount">{plan.price}</span>
                <span className="fee-unit">{plan.priceUnit}</span>
              </p>
              <a className="fee-cta" href={plan.ctaHref}>{plan.ctaText}</a>
              <div className="fee-body">
                {plan.buildsOn && <p className="fee-plus">Everything in {plan.buildsOn}, plus:</p>}
                <ul className="fee-list">
                  {plan.features.map((feature) => (
                    <li key={featureText(feature)}>
                      <CheckMark />
                      <span><FeatureText feature={feature} /></span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          {/* Security-print edge along the bottom of the sheet, like a certificate's; positioned, takes no cell */}
          <GuillocheBand className="fee-band" />
        </div>

        <p className="fee-footnote">
          Every plan includes primary source verification, CAQH ProView management and follow-up with every source
          until each file is complete. No setup fees.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
