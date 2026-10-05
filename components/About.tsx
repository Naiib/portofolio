"use client";

import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "2+", label: "Years Learning Data", icon: "📅", color: "text-navy-600 dark:text-navy-400" },
  { value: "9",  label: "Datasets Merged",     icon: "🗂️", color: "text-teal-600 dark:text-teal-400" },
  { value: "95K+", label: "Customers Analyzed", icon: "👥", color: "text-violet-600 dark:text-violet-400" },
  { value: "R$15.8M", label: "Revenue Tracked", icon: "💰", color: "text-rose-600 dark:text-rose-400" },
];

const traits = [
  { icon: "🔍", title: "Curious by Nature",    desc: "I dig past surface-level numbers to find the 'why' behind the data." },
  { icon: "📊", title: "Storyteller First",     desc: "Every chart and dashboard I build is designed to communicate, not just display." },
  { icon: "🎯", title: "Business-Oriented",     desc: "Analysis without action is just trivia. I focus on insights that drive decisions." },
];

export default function About() {
  return (
    <section
      id="about-detail"
      className="py-24 px-6 bg-slate-50/70 dark:bg-slate-900/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-30 dark:opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-navy-50/90 to-teal-50/40 dark:from-navy-950/40 dark:to-teal-950/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── LEFT: Avatar + Stats ── */}
          <AnimatedSection>
            <div className="flex flex-col items-center lg:items-start gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="h-44 w-44 rounded-[2rem] bg-gradient-to-br from-navy-600 via-navy-700 to-teal-500 flex items-center justify-center shadow-2xl shadow-navy-200/60 dark:shadow-navy-900/60 relative overflow-hidden">
                  {/* decorative grid lines inside avatar */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="absolute w-full h-px bg-white" style={{ top: `${(i + 1) * 20}%` }} />
                    ))}
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="absolute h-full w-px bg-white" style={{ left: `${(i + 1) * 20}%` }} />
                    ))}
                  </div>
                  <span className="text-7xl font-black text-white select-none relative z-10">N</span>
                </div>
                {/* Open-to-work badge */}
                <div className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 px-3 py-1.5 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">Open to Work</span>
                </div>
                {/* Role chip */}
                <div className="absolute -top-3 -left-3 bg-gradient-to-r from-navy-700 to-navy-800 rounded-xl shadow-md px-3 py-1.5">
                  <span className="text-xs font-semibold text-white whitespace-nowrap">Data Analyst</span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200 dark:border-slate-700/60 p-4 text-center card-hover"
                  >
                    <div className="text-xl mb-1.5">{s.icon}</div>
                    <div className={`text-lg font-extrabold tabular-nums leading-none ${s.color}`}>
                      {s.value}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Social row */}
              <div className="flex items-center gap-3">
                {[
                  { href: "https://linkedin.com/in/naqibmhtd", label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { href: "https://github.com/naqibmhtd", label: "GitHub", path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="h-9 w-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-navy-600 dark:hover:text-teal-400 hover:border-navy-300 dark:hover:border-navy-700 transition-all shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={link.path} />
                    </svg>
                  </a>
                ))}
                <a
                  href="mailto:naqibmhtd@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 dark:text-teal-400 bg-navy-50 dark:bg-navy-950/50 border border-navy-200 dark:border-navy-800/60 px-3 py-2 rounded-xl hover:bg-navy-100 dark:hover:bg-navy-900/40 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Me
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* ── RIGHT: Bio ── */}
          <AnimatedSection delay={150}>
            <div>
              <p className="section-label mb-3">About Me</p>
              <h2 className="section-title mb-5">
                Turning messy data into{" "}
                <span className="gradient-text">clear decisions</span>
              </h2>

              <div className="space-y-4 text-[0.95rem] text-slate-600 dark:text-slate-400 leading-relaxed mb-7">
                <p>
                  Hi, I&apos;m{" "}
                  <strong className="text-slate-800 dark:text-slate-200 font-semibold">Muhammad Naqib Muhtadi</strong> —
                  an Informatics student at UIN Syarif Hidayatullah Jakarta with a focused passion for data analytics and business intelligence.
                </p>
                <p>
                  Currently completing a{" "}
                  <strong className="text-slate-800 dark:text-slate-200 font-semibold">Data Analyst Bootcamp</strong> at
                  Karirnex by Ebizmark, building hands-on expertise across the full analyst stack: Python, SQL, Power BI — applied
                  to real-world datasets like the Olist Brazilian e-commerce data.
                </p>
                <p>
                  My philosophy:{" "}
                  <em className="text-navy-600 dark:text-teal-400 not-italic font-semibold">
                    data without context is noise.
                  </em>{" "}
                  I build the complete pipeline — from raw ingestion and cleaning, through EDA and pattern discovery, to
                  interactive dashboards that stakeholders can act on.
                </p>
              </div>

              {/* Trait cards */}
              <div className="space-y-2.5">
                {traits.map((t) => (
                  <div
                    key={t.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-navy-200 dark:hover:border-navy-700/60 hover:shadow-sm transition-all"
                  >
                    <span className="text-xl flex-shrink-0 mt-0.5 leading-none">{t.icon}</span>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{t.title}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick CTAs */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#case-study"
                  className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  View Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#skills"
                  className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  See My Skills
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
