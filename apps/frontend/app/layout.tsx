import type { Metadata, Viewport } from 'next';
import { Sora, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://healthcredstat.com';

export const viewport: Viewport = {
  themeColor: '#07192f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'HealthCredSTAT | Healthcare Credentialing & Real-Time CVO Platform',
    template: '%s | HealthCredSTAT',
  },
  description:
    'HealthCredSTAT is the AI operations partner powering healthcare\'s first real-time CVO. Accelerate clinician enrollment, automate NCQA-aligned primary source verification, and eliminate revenue delays.',
  keywords: [
    'medical credentialing',
    'CVO credentialing',
    'provider enrollment',
    'healthcare credentialing software',
    'primary source verification',
    'delegated credentialing',
    'roster management',
    'cross-state licensing',
    'NCQA credentialing',
    'payer enrollment',
    'HIPAA compliant credentialing',
    'HealthCredSTAT',
  ],
  authors: [{ name: 'HealthCredSTAT Team', url: SITE_URL }],
  creator: 'HealthCredSTAT',
  publisher: 'HealthCredSTAT Services Portal',
  applicationName: 'HealthCredSTAT',
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
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-mark.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/logo-mark.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'HealthCredSTAT',
    title: 'HealthCredSTAT | Better Outcomes for Healthcare Credentialing',
    description:
      'The AI operations partner powering healthcare\'s first real-time CVO. Faster paths to billable providers and seamless primary source verification.',
    images: [
      {
        url: '/healthcredstat-logo.png',
        width: 752,
        height: 189,
        alt: 'HealthCredSTAT — Credentialing Simplified. Accelerated. Secured.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthCredSTAT | Healthcare Credentialing & Real-Time CVO',
    description:
      'Better outcomes for credentialing. Faster paths to billable providers with real-time NCQA-aligned CVO workflows.',
    images: ['/healthcredstat-logo.png'],
    creator: '@HealthCredSTAT',
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
  category: 'Healthcare Technology',
};

// JSON-LD Structured Data Schema for Search Engines
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'HealthCredSTAT',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/healthcredstat-logo.png`,
        width: 752,
        height: 189,
      },
      description:
        'HealthCredSTAT is an enterprise healthcare credentialing platform and real-time CVO providing automated provider enrollment, primary source verification, and delegated roster management.',
      slogan: 'Credentialing - Simplified. Accelerated. Secured.',
      knowsAbout: [
        'Medical Credentialing',
        'Primary Source Verification',
        'NCQA Compliance',
        'Provider Enrollment',
        'Healthcare Operations',
        'Privileging',
      ],
      sameAs: [
        'https://www.linkedin.com/company/healthcredstat',
        'https://twitter.com/HealthCredSTAT',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'HealthCredSTAT',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#software`,
      name: 'HealthCredSTAT Portal',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      description:
        'Real-time automated credentialing platform and autonomous provider onboarding CVO service.',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
