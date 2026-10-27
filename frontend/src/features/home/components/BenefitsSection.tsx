'use client';

import React, { useState } from 'react';
import Icon from '@/shared/components/ui/Icon';
import { BENEFITS } from '../content/benefits';
import './BenefitsSection.css';

export const BenefitsSection: React.FC = () => {
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
          <h2>Fewer delays and a faster path to billing</h2>
          <p className="platform-sticky-lead">
            Whether you onboard one provider or hundreds, a dedicated team manages the work and you can see the status of every application.
          </p>
          <div className="platform-head-cta">
            <a href="#contact" className="btn btn-primary btn-sm">
              Talk to a credentialing specialist &rarr;
            </a>
          </div>
        </div>

        {/* Right Scrolling/Interactive Process Items */}
        <div className="platform-sticky-list">
          {BENEFITS.map((item, idx) => {
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

export default BenefitsSection;
