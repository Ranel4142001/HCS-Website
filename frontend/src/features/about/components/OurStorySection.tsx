import React from 'react';
import { STORY } from '../content/about';

export function OurStorySection() {
  return (
    <section className="sol-section">
      <div className="container sol-split">
        <div className="sol-split-head">
          <h2 className="sol-block-title">{STORY.title}</h2>
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
