// Joins the homepage hero video: real footage of a physician typing on a laptop, a zoom into the screen, the portal
// walkthrough (frames from portal-render.mjs) on a clean background, then a physician smiling to camera.
//   FFMPEG=<ffmpeg exe> node compose.mjs <workDir> <intro.mp4> <outro.mp4>
// <workDir> holds frames/ (from portal-render.mjs), bg.png (1920x1080 background) and chip-end.png (ending caption,
// 1920x1080 with transparency). Clips used today, both Pexels (free licence, no attribution required):
//   intro: https://www.pexels.com/video/man-in-white-lab-coat-using-a-laptop-5030437/
//   outro: https://www.pexels.com/video/female-doctor-posing-on-camera-7904584/
// Outputs story.mp4, story.webm and poster.png in <workDir>.
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const [dir, intro, outro] = process.argv.slice(2);
const FPS = 25;
const PORTAL = 20; // seconds of portal frames
const INTRO = 3.6, OUTRO = 3.0, OUTRO_START = 5.6, ZOOM = 0.7, FADE = 0.6;
const total = INTRO + PORTAL - ZOOM + OUTRO - FADE;
const fit = `fps=${FPS},scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1`;

const graph = [
  // Intro: a gentle push-in on the physician typing, then a crossfade into the portal
  `[0:v]trim=1:${1 + INTRO},setpts=PTS-STARTPTS,${fit},scale=w='2*trunc(960*(1+0.15*t/${INTRO}))':h=-2:eval=frame,crop=1920:1080:x='(iw-ow)*0.75':y='(ih-oh)*0.7',setsar=1[intro]`,
  // Portal: rendered frames over the clean background
  `[1:v]fps=${FPS},setsar=1[bg]`,
  `[bg][2:v]overlay=0:0:shortest=1,format=yuv420p,setsar=1[portal]`,
  // Outro with its caption fading in
  `[3:v]trim=${OUTRO_START}:${OUTRO_START + OUTRO},setpts=PTS-STARTPTS,${fit}[o]`,
  `[4:v]format=rgba,fade=t=in:st=0.4:d=0.5:alpha=1[chip]`,
  `[o][chip]overlay=0:0:shortest=1,format=yuv420p,setsar=1[outro]`,
  `[intro][portal]xfade=transition=fade:duration=${ZOOM}:offset=${INTRO - ZOOM}[a]`,
  `[a][outro]xfade=transition=fade:duration=${FADE}:offset=${INTRO - ZOOM + PORTAL - FADE},`
    + `fade=t=in:st=0:d=0.3:color=white,fade=t=out:st=${(total - 0.4).toFixed(2)}:d=0.4:color=white,scale=1600:900,format=yuv420p[v]`,
].join(';');

const inputs = [
  '-i', intro,
  '-loop', '1', '-framerate', String(FPS), '-t', String(PORTAL), '-i', path.join(dir, 'bg.png'),
  '-framerate', String(FPS), '-i', path.join(dir, 'frames', 'f%04d.png'),
  '-i', outro,
  '-loop', '1', '-framerate', String(FPS), '-t', String(OUTRO), '-i', path.join(dir, 'chip-end.png'),
  '-filter_complex', graph, '-map', '[v]', '-an',
];

function ffmpeg(args) {
  return new Promise((resolve, reject) => {
    const p = spawn(process.env.FFMPEG, ['-y', '-loglevel', 'error', ...args], { stdio: ['ignore', 'ignore', 'pipe'] });
    let err = '';
    p.stderr.on('data', (d) => (err += d));
    p.on('close', (code) => (code === 0 ? resolve() : reject(new Error(err.slice(-3000)))));
  });
}

await ffmpeg([...inputs, '-c:v', 'libx264', '-preset', 'slow', '-crf', '26', '-profile:v', 'high', '-movflags', '+faststart', path.join(dir, 'story.mp4')]);
await ffmpeg([...inputs, '-c:v', 'libvpx-vp9', '-crf', '38', '-b:v', '0', '-row-mt', '1', '-deadline', 'good', '-cpu-used', '2', path.join(dir, 'story.webm')]);
// Poster: the finished, committee-ready file
await ffmpeg(['-ss', String(INTRO - ZOOM + 15.2), '-i', path.join(dir, 'story.mp4'), '-frames:v', '1', path.join(dir, 'poster.png')]);
console.log(`total ${total.toFixed(1)} s`);
for (const f of ['story.mp4', 'story.webm']) console.log(f, (fs.statSync(path.join(dir, f)).size / 1024).toFixed(0) + ' KB');
