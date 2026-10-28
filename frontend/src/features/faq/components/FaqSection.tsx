'use client';

import React, { useState } from 'react';
import Icon from '@/shared/components/ui/Icon';
import { FAQ_DATA } from '../content/faq';
import './FaqSection.css';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-inner">
        <div className="faq-left">
          <div className="faq-tag">
            <Icon name="shield" />
            <span>Credentialing FAQ</span>
          </div>
          <h2>Credentialing questions, answered</h2>
          <p className="faq-left-desc">
            Key facts about provider credentialing, verification, timelines and costs.
          </p>
          <div className="faq-contact-cta">
            <span>Have another question?</span>
            <a href="#contact" className="faq-link">
              Speak with a credentialing specialist &rarr;
            </a>
          </div>
        </div>

        <div className="faq-right">
          <div className="faq-list">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon-cross" aria-hidden="true" />
                  </button>
                  {/* Answers stay in the HTML (collapsed, not removed) so search engines can read them */}
                  <div className="faq-answer" aria-hidden={!isOpen}>
                    <div className="faq-answer-clip">
                      <p className="faq-answer-text">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
