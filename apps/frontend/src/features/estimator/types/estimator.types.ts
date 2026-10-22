export type EstimatorRole = 'individual' | 'group' | 'enterprise';
export type EstimatorUrgency = 'yes' | 'no';

export interface EstimatorState {
  step: 1 | 2 | 3 | 4; // 1: role, 2: volume, 3: urgency, 4: result
  role: EstimatorRole | null;
  baseLow: number;
  baseHigh: number;
  add: number;
  urgent: EstimatorUrgency | null;
}

export interface PlanInfo {
  name: string;
  price: string;
}
