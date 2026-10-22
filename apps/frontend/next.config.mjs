import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    optimizePackageImports: ['framer-motion', '@tanstack/react-query', 'lucide-react', 'zod'],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
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
            key: 'X-XSS-Protection',
            value: '1; mode=block',
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
