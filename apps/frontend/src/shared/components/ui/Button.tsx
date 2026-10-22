import React from 'react';
import { clsx } from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'onDark' | 'outlineDark';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'normal' | 'sm';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'normal', fullWidth = false, icon, children, className, as = 'button', href, ...props }, ref) => {
    const classNames = clsx(
      'btn',
      {
        'btn-primary': variant === 'primary',
        'btn-secondary': variant === 'secondary',
        'btn-ghost': variant === 'ghost',
        'btn-onDark': variant === 'onDark',
        'btn-outlineDark': variant === 'outlineDark',
        'btn-sm': size === 'sm',
        'btn-block': fullWidth,
      },
      className
    );

    if (as === 'a' && href) {
      return (
        <a href={href} className={classNames} ref={ref as React.Ref<HTMLAnchorElement>} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
          {icon && <span className="btn-icon">{icon}</span>}
        </a>
      );
    }

    return (
      <button type="button" className={classNames} ref={ref as React.Ref<HTMLButtonElement>} {...props}>
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
