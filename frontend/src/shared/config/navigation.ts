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
    id: 'solutions',
    label: 'Solutions',
    groups: [
      {
        heading: 'Core services',
        links: [
          { href: '/solutions/provider-enrollment', label: 'Provider Enrollment', description: 'Medicare, Medicaid and commercial payers', icon: 'zap', iconBg: '#eff6ff' },
          { href: '/solutions/cvo-credentialing', label: 'CVO Credentialing', description: 'Primary source verification', icon: 'shield', iconBg: '#f0fdfa' },
          { href: '/solutions/roster-management', label: 'Roster Management', description: 'Accurate payer rosters and directories', icon: 'users', iconBg: '#faf5ff' },
        ],
      },
      {
        heading: 'Specialized services',
        links: [
          { href: '/solutions/delegated-credentialing', label: 'Delegated Credentialing', description: 'Delegation programs and audits', icon: 'share', iconBg: '#fffbeb' },
          { href: '/solutions/privileging', label: 'Privileging & OPPE', description: 'Medical staff credentialing', icon: 'building', iconBg: '#fdf2f8' },
          { href: '/solutions/cross-state-licensing', label: 'Cross-State Licensing', description: 'State licenses and compacts', icon: 'globe', iconBg: '#f0fdfa' },
        ],
      },
    ],
    spotlight: {
      background: 'linear-gradient(135deg,#062459,#0d6efd)',
      badge: { icon: 'cpu', label: 'Agent Engine' },
      rows: [
        { dot: 'green', label: 'Provider Enrollment', tag: 'Active' },
        { dot: 'teal', label: 'CVO Credentialing', tag: 'Active' },
        { dot: 'blue', label: 'Roster Sync', tag: 'Running' },
      ],
      caption: 'Every step from signed offer to billing, handled by one team.',
      cta: { href: '/services', label: 'SEE ALL SERVICES' },
    },
  },
  {
    id: 'who',
    label: 'Who we help',
    panelClassName: 'mdl-panel--who',
    groups: [
      {
        heading: 'Industries we help',
        links: [
          { href: '/who-we-help/provider-groups', label: 'Provider Groups & MSOs', description: 'Practices adding providers', icon: 'users', iconBg: '#eff6ff' },
          { href: '/who-we-help/health-plans', label: 'Health Plans & Payers', description: 'Network credentialing and monitoring', icon: 'shield', iconBg: '#f0fdfa' },
          { href: '/who-we-help/health-systems', label: 'Health Systems & Hospitals', description: 'Verification and privileging', icon: 'building', iconBg: '#faf5ff' },
          { href: '/who-we-help/digital-health', label: 'Digital Health & Telehealth', description: 'Multi-state licensing and enrollment', icon: 'globe', iconBg: '#f0fdfa' },
        ],
      },
    ],
    spotlight: {
      background: 'linear-gradient(135deg,#0a4a47,#10c1bb)',
      badge: { icon: 'bar', label: 'Roster Management' },
      header: ['Provider', 'Status'],
      rows: [
        { label: 'Dr. McLogan', tag: 'Credentialed', tagTone: 'green' },
        { label: 'Dr. Ivan Mora', tag: 'Credentialed', tagTone: 'green' },
        { label: 'Gary Smith', tag: 'In Progress', tagTone: 'teal' },
      ],
      caption: 'Let us show you how HealthCredSTAT will transform your operations',
      cta: { href: '/#contact', label: 'LEARN MORE' },
    },
  },
];

/** Top-level links shown beside the menus. Resources and Company menus return once those pages have content. */
export const NAV_LINKS: NavLink[] = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
];

export const PRIMARY_CTA: NavLink = { href: '/#contact', label: 'GET A FREE QUOTE' };

/** Shown in the search dialog before the visitor types. */
export const QUICK_LINKS: NavLink[] = [
  { href: '/solutions/provider-enrollment', label: 'Provider Enrollment', description: 'Medicare, Medicaid and commercial payers', icon: 'zap' },
  { href: '/solutions/cvo-credentialing', label: 'CVO Credentialing', description: 'Primary source verification', icon: 'shield' },
  { href: '/pricing', label: 'Transparent Pricing', description: 'Rates and plans', icon: 'bar' },
  { href: '/faq', label: 'Credentialing FAQ', description: 'Timelines, documents and costs', icon: 'chat' },
  { href: '/about', label: 'About HealthCredSTAT', description: 'Our approach', icon: 'building' },
];

/** Everything the search dialog can find: quick links first, then every menu link. */
export const SEARCH_INDEX: NavLink[] = ([
  ...QUICK_LINKS,
  ...NAV_MENUS.flatMap((m) => m.groups.flatMap((g) => g.links)),
  { href: '/services', label: 'All services', description: 'Everything from signed offer to billing', icon: 'cog' },
  { href: '/contact', label: 'Contact us', description: 'Get a free credentialing quote', icon: 'mail' },
  { href: '/guides', label: 'Credentialing guides', description: 'Timelines, CAQH, Medicare and recredentialing', icon: 'file' },
  { href: '/guides/how-long-does-credentialing-take', label: 'How long does credentialing take?', description: 'Typical timelines and what slows them down', icon: 'clock' },
  { href: '/guides/caqh-proview-guide', label: 'CAQH ProView guide', description: 'Setup, attestation and common mistakes', icon: 'doc-check' },
  { href: '/guides/how-to-get-credentialed-with-insurance-companies', label: 'How to get credentialed with insurers', description: 'Step-by-step from NPI to effective date', icon: 'check-circle' },
  { href: '/guides/medicare-pecos-enrollment', label: 'Medicare enrollment through PECOS', description: 'CMS-855 forms, effective dates and revalidation', icon: 'shield' },
  { href: '/guides/recredentialing-requirements', label: 'Recredentialing requirements', description: 'Cycles, re-verification and avoiding lapses', icon: 'clock' },
] satisfies NavLink[]).filter((link, i, all) => all.findIndex((l) => l.href === link.href) === i);

/** Footer columns; each column holds one or more headed groups. */
export const FOOTER_COLUMNS: NavGroup[][] = [
  [
    {
      heading: 'Services',
      links: [
        { href: '/services', label: 'All services' },
        { href: '/solutions/provider-enrollment', label: 'Provider enrollment' },
        { href: '/solutions/cvo-credentialing', label: 'CVO credentialing' },
        { href: '/solutions/roster-management', label: 'Roster management' },
        { href: '/solutions/delegated-credentialing', label: 'Delegated credentialing' },
        { href: '/solutions/privileging', label: 'Privileging & OPPE' },
        { href: '/solutions/cross-state-licensing', label: 'Cross-state licensing' },
        { href: '/#workflows', label: 'Continuous monitoring' },
        { href: '/#workflows', label: 'Payer contract management' },
      ],
    },
  ],
  [
    {
      heading: 'Platform',
      links: [
        { href: '/#rtv', label: 'Provider data management' },
        { href: '/#workflows', label: 'CredAlliance™' },
        { href: '/#workflows', label: 'AI operations engine' },
        { href: '/#platform', label: 'Modern platform architecture' },
        { href: '/pricing', label: 'Transparent pricing' },
      ],
    },
    {
      heading: 'Who We Help',
      links: [
        { href: '/who-we-help/provider-groups', label: 'Provider groups & MSOs' },
        { href: '/who-we-help/health-plans', label: 'Payers & health plans' },
        { href: '/who-we-help/health-systems', label: 'Health systems' },
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
        { href: '/#timeline', label: 'How enrollment works' },
      ],
    },
  ],
  [
    {
      heading: 'Company',
      links: [
        { href: '/about', label: 'About us' },
        { href: '/contact', label: 'Contact us' },
        // Appears once NEXT_PUBLIC_PORTAL_URL is set.
        ...(envConfig.portalUrl ? [{ href: envConfig.portalUrl, label: 'Portal login' }] : []),
      ],
    },
  ],
];

/** Placeholder targets until the client supplies the documents (see launch questions). */
export const LEGAL_LINKS: NavLink[] = [
  { href: '#faq', label: 'Privacy Policy' },
  { href: '#faq', label: 'Terms of Service' },
  { href: '#faq', label: 'HIPAA Business Associate (BAA)' },
];
