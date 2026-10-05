"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Exploratory Data Analysis",
  "Customer Behavior Mapping",
  "Dashboard Development",
  "Business Intelligence",
  "Data-Driven Storytelling",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIdx((p) => (p + 1) % ROLES.length);
        setRoleVisible(true);
      }, 380);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950 pt-16"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 dot-pattern opacity-40 dark:opacity-15 pointer-events-none" />
      <div className="absolute -top-32 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-navy-100/50 to-teal-100/20 dark:from-navy-900/25 dark:to-teal-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-slate-100/80 to-navy-50/20 dark:from-slate-900/40 dark:to-navy-900/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── LEFT: Text Content ── */}
          <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-7"
              style={{ transitionDelay: "100ms" }}
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Data Analyst Internship&nbsp;/&nbsp;Roles
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-extrabold text-slate-900 dark:text-slate-50 leading-[1.08] tracking-tight mb-4">
              Muhammad{" "}
              <span className="gradient-text">Naqib</span>
              <br />
              Muhtadi
            </h1>

            {/* Role line */}
            <p className="text-lg md:text-xl font-semibold text-slate-600 dark:text-slate-300 mb-4 leading-snug">
              Data Analyst&nbsp;
              <span className="text-slate-300 dark:text-slate-600 font-light">|</span>&nbsp;
              Transforming Raw Data into<br className="hidden sm:block" /> Strategic Business Insights
            </p>

            {/* Animated specialty ticker */}
            <div className="flex items-center gap-2.5 h-7 mb-7">
              <span className="text-sm text-slate-400 dark:text-slate-500 select-none">Specializing in</span>
              <span
                className={`text-sm font-semibold text-navy-600 dark:text-teal-400 transition-all duration-300 ${
                  roleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
              >
                {ROLES[roleIdx]}
              </span>
            </div>

            {/* Value proposition */}
            <p className="text-[0.95rem] text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mb-9">
              Specializing in exploratory data analysis, data visualization, and customer behavior mapping using{" "}
              <strong className="text-slate-700 dark:text-slate-200">Python</strong>,{" "}
              <strong className="text-slate-700 dark:text-slate-200">SQL</strong>, and{" "}
              <strong className="text-slate-700 dark:text-slate-200">Power BI</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#case-study"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-navy-700 to-navy-800 hover:from-navy-600 hover:to-navy-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md shadow-navy-200/60 dark:shadow-navy-950/60 transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Explore Case Studies
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold px-6 py-3 rounded-xl hover:border-navy-300 dark:hover:border-navy-700 hover:bg-navy-50 dark:hover:bg-navy-900/20 transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-4 pb-8 border-b border-slate-100 dark:border-slate-800/80 mb-8">
              {[
                { href: "https://linkedin.com/in/naqibmhtd", label: "LinkedIn", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />, fill: true },
                { href: "https://github.com/naqibmhtd", label: "GitHub", icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />, fill: true },
                { href: "mailto:naqibmhtd@gmail.com", label: "Email", icon: null, fill: false },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-9 w-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-navy-100 dark:hover:bg-navy-900/50 hover:text-navy-600 dark:hover:text-teal-400 transition-colors"
                >
                  {s.fill && s.icon ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>

            {/* Proof stats */}
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { n: "95K+", label: "Customers Analyzed" },
                { n: "R$15.8M", label: "Revenue Tracked" },
                { n: "9", label: "Datasets Merged" },
                { n: "1", label: "Capstone Project" },
              ].map((s, i) => (
                <div key={i} className={`${i > 0 ? "pl-6 border-l border-slate-200 dark:border-slate-800" : ""}`}>
                  <p className="text-xl font-extrabold text-slate-900 dark:text-slate-50 tabular-nums leading-none">{s.n}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Dashboard card ── */}
          <div className={`relative hidden lg:block transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <DashboardCard />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-600 select-none pointer-events-none">
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-navy-400/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function DashboardCard() {
  const kpis = [
    { label: "Total Revenue", value: "R$15.84M", delta: "+21.3%", up: true },
    { label: "Total Orders", value: "99,441", delta: "+8.7%", up: true },
    { label: "Retention Rate", value: "3.1%", delta: "⚠ Low", up: false },
  ];
  const bars = [60, 72, 55, 85, 78, 92, 88, 100, 84, 96, 90, 99];

  return (
    <div className="relative">
      {/* Floating top-right badge */}
      <div className="absolute -top-4 -right-4 z-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg px-3 py-2 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Live Dashboard</span>
      </div>

      {/* Main window card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/40 dark:shadow-slate-950/60 overflow-hidden">
        {/* Title bar */}
        <div className="bg-gradient-to-r from-navy-800 to-navy-900 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div>
              <p className="text-navy-300 text-[10px] font-medium tracking-wide uppercase">Power BI</p>
              <p className="text-white text-xs font-bold leading-tight">Olist E-Commerce KPIs</p>
            </div>
          </div>
          <span className="text-navy-400 text-[10px] font-medium">2016 – 2018</span>
        </div>

        <div className="p-5 space-y-4">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2.5">
            {kpis.map((k) => (
              <div key={k.label} className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 border border-slate-100 dark:border-slate-700/40">
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mb-1">{k.label}</p>
                <p className="text-sm font-extrabold text-slate-900 dark:text-slate-50 tabular-nums leading-none">{k.value}</p>
                <span className={`text-[10px] font-semibold mt-1 block ${k.up ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>{k.delta}</span>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="bg-slate-50 dark:bg-slate-800/40 rounded-xl p-3.5 border border-slate-100 dark:border-slate-700/40">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Monthly Order Volume</p>
              <span className="text-[10px] text-teal-600 dark:text-teal-400 font-medium bg-teal-50 dark:bg-teal-950/40 px-2 py-0.5 rounded-full">↑ Trending</span>
            </div>
            <div className="flex items-end gap-1 h-16">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-[2px] bg-gradient-to-t from-navy-600 to-teal-400 hover:opacity-100 opacity-70 transition-opacity"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {["J","F","M","A","M","J","J","A","S","O","N","D"].map((m, i) => (
                <span key={i} className="text-[9px] text-slate-400 dark:text-slate-600 flex-1 text-center">{m}</span>
              ))}
            </div>
          </div>

          {/* Author row */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-navy-600 to-teal-500 flex items-center justify-center text-white text-[10px] font-black">N</div>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Naqib Muhtadi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-slate-400">Updated 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating insight chip */}
      <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-3 max-w-[190px]">
        <div className="flex items-start gap-2">
          <span className="text-base leading-none mt-0.5">🔍</span>
          <div>
            <p className="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wide">Key Insight</p>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5 leading-snug font-medium">
              96.9% customers are one-time buyers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
