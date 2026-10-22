'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/shared/components/ui/Icon';

export interface GalleryStat {
  big: string;
  label: string;
  num: string;
  title: string;
  body: string;
  iconName: string;
}

const STATS_CAROUSEL: GalleryStat[] = [
  {
    big: '2x',
    label: 'estimated faster enrollment to unlock revenue',
    num: '01',
    title: 'Experts-in-the-loop',
    body: 'When AI flags a payer exception or missing document, credentialing specialists step in immediately — so applications never stall.',
    iconName: 'users',
  },
  {
    big: '66%',
    label: 'estimated reduction in administrative overhead',
    num: '02',
    title: 'Checkpoint review',
    body: 'HealthCredSTAT experts review every critical stage before packets are dispatched to health plans. Turnaround times guaranteed.',
    iconName: 'check-circle',
  },
  {
    big: '1 day',
    label: 'average credentialing file readiness for faster care',
    num: '03',
    title: 'Built-in compliant oversight',
    body: 'Primary source verification and NCQA standards are embedded at each step — so compliance is never a question mark.',
    iconName: 'shield',
  },
  {
    big: '99.9%',
    label: 'average primary source file accuracy',
    num: '04',
    title: 'AI agent training & configuration',
    body: 'Our regulatory specialists continuously train HealthCredSTAT AI agents to reflect evolving state and commercial health plan rules.',
    iconName: 'cpu',
  },
];

const ROTATE_INTERVAL = 4500;

export const StatsBandSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STATS_CAROUSEL.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused]);

  const active = STATS_CAROUSEL[activeIdx];

  return (
    <section
      className="stats-gallery-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container stats-gallery-inner">
        {/* Left Stats Counter Panel */}
        <div className="stats-gallery-lead">
          <h2>AI and human expertise, woven into every workflow</h2>
          
          <div className="stats-active-metric-box">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.big}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-big-num">{active.big}</div>
                <div className="stat-big-label">{active.label}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Segment Tabs */}
          <div className="stats-seg-bar" role="tablist" aria-label="AI and human expertise gallery">
            {STATS_CAROUSEL.map((item, idx) => {
              const isSelected = idx === activeIdx;
              return (
                <button
                  key={idx}
                  type="button"
                  className={`stat-seg-btn ${isSelected ? 'is-selected' : ''}`}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className="seg-fill" />
                  <span className="sr-only">{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Cards Showcase */}
        <div className="stats-gallery-stage">
          <div className="stats-card-grid">
            {STATS_CAROUSEL.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={idx}
                  className={`stats-pillar-card ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div className="pillar-num">{item.num}</div>
                  <h3 className="pillar-title">{item.title}</h3>
                  <p className="pillar-body">{item.body}</p>
                  <div className="pillar-underline" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBandSection;
