'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/shared/components/layout/SectionHeader';
import Button from '@/shared/components/ui/Button';
import Icon, { IconName } from '@/shared/components/ui/Icon';

export interface PricingPlan {
  name: string;
  tag?: string;
  price: string;
  priceNote: string;
  subtitle: string;
  features: string[];
  featured?: boolean;
  ctaText: string;
  ctaHref: string;
  icon: IconName;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Individual Clinician',
    tag: '',
    price: '$599',
    priceNote: 'per assignment',
    subtitle: 'For locum tenens & travel professionals',
    features: [
      'Full credentialing management',
      'HIPAA-compliant document portal',
      'Real-time text & email updates',
      'Deadline tracking & renewals',
      'Recruiter communication handled',
    ],
    ctaText: 'Get Started',
    ctaHref: '#contact',
    icon: 'user',
  },
  {
    name: 'Group Practice',
    tag: 'Most Popular',
    price: 'Custom',
    priceNote: 'volume pricing',
    subtitle: 'For clinics & staffing agencies',
    features: [
      'Everything in Individual',
      'Dedicated account manager',
      'Bulk credentialing workflows',
      'Monthly compliance reports',
      'Priority turnaround times',
    ],
    featured: true,
    ctaText: 'Get Started',
    ctaHref: '#contact',
    icon: 'users',
  },
  {
    name: 'Enterprise',
    tag: '',
    price: 'Contact\nUs',
    priceNote: 'tailored pricing',
    subtitle: 'For health systems & large networks',
    features: [
      'Everything in Group',
      'API & EHR integration',
      'White-label portal option',
      'Advanced analytics dashboard',
      'Dedicated compliance team',
    ],
    ctaText: 'Contact Sales',
    ctaHref: '#contact',
    icon: 'building',
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <SectionHeader
          eyebrow="Solutions"
          eyebrowIcon="sparkle"
          title={<>Tailored for Every <em>Practice Size</em></>}
          description="Whether you're a solo travel nurse or a large health system, we have a credentialing solution designed for you."
        />

        <div className="pricing-grid">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`price-card ${plan.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 24, scale: plan.featured ? 0.98 : 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: plan.featured ? 1.04 : 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative' }}
            >
              {/* Most Popular floating badge */}
              {plan.tag && (
                <div style={{
                  position: 'absolute',
                  top: -14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, var(--cyan-400), var(--teal-500))',
                  color: '#08302d',
                  fontWeight: 800,
                  fontSize: '0.76rem',
                  letterSpacing: '0.02em',
                  padding: '5px 16px',
                  borderRadius: '20px',
                  whiteSpace: 'nowrap',
                  zIndex: 2,
                }}>
                  {plan.tag}
                </div>
              )}

              {/* Card icon */}
              <div style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: plan.featured ? 'rgba(255,255,255,0.15)' : 'var(--mint-100)',
                color: plan.featured ? 'var(--cyan-300)' : 'var(--teal-600)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}>
                <Icon name={plan.icon} />
              </div>

              <h3>{plan.name}</h3>
              <p className="price-desc">{plan.subtitle}</p>

              <div className="price-amount">
                <strong style={{ whiteSpace: 'pre-line' }}>{plan.price}</strong>
                <span>{plan.priceNote}</span>
              </div>

              <ul className="price-features">
                {plan.features.map((feat, i) => (
                  <li key={i}>
                    <Icon name="check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? 'onDark' : 'primary'}
                as="a"
                href={plan.ctaHref}
                fullWidth
                icon={<Icon name="arrow" />}
              >
                {plan.ctaText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


