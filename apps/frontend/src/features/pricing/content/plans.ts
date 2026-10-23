import type { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
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
