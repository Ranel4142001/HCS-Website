import React from 'react';
import { STORY } from '../content/about';

export function OurStorySection() {
  return (
    <section className="sol-section">
      <div className="container sol-narrow">
        <h2 className="sol-block-title">{STORY.title}</h2>
        {STORY.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="sol-desc-text">{p}</p>
        ))}
      </div>
    </section>
  );
}

export default OurStorySection;
