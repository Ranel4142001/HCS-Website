'use client';

import React, { useState } from 'react';
import { useForm, useWatch, type Resolver } from 'react-hook-form';
import type { ContactFormValues } from '@/shared/lib/contact/contact.schema';
import { submitContactForm, type SubmissionMeta } from '@/shared/lib/contact/submit-contact';
import type { PracticeType } from '@/shared/lib/contact/practice-types';
import { useSpamSignals } from '@/shared/components/forms/useSpamSignals';
import RoleStep from './RoleStep';
import DetailsStep from './DetailsStep';
import SuccessPanel from './SuccessPanel';
import Icon from '@/shared/components/ui/Icon';
import Badge from '@/shared/components/ui/Badge';
import { GuillocheSeal } from '@/shared/components/ui/Guilloche';
import './ContactWizard.css';

// The validation library is only needed once someone fills in the form, so it loads on first validation
// instead of with every page that shows the form.
const lazyResolver: Resolver<ContactFormValues> = async (values, context, options) => {
  const [{ zodResolver }, { contactFormRules }] = await Promise.all([
    import('@hookform/resolvers/zod'),
    import('@/shared/lib/contact/contact.schema'),
  ]);
  return zodResolver(contactFormRules)(values, context, options);
};

interface ContactWizardProps {
  /** On /contact this section opens the page, so its heading is the page's h1 and the badge is dropped. */
  isPageHeading?: boolean;
}

export const ContactWizard: React.FC<ContactWizardProps> = ({ isPageHeading = false }) => {
  // On /contact the whole form shows at once (practice type is a dropdown), so the phone field and SMS opt-in are
  // visible as soon as the page opens: carriers reviewing our 10DLC texting campaign check this page without clicking.
  const singleStep = isPageHeading;
  const firstStep = singleStep ? 2 : 1;
  const [step, setStep] = useState<1 | 2>(firstStep);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessPanel, setShowSuccessPanel] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const spam = useSpamSignals('fWebsite');

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
      smsConsent: false,
    },
  });

  // Headings must not skip a level: under the page's h1 on /contact the card heading is an h2, elsewhere an h3.
  const CardHeading = isPageHeading ? 'h2' : 'h3';

  const selectedRole = useWatch({ control: form.control, name: 'role' });

  const handleSelectRole = (role: PracticeType) => {
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
      spam.resetTurnstile();
      triggerShake();
    }
  };

  // The spam signals are read here, at submit time, then validation runs and the request is sent.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!spam.ready) {
      e.preventDefault();
      setSubmitError("Please wait a moment while we confirm you're not a bot, then submit again.");
      triggerShake();
      return;
    }
    const meta: SubmissionMeta = spam.meta(e);
    return form.handleSubmit((data) => sendRequest(data, meta), () => triggerShake())(e);
  };

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 420);
  };

  const handleReset = () => {
    form.reset();
    setStep(firstStep);
    setIsLoading(false);
    setIsSuccess(false);
    setShowSuccessPanel(false);
    setIsShaking(false);
    setSubmitError(null);
    spam.resetTurnstile();
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
          {isPageHeading && (
            <p className="form-alt-contact">
              Prefer email? Write to <a href="mailto:info@healthcredstat.com">info@healthcredstat.com</a>
            </p>
          )}
          <GuillocheSeal className="form-seal" label="VERIFIED AT THE SOURCE · HEALTHCREDSTAT ·" />
        </div>

        <div className="form-card-wrap reveal">
          <div className="form-card">
            {!showSuccessPanel ? (
              <>
                <div className="form-card-head">
                  <CardHeading>Tell us about your providers</CardHeading>
                  <p>
                    {singleStep
                      ? 'Add your details and a credentialing specialist will reply within 1 business day.'
                      : `Step ${step} of 2 — ${step === 1 ? 'Choose your practice type' : 'Add your contact details'}`}
                  </p>
                </div>

                {!singleStep && (
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
                )}

                <form onSubmit={onSubmit} noValidate>
                  {spam.honeypot}
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
                        onBack={singleStep ? undefined : () => setStep(1)}
                        isLoading={isLoading}
                        isSuccess={isSuccess}
                        isShaking={isShaking}
                        submitError={submitError}
                        verification={spam.turnstile}
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

