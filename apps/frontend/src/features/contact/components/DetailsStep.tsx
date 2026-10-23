import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ContactFormValues } from '../validation/contact.schema';
import Input from '@/shared/components/forms/Input';
import TextArea from '@/shared/components/forms/TextArea';
import Icon from '@/shared/components/ui/Icon';
import Spinner from '@/shared/components/ui/Spinner';

export interface DetailsStepProps {
  form: UseFormReturn<ContactFormValues>;
  onBack: () => void;
  isLoading: boolean;
  isSuccess: boolean;
  isShaking: boolean;
}

export const DetailsStep: React.FC<DetailsStepProps> = ({
  form,
  onBack,
  isLoading,
  isSuccess,
  isShaking,
}) => {
  const { register, watch, formState: { errors, touchedFields } } = form;

  const emailValue = watch('email') || '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailValue.trim().length > 0 && emailRegex.test(emailValue.trim());
  const isEmailInvalid = (touchedFields.email || errors.email) && !isEmailValid && emailValue.trim().length > 0;

  return (
    <div className="form-step" id="stepDetails">
      <div className="form-card-head-back">
        <button type="button" className="step-back" onClick={onBack}>
          <Icon name="arrow" /> Back to Role Selection
        </button>
      </div>

      <div className="field-row">
        <Input
          id="fName"
          label="Full Name *"
          placeholder=" "
          required
          autoComplete="name"
          isInvalid={!!errors.name || isShaking}
          {...register('name')}
        />

        <Input
          id="fPhone"
          label="Phone Number"
          type="tel"
          placeholder=" "
          autoComplete="tel"
          {...register('phone')}
        />
      </div>

      <Input
        id="fEmail"
        label="Email Address *"
        type="email"
        placeholder=" "
        required
        autoComplete="email"
        isValid={isEmailValid}
        isInvalid={isEmailInvalid || !!errors.email}
        isShaking={isShaking}
        {...register('email')}
      />

      <TextArea
        id="fMessage"
        label="Tell us about your practice or specific payors (optional)"
        placeholder=" "
        {...register('message')}
      />

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

      <div className="form-note">
        <Icon name="lock" /> Your details stay confidential
      </div>
    </div>
  );
};

export default DetailsStep;

