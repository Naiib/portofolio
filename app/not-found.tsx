import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Big 404 */}
        <div className="relative inline-block mb-8">
          <span className="text-[10rem] font-black leading-none text-transparent bg-gradient-to-br from-navy-100 to-teal-100 dark:from-navy-900/60 dark:to-teal-900/40 bg-clip-text select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-navy-600 to-teal-500 flex items-center justify-center shadow-xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 mb-3">
          Page not found
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to the portfolio.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-navy-700 to-navy-800 hover:from-navy-600 hover:to-navy-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm shadow-md transition-all hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Portfolio
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
