import React from 'react';
import { clsx } from 'clsx';
import './forms.css';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error?: string;
  isInvalid?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, id, error, isInvalid, className, placeholder = ' ', ...props }, ref) => {
    return (
      <div className={clsx('field', { invalid: isInvalid || !!error }, className)}>
        <textarea
          id={id}
          ref={ref}
          placeholder={placeholder || ' '}
          {...props}
        />
        <label htmlFor={id}>{label}</label>

        {error && <span className="error-text">{error}</span>}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
export default TextArea;
