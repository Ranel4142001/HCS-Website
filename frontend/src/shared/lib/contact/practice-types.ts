/** The three kinds of practice the site serves, with the name shown everywhere: forms, chat, estimator, CRM and emails. */
export const PRACTICE_TYPES = {
  individual: 'Individual clinician',
  group: 'Group practice or staffing agency',
  enterprise: 'Health system, hospital and surgery center',
} as const;

export type PracticeType = keyof typeof PRACTICE_TYPES;
