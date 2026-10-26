/**
 * Centralized environment configuration.
 * All NEXT_PUBLIC_ env vars are read here — never access process.env directly in components.
 * This makes it easy to add validation, defaults, and type safety in one place.
 */
export const envConfig = {
  // Public production domain: canonical URLs, sitemap.xml, robots.txt and social previews.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://healthcredstat.com',
  // Client portal (separate app). Sign-in links stay hidden until this is set.
  portalUrl: process.env.NEXT_PUBLIC_PORTAL_URL ?? '',
} as const;
