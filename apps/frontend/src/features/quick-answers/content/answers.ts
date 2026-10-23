import type { AnswerRule, ChatMessage, QuickAnswer } from '../types';

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'ai',
    text: 'Hi! Pick a topic below or type a question for a quick answer about credentialing and payer enrollment. For anything specific to your practice, a specialist is one click away.',
    time: 'Just now',
  },
];

export const PRESET_QUERIES = [
  { label: '📋 Required Documents', query: 'What documents do I need to start credentialing?' },
  { label: '⏱️ How long it takes', query: 'How long does credentialing take?' },
  { label: '🔍 Credentialing vs Enrollment', query: 'What is the difference between credentialing and enrollment?' },
  { label: '🛡️ Continuous Monitoring', query: 'How does continuous sanctions monitoring work?' },
];

// Checked in order: the first rule with a matching keyword wins.
export const ANSWER_RULES: AnswerRule[] = [
  {
    keywords: ['document', 'requirement', 'need'],
    answer: {
      reply: 'Most payers ask for: NPI, state license, DEA and state controlled substance registrations (if applicable), board certification, a CV with month/year dates and gap explanations, malpractice insurance certificate, education certificates and an up-to-date CAQH ProView profile.',
      actionLink: { text: 'Start Credentialing Intake →', href: '#contact' },
    },
  },
  {
    keywords: ['turnaround', 'how fast', 'time', 'duration'],
    answer: {
      reply: 'Commercial payer credentialing commonly takes 90 to 120 days, and Medicare and Medicaid timelines vary by contractor and state. Complete applications and steady follow-up are what keep it moving — that is our job. Try the estimator for your situation.',
      actionLink: { text: 'Calculate Your Turnaround →', href: '#estimator' },
    },
  },
  {
    keywords: ['enrollment', 'difference', 'vs'],
    answer: {
      reply: 'Credentialing verifies a clinician’s clinical qualifications and primary sources. Payer Enrollment contracts that clinician with specific health plans (Medicare, Medicaid, BCBS, Aetna, etc.) so they can bill in-network.',
      actionLink: { text: 'Explore Our Services →', href: '#workflows' },
    },
  },
  {
    keywords: ['monitor', 'sanction', 'oig', 'npdb'],
    answer: {
      reply: 'Between credentialing cycles we check providers against sanctions and exclusion sources such as the OIG exclusion list, SAM.gov and state Medicaid lists, and track license, DEA and certification expirations — so you hear about issues early.',
      actionLink: { text: 'Get a Quote →', href: '#contact' },
    },
  },
  {
    keywords: ['status', 'track', 'npi'],
    answer: {
      reply: 'Clients see the status of every application in their dashboard. You can try a demo of the tracker with a sample provider on our homepage.',
      actionLink: { text: 'Try the Tracker Demo →', href: '#tracker' },
    },
  },
];

/** Picks the canned answer for a question; falls back to an offer to talk to a specialist. */
export function findAnswer(question: string): QuickAnswer {
  const lower = question.toLowerCase();
  const rule = ANSWER_RULES.find((r) => r.keywords.some((k) => lower.includes(k)));
  return rule
    ? rule.answer
    : {
        reply: `Thank you for asking about "${question}". Our credentialing specialists can answer that for your specific situation. Would you like a free quote and timeline?`,
        actionLink: { text: 'Speak With A Specialist →', href: '#contact' },
      };
}
