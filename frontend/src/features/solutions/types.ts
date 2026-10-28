import type { FaqItem } from '@/shared/lib/seo';
import type { IconName } from '@/shared/components/ui/Icon';

export interface SolutionContent {
  /** Route path, e.g. "/solutions/cvo-credentialing". */
  path: string;
  /** Breadcrumb parent, e.g. "Solutions" or "Who we help". */
  section: string;
  /** Accent color for the hero glow and CTA band. */
  color: string;
  icon: IconName;
  meta: { title: string; description: string };
  /** Short service name used in breadcrumbs and structured data. */
  name: string;
  h1: string;
  lead: string;
  primaryCta: string;
  /** Four short proof points shown under the hero. No numbers we can't back up. */
  highlights: { title: string; text: string }[];
  problem: { title: string; paragraphs: string[] };
  included: { title: string; items: string[] };
  process: { title: string; steps: { title: string; text: string }[] };
  checklist?: { title: string; intro: string; items: string[] };
  faqs: FaqItem[];
  related: { label: string; href: string }[];
  audience?: string;
  cta: { title: string; text: string };
}
