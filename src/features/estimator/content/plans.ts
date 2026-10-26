import type { EstimatorRole, PlanInfo } from '../types';

export const PLAN_INFO_MAP: Record<EstimatorRole, PlanInfo> = {
  individual: { name: 'Individual Clinician', price: '$599 flat rate per assignment' },
  group: { name: 'Group Practice / Staffing Agency', price: 'Custom volume pricing' },
  enterprise: { name: 'Enterprise Health System', price: 'Tailored pricing — contact sales' },
};

// Estimated timeline in business days, by practice type, before volume and urgency adjustments.
// These are business promises: confirm them with the client before launch.
export const ESTIMATE_RANGES: Record<EstimatorRole, { low: number; high: number }> = {
  individual: { low: 14, high: 30 },
  group: { low: 21, high: 45 },
  enterprise: { low: 30, high: 60 },
};
