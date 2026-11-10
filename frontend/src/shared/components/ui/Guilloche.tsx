import React from 'react';
import './Guilloche.css';

/*
 * Guilloché: the fine interlaced line pattern printed on diplomas, licenses and certificates, the documents
 * credentialing verifies. Drawn from rotated ellipses, so it stays crisp at any size and costs no image download.
 *   rosette: a large, faint watermark (the hero)
 *   seal:    a verification seal with a check mark, stamped in once as it scrolls into view (the quote section)
 * Purely decorative: hidden from screen readers. Colour comes from `color` (currentColor) in the caller's CSS.
 */

/** `count` ellipses rotated evenly around the centre: the interlaced bands of the pattern. */
function Band({ count, rx, ry, offset = 0 }: { count: number; rx: number; ry: number; offset?: number }) {
  return (
    <g>
      {Array.from({ length: count }, (_, i) => (
        <ellipse key={i} rx={rx} ry={ry} transform={`rotate(${offset + (180 / count) * i})`} />
      ))}
    </g>
  );
}

export function GuillocheRosette({ className }: { className?: string }) {
  return (
    <svg className={`guilloche guilloche-rosette ${className ?? ''}`} viewBox="-200 -200 400 400" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor">
        <circle r="197" />
        <circle r="191" />
        <Band count={40} rx={186} ry={74} />
        <Band count={30} rx={124} ry={52} offset={3} />
        <Band count={20} rx={64} ry={30} offset={4.5} />
        <circle r="34" />
      </g>
    </svg>
  );
}

export function GuillocheSeal({ className, label }: { className?: string; label: string }) {
  return (
    <svg className={`guilloche guilloche-seal ${className ?? ''}`} viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
      <defs>
        <path id="guilloche-seal-text" d="M 0,0 m -77,0 a 77,77 0 1,1 154,0 a 77,77 0 1,1 -154,0" />
      </defs>
      <g fill="none" stroke="currentColor">
        <circle r="97" strokeWidth="1.6" />
        <circle r="92" strokeWidth=".6" />
        <circle r="63" strokeWidth="1.2" />
        <g strokeWidth=".45">
          <Band count={28} rx={60} ry={24} />
        </g>
      </g>
      <text className="guilloche-seal-text" fill="currentColor">
        <textPath href="#guilloche-seal-text" startOffset="0" textLength={476} lengthAdjust="spacing">
          {label}
        </textPath>
      </text>
      <circle r="30" className="guilloche-seal-core" />
      <path d="M -13 1 L -4 10 L 14 -9" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
