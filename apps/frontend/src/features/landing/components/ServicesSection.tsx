'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/shared/components/layout/SectionHeader';
import Icon, { IconName } from '@/shared/components/ui/Icon';

export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    icon: 'shield',
    title: 'HIPAA-Compliant Portal',
    description: 'Securely upload and store sensitive credentialing documents in our fully HIPAA-compliant platform.',
  },
  {
    icon: 'users',
    title: 'Recruiter & Site Communication',
    description: 'We manage all back-and-forth with credentialing departments so you never chase emails again.',
  },
  {
    icon: 'bell',
    title: 'Real-Time Updates',
    description: 'Receive text and email notifications at every step so you always know where things stand.',
  },
  {
    icon: 'file',
    title: 'Faster Future Credentialing',
    description: 'Your data is securely stored for re-use, making every future credentialing round faster and easier.',
  },
  {
    icon: 'clock',
    title: 'Deadline Management',
    description: 'We track every deadline on your behalf — no missed renewals, no lost wages, no delays.',
  },
  {
    icon: 'check-circle',
    title: 'End-to-End Support',
    description: 'From initial application to final approval, we handle the entire credentialing lifecycle.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="features" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="What We Offer"
          eyebrowIcon="shield"
          eyebrowVariant="light"
          title={<>Focus on Patients, <em>Not Paperwork</em></>}
          description="We provide continued support through your credentialing process with a complete suite of services designed for healthcare professionals."
        />

        <div className="offer-panel">
          <div className="offer-grid">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={idx}
                className="photo-card"
                initial={{ opacity: 0, y: 22, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.65, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="photo-card-icon">
                  <Icon name={service.icon} />
                </span>
                <div className="photo-card-text">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


