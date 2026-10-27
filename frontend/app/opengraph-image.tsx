import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

// Social share card (LinkedIn, Facebook, X, Slack, iMessage) — 1200×630 as platforms expect.
export const alt = 'HealthCredSTAT — medical credentialing and payer enrollment services';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), 'public', 'healthcredstat-logo-white.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 96px',
          background: 'linear-gradient(135deg, #07192f 0%, #062459 60%, #0a3a8f 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={526} height={132} alt="" />
        <div style={{ marginTop: 48, fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 980 }}>
          Medical credentialing &amp; payer enrollment services
        </div>
        <div style={{ marginTop: 24, fontSize: 30, color: '#6fe0da' }}>
          Get providers credentialed, in-network, and billing sooner.
        </div>
      </div>
    ),
    size,
  );
}
