import React from 'react';
import Badge from '@/shared/components/ui/Badge';
import Icon, { IconName } from '@/shared/components/ui/Icon';
import { HeaderGuilloche } from '@/shared/components/ui/Guilloche';
import './PageIntro.css';

interface PageIntroProps {
  /** Small label above the heading. */
  badge?: { icon: IconName; label: string };
  title: React.ReactNode;
  lede: React.ReactNode;
}

/** Opening heading block for top-level pages (About, Services, Pricing, FAQ, Contact). */
export function PageIntro({ badge, title, lede }: PageIntroProps) {
  return (
    <section className="page-intro-band">
      <HeaderGuilloche />
      <div className="container page-intro">
        {badge && <Badge icon={<Icon name={badge.icon} />}>{badge.label}</Badge>}
        <h1>{title}</h1>
        <p>{lede}</p>
      </div>
    </section>
  );
}

export default PageIntro;
