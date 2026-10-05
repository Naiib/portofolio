const year = new Date().getFullYear();

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Case Study", href: "#case-study" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/naqibmhtd",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "GitHub",
    href: "https://github.com/naqibmhtd",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    label: "Email",
    href: "mailto:naqibmhtd@gmail.com",
    path: null,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950">
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex h-8 w-8 rounded-lg bg-gradient-to-br from-navy-600 to-teal-500 items-center justify-center text-white text-sm font-black shadow-sm">
                N
              </span>
              <span className="font-bold text-slate-900 dark:text-slate-50 tracking-tight">
                Naqib<span className="text-navy-600 dark:text-teal-400">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[220px]">
              Data Analyst — turning raw data into strategic business insights.
            </p>
            {/* Status pill */}
            <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to Opportunities
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-navy-600 dark:hover:text-teal-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:naqibmhtd@gmail.com" className="text-sm text-slate-600 dark:text-slate-400 hover:text-navy-600 dark:hover:text-teal-400 transition-colors">
                  naqibmhtd@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/6285179931702" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-navy-600 dark:hover:text-teal-400 transition-colors">
                  +62 851-7993-1702
                </a>
              </li>
              <li className="text-sm text-slate-500 dark:text-slate-500">
                Jakarta, Indonesia 🇮🇩
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 dark:border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-600 text-center sm:text-left">
            © {year} Muhammad Naqib Muhtadi · Built with Next.js &amp; Tailwind CSS
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-navy-100 dark:hover:bg-navy-900/50 hover:text-navy-600 dark:hover:text-teal-400 transition-all"
              >
                {s.path ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
