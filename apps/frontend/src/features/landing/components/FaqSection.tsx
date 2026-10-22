'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/shared/components/ui/Icon';

export interface FaqItem {
  q: string;
  a: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    q: 'What is credentialing in healthcare?',
    a: "Credentialing in healthcare is the process of verifying a provider's qualifications — education, training, licensure, malpractice history, and board certifications — before they are authorized to treat patients or bill insurance. Health systems, medical groups, and health plans use credentialing to ensure clinical quality, meet regulatory standards (NCQA, The Joint Commission), and maintain payer contracts. Without it, clinicians cannot legally practice or generate billable revenue.",
  },
  {
    q: 'What is provider credentialing vs provider enrollment?',
    a: "Provider credentialing and enrollment are two related but distinct processes. Credentialing verifies a provider's clinical qualifications and primary source documentation. Enrollment is the separate process of contracting with specific payers — Medicare, Medicaid, and commercial health plans (Aetna, BCBS, Optum, Humana, etc.) — so the provider receives billing numbers and in-network participation status. Both must be completed before a provider can see patients and submit insurance claims.",
  },
  {
    q: 'How long does it take to credential a provider?',
    a: 'Traditional manual provider credentialing takes 90 to 120 days on average due to back-and-forth paperwork and slow primary source verification. With HealthCredSTAT’s automated platform, organizations compress that timeline dramatically — primary source verification files are ready in 1 to 2 business days, and provider onboarding time is reduced by over 60%.',
  },
  {
    q: 'What documents are needed for provider credentialing?',
    a: 'Provider credentialing typically requires: a current state medical license, DEA certificate, state controlled substance registration (if applicable), malpractice insurance certificate (COI), board certification, graduation diplomas, residency/fellowship completion certificates, an updated CV with explanation of gaps >30 days, peer references, and a current CAQH profile.',
  },
  {
    q: 'What is a Credentials Verification Organization (CVO)?',
    a: 'A CVO is an organization that performs primary source verification of healthcare practitioners on behalf of hospitals, health plans, and medical groups. HealthCredSTAT operates as a real-time, AI-powered CVO, querying primary sources directly and packaging audit-ready files aligned with NCQA standards.',
  },
  {
    q: 'How does continuous monitoring work?',
    a: 'HealthCredSTAT automated agents continuously scan federal and state registries (including OIG-LEIE, SAM.gov, NPDB, Medicare Opt-Out, and 50 state medical licensing boards) 24 hours a day, 7 days a week. If any sanction, adverse action, or license expiration is flagged, instant alerts are dispatched to your compliance team.',
  },
];

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
            <span>Knowledge Base</span>
          </div>
          <h2>Frequently Asked Questions</h2>
          <p className="faq-left-desc">
            Everything you need to know about automated credentialing, CVO operations, and health plan provider enrollment.
          </p>
          <div className="faq-contact-cta">
            <span>Have a custom question?</span>
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
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="faq-answer-text">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
