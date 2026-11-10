import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Content-Security-Policy: the site loads only its own scripts, styles, fonts and images.
// 'unsafe-inline' is required for scripts because Next.js inlines its page data in <script> tags on
// statically generated pages (nonces would force every page to render on each request), and for styles
// because components set some values (accent colors, measured positions) as inline styles.
// When a third-party service is added (CRM form endpoint, analytics), add its origin to connect-src/script-src.
// challenges.cloudflare.com serves the contact form's Turnstile human check (a script plus an iframe).
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://challenges.cloudflare.com",
  "frame-src https://challenges.cloudflare.com",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

// Not applied in `next dev` (it needs eval for fast refresh) or on Vercel preview deployments
// (Vercel's preview toolbar injects its own scripts). It applies to production and local `next start`.
const applyCsp = process.env.NODE_ENV !== 'development' && process.env.VERCEL_ENV !== 'preview';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  // Lets a production build for local testing live beside `next dev` without the two overwriting each other
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // Pin tracing to this project so a stray lockfile higher up the disk isn't picked as the root
  outputFileTracingRoot: __dirname,
  poweredByHeader: false, // Security: removes X-Powered-By: Next.js
  experimental: {
    optimizePackageImports: ['lucide-react', 'zod'],
    // The site's CSS is small and split into ~16 files per page. Inlining it into the HTML removes those
    // requests from the opening burst, so the scripts behind them no longer wait in the browser's queue.
    inlineCss: true,
  },
  // Pages removed when the site narrowed to credentialing only; old links land on the closest page.
  async redirects() {
    return [
      ...['provider-enrollment', 'roster-management', 'delegated-credentialing', 'privileging', 'cross-state-licensing'].map(
        (slug) => ({ source: `/solutions/${slug}`, destination: '/services', permanent: true }),
      ),
      { source: '/guides/medicare-pecos-enrollment', destination: '/guides', permanent: true },
      // Former placeholder pages, removed until they have real content.
      ...['blog', 'case-studies', 'library'].map((slug) => ({ source: `/resources/${slug}`, destination: '/guides', permanent: true })),
      ...['careers', 'compliance', 'experts', 'newsroom'].map((slug) => ({ source: `/company/${slug}`, destination: '/about', permanent: true })),
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Which commit is live; the cache-warming workflow waits for it after a push to main.
          {
            key: 'X-Build-Version',
            value: process.env.VERCEL_GIT_COMMIT_SHA || 'local',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            // The legacy XSS filter is deprecated and can itself be abused; the CSP replaces it.
            key: 'X-XSS-Protection',
            value: '0',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            // Pages on other sites that this site opens, or that open it, get no handle on its window
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains',
          },
          ...(applyCsp ? [{ key: 'Content-Security-Policy', value: CONTENT_SECURITY_POLICY }] : []),
        ],
      },
      {
        // Files in /public keep the same URL when replaced, so they must not be cached as immutable
        source: '/(.*).(jpg|jpeg|png|webp|avif|ico|svg|mp4|webm)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        // Logos, icons and the hero video are always linked with a ?v= version (BRAND_VERSION in BrandLogo.tsx,
        // VERSION in HeroDemo.tsx), so a replaced file gets a new address and these can be cached for a year.
        // Bump the version whenever one of these files changes, or browsers keep the old copy.
        source: '/:dir(brand|media)/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
