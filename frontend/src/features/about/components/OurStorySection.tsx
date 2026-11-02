import React from 'react';
import { STORY } from '../content/about';
import './OurStorySection.css';

export function OurStorySection() {
  return (
    <section className="sol-section">
      <div className="container sol-split">
        <div className="sol-split-head">
          <p className="story-eyebrow">{STORY.eyebrow}</p>
          <h2 className="sol-block-title">{STORY.title}</h2>
          <p className="story-mission">{STORY.mission}</p>
        </div>
        <div>
          {STORY.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="sol-desc-text">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStorySection;
