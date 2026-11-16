"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CVSkills from "@/components/CVSkills";
import Experience from "@/components/Experience";
import PortfolioProjects from "@/components/PortfolioProjects";
import GraphicDesignGallery from "@/components/GraphicDesignGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Language } from "@/components/Language";

export default function Home() {
  const [language, setLanguage] = useState<Language>("id");

  useEffect(() => { document.documentElement.lang = language; }, [language]);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".hero-content, .section > .page-container, .site-footer .page-container",
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) { target.classList.add("is-visible"); observer.unobserve(target); }
    }), { threshold: 0.12 });
    targets.forEach((target) => { target.dataset.reveal = "true"; observer.observe(target); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        document.documentElement.style.setProperty("--scroll-progress", String(progress));
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <CVSkills language={language} />
      <Experience language={language} />
      <PortfolioProjects language={language} />
      <GraphicDesignGallery language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  );
}
