// Measures how fast the server answers each page listed in the sitemap.
// Run against the production build, not `npm run dev` (dev mode re-renders every page on each request):
//   terminal 1: npm run preview
//   terminal 2: npm run speed            (or: npm run speed -- http://localhost:3000)
const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const TARGET_MS = 150;
const RUNS = 3;

async function time(url) {
  const start = performance.now();
  const res = await fetch(url, { cache: 'no-store' });
  await res.arrayBuffer();
  return { ms: Math.round(performance.now() - start), status: res.status };
}

let sitemap;
try {
  sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
} catch {
  console.error(`Nothing is answering at ${base}. Start the site first with: npm run preview`);
  process.exit(1);
}
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

let slow = 0;
console.log(`Response times from ${base} (target: under ${TARGET_MS} ms)\n`);
for (const path of paths) {
  const times = [];
  let status = 0;
  for (let i = 0; i < RUNS; i++) ({ ms: times[i], status } = await time(base + path));
  const worst = Math.max(...times);
  if (worst >= TARGET_MS) slow++;
  console.log(`${worst < TARGET_MS ? 'OK  ' : 'SLOW'} ${path.padEnd(38)} ${times.map((t) => `${t} ms`).join('  ')}${status === 200 ? '' : `  (HTTP ${status})`}`);
}
console.log(`\n${paths.length - slow} of ${paths.length} pages under ${TARGET_MS} ms.`);
process.exit(slow ? 1 : 0);
