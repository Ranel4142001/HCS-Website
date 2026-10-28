import React from 'react';
import './FeatureText.css';

/** A feature in a list. Planned features (not live in the portal yet) are marked `soon`. */
export type Feature = string | { text: string; soon: true };

export const featureText = (feature: Feature) => (typeof feature === 'string' ? feature : feature.text);

/** Renders a feature's text, with a "Soon" label when it is planned rather than live. */
export function FeatureText({ feature }: { feature: Feature }) {
  if (typeof feature === 'string') return <>{feature}</>;
  return (
    <>
      {feature.text} <span className="soon-tag">Soon</span>
    </>
  );
}

export default FeatureText;
