import Link from "next/link";

import { ArrowUpRightIcon, MailIcon } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { SiteHeader } from "@/components/site-header";
import {
  caseStudies,
  contactDetails,
  type CaseStudy,
  type Locale,
} from "@/lib/site-data";

type CaseStudyPageProps = {
  study: CaseStudy;
  locale: Locale;
};

const pageCopy = {
  de: {
    back: "Zurück zu allen Projekten",
    snapshot: "Projektübersicht",
    contribution: "Mein Beitrag",
    contributionTitle: "Verantwortung von der Struktur bis zur Umsetzung.",
    technical: "Technische Details",
    technicalTitle: "Die Systeme hinter dem sichtbaren Ergebnis.",
    stack: "Technologie-Stack",
    proof: "Projektzugang",
    live: "Live-Website öffnen",
    demo: "Demo im Gespräch anfragen",
    selected: "Weitere ausgewählte Projekte",
    selectedIntro:
      "Diese Case Study ist nur ein Ausschnitt. Mein Portfolio umfasst mehr als 80 Websites und mehrere individuelle Automatisierungssysteme.",
    view: "Case Study ansehen",
    ctaEyebrow: "Remote · Vollzeit oder Teilzeit",
    ctaTitle: "Könnte meine Erfahrung zu Ihrem Team passen?",
    ctaText:
      "Ich bin offen für eine neue Remote-Position auf B2B-Basis und sende gerne meinen vollständigen Lebenslauf sowie weitere relevante Projektbeispiele.",
    contact: "Kontakt aufnehmen",
    email: "Direkt per E-Mail",
    footer: "Full-Stack Developer · AI Automation · Shopify · WordPress",
  },
  en: {
    back: "Back to all projects",
    snapshot: "Project snapshot",
    contribution: "My contribution",
    contributionTitle: "Ownership from structure through implementation.",
    technical: "Technical details",
    technicalTitle: "The systems behind the visible result.",
    stack: "Technology stack",
    proof: "Project access",
    live: "Open live website",
    demo: "Request a demo on a call",
    selected: "More selected projects",
    selectedIntro:
      "This case study is only one sample. My broader portfolio includes more than 80 websites and several custom automation systems.",
    view: "View case study",
    ctaEyebrow: "Remote · Full-time or part-time",
    ctaTitle: "Could my experience be a fit for your team?",
    ctaText:
      "I am open to a new remote position on a B2B basis and can share my full CV and further relevant project examples.",
    contact: "Get in touch",
    email: "Email directly",
    footer: "Full-Stack Developer · AI Automation · Shopify · WordPress",
  },
} as const;

function studyPath(locale: Locale, slug: string) {
  return locale === "de" ? `/work/${slug}` : `/en/work/${slug}`;
}

export function CaseStudyPage({ study, locale }: CaseStudyPageProps) {
  const copy = pageCopy[locale];
  const content = study.content[locale];
  const homeHref = locale === "de" ? "/" : "/en";
  const alternateHref =
    locale === "de" ? `/en/work/${study.slug}` : `/work/${study.slug}`;
  const otherStudies = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 3);

  return (
    <main className="landing-stage case-study-stage">
      <div className="ambient-layer" aria-hidden="true">
        <span className="ambient-orb ambient-orb-a ambient-one" />
        <span className="ambient-orb ambient-orb-b ambient-three" />
        <span className="ambient-orb ambient-orb-c ambient-five" />
      </div>

      <SiteHeader locale={locale} alternateHref={alternateHref} />

      <article className="case-study page-shell">
        <header className="case-hero">
          <Link href={`${homeHref}#work`} className="case-back-link">
            <span>←</span>
            {copy.back}
          </Link>

          <div className="case-hero-grid">
            <div>
              <div className="case-kicker">
                <span>{content.category}</span>
                <i />
                <span>{content.location}</span>
              </div>
              <h1>{study.title}</h1>
              <p>{content.summary}</p>
            </div>
            <div className="case-metrics">
              {content.metrics.map((metric) => (
                <div key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="case-visual-section">
          <ProjectVisual study={study} large />
        </section>

        <section className="case-content-grid">
          <div className="case-content-card">
            <p className="eyebrow">{copy.contribution}</p>
            <h2>{copy.contributionTitle}</h2>
            <p className="case-intro">{content.scopeIntro}</p>
            <ul>
              {content.scope.map((item) => (
                <li key={item}>
                  <span />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="case-content-card">
            <p className="eyebrow">{copy.technical}</p>
            <h2>{copy.technicalTitle}</h2>
            <ul>
              {content.technicalHighlights.map((item) => (
                <li key={item}>
                  <span />
                  {item}
                </li>
              ))}
            </ul>
            <div className="case-stack">
              <p>{copy.stack}</p>
              <div>
                {study.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="proof-panel">
          <div>
            <p className="eyebrow">{copy.proof}</p>
            <p>{content.proofNote}</p>
          </div>
          {study.website ? (
            <a href={study.website} target="_blank" rel="noreferrer" className="button-secondary">
              {copy.live}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          ) : (
            <Link href={`${homeHref}#contact`} className="button-secondary">
              {copy.demo}
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          )}
        </section>

        <section className="more-work">
          <div className="more-work-heading">
            <p className="eyebrow">{copy.selected}</p>
            <p>{copy.selectedIntro}</p>
          </div>
          <div className="more-work-grid">
            {otherStudies.map((item) => (
              <Link href={studyPath(locale, item.slug)} key={item.slug}>
                <span>{item.content[locale].category}</span>
                <strong>{item.title}</strong>
                <small>{copy.view} ↗</small>
              </Link>
            ))}
          </div>
        </section>

        <section className="case-cta">
          <div>
            <p className="eyebrow">{copy.ctaEyebrow}</p>
            <h2>{copy.ctaTitle}</h2>
            <p>{copy.ctaText}</p>
          </div>
          <div>
            <Link href={`${homeHref}#contact`} className="button-primary">
              {copy.contact}
            </Link>
            <a href={`mailto:${contactDetails.email}`} className="button-secondary">
              <MailIcon className="h-4 w-4" />
              {copy.email}
            </a>
          </div>
        </section>
      </article>

      <footer className="site-footer page-shell">
        <div>
          <strong>Rei Aliaj</strong>
          <span>{copy.footer}</span>
        </div>
        <p>© 2026 Rei Aliaj</p>
      </footer>
    </main>
  );
}
