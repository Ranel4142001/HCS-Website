// Renders scene.html (the homepage hero loop) frame by frame and encodes MP4 + WebM + poster.
// The tools are not project dependencies; run it from a scratch folder holding a copy of this folder:
//   npm i puppeteer-core@23.11.1 ffmpeg-static@5.2.0
//   node render.mjs <outDir> [stills]      ("stills" writes a few PNGs only, for a quick look)
// Then copy hero-loop.mp4/.webm to public/media/ and convert poster.png to public/media/hero-loop-poster.webp.
// Expects Chrome at the default Windows path; change executablePath below elsewhere.
import puppeteer from 'puppeteer-core';
import ffmpegPath from 'ffmpeg-static';
import { spawn } from 'node:child_process';
import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.argv[2];
const stillsOnly = process.argv[3] === 'stills';
const FPS = 30;
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
  args: ['--hide-scrollbars', '--force-color-profile=srgb'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 960, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(path.join(here, 'scene.html')).href, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
const dur = await page.evaluate(() => window.DUR);

async function frameAt(t, type = 'jpeg') {
  await page.evaluate((x) => window.render(x), t);
  return page.screenshot(type === 'jpeg' ? { type, quality: 95 } : { type });
}

for (const t of [0.5, 4.2, 9.8, 12.5, 16.6]) {
  fs.writeFileSync(path.join(outDir, `still-${t}.png`), await frameAt(t, 'png'));
}
if (stillsOnly) { await browser.close(); process.exit(0); }

fs.writeFileSync(path.join(outDir, 'poster.png'), await frameAt(12.5, 'png'));

const frames = [];
const total = Math.round(dur * FPS);
for (let f = 0; f < total; f++) frames.push(await frameAt(f / FPS));
await browser.close();
console.log(`captured ${total} frames`);

function encode(args, file) {
  return new Promise((resolve, reject) => {
    const p = spawn(ffmpegPath, ['-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', ...args, path.join(outDir, file)], { stdio: ['pipe', 'ignore', 'pipe'] });
    let err = '';
    p.stderr.on('data', (d) => (err += d));
    p.on('close', (code) => (code === 0 ? resolve() : reject(new Error(err.slice(-2000)))));
    (async () => { for (const b of frames) if (!p.stdin.write(b)) await new Promise((r) => p.stdin.once('drain', r)); p.stdin.end(); })();
  });
}

await encode(['-c:v', 'libx264', '-preset', 'slow', '-crf', '24', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-movflags', '+faststart', '-an'], 'hero-loop.mp4');
await encode(['-c:v', 'libvpx-vp9', '-crf', '36', '-b:v', '0', '-row-mt', '1', '-deadline', 'good', '-cpu-used', '2', '-pix_fmt', 'yuv420p', '-an'], 'hero-loop.webm');
for (const f of ['hero-loop.mp4', 'hero-loop.webm']) console.log(f, (fs.statSync(path.join(outDir, f)).size / 1024).toFixed(0) + ' KB');
