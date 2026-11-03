import type { ChatAction, ChatMessage, KnowledgeEntry, QuickAnswer, Suggestion } from '../types';
import { rankEntries } from '../lib/matcher';

// Facts here must match the FAQ (features/faq/content/faq.ts), the guides (features/guides/content/guides.ts)
// and pricing (features/pricing/content/plans.ts). The widget appears on every page, so links are full paths
// ('/#estimator' for homepage sections).

const SPECIALIST: ChatAction = { text: 'Talk to a specialist →', handoff: true };
const QUOTE: ChatAction = { text: 'Get a free quote →', handoff: true };

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome',
    sender: 'ai',
    text: 'Hi! Pick a topic or type a question about provider credentialing. For anything specific to your practice, a credentialing specialist is one click away.',
    time: 'Just now',
    action: SPECIALIST,
  },
];

export const PRESET_QUERIES: Suggestion[] = [
  { label: 'Required documents', question: 'What documents are needed for credentialing?' },
  { label: 'How long it takes', question: 'How long does credentialing take?' },
  { label: 'Cost', question: 'How much does credentialing cost?' },
  { label: 'CAQH / DataSpring', question: 'Why does CAQH matter?' },
  { label: 'Recredentialing', question: 'How often is recredentialing needed?' },
  { label: 'Ongoing monitoring', question: 'How does ongoing monitoring work?' },
];

/** Every topic the chat can answer. When scores tie, the earlier entry wins, so specific topics come first. */
export const KNOWLEDGE: KnowledgeEntry[] = [
  {
    id: 'caqh-free',
    label: 'Is CAQH free?',
    question: 'Does CAQH ProView cost anything for providers?',
    keywords: ['caqh', 'proview', 'dataspring', 'free', 'cost'],
    requires: [['caqh', 'proview', 'dataspring'], ['free', 'cost']],
    answer: {
      reply: 'No. CAQH ProView (now DataSpring) is free for providers; participating health plans fund it. A CAQH profile is not the same as being credentialed: each health plan still verifies the details and approves the provider itself.',
      action: { text: 'Read the CAQH guide →', href: '/guides/caqh-proview-guide' },
    },
  },
  {
    id: 'cost',
    label: 'Cost',
    question: 'How much does credentialing cost?',
    keywords: ['cost', 'how much', 'charge', 'afford', 'quote', '599'],
    answer: {
      reply: 'Credentialing for an individual clinician starts at $599 per assignment. Groups and enterprises get custom pricing based on provider count and services. A free quote gives you the exact price.',
      action: { text: 'See pricing →', href: '/pricing' },
    },
  },
  {
    id: 'caqh',
    label: 'CAQH / DataSpring',
    question: 'Why does CAQH matter?',
    keywords: ['caqh', 'dataspring', 'proview', 'attest', 're-attest'],
    answer: {
      reply: 'CAQH ProView is the profile most commercial health plans pull credentialing data from. CAQH became DataSpring in June 2026. Keep the profile complete and re-attest every 120 days, or applications stall. We keep it current for you.',
      action: QUOTE,
    },
  },
  {
    id: 'missed-recredentialing',
    label: 'Missed recredentialing',
    question: 'What happens if a provider misses recredentialing?',
    keywords: ['recredential', 're-credential', 'miss', 'late', 'overdue', 'forgot'],
    requires: [['recredential', 're-credential'], ['miss', 'late', 'overdue', 'forgot']],
    answer: {
      reply: 'The health plan can end the provider’s participation, and rejoining usually means a new initial application. We track every recredentialing date so nothing is missed.',
      action: { text: 'Read about recredentialing →', href: '/guides/recredentialing-requirements' },
    },
  },
  {
    id: 'recredentialing',
    label: 'Recredentialing',
    question: 'How often is recredentialing needed?',
    keywords: ['recredential', 'reappoint', 're-credential', 'how often', 'year', 'cycle', 'every three years', '36 months'],
    answer: {
      reply: 'Under NCQA standards, providers are recredentialed at least every 36 months. Hospitals reappoint on the cycle set by their bylaws, and CAQH profiles need re-attesting every 120 days. We track all of these dates for you.',
      action: QUOTE,
    },
  },
  {
    id: 'speed-up',
    label: 'Speeding up a review',
    question: 'Can you speed up a health plan’s review?',
    keywords: ['speed up', 'expedite', 'rush', 'shorten', 'urgent', 'asap'],
    answer: {
      reply: 'No one can speed up a health plan’s internal review. What we can do is avoid rejections and keep every application moving, which is where most time is lost.',
      action: { text: 'Estimate your timeline →', href: '/#estimator' },
    },
  },
  {
    id: 'time',
    label: 'How long it takes',
    question: 'How long does credentialing take?',
    keywords: ['time', 'how long', 'how fast', 'how quick', 'duration', 'days', 'weeks', 'months', 'delay', 'slow', 'take'],
    answer: {
      reply: 'Health plan credentialing commonly takes 90 to 120 days. Most delays come from incomplete applications and slow source responses, so we check every file up front and follow up with each source on a set schedule.',
      action: { text: 'Estimate your timeline →', href: '/#estimator' },
    },
  },
  {
    id: 'see-patients',
    label: 'Seeing patients while pending',
    question: 'Can a provider see patients while credentialing is pending?',
    keywords: ['see patients', 'seeing patients', 'treat patients', 'pending', 'before credentialed', 'out-of-network', 'out of network', 'self-pay', 'retroactive', 'in-network', 'in network'],
    answer: {
      reply: 'Usually not as an in-network provider; until then, patients are seen only as out-of-network or self-pay. Some health plans, including Medicare, allow limited retroactive dates, so confirm with each plan first.',
      action: { text: 'How to get credentialed with insurers →', href: '/guides/how-to-get-credentialed-with-insurance-companies' },
    },
  },
  {
    id: 'enrollment',
    label: 'Credentialing vs. enrollment',
    question: 'What is the difference between credentialing and enrollment?',
    keywords: ['enrollment', 'enroll', 'difference between', 'versus', 'vs'],
    answer: {
      reply: 'The terms are often used interchangeably. Strictly, credentialing verifies a provider’s qualifications, while enrollment sets the provider up with a plan such as Medicare.',
      action: { text: 'How to get credentialed with insurers →', href: '/guides/how-to-get-credentialed-with-insurance-companies' },
    },
  },
  {
    id: 'cvo',
    label: 'What is a CVO?',
    question: 'What is a Credentials Verification Organization?',
    keywords: ['cvo', 'credentials verification organization', 'credential verification organization'],
    answer: {
      reply: 'A Credentials Verification Organization (CVO) verifies providers’ credentials on behalf of hospitals, medical groups and health plans. It performs primary source verification, while your organization keeps the final credentialing decision.',
      action: { text: 'Read the credentialing FAQ →', href: '/faq' },
    },
  },
  {
    id: 'monitoring',
    label: 'Ongoing monitoring',
    question: 'How does ongoing monitoring work?',
    keywords: ['monitor', 'monitoring', 'sanction', 'exclusion', 'oig', 'sam.gov', 'npdb', 'expir', 'lapse', 'renew'],
    answer: {
      reply: 'Between cycles, we check providers against sanction and exclusion lists such as OIG and SAM.gov. We also track license, DEA and certification expiry dates and alert you before anything lapses.',
      action: QUOTE,
    },
  },
  {
    id: 'documents',
    label: 'Required documents',
    question: 'What documents are needed for credentialing?',
    keywords: ['document', 'requirement', 'required', 'checklist', 'what do i need', 'what do we need', 'cv', 'resume', 'npi', 'license', 'dea', 'malpractice'],
    answer: {
      reply: 'Usually: an NPI, state license, DEA registration (if applicable), board certification, a CV with month/year dates, malpractice insurance and claims history, education certificates and a current CAQH ProView profile.',
      action: { text: 'Start your credentialing intake →', href: '/contact' },
    },
  },
  {
    id: 'psv',
    label: 'Primary source verification',
    question: 'What is primary source verification?',
    keywords: ['primary source', 'psv', 'verif'],
    answer: {
      reply: 'Primary source verification confirms each credential directly with the organization that issued it, such as the state medical board, instead of relying on copies from the provider. Every file we build is verified this way.',
      action: { text: 'See how we work →', href: '/#workflows' },
    },
  },
  {
    id: 'take-over',
    label: 'Taking over files in progress',
    question: 'Can you take over credentialing files already in progress?',
    keywords: ['in progress', 'take over', 'takeover', 'already started', 'switch', 'existing file', 'transfer'],
    answer: {
      reply: 'Yes. We review where each file stands and take over the remaining verification and follow-up, so no work already done is lost.',
      action: SPECIALIST,
    },
  },
  {
    id: 'outsourcing',
    label: 'Why outsource',
    question: 'Why outsource credentialing instead of doing it in-house?',
    keywords: ['outsourc', 'in-house', 'in house', 'why use', 'why should', 'benefit', 'advantage'],
    answer: {
      reply: 'In many practices, credentialing falls on one or two busy staff members. Outsourcing gives you a dedicated team, consistent follow-up and a clear status for every provider, without hiring more staff.',
      action: { text: 'Explore our services →', href: '/services' },
    },
  },
  {
    id: 'security',
    label: 'Data security',
    question: 'How do you protect provider data?',
    keywords: ['hipaa', 'secur', 'privacy', 'confidential', 'safe', 'protect', 'data'],
    answer: {
      reply: 'Provider information is sensitive. We handle it with HIPAA-aligned safeguards, role-based access and an audit trail that cannot be edited.',
      action: { text: 'About HealthCredSTAT →', href: '/about' },
    },
  },
  {
    id: 'status',
    label: 'Tracking status',
    question: 'How do I see the status of each file?',
    keywords: ['status', 'track', 'dashboard', 'progress', 'update', 'portal'],
    answer: {
      reply: 'You get a clear status for every provider file: what was verified, what is outstanding and what happens next. A sample dashboard is shown on our homepage.',
      action: { text: 'See the dashboard →', href: '/#rtv' },
    },
  },
  {
    id: 'plan-individual',
    label: 'Individual clinician plan',
    question: 'What is included for an individual clinician?',
    keywords: ['individual', 'included', 'include', 'assignment', 'solo', 'myself'],
    answer: {
      reply: 'The Individual clinician plan ($599 per assignment) includes full credentialing management, a guided provider portal checklist, email status updates, deadline tracking and renewals, and communication with your recruiter handled for you.',
      action: { text: 'See pricing →', href: '/pricing' },
    },
  },
  {
    id: 'plan-group',
    label: 'Group practice plan',
    question: 'What is included for a group practice or staffing agency?',
    keywords: ['group', 'clinic', 'staffing', 'agency', 'account manager', 'bulk', 'csv', 'volume', 'multiple providers'],
    answer: {
      reply: 'For clinics and staffing agencies, the Group practice plan adds a dedicated account manager, a team console with role-based access, bulk provider import by CSV, monthly compliance reports and priority turnaround. Pricing is based on volume.',
      action: QUOTE,
    },
  },
  {
    id: 'plan-enterprise',
    label: 'Enterprise plan',
    question: 'What do you offer health systems and large networks?',
    keywords: ['enterprise', 'health system', 'large network', 'hospital', 'audit trail', 'compliance team', 'ehr', 'integration'],
    answer: {
      reply: 'For health systems and large networks, the Enterprise plan builds on the Group plan with an audit trail that cannot be edited and a dedicated compliance team, with pricing tailored to your network.',
      action: SPECIALIST,
    },
  },
  {
    id: 'what-is',
    label: 'What is credentialing?',
    question: 'What is medical credentialing?',
    keywords: ['what is credentialing', 'what is medical credentialing', 'what is provider credentialing', 'what does credentialing', 'credentialing mean', 'define', 'definition', 'meaning'],
    answer: {
      reply: 'Credentialing confirms a provider is qualified to treat patients. It checks their license, education, training, board certification, work history, malpractice history and sanctions. Hospitals, medical groups and health plans all require it.',
      action: { text: 'Read the credentialing guides →', href: '/guides' },
    },
  },
  {
    id: 'who',
    label: 'Who we help',
    question: 'Who do you work with?',
    keywords: ['who do you', 'telehealth', 'digital health', 'health plan', 'insurance', 'medical group', 'group practice', 'mso', 'locum', 'travel', 'nurse', 'physician', 'doctor'],
    answer: {
      reply: 'We work with individual clinicians (including locum tenens and travel professionals), medical groups and MSOs, hospitals and health systems, health plans, and telehealth and digital health companies.',
      action: { text: 'See who we help →', href: '/about' },
    },
  },
  {
    id: 'specialist',
    label: 'Talk to a specialist',
    question: 'Can I talk to a specialist?',
    keywords: ['specialist', 'someone', 'talk', 'speak', 'call', 'phone', 'email', 'contact', 'reach', 'meeting'],
    answer: {
      reply: 'Happy to connect you. Share a few details and a credentialing specialist will reply with a quote and a realistic timeline.',
      action: SPECIALIST,
    },
  },
  {
    id: 'hello',
    label: 'Hello',
    question: 'Hello',
    keywords: ['hello', 'good morning', 'good afternoon', 'good evening', 'thank'],
    answer: {
      reply: 'Hello! Ask about documents, timelines, cost, CAQH, recredentialing or monitoring, or pick a topic below.',
      action: { text: 'Read the credentialing FAQ →', href: '/faq' },
    },
  },
];

const FALLBACK: QuickAnswer = {
  reply: 'That one is best answered for your specific situation. A credentialing specialist can give you a straight answer, along with a free quote and timeline.',
  action: SPECIALIST,
};

export interface ChatReply extends QuickAnswer {
  suggestions?: Suggestion[];
  suggestionsLabel?: string;
}

const toSuggestion = (entry: KnowledgeEntry): Suggestion => ({ label: entry.label, question: entry.question });

/**
 * Answers a question from the knowledge base:
 * - a confident best match is answered, with the runner-up offered when it scored nearly as well;
 * - a match found only through typos becomes "Did you mean…?" buttons;
 * - no match offers a specialist.
 */
export function answerQuestion(question: string): ChatReply {
  const ranked = rankEntries(question, KNOWLEDGE);
  if (!ranked.length) return FALLBACK;

  const [best, second] = ranked;
  if (!best.confident) {
    return {
      reply: 'I’m not completely sure what you mean. Did you mean one of these?',
      action: SPECIALIST,
      suggestions: ranked.slice(0, 3).map((r) => toSuggestion(r.entry)),
    };
  }
  const related = second && second.confident && second.score >= best.score * 0.75 ? [toSuggestion(second.entry)] : undefined;
  return { ...best.entry.answer, suggestions: related, suggestionsLabel: related ? 'Related:' : undefined };
}
