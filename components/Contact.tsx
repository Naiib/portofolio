import { t, type Language } from "./Language";
import Icon from "./Icon";

const contactLinks = [
  {
    label: "WhatsApp",
    icon: "whatsapp" as const,
    brand: "whatsapp",
    value: "+62 856-9991-702",
    href: "https://wa.me/628569991702",
    detail: { id: "Chat langsung", en: "Send a message" },
  },
  {
    label: "Email",
    icon: "gmail" as const,
    brand: "gmail",
    value: "naqibmhtd@gmail.com",
    href: "mailto:naqibmhtd@gmail.com",
    detail: { id: "Untuk kerja sama dan pertanyaan", en: "For inquiries and collaborations" },
  },
  {
    label: "LinkedIn",
    icon: "linkedin" as const,
    brand: "linkedin",
    value: "linkedin.com/in/naqibmhtd",
    href: "https://linkedin.com/in/naqibmhtd",
    detail: { id: "Terhubung secara profesional", en: "Connect professionally" },
  },
  {
    label: "GitHub",
    icon: "github" as const,
    brand: "github",
    value: "github.com/naqibmhtd",
    href: "https://github.com/naqibmhtd",
    detail: { id: "Lihat repositori dan proyek", en: "Explore repositories and projects" },
  },
  {
    label: "Instagram",
    icon: "instagram" as const,
    brand: "instagram",
    value: "@naiib_mhtd",
    href: "https://instagram.com/naiib_mhtd",
    detail: { id: "Ikuti aktivitas saya", en: "Follow along" },
  },
];

export default function Contact({ language }: { language: Language }) {
  return (
    <section id="contact" className="section">
      <div className="page-container contact-content">
        <div className="contact-intro">
          <p className="eyebrow eyebrow-with-icon">
            <Icon name="mail" />
            {t(language, "Mari Terhubung", "Get in Touch")}
          </p>
          <h2>
            {t(language, "Punya ide? Mari buat sesuatu yang berarti.", "Have an idea? Let’s make something meaningful.")}
          </h2>
          <p>{t(language, "Ceritakan kebutuhanmu—saya terbuka untuk proyek, kolaborasi kreatif, dan kesempatan baru.", "Tell me what you have in mind. I’m open to projects, creative collaborations, and new opportunities.")}</p>
          <a className="button button-primary contact-cta" href="mailto:naqibmhtd@gmail.com">
            {t(language, "Mulai lewat email", "Start with an email")}<Icon name="arrow" />
          </a>
          <span className="contact-footnote">{t(language, "Pilih kanal yang paling nyaman untukmu.", "Choose whichever channel works best for you.")}</span>
        </div>
        <div className="contact-links">
          {contactLinks.map((contact, index) => (
            <a
              className={`contact-card contact-card-${contact.brand}`}
              href={contact.href}
              key={contact.label}
              target={contact.href.startsWith("https://") ? "_blank" : undefined}
              rel={contact.href.startsWith("https://") ? "noreferrer" : undefined}
            >
              <span className="contact-card-number">0{index + 1}</span>
              <span className={`contact-card-icon brand-${contact.brand}`}><Icon name={contact.icon} /></span>
              <span className="contact-card-copy">
                <strong>{contact.label}</strong>
                <span>{contact.value}</span>
                <small>{contact.detail[language]}</small>
              </span>
              <span className="contact-card-arrow"><Icon name="arrow" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
