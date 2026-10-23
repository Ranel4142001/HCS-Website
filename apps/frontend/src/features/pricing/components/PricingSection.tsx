import React from 'react';

export interface PricingPlan {
  id: string;
  name: string;
  audience: string;
  price: string;
  priceUnit: string;
  ctaText: string;
  ctaHref: string;
  /** Name of the plan this one builds on, shown as "Everything in X, plus". */
  buildsOn?: string;
  features: string[];
  featured?: boolean;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'individual',
    name: 'Individual clinician',
    audience: 'For locum tenens and travel professionals',
    price: '$599',
    priceUnit: 'per assignment',
    ctaText: 'Get started',
    ctaHref: '#contact',
    features: [
      'Full credentialing management',
      'Secure document portal',
      'Text and email status updates',
      'Deadline tracking and renewals',
      'Recruiter communication handled',
    ],
  },
  {
    id: 'group',
    name: 'Group practice',
    audience: 'For clinics and staffing agencies',
    price: 'Custom',
    priceUnit: 'based on volume',
    ctaText: 'Get a group quote',
    ctaHref: '#contact',
    buildsOn: 'Individual',
    features: [
      'Dedicated account manager',
      'Bulk credentialing workflows',
      'Monthly compliance reports',
      'Priority turnaround',
    ],
    featured: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    audience: 'For health systems and large networks',
    price: 'Custom',
    priceUnit: 'tailored to your network',
    ctaText: 'Talk to our team',
    ctaHref: '#contact',
    buildsOn: 'Group',
    features: [
      'API and EHR integration',
      'White-label portal option',
      'Analytics dashboard',
      'Dedicated compliance team',
    ],
  },
];

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
            providers and payers you need.
          </p>
        </header>

        <div className="fee-schedule">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`fee-col${plan.featured ? ' is-featured' : ''}`}
              aria-labelledby={`plan-${plan.id}`}
            >
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
                    <li key={feature}>
                      <CheckMark />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="fee-footnote">
          Every plan includes primary source verification, CAQH ProView management and follow-up with each payer
          until approval. No setup fees.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
