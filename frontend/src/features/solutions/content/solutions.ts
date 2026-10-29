import type { SolutionContent } from '../types';

/**
 * Copy for /solutions/* pages.
 * Keep claims factual: describe the process and what we do, and add performance
 * numbers only once they are measured and approved.
 */

export const cvoCredentialing: SolutionContent = {
  path: '/solutions/cvo-credentialing',
  section: 'Services',
  name: 'Provider credentialing',
  color: '#10c1bb',
  icon: 'shield',
  meta: {
    title: 'Provider Credentialing & Verification',
    description:
      'Provider credentialing built on primary source verification and NCQA standards: committee-ready files, recredentialing and ongoing monitoring.',
  },
  h1: 'Provider credentialing & primary source verification',
  lead:
    'Committee-ready credentialing files built on primary source verification and NCQA credentialing standards, so your committee can approve providers with confidence and your files hold up in an audit.',
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
      'A credentialing file is only as good as its weakest verification. Missing dates, outdated sources or an unexplained gap in work history can stall a committee decision or become a finding in your next audit.',
      'Our credentialing team verifies each element directly with the primary source, records when and how it was verified, and assembles a consistent, committee-ready file. You keep the decision; we do the verification work behind it.',
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
  checklist: {
    title: 'What primary source verification covers',
    intro: 'Each credential is confirmed directly with the organization that issued it, not from copies the provider supplies:',
    items: [
      'State medical or professional licenses, including any disciplinary actions',
      'DEA registration and state controlled-substance registrations',
      'Board certification status',
      'Education and training: professional school, residency and fellowship',
      'Work history, with gaps explained',
      'Malpractice insurance and claims history',
      'National Practitioner Data Bank (NPDB) query',
      'OIG LEIE, SAM.gov and state Medicaid exclusion lists, and the Medicare opt-out list',
    ],
  },
  faqs: [
    {
      q: 'What is a Credentials Verification Organization (CVO)?',
      a: 'A CVO is an organization that verifies healthcare practitioners’ credentials on behalf of hospitals, medical groups and health plans. The organization that hires the CVO keeps the final credentialing decision.',
    },
    {
      q: 'What is primary source verification?',
      a: 'It means confirming a credential directly with the organization that issued it, such as the state medical board. A copy from the provider is not enough.',
    },
    {
      q: 'How often do providers need to be recredentialed?',
      a: 'Under NCQA standards, providers are recredentialed at least every 36 months. Hospitals reappoint medical staff on the cycle set by their bylaws and accreditation requirements. We track both.',
    },
    {
      q: 'Is HealthCredSTAT an NCQA-certified CVO?',
      a: 'We follow NCQA credentialing standards in our verification process. If your organization requires a CVO with formal NCQA certification, ask us about your specific requirements before you start.',
    },
    {
      q: 'What is monitored between credentialing cycles?',
      a: 'Licenses, DEA registrations and malpractice coverage are re-checked when they expire, and exclusion and sanctions lists are typically monitored monthly.',
    },
  ],
  related: [
    { label: 'Recredentialing requirements', href: '/guides/recredentialing-requirements' },
    { label: 'CAQH ProView guide', href: '/guides/caqh-proview-guide' },
    { label: 'Credentialing for medical groups & MSOs', href: '/who-we-help/provider-groups' },
  ],
  cta: {
    title: 'Give your committee files it can trust',
    text: 'Tell us your volume and standards, and we will show you how our verification process fits.',
  },
};

export const SOLUTIONS = [cvoCredentialing];
