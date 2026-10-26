import React from 'react';
import './Spinner.css';

/** Decorative: the button it sits in carries the "Submitting..." text for screen readers. */
export const Spinner: React.FC = () => {
  return <span className="btn-spinner" aria-hidden="true" />;
};

export default Spinner;
