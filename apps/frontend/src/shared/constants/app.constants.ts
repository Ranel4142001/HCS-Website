/**
 * Shared application-wide constants.
 * Never import framework-specific values here — this file must remain pure.
 */

export const APP_NAME = 'HealthCredSTAT' as const;
export const APP_TAGLINE = 'Full-Service Medical Credentialing' as const;
export const APP_EMAIL = 'support@healthcredstat.com' as const;
export const APP_PHONE = '(800) 555-STAT' as const;
export const APP_ADDRESS = 'National Support Offices, USA' as const;

export const TURNAROUND_DAYS = {
  INDIVIDUAL_LOW: 14,
  INDIVIDUAL_HIGH: 30,
  GROUP_LOW: 21,
  GROUP_HIGH: 45,
  ENTERPRISE_LOW: 30,
  ENTERPRISE_HIGH: 60,
  PRIORITY_REDUCTION_LOW: 2,
  PRIORITY_REDUCTION_HIGH: 5,
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;
