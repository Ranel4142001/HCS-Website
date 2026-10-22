'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/shared/components/ui/Icon';
import Badge from '@/shared/components/ui/Badge';
import Button from '@/shared/components/ui/Button';

export const AllianceSection: React.FC = () => {
  return (
    <section className="split-section alt" id="alliance">
      <div className="container split-grid reverse">

        {/* RIGHT MEDIA (Image + Floating Badge) */}
        <motion.div
          className="split-media"
          initial={{ opacity: 0, x: 24, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="split-img" style={{ padding: 0, overflow: 'hidden', background: 'none', border: 'none', boxShadow: 'var(--shadow-lg)' }}>
            <img
              src="/alliance-doctor.jpg"
              alt="Medical professionals discussing on tablet"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 'var(--radius-lg)',
                display: 'block',
                minHeight: '380px',
              }}
            />
          </div>

          <motion.div
            className="float-card price"
            style={{ bottom: -20, left: -20, right: 'auto' }}
            initial={{ opacity: 0, scale: 0.9, y: 14 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ padding: '4px 8px' }}>
              <strong style={{ fontSize: '1.8rem', color: 'var(--teal-600)', display: 'block', lineHeight: 1.1 }}>50+</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', fontWeight: 600 }}>Alliance partners nationwide</span>
            </div>
          </motion.div>
        </motion.div>

        {/* LEFT COPY */}
        <motion.div
          className="split-copy"
          initial={{ opacity: 0, x: -24, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge icon={<Icon name="shield" />}>Alliance</Badge>
          <h2>
            Build a Stronger <em>Network Together</em>
          </h2>
          <p>
            HealthCredSTAT's Alliance Program connects staffing agencies, healthcare facilities, and independent recruiters into a trusted credentialing network. Together, we eliminate bottlenecks and get clinicians to the bedside faster.
          </p>

          <div className="alliance-list">
            <div className="alliance-item">
              <div className="alliance-icon">
                <Icon name="users" />
              </div>
              <div>
                <h4>Staffing Agencies</h4>
                <p>We partner with locum tenens and travel nursing agencies to streamline credentialing for their entire roster — faster placements, fewer delays.</p>
              </div>
            </div>

            <div className="alliance-item">
              <div className="alliance-icon">
                <Icon name="building" />
              </div>
              <div>
                <h4>Healthcare Facilities</h4>
                <p>Hospitals and clinics partner with us to expedite the onboarding of contract staff, reducing time-to-start and compliance risk.</p>
              </div>
            </div>

            <div className="alliance-item">
              <div className="alliance-icon">
                <Icon name="globe" />
              </div>
              <div>
                <h4>Recruiters &amp; Consultants</h4>
                <p>Refer your candidates to HealthCredSTAT and we'll handle the heavy lifting. Our referral program rewards partners for every completed engagement.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <Button variant="primary" as="a" href="#contact" icon={<Icon name="arrow" />}>
              Become an Alliance Partner
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AllianceSection;


