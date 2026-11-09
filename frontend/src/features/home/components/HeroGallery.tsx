'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/shared/components/ui/Icon';
import './HeroGallery.css';

/*
 * Homepage banner: an 18-second story video about why fast credentialing matters. Captions, the verification card
 * and the "Specialist review" / "Committee-ready" labels follow the video's own clock, so they stay in step with
 * each scene.
 *
 * Media in public/media/hero (all free for commercial use, no attribution required):
 *   story.webm / story.mp4: six Pexels clips edited into one loop, in this order
 *     https://www.pexels.com/video/woman-talking-to-the-receptionist-4487290/
 *     https://www.pexels.com/video/man-in-white-lab-coat-using-a-laptop-5030437/
 *     https://www.pexels.com/video/a-female-doctor-smiling-while-looking-at-a-medical-chart-7579336/
 *     https://www.pexels.com/video/a-female-doctor-with-a-digital-tablet-6010957/
 *     https://www.pexels.com/video/male-doctors-sharing-ideas-at-work-6130022/
 *     https://www.pexels.com/video/female-doctor-posing-on-camera-7904584/
 *   review-*.webp:   Unsplash, Nappy          https://unsplash.com/photos/DbCfSrTnflA
 *   provider-*.webp: Unsplash, Vitaly Gariev  https://unsplash.com/photos/XqMo4OlBnh0
 *
 * Browsers cache these files by address: bump VERSION whenever a file is replaced, and update SCENES / the timings
 * below if the edit changes.
 */

const VERSION = '2';
const VIDEO = { webm: `/media/hero/story.webm?v=${VERSION}`, mp4: `/media/hero/story.mp4?v=${VERSION}` };
const POSTER = `/media/hero/story-poster.webp?v=${VERSION}`;

/** One caption per scene; each scene starts `SCENE_SECONDS` after the previous one. */
const SCENES = [
  { kicker: 'New provider hired', line: 'They can’t see patients until credentialing is done.' },
  { kicker: 'Waiting costs you', line: 'A provider who isn’t credentialed is a cost without revenue.' },
  { kicker: 'We take it from here', line: 'Your dedicated specialist gathers every document.' },
  { kicker: 'Primary source verification', line: 'License, DEA, boards and NPDB, all checked.' },
  { kicker: 'No stalled files', line: 'Source follow-ups handled by our team.' },
  { kicker: 'Ready sooner', line: 'Verified faster, so revenue starts sooner.' },
];
const SCENE_SECONDS = 3;

const CHECKS = ['State medical license', 'DEA registration', 'Board certification', 'NPDB query'];
/** Video time (seconds) at which each check turns to Verified: during the document and verification scenes. */
const CHECK_AT = [6.6, 7.9, 9.4, 10.7];
/** The card shows during the document and verification scenes, where the top-left of the frame is clear. */
const CARD_FROM = 5.8;
const CARD_UNTIL = 12.4;
const REVIEW_AT = 12.2; // scene 5
const READY_AT = 15.2; // scene 6

/** Everything shown at a moment of the video. `null` means the finished state (no video, or reduced motion). */
function storyAt(time: number | null) {
  if (time === null) return { scene: SCENES.length - 1, card: true, verified: CHECKS.length, review: true, ready: true };
  return {
    scene: Math.min(Math.floor(time / SCENE_SECONDS), SCENES.length - 1),
    card: time >= CARD_FROM && time < CARD_UNTIL,
    verified: CHECK_AT.filter((t) => time >= t).length,
    review: time >= REVIEW_AT,
    ready: time >= READY_AT,
  };
}

function Photo({ name, alt }: { name: 'review' | 'provider'; alt: string }) {
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
  // Starts finished, so the first paint (and anyone who prefers reduced motion) shows the whole story.
  const [time, setTime] = useState<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Follow the video's clock a few times a second; React skips re-renders when nothing visible changes.
    const onTime = () => setTime(video.currentTime);
    video.addEventListener('timeupdate', onTime);

    // Play only while the banner is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return video.pause();
      if (!video.src) video.src = video.canPlayType('video/webm') ? VIDEO.webm : VIDEO.mp4;
      video.play().catch(() => {});
    });

    // The video isn't part of the first page load: it's fetched once the page has finished loading.
    const start = () => observer.observe(root);
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => {
      window.removeEventListener('load', start);
      video.removeEventListener('timeupdate', onTime);
      observer.disconnect();
    };
  }, []);

  const story = storyAt(time);
  const caption = SCENES[story.scene];

  return (
    <div className="hero-gallery" ref={rootRef}>
      <figure className="hero-gallery-tile hero-gallery-tile--main">
        <video
          ref={videoRef}
          className="hero-gallery-img"
          poster={POSTER}
          muted
          loop
          playsInline
          preload="none"
          aria-label="Short video: a clinic welcomes a new provider, documents are reviewed and verified, and a credentialed physician is ready to see patients."
        />

        {/* key restarts the fade-in each time the scene changes */}
        <div className="hero-gallery-caption" key={story.scene}>
          <p className="hero-gallery-kicker">{caption.kicker}</p>
          <p className="hero-gallery-line">{caption.line}</p>
        </div>

        <div className={`hero-gallery-card ${story.card ? 'is-on' : ''}`}>
          <p className="hero-gallery-card-title">
            <Icon name="shield" /> Primary source verification
          </p>
          <div className="hero-gallery-progress" aria-hidden="true">
            <span style={{ width: `${(story.verified / CHECKS.length) * 100}%` }} />
          </div>
          <ul>
            {CHECKS.map((check, i) => {
              const done = i < story.verified;
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
        </div>
      </figure>

      <figure className="hero-gallery-tile">
        <Photo name="review" alt="Two clinicians reviewing a credentialing file together on a tablet" />
        <figcaption className={`hero-gallery-pill ${story.review ? 'is-on' : ''}`}>Specialist review</figcaption>
      </figure>

      <figure className="hero-gallery-tile">
        <Photo name="provider" alt="A smiling physician, credentialed and ready to see patients" />
        <figcaption className={`hero-gallery-pill hero-gallery-pill--done ${story.ready ? 'is-on' : ''}`}>
          <Icon name="check" /> Committee-ready
        </figcaption>
      </figure>
    </div>
  );
};

export default HeroGallery;
