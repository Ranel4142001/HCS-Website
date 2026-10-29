import type { SolutionContent } from '../types';

/** Copy for /who-we-help/* pages. Same rule as solutions: no unverified numbers. */

export const providerGroups: SolutionContent = {
  path: '/who-we-help/provider-groups',
  section: 'Who we help',
  name: 'Medical groups & MSOs',
  audience: 'Medical groups, physician practices and management services organizations',
  color: '#3f8dff',
  icon: 'users',
  meta: {
    title: 'Credentialing for Medical Groups & MSOs',
    description:
      'Outsourced provider credentialing for medical groups and MSOs: verification, CAQH management, recredentialing and expiration tracking for every provider.',
  },
  h1: 'Credentialing services for medical groups & MSOs',
  lead:
    'Credentialing and recredentialing for every provider in your practice, handled by one dedicated team so new providers are ready sooner.',
  primaryCta: 'Get a quote for your group',
  highlights: [
    { title: 'Onboarding', text: 'New providers credentialed early' },
    { title: 'CAQH', text: 'Profiles kept current' },
    { title: 'Renewals', text: 'Recredentialing tracked' },
    { title: 'One team', text: 'A specialist who knows your group' },
  ],
  problem: {
    title: 'Growth stalls when credentialing lags',
    paragraphs: [
      'Recruiting a provider takes months, and credentialing can take months more. A provider who is hired but not yet credentialed is a cost without revenue.',
      'Many practices rely on one busy staff member and a spreadsheet. When that person is out, files stall. We give you a dedicated team and a clear status for every provider.',
    ],
  },
  included: {
    title: 'What your group gets',
    items: [
      'Credentialing for new providers with primary source verification',
      'CAQH ProView management and re-attestation',
      'Recredentialing tracked and started before it is due',
      'License, DEA, board certification and malpractice expiration alerts',
      'Sanctions and exclusion monitoring',
      'Status reporting for practice leadership',
    ],
  },
  process: {
    title: 'How we work with your group',
    steps: [
      { title: 'Review', text: 'We review your provider list, upcoming start dates and any files in progress.' },
      { title: 'Prioritize', text: 'We start with the providers whose start dates are closest.' },
      { title: 'Credential', text: 'Each provider is verified and their file completed, with a live status for every one.' },
      { title: 'Maintain', text: 'Recredentialing and expirations are tracked so nothing lapses.' },
    ],
  },
  checklist: {
    title: 'Documents to gather before a new provider starts',
    intro: 'Having these ready on day one keeps credentialing from stalling:',
    items: [
      'Individual NPI, and the group NPI and tax ID',
      'State license and DEA / state controlled-substance registrations',
      'Board certification and training certificates',
      'CV with month-and-year work history',
      'Malpractice insurance certificate',
      'CAQH ProView login',
      'Hospital affiliation letters, if any',
    ],
  },
  faqs: [
    {
      q: 'When should we start credentialing a new provider?',
      a: 'As soon as the offer is signed, ideally 90 to 120 days before the start date.',
    },
    {
      q: 'Can you take over files that are already in progress?',
      a: 'Yes. We review where each file stands and pick up the work from there.',
    },
    {
      q: 'Do you work with MSOs managing multiple practices?',
      a: 'Yes. We can manage credentialing across multiple practices and locations, with reporting by practice.',
    },
    {
      q: 'How is pricing structured for groups?',
      a: 'Group pricing depends on the number of providers and the services you need. Contact us for a custom quote.',
    },
  ],
  related: [
    { label: 'Provider credentialing', href: '/solutions/cvo-credentialing' },
    { label: 'How long does credentialing take?', href: '/guides/how-long-does-credentialing-take' },
    { label: 'Pricing', href: '/pricing' },
  ],
  cta: {
    title: 'Get your next provider credentialed sooner',
    text: 'Tell us how many providers you need credentialed, and we will send a quote and timeline.',
  },
};

export const healthPlans: SolutionContent = {
  path: '/who-we-help/health-plans',
  section: 'Who we help',
  name: 'Health plans',
  audience: 'Health plans and payers',
  color: '#10c1bb',
  icon: 'shield',
  meta: {
    title: 'Credentialing Services for Health Plans',
    description:
      'Credentialing, recredentialing and ongoing monitoring for health plan networks, with committee-ready files that follow NCQA standards.',
  },
  h1: 'Network credentialing services for health plans',
  lead:
    'Credential and recredential network providers and monitor them between cycles, with files that follow NCQA standards and are ready for audit.',
  primaryCta: 'Talk to our team',
  highlights: [
    { title: 'Credentialing', text: 'Initial & recredentialing files' },
    { title: 'Monitoring', text: 'Sanctions & license actions' },
    { title: 'NCQA standards', text: 'Built into every file' },
    { title: 'Reporting', text: 'Ready for committee & audit' },
  ],
  problem: {
    title: 'Network growth meets regulatory pressure',
    paragraphs: [
      'Health plans have to credential every network provider, recredential them on schedule and monitor sanctions in between, while network adequacy goals push for faster onboarding.',
      'We add verification capacity without adding headcount, and give your credentialing team consistent, audit-ready files and clear reporting.',
    ],
  },
  included: {
    title: 'What is included',
    items: [
      'Initial credentialing and recredentialing with primary source verification',
      'Committee-ready files following NCQA standards',
      'Ongoing sanctions, exclusion and license monitoring',
      'Reporting for credentialing committees and compliance',
    ],
  },
  process: {
    title: 'How we support your credentialing team',
    steps: [
      { title: 'Align', text: 'We map your credentialing policies, verification sources and committee requirements.' },
      { title: 'Verify', text: 'Providers are verified at the primary source and files are assembled to your standard.' },
      { title: 'Monitor', text: 'Sanctions, exclusions and license actions are monitored between credentialing cycles.' },
      { title: 'Report', text: 'You receive the reporting your committee, compliance team and auditors need.' },
    ],
  },
  checklist: {
    title: 'Credentialing work a health plan can hand off',
    intro: 'Plans can outsource some or all of these while keeping final decisions with their credentialing committee:',
    items: [
      'Initial credentialing and recredentialing files',
      'Primary source verification',
      'Ongoing sanction, exclusion and license monitoring',
      'Committee-ready file summaries',
    ],
  },
  faqs: [
    {
      q: 'Can you work within our credentialing policies?',
      a: 'Yes. We follow your policies and verification requirements, and your credentialing committee keeps every decision.',
    },
    {
      q: 'How often must providers be recredentialed?',
      a: 'Health plans commonly recredential every three years, in line with widely used accreditation standards, with ongoing monitoring in between.',
    },
    {
      q: 'What should be monitored between credentialing cycles?',
      a: 'License actions, Medicare and Medicaid sanctions, OIG, SAM.gov and Medicare opt-out status. Issues are caught when they happen, not at the next cycle.',
    },
  ],
  related: [
    { label: 'Provider credentialing & primary source verification', href: '/solutions/cvo-credentialing' },
    { label: 'Recredentialing requirements', href: '/guides/recredentialing-requirements' },
    { label: 'Pricing', href: '/pricing' },
  ],
  cta: {
    title: 'Add credentialing capacity without adding headcount',
    text: 'Tell us your network size and credentialing volume, and we will scope a program that fits.',
  },
};

export const healthSystems: SolutionContent = {
  path: '/who-we-help/health-systems',
  section: 'Who we help',
  name: 'Health systems & hospitals',
  audience: 'Health systems, hospitals and ambulatory surgery centers',
  color: '#ef4444',
  icon: 'building',
  meta: {
    title: 'Credentialing Services for Health Systems',
    description:
      'Centralized provider credentialing for hospitals and health systems: primary source verification, recredentialing and every license and certification tracked.',
  },
  h1: 'Credentialing services for hospitals and health systems',
  lead:
    'Bring provider credentialing into one consistent process across every facility, so providers are verified faster and nothing expires unnoticed.',
  primaryCta: 'Talk to our team',
  highlights: [
    { title: 'Centralized', text: 'One process across facilities' },
    { title: 'Verification', text: 'Primary source, documented' },
    { title: 'Recredentialing', text: 'Started before it is due' },
    { title: 'Monitoring', text: 'Expirations & sanctions tracked' },
  ],
  problem: {
    title: 'Too many offices doing the same work',
    paragraphs: [
      'In many health systems, each facility verifies the same provider separately. The result is duplicated work, inconsistent files and providers asked for the same documents again and again.',
      'We help you verify each provider once, in one consistent file that every facility can rely on, with one view of where every provider stands.',
    ],
  },
  included: {
    title: 'What is included',
    items: [
      'Centralized primary source verification',
      'Committee-ready credentialing files',
      'Recredentialing support for every facility',
      'Expiration and sanctions monitoring',
      'System-wide reporting by facility',
    ],
  },
  process: {
    title: 'How we work with health systems',
    steps: [
      { title: 'Map', text: 'We map how credentialing works across your facilities today.' },
      { title: 'Centralize', text: 'We set up one verification process and one provider file that every facility can rely on.' },
      { title: 'Operate', text: 'Our team handles verification and follow-up on your timeline.' },
      { title: 'Report', text: 'Leadership sees status, turnaround and upcoming expirations across the system.' },
    ],
  },
  checklist: {
    title: 'Where health systems typically lose time',
    intro: 'These are the bottlenecks we look for first:',
    items: [
      'Collecting the same provider data more than once',
      'Expiring licenses and documents caught too late',
      'Provider data that differs between facilities',
      'Recredentialing deadlines tracked in spreadsheets',
    ],
  },
  faqs: [
    {
      q: 'Can you support multiple hospitals with different bylaws?',
      a: 'Yes. Verification can be centralized while each facility keeps its own criteria, forms and committee process.',
    },
    {
      q: 'Can you work alongside our medical staff office?',
      a: 'Yes. Most health systems use us to add capacity, handle peaks or take on verification and monitoring while their team focuses on committee work.',
    },
  ],
  related: [
    { label: 'Provider credentialing & primary source verification', href: '/solutions/cvo-credentialing' },
    { label: 'Recredentialing requirements', href: '/guides/recredentialing-requirements' },
    { label: 'Pricing', href: '/pricing' },
  ],
  cta: {
    title: 'One credentialing process for your whole system',
    text: 'Tell us about your facilities and provider volume, and we will show you how centralization could work.',
  },
};

export const digitalHealth: SolutionContent = {
  path: '/who-we-help/digital-health',
  section: 'Who we help',
  name: 'Telehealth & digital health',
  audience: 'Telehealth and digital health companies',
  color: '#8b5cf6',
  icon: 'globe',
  meta: {
    title: 'Credentialing for Telehealth Companies',
    description:
      'Provider credentialing for telehealth and digital health companies: verification across every state you serve, recredentialing and expiration tracking.',
  },
  h1: 'Credentialing services for telehealth companies',
  lead:
    'Virtual care teams grow fast and span many states. We credential your providers to the standards your partners require and track every license and certification as you scale.',
  primaryCta: 'Talk to our team',
  highlights: [
    { title: 'Every state', text: 'Licenses verified where you practice' },
    { title: 'Credentialing', text: 'Verified, audit-ready files' },
    { title: 'Monitoring', text: 'Expirations tracked by state' },
    { title: 'Scale', text: 'Built for fast-growing teams' },
  ],
  problem: {
    title: 'More states means more to verify',
    paragraphs: [
      'Telehealth providers often hold licenses and registrations in many states, each with its own expiration date. Every one has to be verified and kept current.',
      'We credential each provider once, verify every state credential at the source and track every renewal date, so your team can grow without credentialing gaps.',
    ],
  },
  included: {
    title: 'What is included',
    items: [
      'Credentialing with primary source verification',
      'License and DEA verification in every state you serve',
      'CAQH ProView management across practice locations',
      'Recredentialing and renewal tracking by state',
      'Reporting by provider and state',
    ],
  },
  process: {
    title: 'How we support a growing telehealth team',
    steps: [
      { title: 'Map', text: 'We map which providers practice in which states and what each partner requires.' },
      { title: 'Verify', text: 'Each license, registration and credential is verified at the primary source.' },
      { title: 'Deliver', text: 'You receive complete, consistent files ready for your partners’ review.' },
      { title: 'Maintain', text: 'Every license and registration is tracked so nothing expires unnoticed.' },
    ],
  },
  checklist: {
    title: 'What multi-state telehealth credentialing involves',
    intro: 'Virtual care adds a state dimension to every step:',
    items: [
      'A verified license in each state where patients are located',
      'DEA registration for each state where controlled substances are prescribed',
      'A CAQH profile kept current across all practice locations',
      'Renewal dates tracked for every license and registration in every state',
    ],
  },
  faqs: [
    {
      q: 'Can you work with our health plan partners’ requirements?',
      a: 'Yes. We credential providers to the standards your partners require and keep files ready for their review.',
    },
    {
      q: 'Which state license does a telehealth provider need?',
      a: 'Generally the license must cover the state where the patient is located during the visit, not where the provider sits.',
    },
  ],
  related: [
    { label: 'Provider credentialing & primary source verification', href: '/solutions/cvo-credentialing' },
    { label: 'CAQH ProView guide', href: '/guides/caqh-proview-guide' },
    { label: 'Pricing', href: '/pricing' },
  ],
  cta: {
    title: 'Credentialing that keeps up with your growth',
    text: 'Tell us how many providers and states you cover, and we will send a quote and timeline.',
  },
};

export const AUDIENCES = [providerGroups, healthPlans, healthSystems, digitalHealth];
