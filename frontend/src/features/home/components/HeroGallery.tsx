'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/shared/components/ui/Icon';
import './HeroGallery.css';

/*
 * Homepage banner: a short video of physicians at work, with a verification card that checks each primary source
 * one by one, then "Specialist review" and "Committee-ready" light up on the two photos beside it.
 *
 * Media in public/media/hero (all free for commercial use, no attribution required):
 *   story.webm / story.mp4: two Pexels clips edited into one 12-second loop
 *     https://www.pexels.com/video/man-in-white-lab-coat-using-a-laptop-5030437/
 *     https://www.pexels.com/video/a-senior-doctor-writing-on-a-clipboard-8375665/
 *   review-*.webp:   Unsplash, Nappy          https://unsplash.com/photos/DbCfSrTnflA
 *   provider-*.webp: Unsplash, Vitaly Gariev  https://unsplash.com/photos/XqMo4OlBnh0
 */

const VIDEO = { webm: '/media/hero/story.webm', mp4: '/media/hero/story.mp4' };
const CHECKS = ['State medical license', 'DEA registration', 'Board certification', 'NPDB query'];

// The story in steps: 0 = checking, 1–4 = each source verified, 5 = specialist review, 6 = committee-ready.
const REVIEW_STEP = CHECKS.length + 1;
const DONE_STEP = CHECKS.length + 2;
const STEP_MS = 1500;
// Hold the finished state for a few beats before starting again.
const HOLD_STEPS = 3;

interface PhotoProps {
  name: 'review' | 'provider';
  alt: string;
}

function Photo({ name, alt }: PhotoProps) {
  return (
    // The photos are already compressed WebP at two widths, so next/image's resizing service isn't needed.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="hero-gallery-img hero-gallery-img--drift"
      src={`/media/hero/${name}-900.webp`}
      srcSet={`/media/hero/${name}-560.webp 560w, /media/hero/${name}-900.webp 900w`}
      sizes="(max-width: 720px) 50vw, 33vw"
      alt={alt}
      decoding="async"
    />
  );
}

export const HeroGallery: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Starts finished, so the page (and anyone who prefers reduced motion) sees the whole story without the animation.
  const [step, setStep] = useState(DONE_STEP);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let tick = 0;
    let timer: number | undefined;
    const run = () => {
      setStep(Math.min(tick % (DONE_STEP + 1 + HOLD_STEPS), DONE_STEP));
      tick += 1;
    };

    // Play the video and the checklist only while the banner is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        video.pause();
        window.clearInterval(timer);
        timer = undefined;
        return;
      }
      if (!video.src) video.src = video.canPlayType('video/webm') ? VIDEO.webm : VIDEO.mp4;
      video.play().catch(() => {});
      if (timer === undefined) {
        run();
        timer = window.setInterval(run, STEP_MS);
      }
    });

    // The video isn't part of the first page load: it's fetched once the page has finished loading.
    const start = () => observer.observe(root);
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => {
      window.removeEventListener('load', start);
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, []);

  const verified = Math.min(step, CHECKS.length);

  return (
    <div className="hero-gallery" ref={rootRef}>
      <figure className="hero-gallery-tile hero-gallery-tile--main">
        <video
          ref={videoRef}
          className="hero-gallery-img"
          poster="/media/hero/story-poster.webp"
          muted
          loop
          playsInline
          preload="none"
          aria-label="A physician working on his laptop, and a senior physician writing notes at his desk"
        />
        <figcaption className="hero-gallery-card">
          <p className="hero-gallery-card-title">
            <Icon name="shield" /> Primary source verification
          </p>
          <div className="hero-gallery-progress" aria-hidden="true">
            <span style={{ width: `${(verified / CHECKS.length) * 100}%` }} />
          </div>
          <ul>
            {CHECKS.map((check, i) => {
              const done = i < verified;
              return (
                <li key={check} className={done ? 'is-done' : undefined}>
                  <span>{check}</span>
                  {done ? (
                    <span className="hero-gallery-ok"><Icon name="check" /> Verified</span>
                  ) : (
                    <span className="hero-gallery-pending"><span className="hero-gallery-dot" /> Checking</span>
                  )}
                </li>
              );
            })}
          </ul>
        </figcaption>
      </figure>

      <figure className="hero-gallery-tile">
        <Photo name="review" alt="Two clinicians reviewing a credentialing file together on a tablet" />
        <figcaption className={`hero-gallery-pill ${step >= REVIEW_STEP ? 'is-on' : ''}`}>
          Specialist review
        </figcaption>
      </figure>

      <figure className="hero-gallery-tile">
        <Photo name="provider" alt="A smiling physician, credentialed and ready to see patients" />
        <figcaption className={`hero-gallery-pill hero-gallery-pill--done ${step >= DONE_STEP ? 'is-on' : ''}`}>
          <Icon name="check" /> Committee-ready
        </figcaption>
      </figure>
    </div>
  );
};

export default HeroGallery;
