"use client";

import { useEffect, useState } from "react";

export default function ScrollUI() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setShowTop(scrollTop > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar — fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-navy-600 via-teal-500 to-teal-400 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-8 right-6 z-50 h-11 w-11 rounded-xl bg-navy-700 dark:bg-navy-600 text-white shadow-lg shadow-navy-300/40 dark:shadow-navy-900/60 flex items-center justify-center transition-all duration-300 hover:bg-navy-600 hover:-translate-y-1 ${
          showTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
