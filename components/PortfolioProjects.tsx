"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { t, type Language } from "./Language";
import Icon from "./Icon";

type Bilingual = Record<Language, string>;
type ProjectLink = {
  href: string;
  label: Bilingual;
  download?: boolean;
};
type ProjectImage = {
  src: string;
  alt: Bilingual;
};
type PortfolioProject = {
  number: string;
  category: Bilingual;
  title: string;
  description: Bilingual;
  role: Bilingual;
  timelineLabel: Bilingual;
  timeline: Bilingual;
  deliverable: Bilingual;
  image?: string;
  imageAlt?: Bilingual;
  previewKind?: "sahabat" | "brand" | "committee";
  coverTitle?: Bilingual;
  coverSubtitle?: Bilingual;
  prototypeUrl?: string;
  gallery?: ProjectImage[];
  links: ProjectLink[];
};

const committeePhotos: ProjectImage[] = Array.from({ length: 7 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    src: `/projects/himti-committee/spm-${number}.png`,
    alt: {
      id: `Desain foto pengurus HIMTI ${number}`,
      en: `HIMTI committee portrait design ${number}`,
    },
  };
});

const projects: PortfolioProject[] = [
  {
    number: "01",
    category: { id: "UI/UX · Situs Web", en: "UI/UX · Website" },
    title: "HelloCation Korea",
    description: {
      id: "Menyusun ulang pengalaman website HelloCation agar informasi studi di Korea lebih terarah, mudah dipahami, dan nyaman dijelajahi.",
      en: "A website redesign that makes information about studying in Korea clearer, easier to understand, and more intuitive to explore.",
    },
    role: { id: "Redesign UI/UX", en: "UI/UX Redesign" },
    timelineLabel: { id: "Periode", en: "Period" },
    timeline: { id: "Sep 2025 — Jun 2026", en: "Sep 2025 — Jun 2026" },
    deliverable: { id: "Redesign situs web", en: "Website redesign" },
    image: "/projects/hellocation-hero.png",
    imageAlt: {
      id: "Pratinjau redesign website HelloCation Korea",
      en: "HelloCation Korea website redesign preview",
    },
    prototypeUrl: "https://www.figma.com/proto/qNZaFeMeZN755iVakKEs46/HelloCation---Batch-10?node-id=51-2&p=f&t=0KW0rafa9Hjqq3FY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=51%3A2&show-proto-sidebar=1",
    links: [],
  },
  {
    number: "02",
    category: { id: "UI/UX · Aplikasi Mobile", en: "UI/UX · Mobile App" },
    title: "Sahabat Ngaji",
    description: {
      id: "Merancang user flow, wireframe, dan UI high-fidelity untuk pembelajaran Al-Qur’an dan pelacakan ibadah, termasuk pembiasaan dan jadwal salat.",
      en: "Designed user flows, wireframes, and high-fidelity UI for Qur’an learning and worship tracking, including habit-building and prayer schedules.",
    },
    role: { id: "Desain UI/UX", en: "UI/UX Design" },
    timelineLabel: { id: "Program", en: "Program" },
    timeline: { id: "Proyek kelompok · GDGoC UIN Jakarta", en: "Group project · GDGoC UIN Jakarta" },
    deliverable: { id: "Konsep platform belajar", en: "Learning platform concept" },
    image: "/projects/sahabat-ngaji-welcome.png",
    imageAlt: {
      id: "Logo Sahabat Ngaji dan layar pembuka aplikasi",
      en: "Sahabat Ngaji logo and app welcome screen",
    },
    previewKind: "sahabat",
    prototypeUrl: "https://www.figma.com/proto/jwgokrqBHSMT2O08yWgRvm/UIUX-Group-16?page-id=0%3A1&node-id=33-916&viewport=549%2C188%2C0.47&t=j0upNeWdoioNSrAC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=33%3A916&show-proto-sidebar=1",
    links: [{
      href: "/projects/sahabat-ngaji-presentation.pdf",
      label: { id: "Lihat presentasi (PDF)", en: "View presentation (PDF)" },
    }],
  },
  {
    number: "03",
    category: { id: "Identitas Visual", en: "Visual Identity" },
    title: "HIMTI Brand Guidelines",
    description: {
      id: "Menyusun panduan identitas visual HIMTI agar penggunaan logo, warna, tipografi, dan tata letak tetap konsisten.",
      en: "Created HIMTI’s visual identity guide to keep logo use, color, typography, and layouts consistent.",
    },
    role: { id: "Desain identitas visual", en: "Visual identity design" },
    timelineLabel: { id: "Konteks", en: "Context" },
    timeline: { id: "HIMTI · UIN Jakarta", en: "HIMTI · UIN Jakarta" },
    deliverable: { id: "Panduan identitas", en: "Brand guidelines" },
    image: "/projects/himti-brand-guidelines-cover.svg",
    imageAlt: {
      id: "Sampul Brand Guideline Creative Media Department",
      en: "Creative Media Department Brand Guideline cover",
    },
    links: [{
      href: "/projects/himti-brand-guidelines.pdf",
      label: { id: "Buka Brand Guide (PDF)", en: "Open Brand Guide (PDF)" },
    }],
  },
  {
    number: "04",
    category: { id: "Desain Grafis · Fotografi", en: "Graphic Design · Photography" },
    title: "HIMTI Committee Photos",
    description: {
      id: "Merancang materi foto kepengurusan HIMTI dengan tata letak yang rapi dan selaras dengan identitas visual organisasi.",
      en: "Designed HIMTI committee photo materials with a clear layout aligned with the organization’s visual identity.",
    },
    role: { id: "Desain foto kepengurusan", en: "Committee photo design" },
    timelineLabel: { id: "Konteks", en: "Context" },
    timeline: { id: "HIMTI · UIN Jakarta", en: "HIMTI · UIN Jakarta" },
    deliverable: { id: "Materi foto pengurus", en: "Committee photo assets" },
    previewKind: "committee",
    image: committeePhotos[0].src,
    imageAlt: committeePhotos[0].alt,
    gallery: committeePhotos,
    links: [],
  },
];

export default function PortfolioProjects({ language }: { language: Language }) {
  const [committeeGalleryOpen, setCommitteeGalleryOpen] = useState(false);
  const galleryDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = galleryDialog.current;
    if (!dialog) return;

    if (committeeGalleryOpen && !dialog.open) dialog.showModal();
    if (!committeeGalleryOpen && dialog.open) dialog.close();
  }, [committeeGalleryOpen]);

  return (
    <section id="work" className="section section-muted">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-with-icon">
              <Icon name="layers" />
              {t(language, "Karya Terpilih", "Selected Work")}
            </p>
            <h2>{t(language, "Dari rancangan produk digital hingga identitas visual.", "From digital product design to visual identity.")}</h2>
          </div>
          <p>{t(language, "Setiap karya dimulai dari kebutuhan, lalu diwujudkan dengan tujuan yang jelas.", "Every project starts with a need and takes shape with a clear purpose.")}</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="portfolio-card" key={project.number}>
              <div className={`project-preview ${project.previewKind ? `project-preview--${project.previewKind}` : ""}`}>
                {project.gallery ? (
                  <div className="committee-preview" aria-hidden="true">
                    {project.gallery.slice(0, 2).map((photo, index) => (
                      <div className={`committee-preview-poster committee-preview-poster-${index + 1}`} key={photo.src}>
                        <Image src={photo.src} alt="" fill sizes="(max-width: 700px) 48vw, 22vw" />
                      </div>
                    ))}
                    <span className="committee-preview-count">07<br />WORKS</span>
                  </div>
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt?.[language] ?? ""}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                ) : (
                  <div className={`project-art project-art--${project.previewKind}`} aria-hidden="true">
                    <span>HIMTI · UIN JAKARTA</span>
                    <strong>{project.coverTitle?.[language]}</strong>
                    <small>{project.coverSubtitle?.[language]}</small>
                  </div>
                )}
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category"><Icon name="layers" />{project.category[language]}</span>
                  <span>{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <dl className="project-facts">
                  <div>
                    <dt>{t(language, "Peran", "Role")}</dt>
                    <dd>{project.role[language]}</dd>
                  </div>
                  {project.timeline && <div>
                    <dt>{project.timelineLabel[language]}</dt>
                    <dd>{project.timeline[language]}</dd>
                  </div>}
                  <div>
                    <dt>{t(language, "Hasil", "Deliverable")}</dt>
                    <dd>{project.deliverable[language]}</dd>
                  </div>
                </dl>
                <p>{project.description[language]}</p>
                <div className="project-links">
                  {project.prototypeUrl && (
                    <a className="text-link" href={project.prototypeUrl} target="_blank" rel="noreferrer">
                      {t(language, "Lihat prototipe", "View prototype")}<Icon name="arrow" />
                    </a>
                  )}
                  {project.gallery && (
                    <button className="text-link project-gallery-trigger" type="button" onClick={() => setCommitteeGalleryOpen(true)}>
                      {t(language, "Lihat 7 desain", "View all 7 designs")}<Icon name="arrow" />
                    </button>
                  )}
                  {project.links.map(({ href, label, download }) => (
                    <a
                      className="text-link"
                      href={href}
                      key={href}
                      download={download || undefined}
                      target={download ? undefined : "_blank"}
                      rel={download ? undefined : "noreferrer"}
                    >
                      {label[language]}<Icon name="arrow" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <dialog
        className="committee-gallery-dialog"
        ref={galleryDialog}
        aria-labelledby="committee-gallery-title"
        onClose={() => setCommitteeGalleryOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          setCommitteeGalleryOpen(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setCommitteeGalleryOpen(false);
        }}
      >
        <div className="committee-gallery-heading">
          <div>
            <p className="eyebrow">{t(language, "Karya HIMTI", "HIMTI Work")}</p>
            <h2 id="committee-gallery-title">{t(language, "Foto Kepengurusan", "Committee Portraits")}</h2>
          </div>
          <button type="button" className="committee-gallery-close" onClick={() => setCommitteeGalleryOpen(false)} aria-label={t(language, "Tutup galeri", "Close gallery")}>
            ×
          </button>
        </div>
        <div className="committee-gallery-grid">
          {committeePhotos.map((photo, index) => (
            <a href={photo.src} target="_blank" rel="noreferrer" key={photo.src} className="committee-gallery-item">
              <Image src={photo.src} alt={photo.alt[language]} fill sizes="(max-width: 700px) 45vw, 25vw" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </div>
      </dialog>
    </section>
  );
}
