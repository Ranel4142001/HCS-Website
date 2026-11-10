'use client';

import React, { useEffect, useState } from 'react';
import { FAQ_DATA, FAQ_TOPICS, type FaqTopicId } from '../content/faq';
import './FaqSection.css';

const topicAnchor = (id: FaqTopicId) => `faq-${id}`;

export const FaqSection: React.FC = () => {
  // One answer open at a time, keyed by its question; the first question starts open.
  const [openQuestion, setOpenQuestion] = useState<string | null>(FAQ_DATA[0]?.q ?? null);
  // The topic being read, highlighted in the side menu.
  const [activeTopic, setActiveTopic] = useState<FaqTopicId>(FAQ_TOPICS[0].id);

  useEffect(() => {
    const groups = FAQ_TOPICS.map((t) => document.getElementById(topicAnchor(t.id))).filter(Boolean) as HTMLElement[];
    // The topic being read is the last one whose heading has reached the area just below the sticky navigation bar.
    // At the bottom of the page the last topic wins, even when it is too short to reach that line.
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = 140;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = groups[0];
      for (const g of groups) if (g.getBoundingClientRect().top <= line) current = g;
      if (atBottom && groups.at(-1)!.getBoundingClientRect().top < window.innerHeight) current = groups.at(-1)!;
      setActiveTopic(current.id.replace(/^faq-/, '') as FaqTopicId);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-inner">
        <div className="faq-left">
          <h2>Credentialing questions, answered</h2>
          <p className="faq-left-desc">
            Key facts about provider credentialing, verification, timelines and costs.
          </p>

          <nav className="faq-topics" aria-label="FAQ topics">
            <ul>
              {FAQ_TOPICS.map((topic) => {
                const count = FAQ_DATA.filter((item) => item.topic === topic.id).length;
                return (
                  <li key={topic.id}>
                    <a
                      href={`#${topicAnchor(topic.id)}`}
                      onClick={() => setActiveTopic(topic.id)}
                      className={activeTopic === topic.id ? 'is-active' : undefined}
                      aria-current={activeTopic === topic.id ? 'true' : undefined}
                    >
                      <span>{topic.label}</span>
                      <span className="faq-topic-count">{count}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="faq-contact-cta">
            <span>Have another question?</span>
            <a href="#contact" className="faq-link">
              Speak with a credentialing specialist &rarr;
            </a>
          </div>
        </div>

        <div className="faq-right">
          {FAQ_TOPICS.map((topic) => (
            <div key={topic.id} className="faq-group" id={topicAnchor(topic.id)}>
              <h3 className="faq-group-title">{topic.label}</h3>
              <div className="faq-list">
                {FAQ_DATA.filter((item) => item.topic === topic.id).map((item) => {
                  const isOpen = openQuestion === item.q;
                  return (
                    <div key={item.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                      <button
                        type="button"
                        className="faq-question-btn"
                        onClick={() => setOpenQuestion(isOpen ? null : item.q)}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
