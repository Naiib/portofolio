import { t, type Language } from "./Language";
import Icon from "./Icon";

export default function About({ language }: { language: Language }) {
  return (
    <section id="about" className="section">
      <div className="page-container about-layout">
        <div>
          <p className="eyebrow eyebrow-with-icon">
            <Icon name="user" />
            {t(language, "Tentang Saya", "About Me")}
          </p>
          <h2>
            {t(language, "Saya mengubah ide menjadi pengalaman yang terasa jelas.", "I turn ideas into experiences that feel clear.")}
          </h2>
        </div>
        <div className="about-copy">
          <p>
            {t(language,
              "Sebagai mahasiswa Teknik Informatika di UIN Jakarta, saya senang mempertemukan logika dan rasa visual. Saya merancang alur digital yang mudah dipahami, lalu menguatkannya dengan detail visual yang konsisten—mulai dari wireframe hingga identitas grafis.",
              "As an Informatics Engineering student at UIN Jakarta, I enjoy bringing logic and visual craft together. I design digital flows that feel easy to understand, then strengthen them with consistent visual details—from wireframes to graphic identity.")}
          </p>
          <div className="profile-facts">
            <div>
              <span><Icon name="layers" />{t(language, "Fokus", "Focus")}</span>
              <strong>UI/UX · Graphic Design</strong>
            </div>
            <div>
              <span><Icon name="graduation" />{t(language, "Pendidikan", "Education")}</span>
              <strong>
                {t(language,
                  "Teknik Informatika · UIN Jakarta · 2024—sekarang",
                  "Informatics Engineering · UIN Jakarta · 2024—present")}
              </strong>
            </div>
            <div>
              <span><Icon name="pin" />{t(language, "Lokasi", "Location")}</span>
              <strong>Tangerang, Indonesia</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
