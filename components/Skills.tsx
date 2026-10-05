"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const tools = [
  {
    category: "Languages & Libraries",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.14 12.936c.046-.31.07-.63.07-.936s-.024-.625-.07-.936l2.015-1.574a.48.48 0 0 0 .115-.609l-1.908-3.302a.477.477 0 0 0-.582-.21l-2.376.955a6.966 6.966 0 0 0-1.613-.936l-.357-2.524A.463.463 0 0 0 14.937 3h-3.815a.463.463 0 0 0-.46.404l-.357 2.524a6.966 6.966 0 0 0-1.613.936l-2.376-.955a.477.477 0 0 0-.582.21L3.826 9.421a.468.468 0 0 0 .115.609L5.956 11.604A7.04 7.04 0 0 0 5.887 12.5c0 .305.023.625.068.936l-2.015 1.574a.48.48 0 0 0-.115.609l1.908 3.302a.477.477 0 0 0 .582.21l2.376-.955c.5.357 1.045.661 1.613.936l.357 2.524c.058.238.277.404.46.404h3.815c.23 0 .432-.166.46-.404l.357-2.524a6.966 6.966 0 0 0 1.613-.936l2.376.955c.22.084.47 0 .582-.21l1.908-3.302a.468.468 0 0 0-.115-.609l-2.015-1.574zM12.03 15.469a3.469 3.469 0 1 1 0-6.938 3.469 3.469 0 0 1 0 6.938z"/>
      </svg>
    ),
    color: "from-blue-500 to-navy-600",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800/50",
    textColor: "text-blue-700 dark:text-blue-300",
    items: [
      { name: "Python",   detail: "Pandas, Matplotlib, Seaborn, NumPy", chip: "bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300" },
      { name: "SQL",      detail: "PostgreSQL, MySQL, Query Optimization", chip: "bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300" },
      { name: "Power BI", detail: "DAX, Data Modeling, Reports", chip: "bg-yellow-100 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-300" },
      { name: "Excel",    detail: "PivotTables, VLOOKUP, Charts", chip: "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300" },
    ],
  },
  {
    category: "Core Competencies",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "from-teal-500 to-teal-600",
    bgLight: "bg-teal-50",
    bgDark: "dark:bg-teal-950/30",
    borderColor: "border-teal-200 dark:border-teal-800/50",
    textColor: "text-teal-700 dark:text-teal-300",
    items: [
      { name: "Exploratory Data Analysis", detail: "Pattern discovery, hypothesis testing", chip: "bg-teal-100 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300" },
      { name: "Data Cleaning & Merging",   detail: "ETL pipelines, data normalization",    chip: "bg-sky-100 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300" },
      { name: "Customer Behavior Analysis",detail: "Segmentation, cohort analysis",        chip: "bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300" },
      { name: "Dashboard Development",     detail: "KPI tracking, executive reports",      chip: "bg-navy-100 dark:bg-navy-950/40 text-navy-700 dark:text-navy-300" },
    ],
  },
  {
    category: "Development Tools",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    bgDark: "dark:bg-violet-950/30",
    borderColor: "border-violet-200 dark:border-violet-800/50",
    textColor: "text-violet-700 dark:text-violet-300",
    items: [
      { name: "Jupyter Notebook", detail: "Interactive data exploration",    chip: "bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300" },
      { name: "Google Colab",     detail: "Cloud-based computation",        chip: "bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300" },
      { name: "Git & GitHub",     detail: "Version control, collaboration", chip: "bg-slate-200 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300" },
      { name: "VS Code",          detail: "Primary dev environment",        chip: "bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300" },
    ],
  },
];

const proficiencies = [
  { label: "Python (Pandas / Matplotlib)", value: 85 },
  { label: "SQL", value: 88 },
  { label: "Power BI", value: 80 },
  { label: "Data Visualization", value: 87 },
  { label: "EDA & Statistical Analysis", value: 83 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50/60 dark:bg-slate-900/40 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="section-label mb-3">Toolkit</p>
            <h2 className="section-title">
              Core Competencies &{" "}
              <span className="gradient-text">Technical Stack</span>
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">
              A focused set of tools and methodologies used to extract, analyze, and communicate data-driven insights.
            </p>
          </div>
        </AnimatedSection>

        {/* Tool cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {tools.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 120}>
              <div
                className={`rounded-2xl border p-6 h-full card-hover ${group.bgLight} ${group.bgDark} ${group.borderColor}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`h-9 w-9 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white`}
                  >
                    {group.icon}
                  </div>
                  <h3 className={`font-semibold text-sm ${group.textColor}`}>
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 flex-shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-md ${item.chip}`}>
                        {item.name.split(" ")[0]}
                      </span>
                      <div className="min-w-0">
                        <span className="block font-semibold text-slate-800 dark:text-slate-100 text-sm leading-tight">
                          {item.name}
                        </span>
                        <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                          {item.detail}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Proficiency bars */}
        <AnimatedSection delay={300}>
          <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-8">
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
              <span className="h-5 w-1 rounded bg-gradient-to-b from-navy-600 to-teal-500 inline-block" />
              Proficiency Overview
            </h3>
            <div className="space-y-4">
              {proficiencies.map((p, i) => (
                <ProficiencyBar key={p.label} {...p} delay={i * 100} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ProficiencyBar({
  label,
  value,
  delay,
}: {
  label: string;
  value: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setFilled(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
          {label}
        </span>
        <span className="text-xs font-semibold text-navy-600 dark:text-teal-400">
          {value}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-navy-600 to-teal-500 transition-all duration-1000 ease-out"
          style={{
            width: filled ? `${value}%` : "0%",
          }}
        />
      </div>
    </div>
  );
}
