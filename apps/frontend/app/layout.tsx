import type { Metadata, Viewport } from 'next';
import { Sora, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { SITE_URL, SITE_NAME } from '@/shared/lib/seo';
import JsonLd from '@/shared/components/seo/JsonLd';

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

export const viewport: Viewport = {
  themeColor: '#07192f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const DEFAULT_TITLE = 'Medical Credentialing & Payer Enrollment Services | HealthCredSTAT';
const DEFAULT_DESCRIPTION =
  'Medical credentialing and payer enrollment services for practices, health systems and health plans. Get providers verified, in-network and billing sooner.';

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
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-mark.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/logo-mark.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/logo.png',
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
        'HealthCredSTAT provides medical credentialing, payer enrollment, primary source verification, recredentialing and provider data management services for healthcare organizations across the United States.',
      areaServed: { '@type': 'Country', name: 'United States' },
      knowsAbout: [
        'Medical credentialing',
        'Provider enrollment',
        'Payer enrollment',
        'Primary source verification',
        'CAQH ProView',
        'Medicare and Medicaid enrollment',
        'Delegated credentialing',
        'Hospital privileging',
        'Multi-state licensing',
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
    <html lang="en" className={`${sora.variable} ${instrumentSerif.variable}`}>
      <head>
        <JsonLd data={jsonLd} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
