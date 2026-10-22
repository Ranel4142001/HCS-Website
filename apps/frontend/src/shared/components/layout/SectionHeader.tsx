import React from 'react';
import { motion } from 'framer-motion';
import Badge from '@/shared/components/ui/Badge';
import Icon, { IconName } from '@/shared/components/ui/Icon';

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
    <motion.div
      className={`section-head ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && (
        <Badge variant={eyebrowVariant} icon={<Icon name={eyebrowIcon} />}>
          {eyebrow}
        </Badge>
      )}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
};

export default SectionHeader;

