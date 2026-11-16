import { t, type Language } from "./Language";
import Icon from "./Icon";

const feedSlots = [
  { number: "01", category: { id: "Poster", en: "Poster" } },
  { number: "02", category: { id: "Identitas", en: "Identity" } },
  { number: "03", category: { id: "Kampanye", en: "Campaign" } },
  { number: "04", category: { id: "Editorial", en: "Editorial" } },
  { number: "05", category: { id: "Konten Sosial", en: "Social Content" } },
  { number: "06", category: { id: "Eksplorasi", en: "Exploration" } },
];

function ArtworkTile({ slot, index, language }: {
  slot: (typeof feedSlots)[number];
  index: number;
  language: Language;
}) {
  return (
    <div
      className={`artwork-tile artwork-tile-${index + 1}`}
      role="img"
      aria-label={`${slot.category[language]} ${t(language, "placeholder", "placeholder")} ${slot.number}`}
    >
      <span className="artwork-tile-number">{slot.number}</span>
      <span className="artwork-tile-shape" aria-hidden="true" />
      <span className="artwork-tile-category">{slot.category[language]}</span>
      <span className="artwork-tile-add" aria-hidden="true">+</span>
    </div>
  );
}

export default function GraphicDesignGallery({ language }: { language: Language }) {
  return (
    <section id="graphic-design" className="section graphic-gallery-section">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-with-icon">
              <Icon name="palette" />
              {t(language, "Desain Grafis", "Graphic Design")}
            </p>
            <h2>{t(language, "Karya visual, satu ruang.", "Visual work, in one place.")}</h2>
          </div>
          <p>
            {t(language, "Galeri bergaya feed dengan format potret 3:4—untuk poster, identitas, dan eksplorasi visual.", "A feed-inspired gallery in a 3:4 portrait format—for posters, identities, and visual explorations.")}
          </p>
        </div>

        <div className="social-gallery-layout">
          <div className="social-gallery-copy">
            <div className="social-gallery-kicker">
              <span>{t(language, "GALERI DESAIN", "DESIGN GALLERY")}</span>
              <span>01 — 06</span>
            </div>
            <h3>
              {t(language, "Cerita visual", "Visual stories")}{" "}
              <span>{t(language, "dalam setiap karya.", "in every frame.")}</span>
            </h3>
            <p>
              {t(language,
                "Kumpulan karya grafis dalam format potret yang siap menampung hasil desainmu. Pilih sebuah slot untuk menggantinya dengan karya asli saat sudah siap.",
                "A portrait-format collection ready for your graphic work. Replace any tile with an original piece whenever it is ready.")}
            </p>
            <div className="social-gallery-note">
              <span className="social-gallery-note-icon"><Icon name="camera" /></span>
              <span>
                <strong>{t(language, "Format potret 3:4", "3:4 portrait format")}</strong>
                <small>{t(language, "6 slot karya · siap diisi", "6 artwork slots · ready for your work")}</small>
              </span>
            </div>
          </div>

          <div className="creative-device-stage">
            <span className="creative-stage-label creative-stage-label-top" aria-hidden="true">
              VISUAL STUDIES / 01
            </span>
            <div className="laptop-mockup" role="group" aria-label={t(language, "Mockup laptop menampilkan enam karya grafis potret", "Laptop mockup displaying six portrait graphic pieces")}>
              <div className="laptop-bezel">
                <div className="laptop-screen">
                  <div className="artwork-grid">
                    {feedSlots.map((slot, index) => (
                      <ArtworkTile key={slot.number} slot={slot} index={index} language={language} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="laptop-base" aria-hidden="true"><span /></div>
            </div>
            <div className="phone-mockup" role="group" aria-label={t(language, "Mockup ponsel menampilkan satu karya format potret 3 banding 4", "Phone mockup displaying one 3-to-4 portrait artwork")}>
              <div className="phone-bezel">
                <div className="phone-screen">
                  <ArtworkTile slot={feedSlots[2]} index={2} language={language} />
                </div>
                <span className="phone-speaker" aria-hidden="true" />
              </div>
            </div>
            <span className="creative-stage-caption" aria-hidden="true">
              {t(language, "DESAIN · IDENTITAS · SOSIAL", "DESIGN · IDENTITY · SOCIAL")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
