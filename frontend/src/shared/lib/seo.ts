import type { Metadata } from 'next';
import { envConfig } from '@/shared/config/env.config';

/**
 * SEO helpers shared by every route.
 * Keeps titles, canonicals and social previews consistent from one place.
 */

export const SITE_URL = envConfig.siteUrl;
export const SITE_NAME = 'HealthCredSTAT';
export const OG_IMAGE = '/opengraph-image';

interface PageMetaInput {
  /** Page title without the brand suffix — the root layout template appends it. */
  title: string;
  description: string;
  /** Route path starting with "/". */
  path: string;
  /** Hide placeholder pages from search engines until they have real content. */
  noindex?: boolean;
}

export function buildMetadata({ title, description, path, noindex }: PageMetaInput): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_US',
      url: path,
      title: fullTitle,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} — medical credentialing and payer enrollment services` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

export function articleSchema({ headline, description, path, dateModified }: { headline: string; description: string; path: string; dateModified: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
    image: `${SITE_URL}${OG_IMAGE}`,
    dateModified,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function serviceSchema({ name, description, path, audience }: { name: string; description: string; path: string; audience?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: name,
    areaServed: { '@type': 'Country', name: 'United States' },
    provider: { '@id': `${SITE_URL}/#organization` },
    ...(audience && { audience: { '@type': 'Audience', audienceType: audience } }),
  };
}
