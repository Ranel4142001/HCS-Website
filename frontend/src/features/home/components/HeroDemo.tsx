'use client';

import React, { useEffect, useRef } from 'react';
import './HeroDemo.css';

/*
 * Homepage banner: a 20-second walkthrough of the HCStat Credentialing portal on a laptop. An admin opens the
 * providers list and sends an invite, a provider's file reaches 100%, and it goes to committee.
 *
 * Made by scripts/hero-video/portal-render.mjs from portal-demo.html (the portal screens, with the demo's synthetic
 * names), laid over blurred office footage from Pexels (free licence, no attribution required):
 *   https://www.pexels.com/video/a-senior-doctor-writing-on-a-clipboard-8375665/
 * Browsers cache these files by address: bump VERSION whenever they're replaced.
 */
const VERSION = '3';
const VIDEO = { webm: `/media/hero/story.webm?v=${VERSION}`, mp4: `/media/hero/story.mp4?v=${VERSION}` };
const POSTER = `/media/hero/story-poster.webp?v=${VERSION}`;

export const HeroDemo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    // Reduced motion: the poster (a completed, committee-ready file) stays as a still image.
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Play only while the banner is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return video.pause();
      if (!video.src) video.src = video.canPlayType('video/webm') ? VIDEO.webm : VIDEO.mp4;
      video.play().catch(() => {});
    });

    // The video isn't part of the first page load: it's fetched once the page has finished loading.
    const start = () => observer.observe(video);
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => {
      window.removeEventListener('load', start);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hero-demo">
      <video
        ref={videoRef}
        className="hero-demo-video"
        poster={POSTER}
        muted
        loop
        playsInline
        preload="none"
        aria-label="A walkthrough of the HealthCredSTAT credentialing portal: see every provider's status, invite a provider, the provider completes their file, and it is sent to committee."
      />
    </div>
  );
};

export default HeroDemo;
