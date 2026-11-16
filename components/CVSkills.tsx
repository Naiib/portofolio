import { t, type Language } from "./Language";
import Icon from "./Icon";

const skillGroups = [
  {
    title: { id: "Desain & Produksi", en: "Design & Production" },
    items: {
      id: [
        "Desain UI/UX", "Alur pengguna", "Wireframe & prototipe", "Desain web responsif",
        "Identitas visual", "Panduan merek", "Grafis media sosial", "Penyuntingan video",
        "Produksi live streaming",
      ],
      en: [
        "UI/UX Design", "User Flows", "Wireframing & Prototyping", "Responsive Web Design",
        "Visual Identity", "Brand Guidelines", "Social Media Graphics", "Video Editing",
        "Live Stream Production",
      ],
    },
  },
  {
    title: { id: "Perangkat", en: "Tools" },
    items: {
      id: ["Figma", "Adobe Photoshop", "Canva", "CapCut", "Microsoft Office"],
      en: ["Figma", "Adobe Photoshop", "Canva", "CapCut", "Microsoft Office"],
    },
  },
];

export default function CVSkills({ language }: { language: Language }) {
  return (
    <section id="skills" className="section skills-section">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-with-icon">
              <Icon name="layers" />
              {t(language, "Keahlian", "Skills")}
            </p>
            <h2>{t(language, "Dari ide awal hingga hasil akhir.", "From first idea to final detail.")}</h2>
          </div>
          <p>
            {t(language, "Fokus desain dan perangkat yang saya gunakan untuk membawa ide menjadi nyata.", "Design practices and tools I use to bring ideas to life.")}
          </p>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title.en}>
              <h3>{group.title[language]}</h3>
              <ul>
                {group.items[language].map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
