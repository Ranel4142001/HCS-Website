import type { SolutionContent } from '../types';

/** Copy for /who-we-help/* pages. Same rule as solutions: no unverified numbers. */

export const providerGroups: SolutionContent = {
  path: '/who-we-help/provider-groups',
  section: 'Who we help',
  name: 'Medical Groups & MSOs',
  audience: 'Medical groups, physician practices and management services organizations',
  color: '#3f8dff',
  icon: '👩‍⚕️',
  meta: {
    title: 'Credentialing for Medical Groups & MSOs',
    description:
      'Outsourced credentialing and payer enrollment for medical groups and MSOs. Onboard new providers faster and keep every enrollment current.',
  },
  h1: 'Credentialing services for medical groups & MSOs',
  lead:
    'New providers should start earning on day one, not month four. We handle credentialing, payer enrollment and recredentialing for your practice, so growth is not held back by paperwork.',
  primaryCta: 'Get a quote for your group',
  highlights: [
    { title: 'Onboarding', text: 'New providers enrolled early' },
    { title: 'Every payer', text: 'Medicare, Medicaid & commercial' },
    { title: 'Renewals', text: 'Recredentialing tracked' },
    { title: 'One team', text: 'A specialist who knows your group' },
  ],
  problem: {
    title: 'Growth stalls when credentialing lags',
    paragraphs: [
      'Recruiting a provider takes months. Then credentialing and enrollment can take months more — while the provider is on payroll but cannot bill most payers. For a growing group, that delay adds up fast.',
      'Most practices handle credentialing with one or two overloaded staff members, spreadsheets and sticky notes. When that person is out, applications stall. We give you a dedicated team, a clear status for every application and a process that does not depend on one person.',
    ],
  },
  included: {
    title: 'What your group gets',
    items: [
      'Payer enrollment for new providers and new locations',
      'Group and individual Medicare, Medicaid and commercial enrollment',
      'CAQH ProView management and re-attestation',
      'Recredentialing and revalidation tracking',
      'License, DEA and certification expiration alerts',
      'Status reporting for practice leadership',
      'Support for acquisitions, new sites and tax ID changes',
    ],
  },
  process: {
    title: 'How we work with your group',
    steps: [
      { title: 'Review', text: 'We review your current payer mix, provider list and any pending applications.' },
      { title: 'Prioritize', text: 'We start with the payers and providers that unlock the most revenue first.' },
      { title: 'Execute', text: 'Applications are submitted and followed up, with a live status for every one.' },
      { title: 'Maintain', text: 'Recredentialing, revalidation and expirations are tracked so nothing lapses.' },
    ],
  },
  faqs: [
    {
      q: 'When should we start credentialing a new provider?',
      a: 'As soon as the offer is signed — ideally 90 to 120 days before the start date. Enrollment can begin once the provider has an NPI and a license in your state.',
    },
    {
      q: 'Can you take over applications that are already in progress?',
      a: 'Yes. We review where each application stands, contact the payers and pick up the follow-up from there.',
    },
    {
      q: 'Do you work with MSOs managing multiple practices?',
      a: 'Yes. We can manage enrollment across multiple practices, tax IDs and locations, with reporting by practice.',
    },
    {
      q: 'How is pricing structured for groups?',
      a: 'Group pricing depends on the number of providers, payers and services you need. Contact us for a custom quote.',
    },
  ],
  related: [
    { label: 'Provider enrollment services', href: '/solutions/provider-enrollment' },
    { label: 'Provider roster management', href: '/solutions/roster-management' },
    { label: 'Pricing', href: '/pricing' },
  ],
  cta: {
    title: 'Get your next provider billing sooner',
    text: 'Tell us how many providers and payers you work with, and we will send a quote and timeline.',
  },
};

export const healthPlans: SolutionContent = {
  path: '/who-we-help/health-plans',
  section: 'Who we help',
  name: 'Health Plans',
  audience: 'Health plans and payers',
  color: '#10c1bb',
  icon: '🛡️',
  meta: {
    title: 'Credentialing Services for Health Plans',
    description:
      'Credentialing, recredentialing, monitoring and directory accuracy support for health plans, with files that follow NCQA standards.',
  },
  h1: 'Network credentialing services for health plans',
  lead:
    'Credential and recredential network providers, monitor them between cycles and keep directory data accurate — with files that follow NCQA standards and are ready for audit.',
  primaryCta: 'Talk to our team',
  highlights: [
    { title: 'Credentialing', text: 'Initial & recredentialing files' },
    { title: 'Monitoring', text: 'Sanctions & license actions' },
    { title: 'Directories', text: 'Provider data kept accurate' },
    { title: 'Oversight', text: 'Delegate audit support' },
  ],
  problem: {
    title: 'Network growth meets regulatory pressure',
    paragraphs: [
      'Health plans have to credential every network provider, recredential them on schedule, monitor sanctions in between and keep provider directories accurate — all while network adequacy goals push for faster onboarding.',
      'We add verification capacity without adding headcount, and give your credentialing team consistent, audit-ready files and clear reporting.',
    ],
  },
  included: {
    title: 'What is included',
    items: [
      'Initial credentialing and recredentialing with primary source verification',
      'Committee-ready files following NCQA standards',
      'Ongoing sanctions, exclusion and license monitoring',
      'Provider directory data validation',
      'Delegate oversight audit support',
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
  faqs: [
    {
      q: 'Can you work within our credentialing policies?',
      a: 'Yes. We follow your policies and verification requirements, and your credentialing committee keeps every decision.',
    },
    {
      q: 'Do you help with delegated entity oversight?',
      a: 'Yes. We can review delegate files and documentation as part of your annual oversight audits.',
    },
    {
      q: 'How do you support directory accuracy?',
      a: 'We validate provider demographic and location data against credentialing records and provider attestations, and flag discrepancies for correction.',
    },
  ],
  related: [
    { label: 'CVO credentialing & primary source verification', href: '/solutions/cvo-credentialing' },
    { label: 'Delegated credentialing', href: '/solutions/delegated-credentialing' },
    { label: 'Provider roster management', href: '/solutions/roster-management' },
  ],
  cta: {
    title: 'Add credentialing capacity without adding headcount',
    text: 'Tell us your network size and credentialing volume, and we will scope a program that fits.',
  },
};

export const healthSystems: SolutionContent = {
  path: '/who-we-help/health-systems',
  section: 'Who we help',
  name: 'Health Systems & Hospitals',
  audience: 'Health systems, hospitals and ambulatory surgery centers',
  color: '#ef4444',
  icon: '🏥',
  meta: {
    title: 'Credentialing Services for Health Systems',
    description:
      'Centralized credentialing, privileging and payer enrollment for hospitals and health systems, with every expiration tracked.',
  },
  h1: 'Credentialing & privileging for hospitals and health systems',
  lead:
    'Bring medical staff credentialing, privileging and payer enrollment into one consistent process across every facility — so providers are approved faster and nothing expires unnoticed.',
  primaryCta: 'Talk to our team',
  highlights: [
    { title: 'Centralized', text: 'One process across facilities' },
    { title: 'Privileging', text: 'Appointments & reappointments' },
    { title: 'Enrollment', text: 'Payers for employed providers' },
    { title: 'Monitoring', text: 'Expirations & sanctions tracked' },
  ],
  problem: {
    title: 'Too many offices doing the same work',
    paragraphs: [
      'In many health systems, every hospital’s medical staff office and every clinic’s billing team verifies the same provider separately. The result is duplicated work, inconsistent files and providers asked for the same documents again and again.',
      'We help you centralize verification once, then reuse it for privileging at each facility and enrollment with every payer — with one view of where every provider stands.',
    ],
  },
  included: {
    title: 'What is included',
    items: [
      'Centralized primary source verification',
      'Medical staff appointment and reappointment support',
      'Privilege delineation, FPPE and OPPE tracking',
      'Payer enrollment for employed and affiliated providers',
      'Expiration and sanctions monitoring',
      'System-wide reporting by facility',
    ],
  },
  process: {
    title: 'How we work with health systems',
    steps: [
      { title: 'Map', text: 'We map how credentialing, privileging and enrollment work across your facilities today.' },
      { title: 'Centralize', text: 'We set up one verification process and one provider record that every facility can rely on.' },
      { title: 'Operate', text: 'Our team handles verification, applications and follow-up on your timeline.' },
      { title: 'Report', text: 'Leadership sees status, turnaround and upcoming expirations across the system.' },
    ],
  },
  faqs: [
    {
      q: 'Can you support multiple hospitals with different bylaws?',
      a: 'Yes. Verification can be centralized while each facility keeps its own privileging criteria, forms and committee process.',
    },
    {
      q: 'Do you handle payer enrollment for employed providers?',
      a: 'Yes. We enroll employed and affiliated providers with Medicare, Medicaid and commercial payers, and keep enrollments current.',
    },
    {
      q: 'Can you work alongside our existing medical staff office?',
      a: 'Absolutely. Most health systems use us to add capacity, handle peaks or take on specific workflows while their team focuses on committee work.',
    },
  ],
  related: [
    { label: 'Hospital privileging', href: '/solutions/privileging' },
    { label: 'CVO credentialing & primary source verification', href: '/solutions/cvo-credentialing' },
    { label: 'Provider enrollment services', href: '/solutions/provider-enrollment' },
  ],
  cta: {
    title: 'One credentialing process for your whole system',
    text: 'Tell us about your facilities and provider volume, and we will show you how centralization could work.',
  },
};

export const digitalHealth: SolutionContent = {
  path: '/who-we-help/digital-health',
  section: 'Who we help',
  name: 'Telehealth & Digital Health',
  audience: 'Telehealth and digital health companies',
  color: '#8b5cf6',
  icon: '💻',
  meta: {
    title: 'Telehealth Credentialing & Licensing',
    description:
      'Multi-state licensing, credentialing and payer enrollment for telehealth and digital health companies. Launch in new states and get in-network faster.',
  },
  h1: 'Credentialing & licensing for telehealth companies',
  lead:
    'Launching in a new state means licenses, credentialing and payer contracts — all before you can see a single insured patient. We handle all three so your clinical team can scale with your growth plans.',
  primaryCta: 'Plan your next state launch',
  highlights: [
    { title: 'Licensing', text: 'New states & compacts' },
    { title: 'Credentialing', text: 'Verified, audit-ready files' },
    { title: 'Enrollment', text: 'Payers in every state you serve' },
    { title: 'Scale', text: 'Built for fast-growing teams' },
  ],
  problem: {
    title: 'Every new state is a new set of rules',
    paragraphs: [
      'Virtual care companies usually need providers licensed where patients are located, enrolled with the payers in each state and credentialed to the standards of every health plan partner. Each step depends on the one before it.',
      'We plan licensing, credentialing and enrollment together, so providers are licensed, verified and in-network in the order your launch plan needs.',
    ],
  },
  included: {
    title: 'What is included',
    items: [
      'State licensing strategy and applications, including compacts',
      'DEA and controlled substance registrations by state',
      'Credentialing with primary source verification',
      'Payer enrollment in every state you serve',
      'License, DEA and enrollment renewal tracking',
      'Reporting by provider, state and payer',
    ],
  },
  process: {
    title: 'How we support a state launch',
    steps: [
      { title: 'Launch plan', text: 'We map which providers need which licenses, registrations and payer enrollments for each state.' },
      { title: 'License', text: 'Applications go in through the fastest pathway available for each provider.' },
      { title: 'Credential & enroll', text: 'Providers are verified and enrolled with your target payers as licenses are issued.' },
      { title: 'Maintain', text: 'Every license, registration and enrollment is tracked and renewed on time.' },
    ],
  },
  faqs: [
    {
      q: 'Can you help us launch in several states at once?',
      a: 'Yes. We plan licensing and enrollment across states in parallel and prioritize the providers and payers your launch depends on.',
    },
    {
      q: 'Do you handle prescribing registrations?',
      a: 'Yes. We manage DEA registrations and state controlled substance registrations for each state where your providers prescribe.',
    },
    {
      q: 'Can you work with our health plan partners’ requirements?',
      a: 'Yes. We credential providers to the standards your partners require and keep files ready for their review.',
    },
  ],
  related: [
    { label: 'Multi-state licensing', href: '/solutions/cross-state-licensing' },
    { label: 'Provider enrollment services', href: '/solutions/provider-enrollment' },
    { label: 'CVO credentialing & primary source verification', href: '/solutions/cvo-credentialing' },
  ],
  cta: {
    title: 'Launch your next state on schedule',
    text: 'Tell us which states and providers are next, and we will build a licensing and enrollment plan.',
  },
};

export const AUDIENCES = [providerGroups, healthPlans, healthSystems, digitalHealth];
