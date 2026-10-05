"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const education = [
  {
    type: "certification",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: "from-navy-600 to-teal-500",
    badgeText: "Certified",
    badgeCls: "bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800",
    title: "Data Analyst Bootcamp",
    institution: "Karirnex by Ebizmark",
    period: "March 2026",
    level: "Intermediate Level",
    description:
      "Comprehensive data analytics program covering the full analyst workflow — from data extraction and cleaning, through statistical analysis, to business storytelling.",
    skills: ["Excel", "SQL", "Python", "Power BI", "EDA", "Dashboard Design"],
    highlights: [
      "Completed capstone project: Olist E-Commerce Analysis",
      "Analyzed 95K+ customers across 9 merged datasets",
      "Built real-time Power BI dashboard with DAX measures",
    ],
  },
  {
    type: "degree",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    badgeText: "Active",
    badgeCls: "bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800",
    title: "Informatics (S1)",
    institution: "UIN Syarif Hidayatullah Jakarta",
    period: "2022 – Present",
    level: "Undergraduate",
    description:
      "Bachelor's in Informatics Engineering — bridging computer science fundamentals with applied data-driven problem solving and software development.",
    skills: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering"],
    highlights: [
      "Core focus on data systems and algorithm design",
      "Applied OOP and database concepts to real projects",
      "Active in campus tech community and hackathons",
    ],
  },
];

const timelineItems = [
  {
    year: "2022",
    label: "Started Informatics at UIN Syarif Hidayatullah Jakarta",
    icon: "🎓",
    color: "from-violet-500 to-purple-600",
    status: "done",
  },
  {
    year: "2025",
    label: "Enrolled in Karirnex Data Analyst Bootcamp",
    icon: "📊",
    color: "from-navy-600 to-navy-700",
    status: "done",
  },
  {
    year: "2026",
    label: "Bootcamp Completion & Certification (Expected)",
    icon: "🏆",
    color: "from-teal-500 to-teal-600",
    status: "current",
  },
  {
    year: "2026+",
    label: "Open to Data Analyst Internship / Full-Time Roles",
    icon: "🚀",
    color: "from-emerald-500 to-emerald-600",
    status: "upcoming",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-25 dark:opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-violet-100/30 to-navy-100/20 dark:from-violet-900/10 dark:to-navy-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="section-label mb-3">Background</p>
            <h2 className="section-title">
              Education &{" "}
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-[0.95rem]">
              A structured foundation combining formal computer science education with industry-focused data analytics certification.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {education.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 150}>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden card-hover h-full flex flex-col">
                {/* Top gradient bar */}
                <div className={`h-1 bg-gradient-to-r ${item.color}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-sm`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-slate-50 leading-tight">{item.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{item.institution}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.badgeCls} flex-shrink-0 ml-2`}>
                      {item.badgeText}
                    </span>
                  </div>

                  {/* Meta pills */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      {item.level}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{item.description}</p>

                  {/* What I learned */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 mb-4 border border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Key Highlights</p>
                    <ul className="space-y-1.5">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <svg className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.skills.map((skill) => (
                      <span key={skill} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Animated Timeline */}
        <AnimatedSection delay={300}>
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-gradient-to-b from-navy-600 to-teal-500 inline-block" />
              Learning Journey
            </h3>

            {/* Horizontal timeline on md+, vertical on mobile */}
            <div className="hidden md:flex items-start gap-0 relative">
              {/* Connecting line */}
              <div className="absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-navy-200 via-teal-300 to-emerald-200 dark:from-navy-800 dark:via-teal-800 dark:to-emerald-900" />

              {timelineItems.map((item, i) => (
                <TimelineNode key={i} item={item} index={i} total={timelineItems.length} />
              ))}
            </div>

            {/* Mobile vertical */}
            <div className="md:hidden relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-navy-200 via-teal-300 to-transparent dark:from-navy-800 dark:via-teal-800" />
              <div className="space-y-6 pl-14">
                {timelineItems.map((item, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-9 h-4 w-4 rounded-full bg-gradient-to-br ${item.color} border-2 border-white dark:border-slate-900 shadow-sm ${item.status === "current" ? "ring-2 ring-teal-400/50" : ""}`} />
                    <span className="text-xs font-bold text-navy-600 dark:text-teal-400 block mb-0.5">{item.year}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TimelineNode({ item, index, total }: { item: typeof timelineItems[0]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), index * 120); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`flex-1 flex flex-col items-center text-center transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      {/* Node dot */}
      <div className={`relative z-10 h-10 w-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-lg shadow-md mb-4 ${item.status === "current" ? "ring-4 ring-teal-400/30 dark:ring-teal-500/20" : ""} ${item.status === "upcoming" ? "opacity-60" : ""}`}>
        {item.icon}
      </div>

      {/* Year */}
      <span className={`text-xs font-extrabold mb-1 ${item.status === "current" ? "text-teal-600 dark:text-teal-400" : "text-navy-600 dark:text-navy-400"}`}>
        {item.year}
      </span>

      {/* Label */}
      <p className={`text-xs leading-snug px-2 ${item.status === "upcoming" ? "text-slate-400 dark:text-slate-600" : "text-slate-600 dark:text-slate-400"}`}>
        {item.label}
      </p>

      {/* "Current" pill */}
      {item.status === "current" && (
        <span className="mt-2 inline-flex items-center gap-1 bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800/50 px-2 py-0.5 rounded-full text-[10px] font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
          In Progress
        </span>
      )}
      {item.status === "upcoming" && (
        <span className="mt-2 inline-flex items-center gap-1 text-slate-400 dark:text-slate-600 text-[10px] font-medium">
          ◦ Upcoming
        </span>
      )}
    </div>
  );
}
