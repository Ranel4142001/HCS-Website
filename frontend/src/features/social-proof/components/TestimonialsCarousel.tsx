'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import type { TestimonialCard } from '../types';
import { TESTIMONIALS } from '../content/testimonials';
import './TestimonialsCarousel.css';

export const TestimonialsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [progresses, setProgresses] = useState<Record<string, number>>({});
  const progressIntervals = useRef<Record<string, ReturnType<typeof setInterval>>>({});

  const total = TESTIMONIALS.length;

  const stopPlayback = useCallback((id: string) => {
    clearInterval(progressIntervals.current[id]);
    setProgresses((p) => ({ ...p, [id]: 0 }));
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      const normalized = ((idx % total) + total) % total;
      if (playingId) {
        stopPlayback(playingId);
        setPlayingId(null);
      }
      setActiveIndex(normalized);
    },
    [playingId, total, stopPlayback]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  const getRelativeIndex = (cardIdx: number) => {
    const diff = ((cardIdx - activeIndex) % total + total) % total;
    if (diff === 0) return 0;
    if (diff === 1) return 1;
    if (diff === total - 1) return -1;
    return null;
  };

  const handlePlayToggle = (item: TestimonialCard) => {
    if (playingId && playingId !== item.id) {
      stopPlayback(playingId);
    }

    if (playingId === item.id) {
      // Pause
      clearInterval(progressIntervals.current[item.id]);
      setPlayingId(null);
      return;
    }

    // Start playback simulation (6 seconds duration)
    setPlayingId(item.id);
    let currentProg = progresses[item.id] || 0;
    const durationMs = 6000;
    const intervalMs = 60;
    const step = (intervalMs / durationMs) * 100;

    clearInterval(progressIntervals.current[item.id]);
    progressIntervals.current[item.id] = setInterval(() => {
      currentProg += step;
      if (currentProg >= 100) {
        clearInterval(progressIntervals.current[item.id]);
        setProgresses((p) => ({ ...p, [item.id]: 0 }));
        setPlayingId(null);
        setTimeout(() => goNext(), 400);
      } else {
        setProgresses((p) => ({ ...p, [item.id]: currentProg }));
      }
    }, intervalMs);
  };

  useEffect(() => {
    const intervals = progressIntervals.current;
    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, []);

  if (total === 0) return null;

  return (
    <section className="tv2-section" id="testimonials">
      <div className="tv2-inner">
        <div className="tv2-header">
          <span className="tv2-eyebrow">Customer Stories</span>
          <h2 className="tv2-title">
            Your trusted AI operations{' '}
            <span className="tv2-title-accent">partner in healthcare</span>
          </h2>
          <p className="tv2-desc">
            Hear from operations leaders, CMOs, and compliance executives transforming their provider credentialing.
          </p>
        </div>

        <div className="tv2-slider-wrap">
          <button className="tv2-nav-btn tv2-nav-prev" onClick={goPrev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="tv2-slider">
            {TESTIMONIALS.map((item, idx) => {
              const rel = getRelativeIndex(idx);
              if (rel === null) return null;

              const isActive = rel === 0;
              const isPlaying = playingId === item.id;
              const progress = progresses[item.id] ?? 0;

              return (
                <div
                  key={item.id}
                  className={`tv2-card ${isActive ? 'tv2-card--active' : 'tv2-card--adjacent'} ${
                    rel === -1 ? 'tv2-card--left' : rel === 1 ? 'tv2-card--right' : ''
                  }`}
                  onClick={() => !isActive && goTo(idx)}
                >
                  <div
                    className="tv2-thumb"
                    style={{ background: item.thumbnailBg }}
                    onClick={(e) => {
                      if (isActive) {
                        e.stopPropagation();
                        handlePlayToggle(item);
                      }
                    }}
                  >
                    {/* Animated Equalizer when Playing */}
                    {isPlaying && (
                      <div className="tv2-equalizer-wrap">
                        <div className="tv2-soundwave">
                          {[35, 75, 50, 95, 60, 85, 40, 100, 70, 55, 90, 65, 80, 45].map((h, barIdx) => (
                            <span
                              key={barIdx}
                              className="tv2-soundwave-bar"
                              style={{
                                height: `${h}%`,
                                animationDelay: `${(barIdx * 0.07).toFixed(2)}s`,
                              }}
                            />
                          ))}
                        </div>
                        <div className="tv2-playing-label">
                          <span className="tv2-pulse-dot" /> Executive Insight
                        </div>
                      </div>
                    )}

                    {/* Metric badge on thumbnail when idle */}
                    {!isPlaying && (
                      <div className="tv2-metric-callout">
                        <span className="tv2-metric-tag">{item.metric}</span>
                      </div>
                    )}

                    {isActive && (
                      <button
                        className={`tv2-play-btn ${isPlaying ? 'tv2-play-btn--playing' : ''}`}
                        aria-label={isPlaying ? 'Pause' : 'Play story'}
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayToggle(item);
                        }}
                      >
                        {isPlaying ? (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                          </svg>
                        ) : (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        )}
                      </button>
                    )}

                    <div className="tv2-company-badge" style={{ borderColor: item.companyColor }}>
                      <span className="tv2-company-initials" style={{ background: item.companyColor }}>
                        {item.companyInitials}
                      </span>
                      <span className="tv2-company-name">{item.company}</span>
                    </div>

                    {isActive && (
                      <div className="tv2-progress-track">
                        <div
                          className="tv2-progress-fill"
                          style={{ width: `${progress}%`, background: item.companyColor }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="tv2-card-body">
                    <div className="tv2-stars">★★★★★</div>
                    <p className="tv2-quote">{item.quote}</p>
                    <div className="tv2-author">
                      <div className="tv2-avatar" style={{ background: item.companyColor }}>
                        {item.companyInitials}
                      </div>
                      <div className="tv2-author-info">
                        <strong className="tv2-author-name">{item.name}</strong>
                        <span className="tv2-author-role">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="tv2-nav-btn tv2-nav-next" onClick={goNext} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="tv2-dots">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              className={`tv2-dot ${idx === activeIndex ? 'tv2-dot--active' : ''}`}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
