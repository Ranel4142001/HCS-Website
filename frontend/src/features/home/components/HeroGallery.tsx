import React from 'react';
import Icon from '@/shared/components/ui/Icon';
import './HeroGallery.css';

/*
 * Homepage banner: three photos that tell the credentialing story, from the specialist doing the work to a
 * provider ready to see patients. Photos are from Unsplash (free for commercial use, no attribution required):
 *   specialist: Vitaly Gariev  https://unsplash.com/photos/jRk1o9KbmV4
 *   review:     Nappy          https://unsplash.com/photos/DbCfSrTnflA
 *   provider:   Vitaly Gariev  https://unsplash.com/photos/XqMo4OlBnh0
 * Files in public/media/hero are WebP copies at two widths; replace them to swap a photo.
 */

const CHECKS = ['State medical license', 'DEA registration', 'Board certification', 'NPDB query'];

interface PhotoProps {
  name: 'specialist' | 'review' | 'provider';
  widths: [small: number, large: number];
  /** Rendered width of the photo at each layout, so the browser downloads the right file. */
  sizes: string;
  alt: string;
}

function Photo({ name, widths: [small, large], sizes, alt }: PhotoProps) {
  return (
    // The photos are already compressed WebP at two widths, so next/image's resizing service isn't needed.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="hero-gallery-img"
      src={`/media/hero/${name}-${large}.webp`}
      srcSet={`/media/hero/${name}-${small}.webp ${small}w, /media/hero/${name}-${large}.webp ${large}w`}
      sizes={sizes}
      alt={alt}
      decoding="async"
    />
  );
}

export const HeroGallery: React.FC = () => (
  <div className="hero-gallery">
    <figure className="hero-gallery-tile hero-gallery-tile--main">
      <Photo
        name="specialist"
        widths={[960, 1600]}
        sizes="(max-width: 720px) 100vw, 66vw"
        alt="A credentialing specialist verifying a provider's file on her laptop"
      />
      <figcaption className="hero-gallery-card">
        <p className="hero-gallery-card-title">
          <Icon name="shield" /> Primary source verification
        </p>
        <ul>
          {CHECKS.map((check) => (
            <li key={check}>
              <span>{check}</span>
              <span className="hero-gallery-ok"><Icon name="check" /> Verified</span>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>

    <figure className="hero-gallery-tile">
      <Photo
        name="review"
        widths={[560, 900]}
        sizes="(max-width: 720px) 50vw, 33vw"
        alt="Two clinicians reviewing a credentialing file together on a tablet"
      />
      <figcaption className="hero-gallery-pill">Specialist review</figcaption>
    </figure>

    <figure className="hero-gallery-tile">
      <Photo
        name="provider"
        widths={[560, 900]}
        sizes="(max-width: 720px) 50vw, 33vw"
        alt="A smiling physician, credentialed and ready to see patients"
      />
      <figcaption className="hero-gallery-pill hero-gallery-pill--done">
        <Icon name="check" /> Committee-ready
      </figcaption>
    </figure>
  </div>
);

export default HeroGallery;
