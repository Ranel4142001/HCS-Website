// Pre-loads every page (and the files each page uses) into Vercel's CDN right after a deploy, so the first real
// visitor gets a cached copy (about 60–90 ms) instead of a fresh fetch from storage (about 500+ ms).
// The CDN keeps a copy per region, so this warms the region nearest to wherever it runs. GitHub Actions runs it
// after each production deploy (.github/workflows/warm-cache.yml), which covers the US, where clients are.
//   npm run warm                         (defaults to the production site)
//   npm run warm -- https://example.com
const base = (process.argv[2] || process.env.SITE_BASE_URL || 'https://hcs-website-ashen.vercel.app').replace(/\/$/, '');

async function get(url) {
  const start = performance.now();
  try {
    const res = await fetch(url, { headers: { 'user-agent': 'HealthCredSTAT cache warmer' } });
    const body = await res.text();
    return { ok: res.ok, status: res.status, cache: res.headers.get('x-vercel-cache') || '-', ms: Math.round(performance.now() - start), body };
  } catch (err) {
    return { ok: false, status: 0, cache: '-', ms: Math.round(performance.now() - start), body: '', error: String(err) };
  }
}

const sitemap = await get(`${base}/sitemap.xml`);
if (!sitemap.ok) {
  console.error(`Could not read ${base}/sitemap.xml (HTTP ${sitemap.status}). Is the site up?`);
  process.exit(1);
}
// The sitemap lists the public domain; keep only the paths and request them from `base`.
const paths = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

const assets = new Set();
let failed = 0;
console.log(`Warming ${paths.length} pages on ${base}\n`);
for (const path of paths) {
  const page = await get(base + path);
  if (!page.ok) failed++;
  // Same-origin files the page loads: scripts, styles, fonts, images and the hero poster
  for (const m of page.body.matchAll(/(?:src|href)="(\/(?:_next\/static|brand|media)\/[^"]+)"/g)) assets.add(m[1].replace(/&amp;/g, '&'));
  const again = await get(base + path);
  console.log(`${page.ok ? 'OK  ' : 'FAIL'} ${path.padEnd(58)} first ${String(page.ms).padStart(4)} ms (${page.cache})  then ${String(again.ms).padStart(4)} ms (${again.cache})`);
}

let assetMs = 0;
for (const asset of assets) assetMs += (await get(base + asset)).ms;
console.log(`\nWarmed ${assets.size} shared files in ${assetMs} ms.`);
if (failed) {
  console.error(`${failed} page(s) failed.`);
  process.exit(1);
}
