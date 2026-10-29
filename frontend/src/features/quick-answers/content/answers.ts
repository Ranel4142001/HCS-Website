import type { AnswerRule, ChatMessage, QuickAnswer } from '../types';

// Facts here must match the FAQ (features/faq/content/faq.ts) and pricing (features/pricing/content/plans.ts).
// The widget appears on every page, so links are full paths ('/#estimator' for homepage sections).

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome',
    sender: 'ai',
    text: 'Hi! Pick a topic or type a question about provider credentialing. For anything specific to your practice, a credentialing specialist is one click away.',
    time: 'Just now',
  },
];

export const PRESET_QUERIES = [
  { label: 'Required documents', query: 'What documents are needed for credentialing?' },
  { label: 'How long it takes', query: 'How long does credentialing take?' },
  { label: 'Cost', query: 'How much does credentialing cost?' },
  { label: 'CAQH / DataSpring', query: 'Why does CAQH matter?' },
  { label: 'Recredentialing', query: 'How often is recredentialing needed?' },
  { label: 'Ongoing monitoring', query: 'How does ongoing monitoring work?' },
];

// Checked in order: the first rule with a matching keyword wins, so specific topics come before broad ones.
export const ANSWER_RULES: AnswerRule[] = [
  {
    keywords: ['cost', 'price', 'pricing', 'fee', 'how much', 'charge', 'afford', 'quote'],
    answer: {
      reply: 'Credentialing for an individual clinician starts at $599 per assignment. Groups and enterprises get custom pricing based on provider count and services. A free quote gives you the exact price.',
      actionLink: { text: 'See pricing →', href: '/pricing' },
    },
  },
  {
    keywords: ['caqh', 'dataspring', 'proview', 'attest'],
    answer: {
      reply: 'CAQH ProView is the profile most commercial health plans pull credentialing data from. CAQH became DataSpring in June 2026. Keep the profile complete and re-attest every 120 days, or applications stall. We keep it current for you.',
      actionLink: { text: 'Get a free quote →', href: '/contact' },
    },
  },
  {
    keywords: ['recredential', 'reappoint', 're-credential'],
    answer: {
      reply: 'Under NCQA standards, providers are recredentialed at least every 36 months. Hospitals reappoint on the cycle set by their bylaws, and CAQH profiles need re-attesting every 120 days. We track all of these dates for you.',
      actionLink: { text: 'Get a free quote →', href: '/contact' },
    },
  },
  {
    keywords: ['how long', 'turnaround', 'how fast', 'how quick', 'time', 'duration', 'days', 'weeks', 'months', 'delay', 'slow'],
    answer: {
      reply: 'Health plan credentialing commonly takes 90 to 120 days. Most delays come from incomplete applications and slow source responses, so we check every file up front and follow up with each source on a set schedule.',
      actionLink: { text: 'Estimate your timeline →', href: '/#estimator' },
    },
  },
  {
    keywords: ['cvo', 'credentials verification organization', 'credential verification organization'],
    answer: {
      reply: 'A Credentials Verification Organization (CVO) verifies providers’ credentials on behalf of hospitals, medical groups and health plans. It performs primary source verification, while your organization keeps the final credentialing decision.',
      actionLink: { text: 'Read the credentialing FAQ →', href: '/faq' },
    },
  },
  {
    keywords: ['document', 'paperwork', 'requirement', 'required', 'checklist', 'what do i need', 'what do we need', 'cv', 'resume'],
    answer: {
      reply: 'Usually: an NPI, state license, DEA registration (if applicable), board certification, a CV with month/year dates, malpractice insurance and claims history, education certificates and a current CAQH ProView profile.',
      actionLink: { text: 'Start your credentialing intake →', href: '/contact' },
    },
  },
  {
    keywords: ['primary source', 'psv', 'verif'],
    answer: {
      reply: 'Primary source verification confirms each credential directly with the organization that issued it, such as the state medical board, instead of relying on copies from the provider. Every file we build is verified this way.',
      actionLink: { text: 'See how we work →', href: '/#workflows' },
    },
  },
  {
    keywords: ['monitor', 'sanction', 'exclusion', 'oig', 'sam.gov', 'npdb', 'expir', 'lapse', 'renew'],
    answer: {
      reply: 'Between cycles, we check providers against sanction and exclusion lists such as OIG and SAM.gov. We also track license, DEA and certification expiry dates and alert you before anything lapses.',
      actionLink: { text: 'Get a free quote →', href: '/contact' },
    },
  },
  {
    keywords: ['in progress', 'take over', 'takeover', 'already started', 'switch', 'existing file'],
    answer: {
      reply: 'Yes. We review where each file stands and take over the remaining verification and follow-up, so no work already done is lost.',
      actionLink: { text: 'Talk to a specialist →', href: '/contact' },
    },
  },
  {
    keywords: ['outsourc', 'in-house', 'in house', 'why use', 'why should'],
    answer: {
      reply: 'In many practices, credentialing falls on one or two busy staff members. Outsourcing gives you a dedicated team, consistent follow-up and a clear status for every provider, without hiring more staff.',
      actionLink: { text: 'Explore our services →', href: '/services' },
    },
  },
  {
    keywords: ['hipaa', 'secur', 'privacy', 'confidential', 'safe'],
    answer: {
      reply: 'Provider information is sensitive. We handle it with HIPAA-aligned safeguards, role-based access and an audit trail that cannot be edited.',
      actionLink: { text: 'About HealthCredSTAT →', href: '/about' },
    },
  },
  {
    keywords: ['status', 'track', 'dashboard', 'progress', 'update'],
    answer: {
      reply: 'You get a clear status for every provider file: what was verified, what is outstanding and what happens next. A sample dashboard is shown on our homepage.',
      actionLink: { text: 'See the dashboard →', href: '/#rtv' },
    },
  },
  {
    keywords: ['what is credentialing', 'what is medical credentialing', 'what is provider credentialing', 'what does credentialing', 'credentialing mean'],
    answer: {
      reply: 'Credentialing confirms a provider is qualified to treat patients. It checks their license, education, training, board certification, work history, malpractice history and sanctions. Hospitals, medical groups and health plans all require it.',
      actionLink: { text: 'Read the credentialing guides →', href: '/guides' },
    },
  },
  {
    keywords: ['who do you', 'telehealth', 'digital health', 'hospital', 'health system', 'health plan', 'payer', 'medical group', 'group practice', 'mso', 'clinic', 'locum', 'travel', 'staffing'],
    answer: {
      reply: 'We work with individual clinicians (including locum tenens and travel professionals), medical groups and MSOs, hospitals and health systems, health plans, and telehealth and digital health companies.',
      actionLink: { text: 'See who we help →', href: '/about' },
    },
  },
  {
    keywords: ['human', 'person', 'someone', 'specialist', 'talk', 'speak', 'call', 'phone', 'email', 'contact'],
    answer: {
      reply: 'Happy to connect you. Share a few details about your providers and a credentialing specialist will reply with a quote and a realistic timeline.',
      actionLink: { text: 'Contact a specialist →', href: '/contact' },
    },
  },
  {
    keywords: ['hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'thank'],
    answer: {
      reply: 'Hello! Ask about documents, timelines, cost, CAQH, recredentialing or monitoring, or pick a topic above.',
      actionLink: { text: 'Read the credentialing FAQ →', href: '/faq' },
    },
  },
];

const FALLBACK: QuickAnswer = {
  reply: 'That one is best answered for your specific situation. A credentialing specialist can give you a straight answer, along with a free quote and timeline.',
  actionLink: { text: 'Talk to a specialist →', href: '/contact' },
};

/** True when the keyword appears at the start of a word, so 'verif' matches "verification" but 'time' skips "sometimes". */
function matchesKeyword(text: string, keyword: string): boolean {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-z0-9])${escaped}`).test(text);
}

/** Picks the answer for a question; falls back to an offer to talk to a specialist. */
export function findAnswer(question: string): QuickAnswer {
  const text = question.toLowerCase().replace(/[’']/g, "'");
  const rule = ANSWER_RULES.find((r) => r.keywords.some((k) => matchesKeyword(text, k)));
  return rule ? rule.answer : FALLBACK;
}
