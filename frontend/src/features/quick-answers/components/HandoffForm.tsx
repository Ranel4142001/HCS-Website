'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import TurnstileWidget from '@/shared/components/ui/TurnstileWidget';
import { envConfig } from '@/shared/config/env.config';

type Role = 'individual' | 'group' | 'enterprise';

const ROLES: { value: Role; label: string }[] = [
  { value: 'individual', label: 'Individual clinician' },
  { value: 'group', label: 'Group or staffing agency' },
  { value: 'enterprise', label: 'Health system, hospital and surgery center' },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
  const [role, setRole] = useState<Role>('individual');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileReset, setTurnstileReset] = useState(0);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const shownAtRef = useRef(0);
  const siteKey = envConfig.turnstileSiteKey;

  useEffect(() => {
    shownAtRef.current = performance.now();
    nameRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    if (name.trim().length < 2) return setError('Please enter your full name.');
    if (!EMAIL_PATTERN.test(email.trim())) return setError('Please enter a valid email address.');
    if (siteKey && !turnstileToken) return setError("Please wait a moment while we confirm you're not a bot, then try again.");

    const payload = {
      role,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: buildMessage(questions),
      website: honeypotRef.current?.value ?? '',
      // The event's timeStamp and performance.now() share the same clock.
      elapsedMs: Math.max(0, Math.round(e.timeStamp - shownAtRef.current)),
      page: window.location.pathname,
      turnstileToken: turnstileToken || undefined,
      origin: 'chat' as const,
    };

    setSending(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
      if (!res.ok || !result?.success) throw new Error(result?.message || 'Something went wrong. Please try again.');
      onSent(payload.name);
    } catch (err) {
      setError(err instanceof Error && err.message !== 'Failed to fetch' ? err.message : 'Could not reach the server. Please try again.');
      setTurnstileReset((n) => n + 1);
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
        {ROLES.map((r) => (
          <button
            key={r.value}
            type="button"
            role="radio"
            aria-checked={role === r.value}
            className={`ai-preset-chip ${role === r.value ? 'is-selected' : ''}`}
            onClick={() => setRole(r.value)}
          >
            {r.label}
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

      {/* Honeypot: off-screen and skipped by keyboards and screen readers; only bots fill it in. */}
      <div className="qa-hp" aria-hidden="true">
        <label htmlFor="qaWebsite">Website</label>
        <input id="qaWebsite" name="website" type="text" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
      </div>

      {siteKey && <TurnstileWidget siteKey={siteKey} onToken={setTurnstileToken} resetSignal={turnstileReset} />}

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
