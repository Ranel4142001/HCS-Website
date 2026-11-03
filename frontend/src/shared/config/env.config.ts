/**
 * Centralized environment configuration.
 * All NEXT_PUBLIC_ env vars are read here — never access process.env directly in components.
 * This makes it easy to add validation, defaults, and type safety in one place.
 */
export const envConfig = {
  // Public production domain: canonical URLs, sitemap.xml, robots.txt and social previews.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://healthcredstat.com',
  // Client portal (separate app). Until it is set, "Sign in" goes to a holding page at /sign-in.
  signInUrl: process.env.NEXT_PUBLIC_PORTAL_URL || '/sign-in',
  // Cloudflare Turnstile site key for the contact form's human check. While empty, the check is off.
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '',
} as const;
