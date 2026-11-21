import type { EstimatorRole, PlanInfo } from '../types';
import { PRACTICE_TYPES } from '@/shared/lib/contact/practice-types';

export const PLAN_INFO_MAP: Record<EstimatorRole, PlanInfo> = {
  individual: { name: PRACTICE_TYPES.individual, price: '$599 flat rate per assignment' },
  group: { name: PRACTICE_TYPES.group, price: 'Custom volume pricing' },
  enterprise: { name: PRACTICE_TYPES.enterprise, price: 'Tailored pricing — contact sales' },
};

// Estimated timeline in business days, by practice type, before volume and urgency adjustments.
// These are business promises: confirm them with the client before launch.
export const ESTIMATE_RANGES: Record<EstimatorRole, { low: number; high: number }> = {
  individual: { low: 14, high: 30 },
  group: { low: 21, high: 45 },
  enterprise: { low: 30, high: 60 },
};
