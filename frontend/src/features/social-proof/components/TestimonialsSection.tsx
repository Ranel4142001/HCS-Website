'use client';

import dynamic from 'next/dynamic';
import { TESTIMONIALS } from '../content/testimonials';

// The carousel is loaded only when there are testimonials to show, so its script and styles
// stay out of the homepage while the list is empty. It still renders on the server once it has content.
const TestimonialsCarousel = dynamic(() => import('./TestimonialsCarousel'));

export function TestimonialsSection() {
  if (TESTIMONIALS.length === 0) return null;
  return <TestimonialsCarousel />;
}

export default TestimonialsSection;
