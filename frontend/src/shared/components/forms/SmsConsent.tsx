import React from 'react';
import Link from 'next/link';
import './forms.css';

export interface SmsConsentProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  className?: string;
}

/**
 * Optional, unchecked text-message opt-in shown under a phone field. Mobile carriers review this wording when
 * approving our 10DLC texting campaign, so keep it in step with the "SMS Text Messaging Terms" (/terms#sms-terms)
 * and the campaign's Call to Action. Agreeing must stay optional: it is never a condition of asking for a quote.
 */
export const SmsConsent = React.forwardRef<HTMLInputElement, SmsConsentProps>(({ id, className, ...props }, ref) => (
  <div className={`sms-consent ${className ?? ''}`}>
    <input id={id} ref={ref} type="checkbox" {...props} />
    <label htmlFor={id}>
      <strong>Yes, text me (optional).</strong> I agree to receive text messages from HealthCredSTAT Inc. at the
      phone number above about my credentialing request, status updates, document follow-ups and appointment
      scheduling. Msg frequency varies. Msg &amp; data rates may apply. Reply HELP for help. Reply STOP to unsubscribe.
      Consent is not a condition of service. See our{' '}
      <Link href="/terms#sms-terms">SMS Terms</Link> and <Link href="/privacy#sms">Privacy Policy</Link>.
    </label>
  </div>
));
SmsConsent.displayName = 'SmsConsent';

export default SmsConsent;
