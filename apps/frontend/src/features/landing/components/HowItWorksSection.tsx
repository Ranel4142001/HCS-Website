'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/shared/components/layout/SectionHeader';

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '1',
    title: 'Submit Your Practice Info',
    description: 'Complete our simple 2-minute onboarding form. Upload existing licenses, CV, and malpractice info via our secure portal.',
  },
  {
    stepNumber: '2',
    title: 'Dedicated Specialist Assignment',
    description: 'Your named credentialing specialist audits your documents, sets up/updates your CAQH profile, and drafts payor applications.',
  },
  {
    stepNumber: '3',
    title: 'Primary Verification & Follow-Up',
    description: 'We perform primary source verification (PSV) and submit complete application packets, conducting weekly follow-ups with payors.',
  },
  {
    stepNumber: '4',
    title: 'Approval & Continuous Maintenance',
    description: 'Receive your payor provider IDs and effective billing dates. We maintain your profile and notify you prior to any expiration.',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="how" id="how-it-works">
      <div className="container">
        <SectionHeader
          eyebrow="Simple Workflow"
          eyebrowIcon="sparkle"
          title={<>How HealthCredSTAT <em>Works</em></>}
          description="Our streamlined 4-step process takes you from application to payor approval quickly and effortlessly."
        />

        <div className="timeline">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              className="tl-step"
              initial={{ opacity: 0, x: -20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="tl-num">{step.stepNumber}</div>
              <div className="tl-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;


