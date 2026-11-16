import { t, type Language } from "./Language";

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/628569991702" },
  { label: "LinkedIn", href: "https://linkedin.com/in/naqibmhtd" },
  { label: "GitHub", href: "https://github.com/naqibmhtd" },
  { label: "Instagram", href: "https://instagram.com/naiib_mhtd" },
  { label: "Email", href: "mailto:naqibmhtd@gmail.com" },
];

const year = new Date().getFullYear();

export default function Footer({ language }: { language: Language }) {
  return (
    <footer className="site-footer">
      <div className="page-container footer-content">
        <a className="portfolio-brand" href="#home">Naqib Muhtadi<span>.</span></a>
        <nav
          className="footer-socials"
          aria-label={t(language, "Media sosial", "Social media")}
        >
          {socialLinks.map((social) => (
            <a
              href={social.href}
              key={social.label}
              target={social.href.startsWith("https://") ? "_blank" : undefined}
              rel={social.href.startsWith("https://") ? "noreferrer" : undefined}
            >
              {social.label}
            </a>
          ))}
        </nav>
        <p>© {year} Muhammad Naqib Muhtadi</p>
      </div>
    </footer>
  );
}
