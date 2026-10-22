/**
 * Centralized route constants.
 * All navigation paths should reference these — never hardcode string URLs in components.
 */

export const ROUTES = {
  // Public / Marketing
  HOME: '/',
  SERVICES: '/#services',
  PRICING: '/#pricing',
  ALLIANCE: '/#alliance',
  PLATFORM: '/#platform',
  ESTIMATOR: '/#estimator',
  HOW_IT_WORKS: '/#how-it-works',
  TESTIMONIALS: '/#testimonials',
  CONTACT: '/#contact',

  // Authentication
  LOGIN: '/login',
  REGISTER: '/register',

  // Dashboard (Authenticated)
  DASHBOARD: '/dashboard',
  PROVIDERS: '/providers',
  PROVIDER_DETAIL: (id: string) => `/providers/${id}`,
  ORGANIZATIONS: '/organizations',
  CREDENTIALING: '/credentialing',
  DOCUMENTS: '/documents',
  SETTINGS: '/settings',
} as const;
