'use client';

import React, { useEffect, useRef } from 'react';

const SOURCES = { webm: '/media/hero-loop.webm', mp4: '/media/hero-loop.mp4' };

// Rendered from a scripted animation, not filmed: a provider file moving from intake to committee-ready.
// The poster is the committee-ready frame, so visitors who prefer reduced motion (or have no JS) still see the outcome.
// The video file is not part of the page load: it is fetched only after the page has loaded and the banner is on screen.
export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Only play while the banner is on screen; it loops forever otherwise.
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return video.pause();
      if (!video.src) video.src = video.canPlayType('video/webm') ? SOURCES.webm : SOURCES.mp4;
      video.play().catch(() => {});
    });
    const start = () => observer.observe(video);

    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => {
      window.removeEventListener('load', start);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hcs-hero-banner-video"
      poster="/media/hero-loop-poster.webp"
      muted
      loop
      playsInline
      preload="none"
      aria-label="A provider's credentialing file: each primary source is verified, a credentialing specialist reviews it, and the file becomes committee-ready."
    />
  );
};

export default HeroVideo;
