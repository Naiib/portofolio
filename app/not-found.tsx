import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="mb-3 text-5xl font-semibold">This page isn’t here.</h1>
      <p className="mb-8 max-w-md text-slate-500">
        The page may have moved or the link may be incorrect. Return to the portfolio or get in touch.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link className="button button-primary" href="/">Back to portfolio</Link>
        <Link className="button button-secondary" href="/#contact">Contact me</Link>
      </div>
    </main>
  );
}
