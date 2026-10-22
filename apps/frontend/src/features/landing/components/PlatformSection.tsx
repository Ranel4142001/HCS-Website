'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon, { IconName } from '@/shared/components/ui/Icon';

export interface StickyPlatformItem {
  num: string;
  title: string;
  description: string;
  badge: string;
  icon: IconName;
  detailPoints: string[];
}

const STICKY_ITEMS: StickyPlatformItem[] = [
  {
    num: '01',
    title: 'Collect provider data once',
    description: 'Providers hate filling out the same information over and over. We gather it once, keep it current, and reuse it for every payer, facility and renewal.',
    badge: 'Less paperwork',
    icon: 'sparkle',
    detailPoints: [
      'Provider history pulled from CAQH ProView and existing documents',
      'Secure document collection with automatic reminders',
      'No repeat requests for information you have already sent',
    ],
  },
  {
    num: '02',
    title: 'Know the status of every file',
    description: 'Credentialing, enrollment, licensing and monitoring status in one place, so nothing falls through the cracks and nobody has to ask "where are we on this?"',
    badge: 'Full visibility',
    icon: 'bar',
    detailPoints: [
      'Live status for every payer application',
      'Bottlenecks flagged and escalated early',
      'Views for leadership, operations and providers',
    ],
  },
  {
    num: '03',
    title: 'Let providers focus on patients',
    description: 'Follow-ups with payers, verifications and renewal paperwork happen in the background. Your providers only hear from us when we truly need them.',
    badge: 'Happier providers',
    icon: 'users',
    detailPoints: [
      'Payer follow-ups handled by our team',
      'Alerts well before licenses and certifications expire',
      'A dedicated specialist for questions and edge cases',
    ],
  },
  {
    num: '04',
    title: 'Clear commitments, measured',
    description: 'Turnaround expectations are agreed up front and reported on, so you always know how your credentialing operation is performing.',
    badge: 'Accountability',
    icon: 'check-circle',
    detailPoints: [
      'Turnaround and status reporting you can share with leadership',
      'Audit-ready records for every verification',
      'Visibility into when each provider can start billing',
    ],
  },
];

export const PlatformSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="platform-sticky-section" id="platform">
      <div className="container platform-sticky-inner">
        {/* Left Sticky Header Column */}
        <div className="platform-sticky-head">
          <div className="platform-eyebrow">
            <Icon name="cpu" />
            <span>Why HealthCredSTAT</span>
          </div>
          <h2>Less chasing. Fewer delays. Providers billing sooner.</h2>
          <p className="platform-sticky-lead">
            Whether you are onboarding one provider or hundreds, you get a team that owns the work and a system that shows you exactly where it stands.
          </p>
          <div className="platform-head-cta">
            <a href="#contact" className="btn btn-primary btn-sm">
              Talk to a credentialing specialist &rarr;
            </a>
          </div>
        </div>

        {/* Right Scrolling/Interactive Process Items */}
        <div className="platform-sticky-list">
          {STICKY_ITEMS.map((item, idx) => {
            const isHovered = activeItem === idx;
            return (
              <div
                key={item.num}
                className={`platform-sticky-item ${isHovered ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveItem(idx)}
              >
                <div className="item-top-row">
                  <div className="item-num-row">
                    <span className="item-num">{item.num}</span>
                    <span className="item-num-line" />
                  </div>
                  <span className="item-badge">{item.badge}</span>
                </div>

                <div className="item-icon-wrap">
                  <Icon name={item.icon} />
                </div>

                <h3 className="item-title">{item.title}</h3>
                <p className="item-desc">{item.description}</p>

                <ul className="item-points">
                  {item.detailPoints.map((point, pIdx) => (
                    <li key={pIdx}>
                      <Icon name="check" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
