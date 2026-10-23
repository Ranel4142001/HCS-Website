import React from 'react';
import { clsx } from 'clsx';
import Icon from '@/shared/components/ui/Icon';
import './forms.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  isValid?: boolean;
  isInvalid?: boolean;
  isShaking?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, isValid, isInvalid, isShaking, className, placeholder = ' ', ...props }, ref) => {
    return (
      <div className={clsx('field', { valid: isValid, invalid: isInvalid, shake: isShaking }, className)}>
        <input
          id={id}
          ref={ref}
          placeholder={placeholder || ' '}
          {...props}
        />
        <label htmlFor={id}>{label}</label>

        <span className="field-icon icon-valid" title="Valid entry">
          <Icon name="check-circle" />
        </span>

        <span className="field-icon icon-invalid" title="Field required">
          <Icon name="alert" />
        </span>

        {error && <span className="error-text">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
