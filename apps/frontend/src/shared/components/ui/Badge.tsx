import React from 'react';
import { clsx } from 'clsx';
import './Badge.css';

export interface BadgeProps {
  variant?: 'mint' | 'light';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'mint',
  icon,
  children,
  className,
  id,
}) => {
  return (
    <span
      id={id}
      className={clsx(
        'eyebrow',
        {
          light: variant === 'light',
        },
        className
      )}
    >
      {icon && <span className="eyebrow-icon">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
