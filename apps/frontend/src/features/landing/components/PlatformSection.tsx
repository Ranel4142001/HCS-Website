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
    title: 'Adaptive provider data operations',
    description: 'Operations that improve automatically — AI agents learn from every credentialing and enrollment workflow, getting faster, more resilient, and more accurate over time.',
    badge: 'Self-Optimizing',
    icon: 'sparkle',
    detailPoints: [
      'Machine learning models trained on 1,000+ payer form changes',
      'Automated extraction of provider history from CAQH & PDFs',
      'Zero repeat data requests for returning clinicians',
    ],
  },
  {
    num: '02',
    title: 'Full operational visibility',
    description: 'Real-time status across credentialing, enrollment, licensing, and continuous monitoring — all consolidated into one command center, so nothing ever falls through the cracks.',
    badge: 'Single Source of Truth',
    icon: 'bar',
    detailPoints: [
      'Live pipeline stages across all active payer applications',
      'Instant bottleneck detection and automated escalation',
      'Custom role-based views for C-suite, operations, and clinicians',
    ],
  },
  {
    num: '03',
    title: 'Confidence and capacity to focus on care',
    description: 'Stay in control of what matters most — AI handles tedious payer follow-ups, primary source verifications, and administrative overhead automatically.',
    badge: 'Clinician Satisfaction',
    icon: 'shield',
    detailPoints: [
      'Eliminates 90% of clinician paperwork burden',
      'Automated proactive deadline and renewal alerts',
      'Dedicated specialist support when edge cases arise',
    ],
  },
  {
    num: '04',
    title: 'Performance written into your contract',
    description: 'Move faster with absolute confidence — we stand firmly behind every credentialing operation with performance-backed SLAs and turnaround guarantees.',
    badge: 'Guaranteed SLA',
    icon: 'check-circle',
    detailPoints: [
      '1 to 2 business day primary source verification files',
      '99.9% audited file accuracy standard',
      'Direct revenue attribution and in-network velocity',
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
            <span>Modern Operations Stack</span>
          </div>
          <h2>A complete platform for every provider workflow</h2>
          <p className="platform-sticky-lead">
            Built specifically for the scale, compliance rigor, and velocity required by modern health systems, digital health, and provider groups.
          </p>
          <div className="platform-head-cta">
            <a href="#contact" className="btn btn-primary btn-sm">
              Schedule Platform Tour &rarr;
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
