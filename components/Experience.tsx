import { t, type Language } from "./Language";
import Icon from "./Icon";

const experiences = [
  {
    period: "Feb 2025 — Mei 2025",
    company: "Growth Development Internship Program Batch 6",
    role: { id: "Graphic Designer", en: "Graphic Designer" },
    summary: {
      id: "Merancang 30+ materi visual untuk promosi digital dan presentasi program, serta membantu membangun identitas visual dengan mengikuti panduan merek.",
      en: "Designed 30+ visual materials for digital promotions and program presentations, and helped develop the visual identity while following brand guidelines.",
    },
    highlight: { id: "30+ materi visual", en: "30+ visual materials" },
    type: { id: "Pengalaman Magang", en: "Internship" },
  },
  {
    period: "Jul 2025 — Jul 2026",
    company: "Himpunan Mahasiswa Teknik Informatika (HIMTI) UIN Jakarta",
    role: { id: "Staf Desain Grafis", en: "Staff of Graphic Design" },
    summary: {
      id: "Membuat lebih dari 75 aset visual untuk acara dan publikasi digital, mengembangkan konten media sosial, serta menjaga konsistensi identitas HIMTI.",
      en: "Created over 75 visual assets for events and digital publications, developed social media content, and maintained HIMTI’s visual identity.",
    },
    highlight: { id: "75+ aset visual", en: "75+ visual assets" },
    type: { id: "Pengalaman Organisasi", en: "Organizational Experience" },
  },
  {
    period: "Sep 2025 — Jun 2026",
    company: "HelloCation Korea",
    role: { id: "IT Support", en: "IT Support" },
    summary: {
      id: "Berkontribusi pada perancangan ulang website HelloCation Korea agar informasi dan perjalanan pengguna terasa lebih jelas.",
      en: "Contributed to the HelloCation Korea website redesign, making its information and user journey clearer.",
    },
    highlight: { id: "Redesign situs web", en: "Website redesign" },
    type: { id: "Pengalaman Profesional", en: "Professional Experience" },
  },
];

export default function Experience({ language }: { language: Language }) {
  return (
    <section id="experience" className="section section-muted">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-with-icon">
              <Icon name="briefcase" />
              {t(language, "Pengalaman", "Experience")}
            </p>
            <h2>{t(language, "Pengalaman yang membentuk cara saya berkarya.", "Experiences that shape how I work.")}</h2>
          </div>
          <p>{t(language, "Dari kolaborasi organisasi hingga merancang solusi untuk kebutuhan nyata.", "From team initiatives to designing solutions for real needs.")}</p>
        </div>

        <div className="experience-roadmap">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={experience.company}>
              <div className="experience-marker" aria-hidden="true" />
              <div className="experience-date">
                <span className="experience-index">0{index + 1}</span>
                <p className="experience-period">{experience.period}</p>
              </div>
              <div className="experience-main">
                <div className="experience-heading">
                  <div>
                    <h3>{experience.role[language]}</h3>
                    <p className="experience-company">{experience.company}</p>
                  </div>
                  <span className="experience-type">{experience.type[language]}</span>
                </div>
                <p>{experience.summary[language]}</p>
                <span className="experience-highlight">{experience.highlight[language]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
