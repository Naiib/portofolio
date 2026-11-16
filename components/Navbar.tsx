"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { t, type Language } from "./Language";

const navLinks: Record<Language, { label: string; href: string }[]> = {
  id: [
    { label: "Profil", href: "#about" },
    { label: "Keahlian", href: "#skills" },
    { label: "Pengalaman", href: "#experience" },
    { label: "Proyek", href: "#work" },
    { label: "Kontak", href: "#contact" },
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
};

type NavbarProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export default function Navbar({ language, onLanguageChange }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = navLinks[language];
  const menuLabel = mobileOpen
    ? t(language, "Tutup menu", "Close menu")
    : t(language, "Buka menu", "Open menu");

  return (
    <header className="site-header">
      <nav
        className="page-container nav-content"
        aria-label={t(language, "Navigasi utama", "Main navigation")}
      >
        <Link href="#home" className="portfolio-brand">Naqib Muhtadi<span>.</span></Link>

        <div className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <div
            className="language-switch"
            role="group"
            aria-label={language === "id" ? "Pilih bahasa" : "Choose language"}
          >
            {(["id", "en"] as const).map((option) => (
              <button
                key={option}
                type="button"
                lang={option}
                aria-pressed={language === option}
                onClick={() => onLanguageChange(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <ThemeToggle language={language} />
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={menuLabel}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-navigation" className="mobile-nav">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
