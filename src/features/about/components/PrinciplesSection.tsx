import React from 'react';
import { PRINCIPLES } from '../content/about';

export function PrinciplesSection() {
  return (
    <section className="sol-section sol-section--tint">
      <div className="container">
        <h2 className="sol-block-title">How we work</h2>
        <ul className="sol-steps">
          {PRINCIPLES.map((p) => (
            <li key={p.title} className="sol-step">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PrinciplesSection;
