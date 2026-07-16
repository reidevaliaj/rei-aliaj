import Image from "next/image";
import Link from "next/link";
import heroPortrait from "../../public/rei-aliaj2.png";

import { ContactForm } from "@/components/contact-form";
import {
  ArrowUpRightIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  SparkIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { SiteHeader } from "@/components/site-header";
import {
  caseStudies,
  contactDetails,
  expertiseAreas,
  experience,
  type Locale,
  siteCopy,
} from "@/lib/site-data";

type PortfolioPageProps = {
  locale: Locale;
};

const tracks = ["automation", "shopify", "wordpress"] as const;

function caseStudyPath(locale: Locale, slug: string) {
  return locale === "de" ? `/work/${slug}` : `/en/work/${slug}`;
}

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const copy = siteCopy[locale];

  return (
    <main className="landing-stage">
      <div className="ambient-layer" aria-hidden="true">
        <span className="ambient-orb ambient-orb-a ambient-one" />
        <span className="ambient-orb ambient-orb-b ambient-two" />
        <span className="ambient-orb ambient-orb-c ambient-three" />
        <span className="ambient-orb ambient-orb-a ambient-four" />
        <span className="ambient-orb ambient-orb-b ambient-five" />
        <span className="ambient-orb ambient-orb-c ambient-six" />
      </div>

      <SiteHeader locale={locale} />

      <section id="top" className="hero-section page-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="availability-badge fade-in-1">
              <span />
              {copy.hero.status}
            </div>
            <p className="eyebrow fade-in-1">{copy.hero.eyebrow}</p>
            <h1 className={`hero-title hero-title-${locale} fade-in-2`}>
              <span className="hero-name">Rei Aliaj</span>
              <span>{copy.hero.headline}</span>
            </h1>
            <p className="hero-intro fade-in-3">{copy.hero.intro}</p>
            <p className="hero-availability fade-in-3">{copy.hero.availability}</p>

            <div className="hero-mobile-portrait lg:hidden">
              <div className="portrait-glow" />
              <div className="hero-frame">
                <Image
                  src={heroPortrait}
                  alt="Rei Aliaj"
                  priority
                  unoptimized
                  sizes="92vw"
                  className="hero-portrait"
                />
              </div>
            </div>

            <div className="hero-actions fade-in-4">
              <a href="#work" className="button-primary">
                {copy.hero.workCta}
              </a>
              <a href="#contact" className="button-secondary">
                {copy.hero.contactCta}
              </a>
            </div>

            <div className="hero-stats fade-in-4">
              {copy.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-desktop-portrait">
            <div className="portrait-glow" />
            <div className="hero-frame">
              <div className="portrait-label">FULL-STACK / REMOTE</div>
              <Image
                src={heroPortrait}
                alt="Rei Aliaj"
                priority
                unoptimized
                sizes="46vw"
                className="hero-portrait"
              />
              <div className="portrait-footer">
                <span>PYTHON · SHOPIFY · WORDPRESS</span>
                <span>TIRANA / REMOTE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section-block page-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.expertise.eyebrow}</p>
            <h2>{copy.expertise.title}</h2>
          </div>
          <p>{copy.expertise.intro}</p>
        </div>

        <div className="expertise-grid">
          {expertiseAreas.map((area) => (
            <article className={`expertise-card expertise-${area.id}`} key={area.id}>
              <div className="expertise-topline">
                <span>{area.number}</span>
                <i />
              </div>
              <h3>{area.title[locale]}</h3>
              <p>{area.summary[locale]}</p>
              <ul>
                {area.capabilities[locale].map((capability) => (
                  <li key={capability}>
                    <SparkIcon className="h-4 w-4" />
                    {capability}
                  </li>
                ))}
              </ul>
              <div className="stack-list">
                {area.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-block page-shell">
        <div className="section-heading work-heading">
          <div>
            <p className="eyebrow">{copy.work.eyebrow}</p>
            <h2>{copy.work.title}</h2>
          </div>
          <p>{copy.work.intro}</p>
        </div>

        <div className="project-groups">
          {tracks.map((track) => {
            const area = expertiseAreas.find((item) => item.id === track);
            const projects = caseStudies.filter((study) => study.track === track);

            return (
              <div className="project-group" key={track}>
                <div className="project-group-label">
                  <span>{area?.number}</span>
                  <h3>{area?.title[locale]}</h3>
                  <i />
                </div>

                <div className="project-grid">
                  {projects.map((study) => {
                    const content = study.content[locale];

                    return (
                      <article className="project-card" key={study.slug}>
                        <Link href={caseStudyPath(locale, study.slug)} className="project-visual-link">
                          <ProjectVisual study={study} />
                        </Link>
                        <div className="project-card-body">
                          <div className="project-meta">
                            <span>{content.category}</span>
                            <span>{content.period}</span>
                          </div>
                          <h4>{study.title}</h4>
                          <p>{content.cardResult}</p>
                          <div className="project-stack">
                            {study.stack.slice(0, 4).map((item) => (
                              <span key={item}>{item}</span>
                            ))}
                          </div>
                          <div className="project-links">
                            <Link href={caseStudyPath(locale, study.slug)}>
                              {copy.work.caseStudy}
                              <ArrowUpRightIcon className="h-4 w-4" />
                            </Link>
                            {study.website ? (
                              <a href={study.website} target="_blank" rel="noreferrer">
                                {copy.work.live}
                              </a>
                            ) : (
                              <span>{copy.work.demo}</span>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="experience" className="section-block page-shell experience-section">
        <div className="experience-intro">
          <p className="eyebrow">{copy.experience.eyebrow}</p>
          <h2>{copy.experience.title}</h2>
          <p>{copy.experience.intro}</p>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`}>
              <div className="experience-marker" />
              <div>
                <span>{item.period}</span>
                <h3>{item.role[locale]}</h3>
                <strong>{item.company}</strong>
                <p>{item.detail[locale]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-block page-shell about-section">
        <div className="about-copy">
          <p className="eyebrow">{copy.about.eyebrow}</p>
          <h2>{copy.about.title}</h2>
          {copy.about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <div className="about-details">
          {copy.about.details.map((detail) => (
            <div key={detail.label}>
              <span>{detail.label}</span>
              <strong>{detail.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block page-shell">
        <div className="availability-panel">
          <div className="availability-copy">
            <p className="eyebrow">{copy.availability.eyebrow}</p>
            <h2>{copy.availability.title}</h2>
            <p>{copy.availability.intro}</p>
            <p className="availability-note">{copy.availability.note}</p>
          </div>
          <div className="availability-facts">
            {copy.availability.facts.map((fact) => (
              <div key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
            <a href="#contact" className="button-primary">
              {copy.hero.contactCta}
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section-block page-shell contact-section">
        <div className="contact-copy">
          <p className="eyebrow">{copy.contact.eyebrow}</p>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.intro}</p>
          <div className="contact-list">
            <a href={`mailto:${contactDetails.email}`}>
              <MailIcon className="h-5 w-5" />
              <span>{contactDetails.email}</span>
            </a>
            <a href={contactDetails.whatsappHref} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="h-5 w-5" />
              <span>{contactDetails.whatsapp}</span>
            </a>
            <a href={contactDetails.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon className="h-5 w-5" />
              <span>LinkedIn / Rei Aliaj</span>
            </a>
            <a href={contactDetails.mapsHref} target="_blank" rel="noreferrer">
              <MapPinIcon className="h-5 w-5" />
              <span>{contactDetails.address}</span>
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
          <strong>Rei Aliaj</strong>
          <span>{copy.footer.role}</span>
        </div>
        <p>© 2026 Rei Aliaj · {copy.footer.copyright}</p>
      </footer>
    </main>
  );
}
