import Image from "next/image";
import { t, type Language } from "./Language";
import Icon from "./Icon";

const profileImage = "/profile/naqib.jpg";

export default function Hero({ language }: { language: Language }) {
  const ticker = [
    t(language, "Desain dengan tujuan", "Design with intent"),
    t(language, "Pengalaman digital", "Digital experiences"),
    t(language, "Identitas visual", "Visual identity"),
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-inner">
        <div className="page-container hero-content">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-with-icon">
              <Icon name="sparkle" />{t(language, "Halo, saya Naqib", "Hello, I’m Naqib")}
            </p>
            <h1>UI/UX Designer<br /><span>&amp; Graphic Designer</span></h1>
            <p className="hero-description">
              {t(language,
                "Saya merancang produk digital yang mudah dipahami dan visual yang punya karakter—dari alur pertama sampai detail akhirnya.",
                "I shape digital products that feel clear and visuals with character—from the first user flow to the final detail.")}
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                {t(language, "Jelajahi Karya", "Explore Work")}<Icon name="arrow" />
              </a>
              <a className="button button-secondary" href="#contact">{t(language, "Mulai Kolaborasi", "Let’s Collaborate")}</a>
              <a className="button button-secondary" href="/resume.pdf" download="Muhammad-Naqib-Muhtadi-CV.pdf">
                {t(language, "Unduh CV", "Download CV")}<Icon name="arrow" />
              </a>
            </div>
            <p className="hero-location">
              <Icon name="pin" className="hero-location-icon" />
              {t(language, "Tangerang, Indonesia · Terbuka untuk kesempatan", "Tangerang, Indonesia · Open to opportunities")}
            </p>
          </div>

          <div className="profile-visual">
            <span className="profile-index" aria-hidden="true">01 / 04</span>
            <div className="profile-portrait">
              {profileImage ? (
                <Image src={profileImage} alt={t(language, "Foto profil Muhammad Naqib Muhtadi", "Muhammad Naqib Muhtadi’s profile photo")} fill priority sizes="(max-width: 700px) 72vw, 360px" />
              ) : (
                <div className="profile-placeholder">
                  <span aria-hidden="true">NM</span>
                  <small>{t(language, "Foto profil menyusul", "Profile photo coming soon")}</small>
                </div>
              )}
            </div>
            <div className="profile-caption">
              <span className="profile-status" aria-hidden="true" />
              <span>UI/UX &amp; Graphic Design</span><span className="profile-caption-location">Tangerang, ID</span>
            </div>
          </div>
        </div>
        <div className="hero-marquee" aria-hidden="true">
          <div className="hero-marquee-track">
            {[...ticker, ...ticker].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<i /></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
