import type { SolutionContent } from '../types';

/**
 * Copy for /solutions/* pages.
 * Keep claims factual: describe the process and what we do, and add performance
 * numbers only once they are measured and approved.
 */

export const providerEnrollment: SolutionContent = {
  path: '/solutions/provider-enrollment',
  section: 'Solutions',
  name: 'Provider Enrollment',
  color: '#3f8dff',
  icon: '⚡',
  meta: {
    title: 'Provider Enrollment & Payer Credentialing',
    description:
      'Provider enrollment for Medicare, Medicaid and commercial payers. We prepare applications, manage CAQH and follow up until your providers are in-network.',
  },
  h1: 'Provider enrollment services that get you in-network sooner',
  lead:
    'We prepare, submit and follow up on every payer application — Medicare, Medicaid and commercial plans — so your providers can start seeing insured patients and billing without months of avoidable delay.',
  primaryCta: 'Get an enrollment quote',
  highlights: [
    { title: 'Medicare', text: 'PECOS & CMS-855 applications' },
    { title: 'Medicaid', text: 'State-specific enrollment' },
    { title: 'Commercial', text: 'Health plan applications & contracts' },
    { title: 'CAQH', text: 'Profile set-up & re-attestation' },
  ],
  problem: {
    title: 'Why enrollment takes so long',
    paragraphs: [
      'Every payer has its own application, its own portal and its own idea of a "complete" file. A single missing date or an expired document can send an application back to the start of the queue — and nobody tells you until weeks later.',
      'Commercial payer credentialing commonly takes 90 to 120 days, and sometimes longer. During that time a new provider either cannot see insured patients or sees them without being able to bill. The fastest way through is a clean first submission and relentless, documented follow-up. That is exactly what we do.',
    ],
  },
  included: {
    title: 'What is included',
    items: [
      'Payer research: which plans to join and what each one requires',
      'Medicare enrollment through PECOS, including CMS-855 applications',
      'State Medicaid and Medicaid managed care enrollment',
      'Commercial payer applications and participation agreements',
      'CAQH ProView set-up, document uploads and re-attestation',
      'NPI and NPPES updates, group linkage and reassignment of benefits',
      'Scheduled follow-up with every payer until approval',
      'Effective dates and provider IDs confirmed and recorded for billing',
    ],
  },
  process: {
    title: 'How provider enrollment works with HealthCredSTAT',
    steps: [
      { title: 'Intake', text: 'We collect provider details and documents once through a secure portal, and flag anything missing or expiring before it causes a rejection.' },
      { title: 'Payer plan', text: 'We confirm which Medicare, Medicaid and commercial plans each provider should join, and the order that gets them billing fastest.' },
      { title: 'Clean submission', text: 'Applications are prepared, checked by a specialist and submitted — with CAQH updated and attested so payers can pull current data.' },
      { title: 'Follow-up', text: 'We follow up with each payer on a set schedule, answer their requests quickly, and escalate stalled applications.' },
      { title: 'Ready to bill', text: 'You receive effective dates, provider IDs and contract details for each payer, so billing can start without guesswork.' },
    ],
  },
  checklist: {
    title: 'Documents you will typically need',
    intro: 'Requirements vary by payer and specialty, but most enrollments ask for the following. We tell you exactly what is needed for your providers before anything is submitted.',
    items: [
      'Individual NPI (and group NPI for practices)',
      'State medical or professional license',
      'DEA registration and state controlled substance registration, if applicable',
      'Board certification or eligibility',
      'Current CV with month/year dates and explanations for gaps',
      'Malpractice insurance certificate and claims history',
      'Education and training certificates',
      'W-9 and practice location details',
    ],
  },
  faqs: [
    {
      q: 'How long does provider enrollment take?',
      a: 'It depends on the payer and state. Commercial plans commonly take 90 to 120 days, Medicare processing time varies by Medicare Administrative Contractor, and Medicaid timelines differ by state. Complete, accurate applications and consistent follow-up are the biggest factors you can control.',
    },
    {
      q: 'What is the difference between credentialing and enrollment?',
      a: 'Credentialing verifies that a provider is qualified — licenses, education, board certification and history. Enrollment is the process of joining a specific payer network so the provider can bill that payer. Most payers credential a provider as part of enrollment.',
    },
    {
      q: 'Can a provider see patients before enrollment is approved?',
      a: 'They can, but claims to that payer may be denied or paid out-of-network until enrollment is effective. Some payers allow retroactive effective dates; many do not. Starting enrollment early is the safest way to protect revenue.',
    },
    {
      q: 'Do you handle CAQH ProView?',
      a: 'Yes. We create or update the CAQH profile, upload documents, grant payer access and re-attest it on schedule (every 120 days for most providers), so payers always see current information. CAQH now operates as DataSpring; the profile works the same way.',
    },
  ],
  related: [
    { label: 'CVO credentialing & primary source verification', href: '/solutions/cvo-credentialing' },
    { label: 'Provider roster management', href: '/solutions/roster-management' },
    { label: 'Credentialing for medical groups & MSOs', href: '/who-we-help/provider-groups' },
  ],
  cta: {
    title: 'Start enrollment before the next start date',
    text: 'Tell us how many providers and payers you need, and we will send a quote and a realistic timeline.',
  },
};

export const cvoCredentialing: SolutionContent = {
  path: '/solutions/cvo-credentialing',
  section: 'Solutions',
  name: 'CVO Credentialing',
  color: '#10c1bb',
  icon: '🛡️',
  meta: {
    title: 'Primary Source Verification & CVO Services',
    description:
      'Outsourced credentialing and primary source verification following NCQA standards: committee-ready files, recredentialing and ongoing monitoring.',
  },
  h1: 'CVO credentialing & primary source verification',
  lead:
    'Committee-ready credentialing files built on primary source verification, following NCQA credentialing standards — so your committee can approve providers with confidence and your files hold up in an audit.',
  primaryCta: 'Get a credentialing quote',
  highlights: [
    { title: 'Primary source', text: 'Verified at the original source' },
    { title: 'NCQA standards', text: 'Built into every file' },
    { title: 'Audit trail', text: 'Every check documented' },
    { title: 'Recredentialing', text: 'Tracked before it is due' },
  ],
  problem: {
    title: 'Credentialing files that stand up to scrutiny',
    paragraphs: [
      'A credentialing file is only as good as its weakest verification. Missing dates, outdated sources or an unexplained gap in work history can stall a committee decision — or become a finding in your next delegation or accreditation audit.',
      'Our credentialing team verifies each element directly with the primary source, documents when and how it was verified, and assembles a consistent, committee-ready file. You keep the decision; we do the verification work behind it.',
    ],
  },
  included: {
    title: 'What we verify',
    items: [
      'State licenses, including disciplinary actions',
      'DEA and state controlled substance registrations',
      'Education, residency and fellowship training',
      'Board certification status',
      'Work history with gap explanations',
      'Malpractice coverage and claims history, including NPDB queries',
      'Federal and state sanctions and exclusions (OIG, SAM.gov, state Medicaid lists)',
      'Medicare opt-out status and hospital affiliations where required',
    ],
  },
  process: {
    title: 'From application to committee-ready file',
    steps: [
      { title: 'Application', text: 'We collect the provider application and attestation once, through a secure portal, and check it for completeness.' },
      { title: 'Verification', text: 'Each credential is verified directly with the issuing source, with the date, method and result recorded.' },
      { title: 'Review', text: 'A credentialing specialist reviews the file and flags anything your committee needs to look at more closely.' },
      { title: 'Committee file', text: 'You receive a consistent, organized file ready for your credentialing committee or medical director.' },
      { title: 'Recredentialing', text: 'We track every expiration and start recredentialing well before the 36-month NCQA cycle comes due.' },
    ],
  },
  faqs: [
    {
      q: 'What is a Credentials Verification Organization (CVO)?',
      a: 'A CVO is an organization that verifies healthcare practitioners’ credentials on behalf of hospitals, medical groups and health plans. The organization that hires the CVO keeps the final credentialing decision.',
    },
    {
      q: 'What is primary source verification?',
      a: 'Primary source verification means confirming a credential directly with the organization that issued it — for example, the state licensing board or the certifying board — rather than relying on a copy supplied by the provider.',
    },
    {
      q: 'How often do providers need to be recredentialed?',
      a: 'Under NCQA standards, providers are recredentialed at least every 36 months. Hospitals reappoint medical staff on the cycle set by their bylaws and accreditation requirements. We track both.',
    },
    {
      q: 'Is HealthCredSTAT an NCQA-certified CVO?',
      a: 'We follow NCQA credentialing standards in our verification process. If your organization requires a CVO with formal NCQA certification, ask us about your specific requirements before you start.',
    },
  ],
  related: [
    { label: 'Ongoing monitoring & delegated credentialing', href: '/solutions/delegated-credentialing' },
    { label: 'Hospital privileging', href: '/solutions/privileging' },
    { label: 'Provider enrollment services', href: '/solutions/provider-enrollment' },
  ],
  cta: {
    title: 'Give your committee files it can trust',
    text: 'Tell us your volume and standards, and we will show you how our verification process fits.',
  },
};

export const rosterManagement: SolutionContent = {
  path: '/solutions/roster-management',
  section: 'Solutions',
  name: 'Roster Management',
  color: '#8b5cf6',
  icon: '📋',
  meta: {
    title: 'Provider Roster Management Services',
    description:
      'Keep provider data accurate across every health plan. We maintain your roster, format it for each payer and submit updates on time.',
  },
  h1: 'Provider roster management that keeps every payer in sync',
  lead:
    'One accurate source of provider data, formatted the way each health plan wants it and submitted on schedule — so directories stay correct, claims pay, and new providers appear where patients look for them.',
  primaryCta: 'Get a roster quote',
  highlights: [
    { title: 'One source', text: 'Single, accurate provider record' },
    { title: 'Every format', text: 'Payer-specific roster templates' },
    { title: 'On schedule', text: 'Changes submitted on time' },
    { title: 'Reconciled', text: 'Payer data checked against yours' },
  ],
  problem: {
    title: 'Small data errors, big consequences',
    paragraphs: [
      'When a provider changes location, joins or leaves the group, or a phone number changes, every health plan needs to know — each in its own spreadsheet format and on its own schedule. Miss one and claims can deny, patients find the wrong address, and directory accuracy becomes a compliance issue.',
      'Under the No Surprises Act, health plans must verify provider directory information at least every 90 days, and providers are expected to report changes promptly. We turn that ongoing chore into a managed process with a single source of truth.',
    ],
  },
  included: {
    title: 'What is included',
    items: [
      'A single, maintained record for every provider and location',
      'Roster files built to each health plan’s template',
      'Adds, terms and changes submitted on each payer’s schedule',
      'Reconciliation of payer directories against your data',
      'Follow-up on rejected or unprocessed roster updates',
      'Change log you can share with compliance and leadership',
    ],
  },
  process: {
    title: 'How roster management works',
    steps: [
      { title: 'Baseline', text: 'We collect current provider, location and payer data, then clean and de-duplicate it into one record.' },
      { title: 'Templates', text: 'We map your data to every health plan’s roster format, so updates are ready when changes happen.' },
      { title: 'Change management', text: 'New providers, terminations and demographic changes are captured and submitted to each payer on time.' },
      { title: 'Reconciliation', text: 'We compare what payers show against your record and correct discrepancies before they cause denials.' },
    ],
  },
  faqs: [
    {
      q: 'What is a provider roster?',
      a: 'A provider roster is the list of providers, locations, specialties and identifiers that a medical group or delegated entity sends to a health plan. Payers use it to load providers into their systems and directories.',
    },
    {
      q: 'Why do roster errors cause claim denials?',
      a: 'If a payer’s system has the wrong location, tax ID, NPI linkage or effective date for a provider, claims may not match the provider record and can be denied or delayed.',
    },
    {
      q: 'How often should rosters be updated?',
      a: 'Whenever something changes, and on the schedule each health plan requires — often monthly. Plans must also verify directory information at least every 90 days under the No Surprises Act.',
    },
    {
      q: 'Can you work with our existing systems?',
      a: 'Yes. We can start from spreadsheets or exports from your HR, credentialing or practice management systems. Tell us what you use today and we will propose the simplest workflow.',
    },
  ],
  related: [
    { label: 'Delegated credentialing', href: '/solutions/delegated-credentialing' },
    { label: 'Provider enrollment services', href: '/solutions/provider-enrollment' },
    { label: 'Credentialing for health plans', href: '/who-we-help/health-plans' },
  ],
  cta: {
    title: 'Stop fixing the same roster errors every month',
    text: 'Send us your provider count and payer list, and we will scope a roster process that keeps everyone in sync.',
  },
};

export const delegatedCredentialing: SolutionContent = {
  path: '/solutions/delegated-credentialing',
  section: 'Solutions',
  name: 'Delegated Credentialing',
  color: '#f59e0b',
  icon: '🤝',
  meta: {
    title: 'Delegated Credentialing Services',
    description:
      'Delegated credentialing support: files, committee packets, monitoring and reporting that meet health plan oversight requirements.',
  },
  h1: 'Delegated credentialing, ready for every oversight audit',
  lead:
    'A delegated credentialing agreement lets your organization credential its own providers on behalf of health plans — often getting them in-network far faster. We run the day-to-day work so you can keep the delegation and pass the audits that come with it.',
  primaryCta: 'Talk about delegation',
  highlights: [
    { title: 'Files', text: 'Complete, consistent, audit-ready' },
    { title: 'Committee', text: 'Packets prepared for review' },
    { title: 'Monitoring', text: 'Ongoing sanctions checks' },
    { title: 'Reporting', text: 'Rosters & reports to each plan' },
  ],
  problem: {
    title: 'Delegation is a privilege — and a responsibility',
    paragraphs: [
      'Health plans delegate credentialing only to organizations that can show they meet the plan’s standards, usually modeled on NCQA. That means a pre-delegation review, a written delegation agreement, regular reporting and an annual oversight audit of your files.',
      'Losing delegation sends every new provider back into each payer’s own credentialing queue. Our team keeps your program consistent — files, committee minutes, monitoring and reports — so you are ready whenever an auditor asks.',
    ],
  },
  included: {
    title: 'What is included',
    items: [
      'Initial credentialing and recredentialing files for delegated providers',
      'Committee packets and decision documentation',
      'Ongoing monitoring of sanctions, exclusions and license actions',
      'Roster and report submissions to each delegating plan',
      'Audit preparation and file pulls for oversight reviews',
      'Policy and procedure review against plan requirements',
    ],
  },
  process: {
    title: 'How we support your delegated program',
    steps: [
      { title: 'Assess', text: 'We review your delegation agreements, policies and current files against each plan’s requirements.' },
      { title: 'Operate', text: 'We credential and recredential providers, prepare committee packets and keep monitoring current.' },
      { title: 'Report', text: 'Rosters and required reports go to each delegating plan on schedule.' },
      { title: 'Audit-ready', text: 'Files are organized for oversight audits, and we help you prepare and respond.' },
    ],
  },
  faqs: [
    {
      q: 'What is delegated credentialing?',
      a: 'Delegated credentialing is an agreement in which a health plan allows a provider organization (or a vendor acting for it) to perform credentialing on the plan’s behalf. The plan keeps oversight responsibility and audits the delegate.',
    },
    {
      q: 'Who qualifies for delegated credentialing?',
      a: 'Health plans usually offer delegation to larger medical groups, health systems and independent practice associations that can show a compliant credentialing program. Each plan sets its own size and quality thresholds.',
    },
    {
      q: 'What happens in a delegation oversight audit?',
      a: 'The plan reviews your policies, a sample of credentialing and recredentialing files, committee documentation and monitoring evidence to confirm they meet the delegation agreement.',
    },
    {
      q: 'Can you help us apply for delegation?',
      a: 'Yes. We can help you organize policies and files for a pre-delegation review. Talk to us about the plans you want to delegate with.',
    },
  ],
  related: [
    { label: 'CVO credentialing & primary source verification', href: '/solutions/cvo-credentialing' },
    { label: 'Provider roster management', href: '/solutions/roster-management' },
    { label: 'Credentialing for health plans', href: '/who-we-help/health-plans' },
  ],
  cta: {
    title: 'Keep your delegation — without growing your team',
    text: 'Tell us about your delegated agreements and provider volume, and we will show you how we can help.',
  },
};

export const privileging: SolutionContent = {
  path: '/solutions/privileging',
  section: 'Solutions',
  name: 'Privileging & OPPE',
  color: '#ef4444',
  icon: '🏥',
  meta: {
    title: 'Hospital Privileging & Credentialing',
    description:
      'Hospital privileging support: applications, peer references, privilege forms, FPPE/OPPE tracking and reappointments.',
  },
  h1: 'Hospital privileging & medical staff credentialing',
  lead:
    'Appointment and reappointment applications, peer references, privilege delineation and OPPE/FPPE tracking — organized in one workflow so your medical staff office spends less time chasing paperwork.',
  primaryCta: 'Get a privileging quote',
  highlights: [
    { title: 'Appointments', text: 'Initial applications handled' },
    { title: 'References', text: 'Peer references collected' },
    { title: 'OPPE / FPPE', text: 'Evaluations tracked' },
    { title: 'Reappointment', text: 'Started before it is due' },
  ],
  problem: {
    title: 'The medical staff office is stretched thin',
    paragraphs: [
      'Every new physician and advanced practice provider needs a complete application, primary source verification, peer references and a privilege request reviewed by department chairs, the credentials committee and the board. Each step depends on someone else responding.',
      'Telehealth adds credentialing-by-proxy arrangements, and every reappointment cycle starts the process again. We take on the coordination and verification so your team can focus on committee work and quality.',
    ],
  },
  included: {
    title: 'What is included',
    items: [
      'Initial appointment and reappointment applications',
      'Primary source verification for medical staff files',
      'Peer reference requests and follow-up',
      'Privilege delineation forms by specialty',
      'FPPE and OPPE tracking and reminders',
      'Telehealth credentialing-by-proxy support',
      'Committee-ready packets for department, committee and board review',
    ],
  },
  process: {
    title: 'How privileging support works',
    steps: [
      { title: 'Application', text: 'We send the application, collect documents and check for gaps before verification begins.' },
      { title: 'Verification & references', text: 'Credentials are verified at the source and peer references are requested and followed up.' },
      { title: 'Privilege request', text: 'The provider completes the right privilege form for their specialty, ready for department review.' },
      { title: 'Committee', text: 'A complete packet goes to your department chair, credentials committee and board.' },
      { title: 'Ongoing', text: 'FPPE, OPPE and reappointment dates are tracked so nothing lapses.' },
    ],
  },
  faqs: [
    {
      q: 'What is the difference between credentialing and privileging?',
      a: 'Credentialing confirms a provider’s qualifications. Privileging decides which specific procedures and services that provider may perform at your facility, based on their training, experience and competence.',
    },
    {
      q: 'What are FPPE and OPPE?',
      a: 'Focused Professional Practice Evaluation (FPPE) is a time-limited review of a provider’s performance, typically for new privileges. Ongoing Professional Practice Evaluation (OPPE) is continuous monitoring of performance between reappointments.',
    },
    {
      q: 'How often are medical staff reappointed?',
      a: 'Reappointment cycles are set by your bylaws and accreditation requirements and are commonly every two years. We track each provider’s dates and start the process early.',
    },
    {
      q: 'Do you support telehealth privileging?',
      a: 'Yes, including credentialing-by-proxy arrangements where your facility relies on the distant-site hospital’s credentialing decisions, as permitted by your bylaws and agreements.',
    },
  ],
  related: [
    { label: 'CVO credentialing & primary source verification', href: '/solutions/cvo-credentialing' },
    { label: 'Credentialing for health systems', href: '/who-we-help/health-systems' },
    { label: 'Multi-state licensing', href: '/solutions/cross-state-licensing' },
  ],
  cta: {
    title: 'Give your medical staff office time back',
    text: 'Tell us your appointment volume and facilities, and we will scope the support you need.',
  },
};

export const crossStateLicensing: SolutionContent = {
  path: '/solutions/cross-state-licensing',
  section: 'Solutions',
  name: 'Multi-State Licensing',
  color: '#0ea5e9',
  icon: '🗺️',
  meta: {
    title: 'Multi-State Medical Licensing Services',
    description:
      'Get providers licensed in new states: state applications, IMLC and Nurse Licensure Compact support, DEA registrations and renewals.',
  },
  h1: 'Multi-state medical licensing, handled for you',
  lead:
    'State license applications, compact pathways, DEA registrations and renewals for providers who practice — or see patients by telehealth — in more than one state.',
  primaryCta: 'Get a licensing quote',
  highlights: [
    { title: 'New licenses', text: 'Applications in any state' },
    { title: 'Compacts', text: 'IMLC & Nurse Licensure Compact' },
    { title: 'DEA', text: 'State-by-state registrations' },
    { title: 'Renewals', text: 'Tracked before they expire' },
  ],
  problem: {
    title: 'Every state board does it differently',
    paragraphs: [
      'Telehealth and multi-state practice usually require a license in the state where the patient is located. Each board has its own application, fingerprinting, verification and continuing education rules — and its own processing time.',
      'Compacts help: the Interstate Medical Licensure Compact offers an expedited pathway for eligible physicians, and the Nurse Licensure Compact lets eligible nurses practice in participating states with one multistate license. Knowing which path is fastest for each provider is half the work. We handle the rest.',
    ],
  },
  included: {
    title: 'What is included',
    items: [
      'State license eligibility review and pathway selection',
      'Full state board applications and supporting documents',
      'Interstate Medical Licensure Compact (IMLC) applications',
      'Nurse Licensure Compact and APRN licensing support',
      'DEA and state controlled substance registrations',
      'Renewal, CME and expiration tracking for every license',
    ],
  },
  process: {
    title: 'How multi-state licensing works',
    steps: [
      { title: 'Plan', text: 'We review each provider’s eligibility and pick the fastest route — compact or full application — for every target state.' },
      { title: 'Prepare', text: 'We complete applications, coordinate fingerprints and request verifications from schools and other boards.' },
      { title: 'Follow up', text: 'We track each board’s requests and respond quickly so applications keep moving.' },
      { title: 'Maintain', text: 'Renewals, CME requirements and registrations are tracked and started well before deadlines.' },
    ],
  },
  faqs: [
    {
      q: 'Do I need a license in the patient’s state for telehealth?',
      a: 'In most cases, yes — the license generally needs to be in the state where the patient is located at the time of the visit. Some states have exceptions or special telehealth registrations. We confirm the rules for each state you plan to serve.',
    },
    {
      q: 'What is the Interstate Medical Licensure Compact?',
      a: 'The IMLC is an agreement among participating states that gives eligible physicians an expedited pathway to licensure in multiple member states. Each state still issues its own license.',
    },
    {
      q: 'How long does a new state license take?',
      a: 'It varies widely by state, profession and how quickly verifications arrive — from a few weeks to several months. Starting early and submitting a complete application are what make the difference.',
    },
    {
      q: 'Do you track license renewals?',
      a: 'Yes. We track expiration dates, continuing education requirements and DEA registrations, and start renewals early so no provider has to stop seeing patients.',
    },
  ],
  related: [
    { label: 'Credentialing for telehealth & digital health', href: '/who-we-help/digital-health' },
    { label: 'Provider enrollment services', href: '/solutions/provider-enrollment' },
    { label: 'Hospital privileging', href: '/solutions/privileging' },
  ],
  cta: {
    title: 'Expand into new states without the paperwork',
    text: 'Tell us which providers and states you need, and we will map out the fastest path for each.',
  },
};

export const SOLUTIONS = [providerEnrollment, cvoCredentialing, rosterManagement, delegatedCredentialing, privileging, crossStateLicensing];
