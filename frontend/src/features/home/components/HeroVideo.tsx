'use client';

import React, { useEffect, useRef } from 'react';

// Rendered from a scripted animation, not filmed: a provider file moving from intake to committee-ready.
// The poster is the committee-ready frame, so visitors who prefer reduced motion (or have no JS) still see the outcome.
export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Only play while the banner is on screen; it loops forever otherwise.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reduced.matches) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="hcs-hero-banner-video"
      poster="/media/hero-loop-poster.webp"
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="A provider's credentialing file: each primary source is verified, a credentialing specialist reviews it, and the file becomes committee-ready."
    >
      <source src="/media/hero-loop.webm" type="video/webm" />
      <source src="/media/hero-loop.mp4" type="video/mp4" />
    </video>
  );
};

export default HeroVideo;
