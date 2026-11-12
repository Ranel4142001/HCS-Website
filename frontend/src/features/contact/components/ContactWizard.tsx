'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useForm, useWatch, type Resolver } from 'react-hook-form';
import type { ContactFormValues } from '../validation/contact.schema';
import { submitContactForm, type SubmissionMeta } from '../services/contact.service';
import RoleStep from './RoleStep';
import DetailsStep from './DetailsStep';
import SuccessPanel from './SuccessPanel';
import Icon from '@/shared/components/ui/Icon';
import Badge from '@/shared/components/ui/Badge';
import { GuillocheSeal } from '@/shared/components/ui/Guilloche';
import TurnstileWidget from '@/shared/components/ui/TurnstileWidget';
import { envConfig } from '@/shared/config/env.config';
import './ContactWizard.css';

// The validation library is only needed once someone fills in the form, so it loads on first validation
// instead of with every page that shows the form.
const lazyResolver: Resolver<ContactFormValues> = async (values, context, options) => {
  const [{ zodResolver }, { contactFormSchema }] = await Promise.all([
    import('@hookform/resolvers/zod'),
    import('../validation/contact.schema'),
  ]);
  return zodResolver(contactFormSchema)(values, context, options);
};

interface ContactWizardProps {
  /** On /contact this section opens the page, so its heading is the page's h1 and the badge is dropped. */
  isPageHeading?: boolean;
}

export const ContactWizard: React.FC<ContactWizardProps> = ({ isPageHeading = false }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessPanel, setShowSuccessPanel] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  // Spam signals for the server: the hidden honeypot field and when the form first appeared.
  const honeypotRef = useRef<HTMLInputElement>(null);
  const shownAtRef = useRef(0);
  // Cloudflare Turnstile token; tokens are single-use, so bumping turnstileReset fetches a new one.
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileReset, setTurnstileReset] = useState(0);
  const turnstileSiteKey = envConfig.turnstileSiteKey;

  useEffect(() => {
    shownAtRef.current = performance.now();
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: lazyResolver,
    defaultValues: {
      role: 'individual',
      name: '',
      phone: '',
      email: '',
      message: '',
      organization: '',
      providers: '',
    },
  });

  // Headings must not skip a level: under the page's h1 on /contact the card heading is an h2, elsewhere an h3.
  const CardHeading = isPageHeading ? 'h2' : 'h3';

  const selectedRole = useWatch({ control: form.control, name: 'role' });

  const handleSelectRole = (role: 'individual' | 'group' | 'enterprise') => {
    form.setValue('role', role, { shouldValidate: true });
  };

  const sendRequest = async (data: ContactFormValues, meta: SubmissionMeta) => {
    setIsLoading(true);
    setSubmitError(null);
    try {
      await submitContactForm(data, meta);
      setIsLoading(false);
      setIsSuccess(true);

      setTimeout(() => {
        setShowSuccessPanel(true);
      }, 550);
    } catch (err) {
      setIsLoading(false);
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setTurnstileReset((n) => n + 1);
      triggerShake();
    }
  };

  // The spam signals are read here, at submit time, then validation runs and the request is sent.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (turnstileSiteKey && !turnstileToken) {
      e.preventDefault();
      setSubmitError("Please wait a moment while we confirm you're not a bot, then submit again.");
      triggerShake();
      return;
    }
    const meta: SubmissionMeta = {
      website: honeypotRef.current?.value ?? '',
      // The event's timeStamp and performance.now() share the same clock.
      elapsedMs: Math.max(0, Math.round(e.timeStamp - shownAtRef.current)),
      turnstileToken: turnstileToken || undefined,
    };
    return form.handleSubmit((data) => sendRequest(data, meta), () => triggerShake())(e);
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 420);
  };

  const handleReset = () => {
    form.reset();
    setStep(1);
    setIsLoading(false);
    setIsSuccess(false);
    setShowSuccessPanel(false);
    setIsShaking(false);
    setSubmitError(null);
    setTurnstileReset((n) => n + 1);
  };

  return (
    <section className="form-section" id="contact">
      <div className="container form-grid">
        <div className="form-copy">
          {isPageHeading ? (
            <h1>Get a free credentialing quote</h1>
          ) : (
            <>
              <Badge icon={<Icon name="sparkle" />}>Request a quote</Badge>
              <h2>Ready to simplify credentialing?</h2>
            </>
          )}
          <p>
            Share a few details about your providers. A credentialing specialist will respond with a quote and a realistic timeline, with no obligation.
          </p>

          <ul className="form-trust">
            <li>
              <Icon name="check" /> Free quote and timeline, no obligation
            </li>
            <li>
              <Icon name="check" /> Secure, HIPAA-aligned document handling
            </li>
            <li>
              <Icon name="check" /> A dedicated credentialing specialist
            </li>
          </ul>
          <GuillocheSeal className="form-seal" label="VERIFIED AT THE SOURCE · HEALTHCREDSTAT ·" />
        </div>

        <div className="form-card-wrap reveal">
          <div className="form-card">
            {!showSuccessPanel ? (
              <>
                <div className="form-card-head">
                  <CardHeading>Tell us about your providers</CardHeading>
                  <p>Step {step} of 2 — {step === 1 ? 'Choose your practice type' : 'Add your contact details'}</p>
                </div>

                <div className={`form-progress ${step === 2 ? 'step-2' : ''}`}>
                  <div className={`fp-step ${step === 1 ? 'active' : 'done'}`} data-fp="1">
                    <span className="fp-num">1</span>
                    <span>Practice type</span>
                  </div>
                  <div className="fp-line" />
                  <div className={`fp-step ${step === 2 ? 'active' : ''}`} data-fp="2">
                    <span className="fp-num">2</span>
                    <span>Details</span>
                  </div>
                </div>

                <form onSubmit={onSubmit} noValidate>
                  {/* Honeypot: off-screen and skipped by keyboards and screen readers; only bots fill it in. */}
                  <div className="form-hp" aria-hidden="true">
                    <label htmlFor="fWebsite">Website</label>
                    <input id="fWebsite" name="website" type="text" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
                  </div>
                  <div style={{ display: showSuccessPanel ? 'none' : 'block' }}>
                    {step === 1 && (
                      <RoleStep
                        selectedRole={selectedRole}
                        onSelectRole={handleSelectRole}
                        onNext={() => setStep(2)}
                      />
                    )}

                    {step === 2 && (
                      <DetailsStep
                        form={form}
                        onBack={() => setStep(1)}
                        isLoading={isLoading}
                        isSuccess={isSuccess}
                        isShaking={isShaking}
                        submitError={submitError}
                        verification={
                          turnstileSiteKey ? (
                            <TurnstileWidget siteKey={turnstileSiteKey} onToken={setTurnstileToken} resetSignal={turnstileReset} />
                          ) : null
                        }
                      />
                    )}
                  </div>
                </form>
              </>
            ) : (
              <SuccessPanel onReset={handleReset} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWizard;

