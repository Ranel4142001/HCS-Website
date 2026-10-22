/**
 * Centralized environment configuration.
 * All NEXT_PUBLIC_ env vars are read here — never access process.env directly in components.
 * This makes it easy to add validation, defaults, and type safety in one place.
 */
export const envConfig = {
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? 'HealthCredSTAT',
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  // Client portal (separate app). Sign-in links stay hidden until this is set.
  portalUrl: process.env.NEXT_PUBLIC_PORTAL_URL ?? '',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const;
