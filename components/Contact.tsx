"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const contactLinks = [
  {
    label: "Email",
    value: "naqibmhtd@gmail.com",
    href: "mailto:naqibmhtd@gmail.com",
    gradient: "from-navy-600 to-navy-700",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    stroke: true,
  },
  {
    label: "WhatsApp",
    value: "+62 851-7993-1702",
    href: "https://wa.me/6285179931702",
    gradient: "from-emerald-500 to-green-600",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    stroke: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/naqibmhtd",
    href: "https://linkedin.com/in/naqibmhtd",
    gradient: "from-blue-500 to-blue-700",
    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
    stroke: false,
  },
  {
    label: "GitHub",
    value: "github.com/naqibmhtd",
    href: "https://github.com/naqibmhtd",
    gradient: "from-slate-700 to-slate-900",
    icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />,
    stroke: false,
  },
];

type FormState = { name: string; email: string; subject: string; message: string };
type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // Simulate async submission — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [key]: e.target.value }));
      if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
    },
  });

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50/70 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-25 dark:opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-teal-100/30 to-navy-100/20 dark:from-teal-900/10 dark:to-navy-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <AnimatedSection className="min-w-0">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Let&apos;s Connect</p>
            <h2 className="section-title">
              Available for{" "}
              <span className="gradient-text">Data Analyst</span> Roles
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-md mx-auto text-[0.95rem]">
              Currently seeking internship and full-time opportunities. Open to discussing projects, collaborations, or just connecting.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: Contact links + CTA ── */}
          <AnimatedSection className="min-w-0">
            <div className="space-y-3 mb-8">
              {contactLinks.map((c, i) => (
                <a key={i} href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                    {c.stroke ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>{c.icon}</svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{c.icon}</svg>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{c.label}</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">{c.value}</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-navy-500 dark:group-hover:text-teal-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Available banner */}
            <div className="bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-10" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available Now
                </div>
                <p className="text-white font-bold text-lg mb-1">Ready to turn your data into decisions</p>
                <p className="text-navy-300 text-sm leading-relaxed">Internship, full-time, or freelance — I&apos;m open to all meaningful data opportunities.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right: Contact form ── */}
          <AnimatedSection className="min-w-0" delay={150}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-7 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-slate-50 text-lg mb-5 flex items-center gap-2">
                <span className="h-5 w-1 rounded bg-gradient-to-b from-navy-600 to-teal-500" />
                Send a Message
              </h3>

              {/* Success toast */}
              {status === "success" && (
                <div className="mb-5 flex items-start gap-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-4">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Message sent!</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-500 mt-0.5">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="Full Name" error={errors.name}>
                    <input type="text" placeholder="Muhammad Naqib" className={inputCls(!!errors.name)} {...field("name")} />
                  </FormField>
                  <FormField label="Email Address" error={errors.email}>
                    <input type="email" placeholder="you@email.com" className={inputCls(!!errors.email)} {...field("email")} />
                  </FormField>
                </div>
                <FormField label="Subject" error={errors.subject}>
                  <input type="text" placeholder="Data Analyst Internship Opportunity" className={inputCls(!!errors.subject)} {...field("subject")} />
                </FormField>
                <FormField label="Message" error={errors.message}>
                  <textarea rows={4} placeholder="Tell me about the role or project..." className={`${inputCls(!!errors.message)} resize-none`} {...field("message")} />
                </FormField>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-navy-700 to-navy-800 hover:from-navy-600 hover:to-navy-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

const inputCls = (hasError: boolean) =>
  `w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition-colors ${
    hasError
      ? "border-rose-400 dark:border-rose-600 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-900/40"
      : "border-slate-200 dark:border-slate-700 focus:border-navy-400 dark:focus:border-navy-600 focus:ring-2 focus:ring-navy-100 dark:focus:ring-navy-900/40"
  }`;

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-xs text-rose-500 dark:text-rose-400 mt-1">{error}</p>}
    </div>
  );
}
