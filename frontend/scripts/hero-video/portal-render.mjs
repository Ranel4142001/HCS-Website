// Renders portal-demo.html (the homepage hero) frame by frame and lays it over blurred office footage.
// The tools are not project dependencies; install them in a scratch folder and point the env vars at them:
//   npm i puppeteer-core@23.11.1 ffmpeg-static@5.2.0
//   CHROME=<chrome or chrome-headless-shell exe> FFMPEG=<ffmpeg exe> node portal-render.mjs <outDir> <background.mp4> [stills]
// The background is any calm, bright office clip (the current one is Pexels 8375665, free licence).
// Then run compose.mjs to add the opening and closing footage. Its story.mp4, story.webm and poster.png go to
// public/media/hero (poster as story-poster-720.webp and story-poster-1280.webp, WebP at those widths)
// and bump VERSION in src/features/home/components/HeroDemo.tsx.
import puppeteer from 'puppeteer-core';
import { spawn } from 'node:child_process';
import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const here = path.dirname(fileURLToPath(import.meta.url));
const [outDir, background, mode] = process.argv.slice(2);
const FPS = 25;
const W = 1600, H = 900;
fs.mkdirSync(path.join(outDir, 'frames'), { recursive: true });

const browser = await puppeteer.launch({ executablePath: process.env.CHROME, headless: 'shell', args: ['--hide-scrollbars', '--force-color-profile=srgb'] });
const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(path.join(here, 'portal-demo.html')).href, { waitUntil: 'networkidle0' });
const dur = await page.evaluate(() => window.DUR);

async function frame(t, file) {
  await page.evaluate((x) => window.render(x), t);
  await page.screenshot({ path: file, omitBackground: true });
}

if (mode === 'stills') {
  for (const t of [2.4, 6.9, 9.8, 12.8, 14.8, 17.5]) await frame(t, path.join(outDir, `still-${t}.png`));
  await browser.close();
  process.exit(0);
}

const total = Math.round(dur * FPS);
for (let f = 0; f < total; f++) await frame(f / FPS, path.join(outDir, 'frames', `f${String(f).padStart(4, '0')}.png`));
await browser.close();
console.log(`captured ${total} frames`);

function ffmpeg(args) {
  return new Promise((resolve, reject) => {
    const p = spawn(process.env.FFMPEG, ['-y', '-loglevel', 'error', ...args], { stdio: ['ignore', 'ignore', 'pipe'] });
    let err = '';
    p.stderr.on('data', (d) => (err += d));
    p.on('close', (code) => (code === 0 ? resolve() : reject(new Error(err.slice(-2000)))));
  });
}

// Background: soft-focus, slightly brightened office footage. Foreground: the rendered laptop with transparency.
const graph = `[0:v]trim=0:${dur},setpts=PTS-STARTPTS,fps=${FPS},scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,gblur=sigma=22,eq=brightness=0.04:saturation=0.85[bg];`
  + `[bg][1:v]overlay=0:0,scale=${W}:${H},format=yuv420p[v]`;
const inputs = ['-stream_loop', '-1', '-i', background, '-framerate', String(FPS), '-i', path.join(outDir, 'frames', 'f%04d.png'), '-filter_complex', graph, '-map', '[v]', '-an', '-t', String(dur)];
await ffmpeg([...inputs, '-c:v', 'libx264', '-preset', 'slow', '-crf', '26', '-profile:v', 'high', '-movflags', '+faststart', path.join(outDir, 'story.mp4')]);
await ffmpeg([...inputs, '-c:v', 'libvpx-vp9', '-crf', '38', '-b:v', '0', '-row-mt', '1', '-deadline', 'good', '-cpu-used', '2', path.join(outDir, 'story.webm')]);
await ffmpeg(['-ss', '15.2', '-i', path.join(outDir, 'story.mp4'), '-frames:v', '1', path.join(outDir, 'poster.png')]);
for (const f of ['story.mp4', 'story.webm']) console.log(f, (fs.statSync(path.join(outDir, f)).size / 1024).toFixed(0) + ' KB');
