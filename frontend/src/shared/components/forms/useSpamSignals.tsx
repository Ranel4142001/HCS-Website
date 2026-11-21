'use client';

import React, { useEffect, useRef, useState } from 'react';
import TurnstileWidget from '@/shared/components/ui/TurnstileWidget';
import { envConfig } from '@/shared/config/env.config';
import type { SubmissionMeta } from '@/shared/lib/contact/submit-contact';
import './forms.css';

/**
 * The spam signals every form that posts to /api/contact sends (see the checks in app/api/contact/route.ts):
 * a hidden honeypot field, the time since the form appeared, and the Cloudflare Turnstile token.
 */
export function useSpamSignals(honeypotId: string) {
  const honeypotRef = useRef<HTMLInputElement>(null);
  const shownAtRef = useRef(0);
  const [token, setToken] = useState('');
  // Tokens are single-use, so bumping this fetches a new one.
  const [resetSignal, setResetSignal] = useState(0);
  const siteKey = envConfig.turnstileSiteKey;

  useEffect(() => {
    shownAtRef.current = performance.now();
  }, []);

  return {
    /** False while the human check is still running. */
    ready: !siteKey || !!token,
    /** Read at submit time; the event's timeStamp and performance.now() share the same clock. */
    meta: (e: { timeStamp: number }): SubmissionMeta => ({
      website: honeypotRef.current?.value ?? '',
      elapsedMs: Math.max(0, Math.round(e.timeStamp - shownAtRef.current)),
      turnstileToken: token || undefined,
    }),
    /** Call after a failed send, so the next try gets a fresh token. */
    resetTurnstile: () => setResetSignal((n) => n + 1),
    /** Off-screen and skipped by keyboards and screen readers; only bots fill it in. */
    honeypot: (
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor={honeypotId}>Website</label>
        <input id={honeypotId} name="website" type="text" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
      </div>
    ),
    turnstile: siteKey ? <TurnstileWidget siteKey={siteKey} onToken={setToken} resetSignal={resetSignal} /> : null,
  };
}
