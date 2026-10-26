import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';

// Lives outside the (marketing) group, so it renders the site chrome itself.
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="sol-hero">
          <div className="container sol-hero-inner">
            <h1 className="sol-hero-title">We can&apos;t find that page</h1>
            <p className="sol-hero-tagline">
              The link may be out of date, or the page may have moved. These are good places to start.
            </p>
            <div className="sol-hero-cta">
              <Link href="/" className="btn-sol-primary">Go to the homepage</Link>
              <Link href="/services" className="btn-sol-ghost">See our services</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
