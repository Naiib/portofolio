"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Case Study", href: "#case-study" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200/60 dark:border-slate-800/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="font-bold text-slate-900 dark:text-white tracking-tight text-lg flex items-center gap-2"
        >
          <span className="inline-flex h-7 w-7 rounded-lg bg-gradient-to-br from-navy-600 to-teal-500 items-center justify-center text-white text-xs font-black">
            N
          </span>
          <span>Naqib</span>
          <span className="text-navy-600 dark:text-teal-400">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = active === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "text-navy-700 dark:text-teal-400 bg-navy-50 dark:bg-navy-950/50"
                    : "text-slate-600 dark:text-slate-300 hover:text-navy-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-gradient-to-r from-navy-600 to-teal-500" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Mobile menu btn */}
          <button
            className="md:hidden text-slate-600 dark:text-slate-300 hover:text-navy-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = active === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-navy-700 dark:text-teal-400 bg-navy-50 dark:bg-navy-950/50"
                    : "text-slate-700 dark:text-slate-200 hover:text-navy-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
