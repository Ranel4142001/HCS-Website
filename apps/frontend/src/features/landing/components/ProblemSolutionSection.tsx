'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/shared/components/ui/Icon';

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="split-section">
      <div className="container split-grid">

        {/* LEFT — doctor photo replaces illustration */}
        <motion.div
          className="split-media"
          initial={{ opacity: 0, x: -24, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="split-img" style={{ padding: 0, overflow: 'hidden', background: 'none', border: 'none', boxShadow: 'var(--shadow-lg)' }}>
            <img
              src="/problem-doctor.jpg"
              alt="Doctor overwhelmed by credentialing paperwork"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 'var(--radius-lg)',
                display: 'block',
                minHeight: '340px',
              }}
            />
          </div>

          {/* Floating price card — kept from original */}
          <motion.div
            className="float-card price"
            initial={{ opacity: 0, scale: 0.9, y: 14 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="fc-icon">
              <Icon name="doc-check" />
            </span>
            <div>
              <strong>$599</strong>
              <span>Flat rate per assignment — no hidden fees</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — original copy from htcstatservices.html */}
        <motion.div
          className="split-copy"
          initial={{ opacity: 0, x: 24, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2>
            Tired of Credentialing Deadline <span className="accent">Stress?</span>
          </h2>
          <p>
            Missed deadlines can cost you lost wages, delayed start dates, and missed opportunities.
            At HealthCredSTAT, we handle your credentialing throughout the entire process —
            so you never have to worry about paperwork or deadlines again.
          </p>

          <ul className="check-list">
            <li>
              <Icon name="check-circle" /> Secure upload to HIPAA-compliant portal
            </li>
            <li>
              <Icon name="check-circle" /> Recruiter &amp; site communication managed for you
            </li>
            <li>
              <Icon name="check-circle" /> Real-time text &amp; email updates
            </li>
            <li>
              <Icon name="check-circle" /> Data stored for faster future credentialing
            </li>
          </ul>

          <a href="#contact" className="btn btn-primary">
            Let's Get Started <Icon name="arrow" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;


