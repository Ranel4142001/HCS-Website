import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ marginBottom: '2rem', color: '#666' }}>Page not found.</p>
      <Link href="/" style={{ color: 'var(--teal-600)', textDecoration: 'underline' }}>
        Return to Home
      </Link>
    </div>
  );
}
