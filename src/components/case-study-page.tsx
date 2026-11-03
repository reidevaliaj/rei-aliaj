import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { SiteHeader } from "@/components/site-header";
import {
  caseStudies,
  contactDetails,
  type CaseStudy,
  type Locale,
} from "@/lib/site-data";

export function CaseStudyPage({
  study,
  locale,
}: {
  study: CaseStudy;
  locale: Locale;
}) {
  const de = locale === "de";
  const content = study.content[locale];
  const home = de ? "/" : "/en";
  const path = (slug: string) => `${de ? "" : "/en"}/work/${slug}`;
  return (
    <main className="landing-stage case-study-stage" lang={locale} id="top">
      <SiteHeader
        locale={locale}
        alternateHref={`${de ? "/en" : ""}/work/${study.slug}`}
      />
      <article className="case-study page-shell">
        <header className="case-hero">
          <Link href={`${home}#work`} className="case-back-link">
            ← {de ? "Zurück zu den Projekten" : "Back to the projects"}
          </Link>
          <p className="eyebrow">{content.category}</p>
          <h1>{study.title}</h1>
          <p className="case-summary">{content.summary}</p>
          <div className="tags">
            {study.stack.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </header>
        <ProjectVisual study={study} locale={locale} large />
        <dl className="case-metrics">
          {content.metrics.map((x) => (
            <div key={x.label}>
              <dt>{x.label}</dt>
              <dd>{x.value}</dd>
            </div>
          ))}
        </dl>
        <div className="case-content-grid">
          <section>
            <p className="eyebrow">{de ? "Mein Beitrag" : "My contribution"}</p>
            <h2>
              {de
                ? "Die Aufgabe. Die Umsetzung."
                : "The challenge. The implementation."}
            </h2>
            <p>{content.scopeIntro}</p>
            <ul>
              {content.scope.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
          <section>
            <p className="eyebrow">
              {de ? "Technische Details" : "Technical details"}
            </p>
            <h2>{de ? "Das System dahinter." : "The system behind it."}</h2>
            <ul>
              {content.technicalHighlights.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="case-stack">
              <span className="mono">STACK /</span>
              <div className="tags">
                {study.stack.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
        <section className="proof-panel">
          <div>
            <p className="eyebrow">
              {de ? "Technischer Einblick" : "A closer look"}
            </p>
            <p>{content.proofNote}</p>
          </div>
          <Link href={`${home}#contact`} className="button-secondary">
            {de ? "Projekt besprechen" : "Discuss the project"}
            <ArrowUpRightIcon />
          </Link>
        </section>
        <section className="more-work">
          <p className="eyebrow">{de ? "Weitere Systeme" : "More systems"}</p>
          <div className="more-work-grid">
            {caseStudies
              .filter((x) => x.slug !== study.slug)
              .slice(0, 3)
              .map((x) => (
                <Link href={path(x.slug)} key={x.slug}>
                  <span>{x.content[locale].category}</span>
                  <strong>{x.title}</strong>
                  <small>
                    {de ? "Case Study ansehen" : "View case study"} ↗
                  </small>
                </Link>
              ))}
          </div>
        </section>
        <section className="case-cta">
          <div>
            <p className="eyebrow">AI ENGINEERING / AUTOMATION</p>
            <h2>
              {de
                ? "Passt das zu Ihrer nächsten Aufgabe?"
                : "A fit for your next challenge?"}
            </h2>
            <p>
              {de
                ? "Offen für AI- und Automation-Rollen: remote, in Vollzeit, Teilzeit oder auf B2B-Basis."
                : "Open to AI and automation roles: remote, full-time, part-time, or B2B."}
            </p>
          </div>
          <a href={`mailto:${contactDetails.email}`} className="button-primary">
            {de ? "Kontakt aufnehmen" : "Get in touch"}
            <ArrowUpRightIcon />
          </a>
        </section>
      </article>
      <footer className="site-footer page-shell">
        <div>
          <strong>
            Rei Aliaj<span>_</span>
          </strong>
          <span>AI Engineer & Automation Developer</span>
        </div>
        <p>© {new Date().getFullYear()} Rei Aliaj</p>
        <Link href={home}>{de ? "Startseite" : "Home"} ↗</Link>
      </footer>
    </main>
  );
}
