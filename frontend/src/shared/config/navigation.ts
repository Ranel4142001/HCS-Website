import type { IconName } from '@/shared/components/ui/Icon';
/**
 * Single source of truth for site navigation: navbar menus, search, and footer.
 * Add or rename a page here and every place that links to it stays in sync.
 */
import { envConfig } from './env.config';

export interface NavLink {
  href: string;
  label: string;
  description?: string;
  /** Emoji shown in the menu tile. */
  icon?: IconName;
  /** Tile background behind the icon. */
  iconBg?: string;
}

export interface NavGroup {
  heading: string;
  links: NavLink[];
}

export interface SpotlightRow {
  label: string;
  tag: string;
  dot?: 'green' | 'teal' | 'blue';
  tagTone?: 'green' | 'teal';
}

export interface NavSpotlight {
  background: string;
  badge: { icon: IconName; label: string };
  header?: [string, string];
  rows: SpotlightRow[];
  caption: string;
  cta: { href: string; label: string };
}

export interface NavMenu {
  id: string;
  label: string;
  panelClassName?: string;
  groups: NavGroup[];
  spotlight: NavSpotlight;
}

export const NAV_MENUS: NavMenu[] = [
  {
    id: 'who',
    label: 'Who we help',
    panelClassName: 'mdl-panel--who',
    groups: [
      {
        heading: 'Industries we help',
        links: [
          { href: '/who-we-help/provider-groups', label: 'Provider Groups & MSOs', description: 'Practices adding providers', icon: 'users', iconBg: '#eff6ff' },
          { href: '/who-we-help/health-systems', label: 'Health Systems, Hospitals & Surgery Centers', description: 'Centralized verification', icon: 'building', iconBg: '#faf5ff' },
          { href: '/who-we-help/digital-health', label: 'Digital Health & Telehealth', description: 'Multi-state credentialing', icon: 'globe', iconBg: '#f0fdfa' },
        ],
      },
    ],
    spotlight: {
      background: 'linear-gradient(135deg,#0a4a47,#10c1bb)',
      badge: { icon: 'bar', label: 'Credentialing status' },
      header: ['Provider', 'Status'],
      rows: [
        { label: 'Dr. McLogan', tag: 'Credentialed', tagTone: 'green' },
        { label: 'Dr. Ivan Mora', tag: 'Credentialed', tagTone: 'green' },
        { label: 'Gary Smith', tag: 'In progress', tagTone: 'teal' },
      ],
      caption: 'See where every provider stands, at a glance',
      cta: { href: '/#contact', label: 'Learn more' },
    },
  },
];

/** Shown before the dropdown menus. */
export const NAV_LEAD_LINKS: NavLink[] = [{ href: '/services', label: 'Services' }];

/** Top-level links shown after the menus. Resources and Company menus return once those pages have content. */
export const NAV_LINKS: NavLink[] = [
  { href: '/guides', label: 'Guides' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
];

export const PRIMARY_CTA: NavLink = { href: '/#contact', label: 'Get a free quote' };

/** Shown in the search dialog before the visitor types. */
export const QUICK_LINKS: NavLink[] = [
  { href: '/solutions/cvo-credentialing', label: 'Provider credentialing', description: 'Primary source verification', icon: 'shield' },
  { href: '/guides/recredentialing-requirements', label: 'Recredentialing', description: 'Cycles, re-verification and avoiding lapses', icon: 'clock' },
  { href: '/pricing', label: 'Transparent pricing', description: 'Rates and plans', icon: 'bar' },
  { href: '/faq', label: 'Credentialing FAQ', description: 'Timelines, documents and costs', icon: 'chat' },
  { href: '/about', label: 'About HealthCredSTAT', description: 'Our approach', icon: 'building' },
];

/** Everything the search dialog can find: quick links first, then every menu link. */
export const SEARCH_INDEX: NavLink[] = ([
  ...QUICK_LINKS,
  ...NAV_MENUS.flatMap((m) => m.groups.flatMap((g) => g.links)),
  { href: '/services', label: 'All services', description: 'Credentialing, recredentialing and monitoring', icon: 'cog' },
  { href: '/contact', label: 'Contact us', description: 'Get a free credentialing quote', icon: 'mail' },
  { href: '/guides', label: 'Credentialing guides', description: 'Timelines, CAQH and recredentialing', icon: 'file' },
  { href: '/guides/how-long-does-credentialing-take', label: 'How long does credentialing take?', description: 'Typical timelines and what slows them down', icon: 'clock' },
  { href: '/guides/caqh-proview-guide', label: 'CAQH ProView guide', description: 'Setup, attestation and common mistakes', icon: 'doc-check' },
  { href: '/guides/how-to-get-credentialed-with-insurance-companies', label: 'How to get credentialed with insurers', description: 'Step-by-step from NPI to effective date', icon: 'check-circle' },
  { href: '/guides/recredentialing-requirements', label: 'Recredentialing requirements', description: 'Cycles, re-verification and avoiding lapses', icon: 'clock' },
] satisfies NavLink[]).filter((link, i, all) => all.findIndex((l) => l.href === link.href) === i);

/** Footer columns; each column holds one or more headed groups. */
export const FOOTER_COLUMNS: NavGroup[][] = [
  [
    {
      heading: 'Services',
      links: [
        { href: '/services', label: 'All services' },
        { href: '/solutions/cvo-credentialing', label: 'Provider credentialing' },
        { href: '/guides/recredentialing-requirements', label: 'Recredentialing' },
        { href: '/services#workflows', label: 'Continuous monitoring' },
        { href: '/pricing', label: 'Pricing' },
      ],
    },
  ],
  [
    {
      heading: 'Who we help',
      links: [
        { href: '/who-we-help/provider-groups', label: 'Provider groups & MSOs' },
        { href: '/who-we-help/health-systems', label: 'Health systems, hospitals & surgery centers' },
        { href: '/who-we-help/digital-health', label: 'Digital health' },
      ],
    },
  ],
  [
    {
      heading: 'Resources',
      links: [
        { href: '/guides', label: 'Credentialing guides' },
        { href: '/faq', label: 'Credentialing FAQ' },
        { href: '/#estimator', label: 'Timeline estimator' },
      ],
    },
  ],
  [
    {
      heading: 'Company',
      links: [
        { href: '/about', label: 'About us' },
        { href: '/contact', label: 'Contact us' },
        { href: envConfig.signInUrl, label: 'Client sign in' },
      ],
    },
  ],
];

export const LEGAL_LINKS: NavLink[] = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy#baa', label: 'HIPAA Business Associate (BAA)' },
];
