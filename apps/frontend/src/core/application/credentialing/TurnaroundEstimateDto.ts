export interface TurnaroundEstimateInput {
  role: 'individual' | 'group' | 'enterprise';
  add: '1-3' | '4-10' | '10+';
  urgent: 'yes' | 'no';
}

export interface TurnaroundEstimateResult {
  lowDays: number;
  highDays: number;
  planName: string;
  priceText: string;
  isPriority: boolean;
}
