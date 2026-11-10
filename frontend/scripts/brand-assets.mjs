// Regenerates the display-sized logo copies and favicons in public/brand from the original artwork in public/.
// Run after replacing a logo file:  npm run brand-assets
// The originals are only read, never changed.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');
const outDir = path.join(publicDir, 'brand');

// Header/footer logos: WebP at 240px for standard screens (the logo displays at ~190-230px, so the browser shrinks
// it once) and at the artwork's full 587px for high-density screens. Lossy at quality 90 with lossless-quality
// transparency: the edges stay clean and the files are a third to a quarter the size of lossless. Browsers
// without WebP fall back to the original PNG (see src/shared/components/ui/BrandLogo.tsx).
const LOGOS = [
  ['healthcredstat-logo.png', 'healthcredstat-logo'],
  ['healthcredstat-logo-white.png', 'healthcredstat-logo-white'],
];
const LOGO_WIDTHS = [240, 587];

// Favicons: square canvases with the mark centered (the source mark is not square).
const ICONS = [
  ['icon-32.png', 32],
  ['icon-192.png', 192],
  ['apple-icon-180.png', 180],
];
const ICON_SOURCE = 'logo-mark.png';

fs.mkdirSync(outDir, { recursive: true });

for (const [source, name] of LOGOS) {
  for (const width of LOGO_WIDTHS) {
    await sharp(path.join(publicDir, source))
      .resize({ width, kernel: 'lanczos3', withoutEnlargement: true })
      .webp({ quality: 90, alphaQuality: 100, effort: 6, smartSubsample: true })
      .toFile(path.join(outDir, `${name}-${width}.webp`));
  }
}

for (const [file, size] of ICONS) {
  await sharp(path.join(publicDir, ICON_SOURCE))
    .resize({ width: size, height: size, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 }, kernel: 'lanczos3' })
    // palette: false keeps full colour (sharp otherwise may reduce PNGs to 256 colours).
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toFile(path.join(outDir, file));
}

console.log(`Brand assets written to ${path.relative(process.cwd(), outDir) || outDir}`);
