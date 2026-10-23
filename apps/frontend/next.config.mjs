import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Content-Security-Policy: the site loads only its own scripts, styles, fonts and images.
// 'unsafe-inline' is required for scripts because Next.js inlines its page data in <script> tags on
// statically generated pages (nonces would force every page to render on each request), and for styles
// because components set some values (accent colors, measured positions) as inline styles.
// When a third-party service is added (CRM form endpoint, analytics), add its origin to connect-src/script-src.
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
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
  // Pin tracing to the monorepo root so a stray lockfile higher up the disk isn't picked as the root
  outputFileTracingRoot: path.join(__dirname, '../..'),
  poweredByHeader: false, // Security: removes X-Powered-By: Next.js
  experimental: {
    optimizePackageImports: ['lucide-react', 'zod'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
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
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains',
          },
          ...(applyCsp ? [{ key: 'Content-Security-Policy', value: CONTENT_SECURITY_POLICY }] : []),
        ],
      },
      {
        // Files in /public keep the same URL when replaced, so they must not be cached as immutable
        source: '/(.*).(jpg|jpeg|png|webp|avif|ico|svg|mp4)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
