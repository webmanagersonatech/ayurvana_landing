import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | Wivana Ayurveda</title>
      </Head>
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-8xl font-serif text-sage/30 mb-4">404</div>
          <h1 className="font-serif text-3xl text-text-dark mb-3">Page not found</h1>
          <p className="text-text-muted mb-8">This page seems to have wandered off on its own wellness journey.</p>
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
}
