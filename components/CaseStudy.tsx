"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import CountUp from "./CountUp";

const metrics = [
  {
    label: "Total Customers",
    value: 95000,
    prefix: "",
    suffix: "K",
    decimals: 0,
    displayDivisor: 1000,
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    color: "from-navy-600 to-navy-700",
    trend: "+12.4% YoY",
    trendUp: true,
  },
  {
    label: "Total Orders",
    value: 99000,
    prefix: "",
    suffix: "K",
    decimals: 0,
    displayDivisor: 1000,
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    color: "from-teal-500 to-teal-600",
    trend: "+8.7% QoQ",
    trendUp: true,
  },
  {
    label: "Total Revenue",
    value: 15.84,
    prefix: "R$",
    suffix: "M",
    decimals: 2,
    displayDivisor: 1,
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "from-violet-500 to-purple-600",
    trend: "+21.3% YoY",
    trendUp: true,
  },
  {
    label: "One-Time Buyers",
    value: 96.9,
    prefix: "",
    suffix: "%",
    decimals: 1,
    displayDivisor: 1,
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    color: "from-rose-500 to-red-600",
    trend: "⚠ Critical KPI",
    trendUp: false,
  },
];

const barData = [42, 58, 51, 73, 65, 80, 75, 88, 72, 95, 83, 99];
const monthLabels = ["J","F","M","A","M","J","J","A","S","O","N","D"];

const processSteps = [
  { step: "01", title: "Data Collection", desc: "Merged 9 Olist CSV datasets — orders, customers, products, reviews, payments, geolocation.", color: "bg-navy-600" },
  { step: "02", title: "Data Cleaning", desc: "Handled nulls, duplicates, type mismatches, and outliers across 100K+ records.", color: "bg-teal-500" },
  { step: "03", title: "EDA & Analysis", desc: "Identified retention crisis (96.9% one-time buyers) and revenue seasonality patterns.", color: "bg-violet-500" },
  { step: "04", title: "Visualization", desc: "Built interactive Power BI dashboard with real-time KPIs and retention metrics.", color: "bg-emerald-500" },
];

export default function CaseStudy() {
  const maxBar = Math.max(...barData);

  return (
    <section id="case-study" className="py-24 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-navy-100/30 to-teal-100/15 dark:from-navy-900/15 dark:to-teal-900/8 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* ── Header ── */}
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <p className="section-label">Featured Case Study</p>
              <span className="text-xs bg-navy-100 dark:bg-navy-900/50 text-navy-700 dark:text-navy-300 px-2.5 py-0.5 rounded-full font-medium border border-navy-200 dark:border-navy-800">
                STAR Method
              </span>
              <span className="text-xs bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 px-2.5 py-0.5 rounded-full font-medium border border-teal-200 dark:border-teal-800">
                Capstone Project
              </span>
            </div>
            <h2 className="section-title max-w-3xl">
              E-Commerce Sales &{" "}
              <span className="gradient-text">Customer Behavior</span> Analysis
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-2xl text-[0.95rem]">
              Brazilian E-Commerce Olist Dataset — Uncovering a critical retention crisis hidden beneath positive revenue growth.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Metric Cards ── */}
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {metrics.map((m) => (
              <MetricCard key={m.label} metric={m} barData={barData} maxBar={maxBar} />
            ))}
          </div>
        </AnimatedSection>

        {/* ── Process Steps ── */}
        <AnimatedSection delay={150}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {processSteps.map((p) => (
              <div key={p.step} className="project-card bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className={`h-6 w-6 rounded-md ${p.color} text-white text-xs font-black flex items-center justify-center flex-shrink-0`}>{p.step}</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{p.title}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── STAR Report + Charts ── */}
        <div className="grid lg:grid-cols-5 gap-6">

          {/* STAR Report */}
          <AnimatedSection className="min-w-0 lg:col-span-3" delay={200}>
            <div className="project-card bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden h-full flex flex-col">
              {/* Header bar */}
              <div className="bg-gradient-to-r from-navy-700 to-navy-800 px-6 py-4 flex items-center justify-between flex-shrink-0">
                <div>
                  <p className="text-navy-300 text-[10px] font-semibold tracking-widest uppercase">Business Intelligence Report</p>
                  <h3 className="text-white font-bold text-base mt-0.5">Olist E-Commerce Analysis</h3>
                </div>
                <div className="text-right">
                  <p className="text-navy-400 text-[10px] uppercase tracking-wide">Dataset Period</p>
                  <p className="text-white text-sm font-bold">2016 – 2018</p>
                </div>
              </div>

              {/* STAR body */}
              <div className="p-6 space-y-4 flex-1">
                <StarBlock letter="S" label="Situation" accent="border-slate-300 dark:border-slate-600" bg="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  Analyzed the Olist Brazilian e-commerce dataset comprising <strong>95K customers</strong>, <strong>99K orders</strong>, and <strong>R$15.84M revenue</strong> across 27 states and dozens of product categories.
                </StarBlock>
                <StarBlock letter="T" label="Task" accent="border-blue-200 dark:border-blue-800" bg="bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300">
                  Identify growth drivers and hidden risks. Deliver actionable insights for improving customer retention, increasing CLV, and reducing over-dependency on new customer acquisition.
                </StarBlock>
                <StarBlock letter="A" label="Action" accent="border-teal-200 dark:border-teal-800" bg="bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300">
                  Conducted full EDA across 9 merged datasets. Discovered that <strong className="text-rose-600 dark:text-rose-400">96.9% of customers never returned</strong>. Proposed 3 strategic interventions:
                  <ul className="mt-2 space-y-1">
                    {["🎯 Loyalty Programs — reward and incentivize repeat purchases", "📢 Retargeting Campaigns — re-engage dormant segments via email/ads", "📦 Product Bundling — increase average order value per transaction"].map(item => (
                      <li key={item} className="text-xs text-slate-600 dark:text-slate-400">{item}</li>
                    ))}
                  </ul>
                </StarBlock>
                <StarBlock letter="R" label="Result" accent="border-violet-200 dark:border-violet-800" bg="bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300">
                  Delivered a <strong>real-time Power BI dashboard</strong> monitoring all KPIs and a structured retention strategy report. Positioned stakeholders to stabilize long-term revenue growth.
                </StarBlock>

                {/* Action links */}
                <div className="flex flex-wrap gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <a href="https://github.com/naqibmhtd" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-semibold hover:opacity-80 transition-opacity">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C8.422 10.39 7.633 10.02 7.633 10.02c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    GitHub Repo
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-navy-200 dark:border-navy-700 text-navy-700 dark:text-navy-300 text-sm font-semibold hover:bg-navy-50 dark:hover:bg-navy-900/30 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    View Dashboard / PDF
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Charts panel */}
          <AnimatedSection className="min-w-0 lg:col-span-2" delay={300}>
            <div className="space-y-4 h-full flex flex-col">

              {/* Bar chart */}
              <div className="project-card bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Monthly Orders</p>
                    <p className="text-base font-bold text-slate-900 dark:text-slate-50 mt-0.5">Volume Trend</p>
                  </div>
                  <span className="text-xs bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 px-2.5 py-0.5 rounded-full font-medium">
                    ↑ Growing
                  </span>
                </div>
                <AnimatedBarChart data={barData} maxVal={maxBar} />
                <div className="flex justify-between mt-1.5">
                  {monthLabels.map((m, i) => (
                    <span key={i} className="text-[9px] text-slate-400 dark:text-slate-600 flex-1 text-center">{m}</span>
                  ))}
                </div>
              </div>

              {/* Retention donut */}
              <div className="project-card bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide mb-3">Customer Retention Split</p>
                <div className="flex items-center gap-5">
                  <RetentionDonut />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400 flex-shrink-0" />
                      <span className="text-xs text-slate-700 dark:text-slate-300"><strong>96.9%</strong> One-time buyers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-teal-500 flex-shrink-0" />
                      <span className="text-xs text-slate-700 dark:text-slate-300"><strong>3.1%</strong> Returning buyers</span>
                    </div>
                    <p className="text-xs font-bold text-rose-600 dark:text-rose-400 mt-1">⚠ Critical Retention Issue</p>
                  </div>
                </div>
              </div>

              {/* Tech stack */}
              <div className="project-card bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl p-5">
                <p className="text-navy-300 text-[10px] font-semibold mb-3 uppercase tracking-widest">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Pandas", "Matplotlib", "Seaborn", "SQL", "Power BI", "Jupyter", "DAX"].map((t) => (
                    <span key={t} className="text-xs bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded-lg font-medium transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ── */

function MetricCard({ metric, barData, maxBar }: { metric: typeof metrics[0]; barData: number[]; maxBar: number }) {
  return (
    <div className="metric-card project-card group">
      <div className="flex items-start justify-between mb-3">
        <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center text-white shadow-sm`}>
          <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d={metric.icon} />
          </svg>
        </div>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${metric.trendUp ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400" : "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400"}`}>
          {metric.trend}
        </span>
      </div>
      <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-50 tabular-nums leading-none mb-1">
        <CountUp
          end={metric.value}
          prefix={metric.prefix}
          suffix={metric.suffix}
          decimals={metric.decimals}
          duration={1600}
        />
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{metric.label}</p>
      <div className="mt-3 flex items-end gap-0.5 h-7">
        {barData.slice(-8).map((v, i) => (
          <div key={i} className={`flex-1 rounded-sm bg-gradient-to-t ${metric.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
            style={{ height: `${(v / maxBar) * 100}%` }} />
        ))}
      </div>
    </div>
  );
}

function AnimatedBarChart({ data, maxVal }: { data: number[]; maxVal: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-end gap-1 h-28">
      {data.map((v, i) => (
        <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-navy-600 to-teal-500 opacity-80 hover:opacity-100 transition-all duration-700 ease-out"
          style={{ height: visible ? `${(v / maxVal) * 100}%` : "0%", transitionDelay: `${i * 40}ms` }}
          title={`${v}K orders`}
        />
      ))}
    </div>
  );
}

function RetentionDonut() {
  const ref = useRef<SVGCircleElement>(null);
  const [drawn, setDrawn] = useState(false);
  const circ = 2 * Math.PI * 30; // r=30
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setDrawn(true); obs.disconnect(); } }, { threshold: 0.3 });
    const el = document.querySelector("#retention-donut");
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="retention-donut" className="relative flex-shrink-0">
      <svg width="84" height="84" viewBox="0 0 84 84">
        {/* track */}
        <circle cx="42" cy="42" r="30" fill="none" stroke="#fecaca" strokeWidth="12" className="dark:stroke-rose-950" />
        {/* one-time buyers arc (rose) */}
        <circle ref={ref} cx="42" cy="42" r="30" fill="none" stroke="#f87171" strokeWidth="12"
          strokeDasharray={`${drawn ? (96.9 / 100) * circ : 0} ${circ}`}
          strokeDashoffset={circ * 0.25}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 1.2s ease-out" }}
          className="dark:stroke-rose-400"
        />
        {/* returning buyers arc (teal) */}
        <circle cx="42" cy="42" r="30" fill="none" stroke="#14b8a6" strokeWidth="12"
          strokeDasharray={`${drawn ? (3.1 / 100) * circ : 0} ${circ}`}
          strokeDashoffset={`${-(96.9 / 100) * circ + circ * 0.25}`}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 1.2s ease-out 0.3s" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[11px] font-black text-rose-600 dark:text-rose-400">96.9%</span>
      </div>
    </div>
  );
}

function StarBlock({ letter, label, accent, bg, children }: {
  letter: string; label: string; accent: string; bg: string; children: React.ReactNode;
}) {
  return (
    <div className={`border-l-4 ${accent} pl-4 py-0.5`}>
      <div className="flex items-center gap-2 mb-1.5">
        <span className={`h-6 w-6 rounded-md text-xs font-black flex items-center justify-center flex-shrink-0 ${bg}`}>{letter}</span>
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{label}</span>
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{children}</div>
    </div>
  );
}
