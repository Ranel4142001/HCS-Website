'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SmsConsent from '@/shared/components/forms/SmsConsent';
import { useSpamSignals } from '@/shared/components/forms/useSpamSignals';
import { PRACTICE_TYPES, type PracticeType } from '@/shared/lib/contact/practice-types';
import { submitContactForm } from '@/shared/lib/contact/submit-contact';

const MAX_MESSAGE_LENGTH = 2000;

/** The visitor's chat questions, so the specialist sees what they already asked. */
function buildMessage(questions: string[]): string {
  if (!questions.length) return 'Asked to talk to a specialist from the website chat.';
  const lines = questions.slice(-8).map((q) => `- ${q}`);
  return `Questions asked in the website chat:\n${lines.join('\n')}`.slice(0, MAX_MESSAGE_LENGTH);
}

interface HandoffFormProps {
  /** What the visitor typed in the chat so far. */
  questions: string[];
  onSent: (name: string) => void;
  onCancel: () => void;
}

/**
 * "Talk to a specialist" inside the chat. Sends the same request as the contact form (/api/contact), so
 * the lead lands on the Monday board with the usual spam, repeat and Turnstile checks, marked as from the chat.
 */
export function HandoffForm({ questions, onSent, onCancel }: HandoffFormProps) {
  const [role, setRole] = useState<PracticeType>('individual');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [smsConsent, setSmsConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const spam = useSpamSignals('qaWebsite');
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    // Same rules as the contact form, so the server never refuses what the chat accepted. Loaded on submit,
    // like the contact form's, to keep the validation library out of the chat's first load.
    const { contactFormRules } = await import('@/shared/lib/contact/contact.schema');
    const parsed = contactFormRules.safeParse({
      role,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      smsConsent,
      message: buildMessage(questions),
    });
    if (!parsed.success) return setError(parsed.error.issues[0].message);
    if (!spam.ready) return setError("Please wait a moment while we confirm you're not a bot, then try again.");
    const meta = { ...spam.meta(e), origin: 'chat' as const };

    setSending(true);
    setError(null);
    try {
      await submitContactForm(parsed.data, meta);
      onSent(parsed.data.name);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      spam.resetTurnstile();
      setSending(false);
    }
  };

  return (
    <form className="qa-handoff" onSubmit={handleSubmit} noValidate aria-label="Talk to a specialist">
      <div className="qa-handoff-head">
        <strong>Talk to a credentialing specialist</strong>
        <span>We’ll reply by email, usually within 1 business day.</span>
      </div>

      <div className="qa-handoff-roles" role="radiogroup" aria-label="Practice type">
        {(Object.keys(PRACTICE_TYPES) as PracticeType[]).map((value) => (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={role === value}
            className={`ai-preset-chip ${role === value ? 'is-selected' : ''}`}
            onClick={() => setRole(value)}
          >
            {PRACTICE_TYPES[value]}
          </button>
        ))}
      </div>

      <label className="qa-handoff-field">
        <span>Full name</span>
        <input ref={nameRef} type="text" autoComplete="name" maxLength={100} value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="qa-handoff-field">
        <span>Email</span>
        <input type="email" autoComplete="email" maxLength={254} value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="qa-handoff-field">
        <span>Phone (optional)</span>
        <input type="tel" autoComplete="tel" maxLength={30} value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <SmsConsent id="qaSmsConsent" className="qa-sms-consent" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} />

      {spam.honeypot}

      {spam.turnstile}

      <p className="qa-handoff-note">
        Please don’t include patient or other health information here. See our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      {error && (
        <p className="qa-handoff-error" role="alert">
          {error}
        </p>
      )}

      <div className="qa-handoff-actions">
        <button type="button" className="qa-handoff-cancel" onClick={onCancel} disabled={sending}>
          Back to questions
        </button>
        <button type="submit" className="qa-handoff-send" disabled={sending}>
          {sending ? 'Sending…' : 'Send to a specialist'}
        </button>
      </div>
    </form>
  );
}

export default HandoffForm;
