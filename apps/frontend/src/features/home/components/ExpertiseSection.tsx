'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/shared/components/ui/Icon';

export interface ExpertiseItem {
  big: string;
  label: string;
  num: string;
  title: string;
  body: string;
  iconName: string;
}

const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    big: 'Experts',
    label: 'step in the moment automation hits a snag',
    num: '01',
    title: 'Specialists in the loop',
    body: 'When a payer kicks back an application or a document is missing, a credentialing specialist takes over right away — so files keep moving instead of sitting in a queue.',
    iconName: 'users',
  },
  {
    big: 'Every stage',
    label: 'reviewed before anything reaches a payer',
    num: '02',
    title: 'Checkpoint review',
    body: 'Applications are checked for completeness and accuracy at each stage. Clean submissions mean fewer rejections, fewer resubmissions and fewer weeks lost.',
    iconName: 'check-circle',
  },
  {
    big: 'NCQA',
    label: 'verification standards built into every file',
    num: '03',
    title: 'Compliance built in',
    body: 'Primary source verification follows NCQA credentialing standards from the start, so every file is ready for a committee — or an audit.',
    iconName: 'shield',
  },
  {
    big: 'Up to date',
    label: 'with changing payer and state requirements',
    num: '04',
    title: 'Rules that keep up',
    body: 'Payer forms and state board rules change constantly. Our team tracks those changes and updates our workflows, so you never have to.',
    iconName: 'cpu',
  },
];

const ROTATE_INTERVAL = 4500;

export const ExpertiseSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % EXPERTISE_ITEMS.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused]);

  const active = EXPERTISE_ITEMS[activeIdx];

  return (
    <section
      className="stats-gallery-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container stats-gallery-inner">
        {/* Left Stats Counter Panel */}
        <div className="stats-gallery-lead">
          <h2>Credentialing experts, backed by automation</h2>
          
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
          <div className="stats-seg-bar" role="tablist" aria-label="How HealthCredSTAT works">
            {EXPERTISE_ITEMS.map((item, idx) => {
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
            {EXPERTISE_ITEMS.map((item, idx) => {
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

export default ExpertiseSection;
