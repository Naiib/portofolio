"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(stored === "dark" || (!stored && prefersDark));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-500"
      style={{ background: dark ? "#1a3ef5" : "#e2e8f0" }}
    >
      <span
        className="inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300"
        style={{ transform: dark ? "translateX(28px)" : "translateX(4px)" }}
      />
      <span className="absolute left-1.5 text-xs select-none" aria-hidden>
        {dark ? "" : "☀️"}
      </span>
      <span className="absolute right-1.5 text-xs select-none" aria-hidden>
        {dark ? "🌙" : ""}
      </span>
    </button>
  );
}
