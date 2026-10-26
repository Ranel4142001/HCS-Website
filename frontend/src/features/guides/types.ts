import type { FaqItem } from '@/shared/lib/seo';

export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Render the list as numbered steps. */
  ordered?: boolean;
}

export interface Guide {
  /** URL segment: /guides/<slug> */
  slug: string;
  meta: { title: string; description: string };
  title: string;
  lead: string;
  /** ISO date of the last content review (shown on the page and in structured data). */
  updated: string;
  sections: GuideSection[];
  faqs: FaqItem[];
  related: { label: string; href: string }[];
}
