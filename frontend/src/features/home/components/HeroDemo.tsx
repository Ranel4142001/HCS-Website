'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/shared/components/ui/Icon';
import './HeroDemo.css';

/*
 * Homepage banner, about 25 seconds: a physician typing on a laptop, a zoom into the screen, a walkthrough of the
 * HCStat Credentialing portal (an admin sends an invite, a provider's file reaches 100%, it goes to committee), then
 * a physician smiling to camera with a "free quote" call to action.
 *
 * Made with scripts/hero-video: portal-render.mjs renders portal-demo.html (the portal screens, with the demo's
 * synthetic names), and compose.mjs joins it with two Pexels clips (free licence, no attribution required):
 *   https://www.pexels.com/video/man-in-white-lab-coat-using-a-laptop-5030437/
 *   https://www.pexels.com/video/female-doctor-posing-on-camera-7904584/
 * Browsers cache these files by address: bump VERSION whenever they're replaced.
 */
const VERSION = '5';
const VIDEO = { webm: `/media/hero/story.webm?v=${VERSION}`, mp4: `/media/hero/story.mp4?v=${VERSION}` };
// The still shown until the video plays (and instead of it, for reduced motion): a normal <img> under the video, so
// the browser can choose its size. The banner is at most 1080px wide, less on smaller screens.
const POSTER = {
  src: `/media/hero/story-poster-1280.webp?v=${VERSION}`,
  srcSet: `/media/hero/story-poster-720.webp?v=${VERSION} 720w, /media/hero/story-poster-1280.webp?v=${VERSION} 1280w`,
  sizes: '(max-width: 1112px) calc(100vw - 32px), 1080px',
};

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
      {/* From tablet width up, the poster is the largest thing on first paint, so fetch it early (React moves this
          tag into <head>). On phones the headline text is, so the poster isn't preloaded there. */}
      <link
        rel="preload"
        as="image"
        href={POSTER.src}
        imageSrcSet={POSTER.srcSet}
        imageSizes={POSTER.sizes}
        fetchPriority="high"
        media="(min-width: 560px)"
      />
      {/* Already-compressed WebP at two widths, so next/image's resizing service isn't needed. Decorative: the
          video's label describes the banner. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero-demo-poster" src={POSTER.src} srcSet={POSTER.srcSet} sizes={POSTER.sizes} alt="" decoding="async" />
      {/* No poster attribute: until its first frame the video is transparent and the image above shows through. */}
      <video
        ref={videoRef}
        className="hero-demo-video"
        muted
        loop
        playsInline
        preload="none"
        aria-label="A physician at his laptop, then a walkthrough of the HealthCredSTAT credentialing portal: see every provider's status, invite a provider, the provider completes their file, and it is sent to committee."
      />
      {/* The video ends on a "free quote" call to action; this is the real, clickable one. */}
      <a href="#contact" className="hero-demo-cta">
        Get a free quote <Icon name="arrow" />
      </a>
    </div>
  );
};

export default HeroDemo;
