import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import '@/shared/styles/common.css';
import { SITE_URL, SITE_NAME } from '@/shared/lib/seo';
import JsonLd from '@/shared/components/seo/JsonLd';

// Both are variable fonts: omitting `weight` loads one file covering every weight.
// 'swap' keeps text visible while the font loads. ('optional' was measured too: Chrome treats a preloaded
// optional font as render-blocking, so text appeared later on slow connections.)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Headings, including the homepage H1 (the largest text on first paint), so it is preloaded too.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#07192f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const DEFAULT_TITLE = 'Health Credentialing Services | HealthCredSTAT';
const DEFAULT_DESCRIPTION =
  'Health credentialing services for practices, health systems and health plans. Specialists and AI automation verify, recredential and monitor your providers.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | HealthCredSTAT',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/brand/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/brand/apple-icon-180.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/brand/icon-32.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Healthcare',
};

// Site-wide structured data. Page-specific schema (FAQ, services, breadcrumbs) lives on each page.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/healthcredstat-logo.png`,
        width: 752,
        height: 189,
      },
      image: `${SITE_URL}/opengraph-image`,
      description:
        'HealthCredSTAT provides health credentialing services, including primary source verification, recredentialing and ongoing monitoring, for healthcare organizations across the United States.',
      areaServed: { '@type': 'Country', name: 'United States' },
      knowsAbout: [
        'Medical credentialing',
        'Primary source verification',
        'Recredentialing',
        'CAQH ProView',
        'Sanctions and exclusion monitoring',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // data-scroll-behavior: Next.js turns smooth scrolling off during route changes, so pages open at the top instantly.
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} data-scroll-behavior="smooth">
      <head>
        <JsonLd data={jsonLd} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
