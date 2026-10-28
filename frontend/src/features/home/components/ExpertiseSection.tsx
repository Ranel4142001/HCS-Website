'use client';

import React, { useState, useEffect } from 'react';
import { EXPERTISE_ITEMS } from '../content/expertise';
import './ExpertiseSection.css';

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
          <h2>Credentialing experts, backed by AI automation</h2>
          
          <div className="stats-active-metric-box">
            <div key={active.big} className="stat-big-swap">
              <div className="stat-big-num">{active.big}</div>
              <div className="stat-big-label">{active.label}</div>
            </div>
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
