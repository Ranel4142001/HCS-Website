// Regenerates the display-sized logo copies and favicons in public/brand from the original artwork in public/.
// Run after replacing a logo file:  npm run brand-assets
// The originals are only read, never changed.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');
const outDir = path.join(publicDir, 'brand');

// Header/footer logos: one lossless WebP, 600px wide (the logo displays at ~190px). Measured against the
// original on 1x, 2x and 3x screens, 600px renders closest everywhere: the browser shrinks it in one step, as
// it did the original. Smaller copies looked softer because they get resampled twice. Browsers without WebP
// fall back to the original PNG (see src/shared/components/ui/BrandLogo.tsx).
const LOGOS = [
  ['healthcredstat-logo.png', 'healthcredstat-logo'],
  ['healthcredstat-logo-white.png', 'healthcredstat-logo-white'],
];
const LOGO_WIDTH = 600;

// Favicons: square canvases with the mark centered (the source mark is not square).
const ICONS = [
  ['icon-32.png', 32],
  ['icon-192.png', 192],
  ['apple-icon-180.png', 180],
];
const ICON_SOURCE = 'logo-mark.png';

fs.mkdirSync(outDir, { recursive: true });

for (const [source, name] of LOGOS) {
  await sharp(path.join(publicDir, source))
    .resize({ width: LOGO_WIDTH, kernel: 'lanczos3' })
    .webp({ lossless: true, effort: 6 })
    .toFile(path.join(outDir, `${name}-${LOGO_WIDTH}.webp`));
}

for (const [file, size] of ICONS) {
  await sharp(path.join(publicDir, ICON_SOURCE))
    .resize({ width: size, height: size, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 }, kernel: 'lanczos3' })
    // palette: false keeps full colour (sharp otherwise may reduce PNGs to 256 colours).
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toFile(path.join(outDir, file));
}

console.log(`Brand assets written to ${path.relative(process.cwd(), outDir) || outDir}`);
