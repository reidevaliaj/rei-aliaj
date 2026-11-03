import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import {
  ArrowUpRightIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { ProjectVisual, SystemDiagram } from "@/components/project-visual";
import { SiteHeader } from "@/components/site-header";
import {
  caseStudies,
  contactDetails,
  expertiseAreas,
  experience,
  siteCopy,
  toolkit,
  type Locale,
} from "@/lib/site-data";

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p>{intro}</p>
    </div>
  );
}
export function PortfolioPage({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const home = locale === "de" ? "" : "/en";
  return (
    <main className="landing-stage" lang={locale} id="top">
      <SiteHeader locale={locale} />
      <section className="hero-section page-shell">
        <div className="hero-topline">
          <span className="availability-badge">
            <i />
            {copy.hero.status}
          </span>
          <span className="mono">TIRANA / REMOTE</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <h1>
              {copy.hero.headline[0]}
              <br />
              <span>{copy.hero.headline[1]}</span>
            </h1>
            <p className="hero-intro">{copy.hero.intro}</p>
            <div className="hero-actions">
              <a href="#work" className="button-primary">
                {copy.hero.workCta}
                <ArrowUpRightIcon />
              </a>
              <a href="#contact" className="text-link">
                {copy.hero.contactCta}
                <span>↗</span>
              </a>
            </div>
            <p className="hero-availability">{copy.hero.availability}</p>
          </div>
          <SystemDiagram locale={locale} />
        </div>
        <div className="hero-baseline">
          <span>{copy.hero.footnote}</span>
          <a href="#expertise">
            {locale === "de"
              ? "Engineering entdecken"
              : "Explore the engineering"}{" "}
            <span>↓</span>
          </a>
        </div>
      </section>
      <div className="focus-strip">
        <div className="page-shell">
          {copy.strip.map((item) => (
            <span key={item}>
              <i />
              {item}
            </span>
          ))}
        </div>
      </div>
      <section id="expertise" className="section-block page-shell">
        <SectionHeading {...copy.expertise} />
        <div className="expertise-grid">
          {expertiseAreas.map((area) => (
            <article className="expertise-card" key={area.number}>
              <span className="card-number">{area.number} /</span>
              <h3>{area.title[locale]}</h3>
              <p>{area.summary[locale]}</p>
              <div className="tags">
                {area.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="work" className="section-block work-section">
        <div className="page-shell">
          <SectionHeading {...copy.work} />
          <div className="project-grid">
            {caseStudies.map((study, index) => (
              <article
                className={`project-card ${index === 0 ? "project-featured" : ""}`}
                key={study.slug}
              >
                <Link
                  href={`${home}/work/${study.slug}`}
                  className="project-visual-link"
                  aria-label={`${study.title} — ${copy.work.caseStudy}`}
                >
                  <ProjectVisual study={study} locale={locale} />
                </Link>
                <div className="project-card-body">
                  <div className="project-meta">
                    <span>{study.content[locale].category}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>
                    <Link href={`${home}/work/${study.slug}`}>
                      {study.title}
                    </Link>
                  </h3>
                  <p>{study.content[locale].cardResult}</p>
                  <div className="tags">
                    {study.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link
                    className="project-link"
                    href={`${home}/work/${study.slug}`}
                  >
                    {copy.work.caseStudy}
                    <ArrowUpRightIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="stack" className="section-block page-shell">
        <SectionHeading {...copy.toolkit} />
        <div className="toolkit-grid">
          {toolkit.map((group, index) => (
            <article key={group.title.en}>
              <span className="card-number">0{index + 1}</span>
              <h3>{group.title[locale]}</h3>
              <div className="toolkit-items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="process-section">
          <div className="process-heading">
            <p className="eyebrow">{copy.process.eyebrow}</p>
            <h3>{copy.process.title}</h3>
          </div>
          <ol className="process-grid">
            {copy.process.steps.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        id="experience"
        className="section-block page-shell experience-section"
      >
        <div className="experience-intro">
          <p className="eyebrow">{copy.experience.eyebrow}</p>
          <h2>{copy.experience.title}</h2>
          <p>{copy.experience.intro}</p>
          <span className="experience-stamp">CODE. CONNECT. AUTOMATE.</span>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={item.company}>
              <span className="experience-period mono">{item.period}</span>
              <h3>{item.company}</h3>
              <strong>{item.role[locale]}</strong>
              <p>{item.detail[locale]}</p>
              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="about" className="section-block about-section">
        <div className="page-shell about-grid">
          <div>
            <p className="eyebrow">{copy.about.eyebrow}</p>
            <h2>{copy.about.title}</h2>
            <div className="profile-signature">
              <span className="profile-monogram">
                RA<span>_</span>
              </span>
              <div>
                <strong>Rei Aliaj</strong>
                <span>AI Engineer & Automation Developer</span>
              </div>
            </div>
          </div>
          <div className="about-copy">
            {copy.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <dl className="about-details">
              {copy.about.details.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="section-block page-shell contact-section"
      >
        <div className="contact-copy">
          <p className="eyebrow">{copy.contact.eyebrow}</p>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.intro}</p>
          <p className="contact-note">{copy.contact.note}</p>
          <div className="contact-list">
            <a href={`mailto:${contactDetails.email}`}>
              <MailIcon />
              <span>{contactDetails.email}</span>
              <span>↗</span>
            </a>
            <a href={contactDetails.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
              <span>LinkedIn / Rei Aliaj</span>
              <span>↗</span>
            </a>
            <a
              href={contactDetails.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              <span>{contactDetails.whatsapp}</span>
              <span>↗</span>
            </a>
          </div>
        </div>
        <ContactForm
          locale={locale}
          email={contactDetails.email}
          whatsappNumber={contactDetails.whatsapp}
          whatsappHref={contactDetails.whatsappHref}
        />
      </section>
      <footer className="site-footer page-shell">
        <div>
          <strong>
            Rei Aliaj<span>_</span>
          </strong>
          <span>{copy.footer.role}</span>
        </div>
        <p>© {new Date().getFullYear()} Rei Aliaj</p>
        <a
          href="#top"
          aria-label={locale === "de" ? "Zurück nach oben" : "Back to top"}
        >
          ↑
        </a>
      </footer>
    </main>
  );
}
