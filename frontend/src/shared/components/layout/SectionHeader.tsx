import React from 'react';
import Badge from '@/shared/components/ui/Badge';
import Icon, { IconName } from '@/shared/components/ui/Icon';
import './SectionHeader.css';

export interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowIcon?: IconName;
  eyebrowVariant?: 'mint' | 'light';
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  eyebrowIcon = 'sparkle',
  eyebrowVariant = 'mint',
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`section-head reveal ${className}`}>
      {eyebrow && (
        <Badge variant={eyebrowVariant} icon={<Icon name={eyebrowIcon} />}>
          {eyebrow}
        </Badge>
      )}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeader;

