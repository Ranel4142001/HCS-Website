import Link from 'next/link';
import { buildMetadata } from '@/shared/lib/seo';

// Holding page until the client portal is live. Once NEXT_PUBLIC_PORTAL_URL is set, every
// "Sign in" link goes straight to the portal and this page is no longer linked.
export const metadata = buildMetadata({
  title: 'Client sign in',
  description: 'Sign in to the HealthCredSTAT client portal.',
  path: '/sign-in',
  noindex: true,
});

export default function SignInPage() {
  return (
    <main>
      <section className="sol-hero">
        <div className="container sol-hero-inner">
          <h1 className="sol-hero-title">Client sign in</h1>
          <p className="sol-hero-tagline">
            The HealthCredSTAT client portal is opening soon. When your account is ready, we will email you a link to
            sign in. Until then, your credentialing specialist sends status updates by email.
          </p>
          <div className="sol-hero-cta">
            <Link href="/contact" className="btn-sol-primary">Contact your specialist</Link>
            <Link href="/" className="btn-sol-ghost">Go to the homepage</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
