import React from 'react';
import Link from 'next/link';
import { UseFormReturn, useWatch } from 'react-hook-form';
import { PROVIDER_COUNTS, type ContactFormValues } from '../validation/contact.schema';
import Input from '@/shared/components/forms/Input';
import TextArea from '@/shared/components/forms/TextArea';
import SmsConsent from '@/shared/components/forms/SmsConsent';
import Icon from '@/shared/components/ui/Icon';
import Spinner from '@/shared/components/ui/Spinner';
import './DetailsStep.css';

/** Same choices as the practice-type step (RoleStep). */
const ROLE_LABELS: Record<ContactFormValues['role'], string> = {
  individual: 'Individual clinician',
  group: 'Group practice or staffing agency',
  enterprise: 'Health system, hospital and surgery center',
};

export interface DetailsStepProps {
  form: UseFormReturn<ContactFormValues>;
  /** Back to the practice-type step. Without it (single-step form on /contact), practice type is a dropdown here. */
  onBack?: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  isShaking: boolean;
  /** Shown under the submit button when sending fails. */
  submitError?: string | null;
  /** The human-check widget, shown just above the submit button. */
  verification?: React.ReactNode;
}

export const DetailsStep: React.FC<DetailsStepProps> = ({
  form,
  onBack,
  isLoading,
  isSuccess,
  isShaking,
  submitError,
  verification,
}) => {
  const { register, control, formState: { errors, touchedFields } } = form;

  const emailValue = useWatch({ control, name: 'email' }) || '';
  // Organization and team size only apply to groups and health systems.
  const role = useWatch({ control, name: 'role' });
  const isOrganization = role === 'group' || role === 'enterprise';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailValue.trim().length > 0 && emailRegex.test(emailValue.trim());
  const isEmailInvalid = (touchedFields.email || errors.email) && !isEmailValid && emailValue.trim().length > 0;

  return (
    <div className="form-step" id="stepDetails">
      {onBack ? (
        <div className="form-card-head-back">
          <button type="button" className="step-back" onClick={onBack}>
            <Icon name="arrow" /> Back to Role Selection
          </button>
        </div>
      ) : (
        <div className="field field-select">
          <select id="fRole" {...register('role')}>
            {(Object.keys(ROLE_LABELS) as ContactFormValues['role'][]).map((value) => (
              <option key={value} value={value}>{ROLE_LABELS[value]}</option>
            ))}
          </select>
          <label htmlFor="fRole">Practice type *</label>
        </div>
      )}

      <div className="field-row">
        <Input
          id="fName"
          label="Full name *"
          placeholder=" "
          required
          autoComplete="name"
          isInvalid={!!errors.name || isShaking}
          {...register('name')}
        />

        <Input
          id="fPhone"
          label="Phone number"
          type="tel"
          placeholder=" "
          autoComplete="tel"
          isInvalid={!!errors.phone}
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>

      <SmsConsent id="fSmsConsent" {...register('smsConsent')} />

      <Input
        id="fEmail"
        label="Email address *"
        type="email"
        placeholder=" "
        required
        autoComplete="email"
        isValid={isEmailValid}
        isInvalid={isEmailInvalid || !!errors.email}
        isShaking={isShaking}
        {...register('email')}
      />

      {isOrganization && (
        <div className="field-row">
          <Input
            id="fOrganization"
            label="Organization name"
            placeholder=" "
            autoComplete="organization"
            maxLength={150}
            {...register('organization')}
          />

          <div className="field field-select">
            <select id="fProviders" defaultValue="" {...register('providers')}>
              <option value="">Select…</option>
              {PROVIDER_COUNTS.map((count) => (
                <option key={count} value={count}>
                  {count === '200+' ? 'More than 200' : `${count.replace('-', '–')} providers`}
                </option>
              ))}
            </select>
            <label htmlFor="fProviders">How many providers to credential?</label>
          </div>
        </div>
      )}

      <TextArea
        id="fMessage"
        label="Tell us about your practice (optional)"
        placeholder=" "
        {...register('message')}
      />

      {verification}

      <button
        type="submit"
        className={`btn btn-primary btn-block btn-submit ${isLoading ? 'is-loading' : ''} ${isSuccess ? 'is-success' : ''}`}
        disabled={isLoading || isSuccess}
      >
        <span className="btn-label">
          Submit Request <Icon name="arrow" />
        </span>
        <span className="btn-loading">
          <Spinner /> Submitting...
        </span>
        <span className="btn-success">
          <Icon name="check" /> Success!
        </span>
      </button>

      {submitError && (
        <p className="form-submit-error" role="alert">
          <Icon name="alert" /> {submitError}
        </p>
      )}

      <div className="form-note">
        <Icon name="lock" />
        <span>
          Your details stay confidential. See our <Link href="/privacy">Privacy Policy</Link>.
        </span>
      </div>
    </div>
  );
};

export default DetailsStep;

