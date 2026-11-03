import { existingAIStudies } from "./ai-case-studies";
import { additionalAIStudies } from "./additional-case-studies";

export type Locale = "de" | "en";
export type CaseStudyMetric = { label: string; value: string };
export type CaseStudy = {
  slug: string;
  title: string;
  track: "automation";
  visual: "voice" | "jobs" | "rag" | "sync" | "api";
  website?: string;
  stack: string[];
  content: Record<
    Locale,
    {
      category: string;
      location: string;
      summary: string;
      cardResult: string;
      period: string;
      scopeIntro: string;
      scope: string[];
      technicalHighlights: string[];
      proofNote: string;
      metrics: CaseStudyMetric[];
    }
  >;
};
export const contactDetails = {
  email: "hello@rei-aliaj.com",
  whatsapp: "+355675852355",
  whatsappHref: "https://wa.me/355675852355",
  address: "Tirana, Albania",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Tirana+Albania",
  linkedin: "https://www.linkedin.com/in/rei-aliaj-28a951172",
};
export const navigationCopy = {
  de: {
    expertise: "Expertise",
    work: "Projekte",
    experience: "Erfahrung",
    about: "Profil",
    contact: "Kontakt",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },
  en: {
    expertise: "Expertise",
    work: "Projects",
    experience: "Experience",
    about: "Profile",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};
export const siteCopy = {
  de: {
    hero: {
      status: "Offen für AI- & Automation-Rollen",
      eyebrow: "Rei Aliaj / AI Engineer & Automation Developer",
      headline: ["KI entwickeln.", "Abläufe automatisieren."],
      intro:
        "Ich entwickle KI-Anwendungen und Python-Systeme, die Informationen nutzbar machen und manuelle Arbeit übernehmen. Von LLMs und RAG bis zu Voice AI, Datenpipelines und API-Integrationen.",
      availability: "Remote · Vollzeit, Teilzeit oder B2B-Projekte",
      workCta: "Projekte entdecken",
      contactCta: "Über eine Rolle sprechen",
      footnote: "Python im Kern. Geschäftsprozesse im Blick.",
    },
    strip: [
      "LLM-Anwendungen",
      "RAG & Wissenssysteme",
      "Python-Automatisierung",
      "Voice AI",
      "API-Integrationen",
    ],
    expertise: {
      eyebrow: "01 / Engineering-Fokus",
      title: "Von der Idee zum\nzuverlässigen System.",
      intro:
        "Ich verbinde Sprachmodelle, Daten und bestehende Software zu Anwendungen, die im Arbeitsalltag funktionieren. Mit klaren Schnittstellen, nachvollziehbarer Logik und weniger manuellem Aufwand.",
    },
    work: {
      eyebrow: "02 / Ausgewählte Systeme",
      title: "Technik mit einer\nkonkreten Aufgabe.",
      intro:
        "Ausgewählte Arbeiten aus KI, Datenverarbeitung und Prozessautomatisierung. Jede Case Study beschreibt die Architektur, meinen Beitrag und die technischen Abläufe.",
      caseStudy: "Architektur & Umsetzung",
      demo: "Details im Gespräch",
    },
    toolkit: {
      eyebrow: "03 / Technische Tiefe",
      title: "Der Stack hinter\nder Automatisierung.",
      intro:
        "Technologien und Engineering-Praktiken für den gesamten Weg: Daten aufnehmen, mit KI verarbeiten, Systeme verbinden und den Betrieb im Blick behalten.",
    },
    process: {
      eyebrow: "Arbeitsweise",
      title: "Vom Prozess zum Produktivbetrieb.",
      steps: [
        {
          title: "Verstehen",
          detail:
            "Datenquellen, Schnittstellen und manuelle Arbeitsschritte klären. Erfolgskriterien und Grenzen festlegen.",
        },
        {
          title: "Entwickeln",
          detail:
            "Eine durchgängige Pipeline aufbauen. KI mit Geschäftslogik, strukturierten Daten und APIs verbinden.",
        },
        {
          title: "Absichern",
          detail:
            "Ausgaben validieren, Fehlerfälle testen und Wiederholungen sowie menschliche Freigaben einplanen.",
        },
        {
          title: "Betreiben",
          detail:
            "Deployments, Logs und Monitoring nutzen. Kosten, Qualität und Laufzeit im realen Einsatz verbessern.",
        },
      ],
    },
    experience: {
      eyebrow: "04 / Relevante Erfahrung",
      title: "Engineering-Erfahrung.\nAus realen Projekten.",
      intro:
        "Softwareentwicklung seit 2012, mit internationalen Teams und langfristiger technischer Verantwortung. Heute liegt mein Fokus auf AI Engineering und Automatisierung.",
    },
    about: {
      eyebrow: "05 / Der Mensch dahinter",
      title: "Rei Aliaj.\nEntwickler mit Systemblick.",
      paragraphs: [
        "Ich bin Softwareentwickler mit einem Bachelor in Informatik und lebe in Tirana. Ich arbeite remote mit Unternehmen in Deutschland, der Schweiz, Österreich, Albanien und den USA.",
        "Mich interessiert, wie aus einer technischen Möglichkeit ein brauchbares System wird: Wie kommen die Daten hinein? Wie wird eine Modellantwort geprüft? Was passiert, wenn eine API ausfällt? Und welche Arbeit spart das dem Team tatsächlich?",
        "Ich übernehme Aufgaben von der Anforderung und Architektur bis zur Implementierung, Integration und Weiterentwicklung im Betrieb.",
      ],
      details: [
        { label: "Standort", value: "Tirana, Albanien · Remote" },
        { label: "Ausbildung", value: "Bachelor in Informatik" },
        {
          label: "Sprachen",
          value: "Englisch & Italienisch fließend · Deutsch Grundkenntnisse",
        },
      ],
    },
    contact: {
      eyebrow: "06 / Nächster Schritt",
      title: "Ihr Team.\nMeine nächste Aufgabe.",
      intro:
        "Sie suchen einen AI Engineer, Python Developer oder Automation Engineer? Schreiben Sie mir kurz über die Rolle, Ihr Team und die technischen Herausforderungen.",
      note: "Offen für Vollzeit, Teilzeit und B2B-Zusammenarbeit. Lebenslauf und weitere technische Einblicke auf Anfrage.",
    },
    footer: {
      role: "AI Engineer & Automation Developer",
      copyright: "Alle Rechte vorbehalten.",
    },
  },
  en: {
    hero: {
      status: "Open to AI & automation roles",
      eyebrow: "Rei Aliaj / AI Engineer & Automation Developer",
      headline: ["Engineer AI.", "Automate the work."],
      intro:
        "I build AI applications and Python systems that turn information into action and take manual work off your team. From LLMs and RAG to voice AI, data pipelines, and API integrations.",
      availability: "Remote · Full-time, part-time or B2B projects",
      workCta: "Explore the work",
      contactCta: "Talk about a role",
      footnote: "Built with Python. Grounded in business processes.",
    },
    strip: [
      "LLM applications",
      "RAG & knowledge systems",
      "Python automation",
      "Voice AI",
      "API integrations",
    ],
    expertise: {
      eyebrow: "01 / Engineering focus",
      title: "From an idea to\na dependable system.",
      intro:
        "I connect language models, data, and existing software to build applications people can use in their daily work. Clear interfaces, traceable logic, and less manual effort.",
    },
    work: {
      eyebrow: "02 / Selected systems",
      title: "Real engineering.\nA specific purpose.",
      intro:
        "Selected work across AI, data processing, and workflow automation. Each case study covers the architecture, my contribution, and the technical flow.",
      caseStudy: "Architecture & implementation",
      demo: "Discuss the details",
    },
    toolkit: {
      eyebrow: "03 / Technical depth",
      title: "The stack behind\nthe automation.",
      intro:
        "Technologies and engineering practices across the full lifecycle: ingest data, process it with AI, connect systems, and keep the application running.",
    },
    process: {
      eyebrow: "How I work",
      title: "From workflow to production.",
      steps: [
        {
          title: "Understand",
          detail:
            "Map the data sources, interfaces, and manual steps. Define what success looks like and where the limits are.",
        },
        {
          title: "Build",
          detail:
            "Develop an end-to-end pipeline. Connect AI with business logic, structured data, and external APIs.",
        },
        {
          title: "Validate",
          detail:
            "Validate outputs, test failure paths, and build in retries and human review where needed.",
        },
        {
          title: "Operate",
          detail:
            "Use deployments, logs, and monitoring to improve cost, quality, and runtime in real use.",
        },
      ],
    },
    experience: {
      eyebrow: "04 / Relevant experience",
      title: "Engineering experience.\nFrom real projects.",
      intro:
        "Building software since 2012, with international collaboration and long-term technical ownership. My focus today is AI engineering and automation.",
    },
    about: {
      eyebrow: "05 / The person behind the code",
      title: "Rei Aliaj.\nA systems-minded developer.",
      paragraphs: [
        "I am a software developer with a Bachelor in Informatics, based in Tirana. I work remotely with companies in Germany, Switzerland, Austria, Albania, and the United States.",
        "I care about turning a technical possibility into a useful system. How does the data get in? How is a model response checked? What happens when an API fails? And how much work does it actually save the team?",
        "I take ownership from requirements and architecture through implementation, integration, and ongoing improvements in production.",
      ],
      details: [
        { label: "Based in", value: "Tirana, Albania · Remote" },
        { label: "Education", value: "Bachelor in Informatics" },
        {
          label: "Languages",
          value: "Fluent English & Italian · Basic German",
        },
      ],
    },
    contact: {
      eyebrow: "06 / What comes next",
      title: "Your team.\nMy next challenge.",
      intro:
        "Looking for an AI Engineer, Python Developer, or Automation Engineer? Send me a short note about the role, your team, and the technical challenges.",
      note: "Open to full-time, part-time, and B2B collaboration. CV and further technical details available on request.",
    },
    footer: {
      role: "AI Engineer & Automation Developer",
      copyright: "All rights reserved.",
    },
  },
} as const;
export const expertiseAreas = [
  {
    number: "01",
    title: {
      de: "LLM-Anwendungen & AI Agents",
      en: "LLM applications & AI agents",
    },
    summary: {
      de: "Sprachmodelle in nutzbare Anwendungen integrieren – mit strukturierten Ausgaben, Tool Calling und kontrollierten Prozessschritten.",
      en: "Integrate language models into useful applications with structured outputs, tool calling, and controlled workflow steps.",
    },
    tags: [
      "OpenAI",
      "Structured outputs",
      "Tool calling",
      "Prompt engineering",
    ],
  },
  {
    number: "02",
    title: { de: "RAG & Wissenssysteme", en: "RAG & knowledge systems" },
    summary: {
      de: "Dokumente aufbereiten, Inhalte als Embeddings indexieren und passende Informationen für kontextbezogene Antworten abrufen.",
      en: "Prepare documents, index content as embeddings, and retrieve relevant information for context-aware answers.",
    },
    tags: ["Embeddings", "Qdrant", "Vector search", "Document pipelines"],
  },
  {
    number: "03",
    title: {
      de: "Python & Prozessautomatisierung",
      en: "Python & workflow automation",
    },
    summary: {
      de: "Wiederkehrende Abläufe von der Datenquelle bis zum Zielsystem automatisieren, inklusive Validierung, Zeitplanung und Fehlerbehandlung.",
      en: "Automate recurring work from data source to destination, including validation, scheduling, and error handling.",
    },
    tags: ["Python", "FastAPI", "Django", "Async workflows"],
  },
  {
    number: "04",
    title: {
      de: "Voice AI & Echtzeitsysteme",
      en: "Voice AI & real-time systems",
    },
    summary: {
      de: "Telefonie, Transkription, Sprachmodelle und Sprachausgabe zu dialogfähigen Assistenten mit Backend-Anbindung verbinden.",
      en: "Connect telephony, transcription, language models, and speech synthesis into conversational assistants with backend integrations.",
    },
    tags: ["LiveKit", "Twilio", "Deepgram", "Cartesia"],
  },
  {
    number: "05",
    title: {
      de: "Datenpipelines & Browser-Automation",
      en: "Data pipelines & browser automation",
    },
    summary: {
      de: "Daten erfassen, bereinigen und in strukturierte Datensätze, Berichte und interne Dashboards überführen.",
      en: "Collect, clean, and combine data into structured records, reports, and internal dashboards.",
    },
    tags: ["Selenium", "Playwright", "ETL", "Data extraction"],
  },
  {
    number: "06",
    title: { de: "APIs & Systemintegration", en: "APIs & system integration" },
    summary: {
      de: "Externe Dienste, CRM-Systeme und interne Anwendungen verbinden. Daten synchronisieren und Übergaben automatisieren.",
      en: "Connect external services, CRMs, and internal applications. Synchronize data and automate handoffs.",
    },
    tags: ["REST APIs", "Webhooks", "HubSpot", "Data synchronization"],
  },
];
export const toolkit = [
  {
    title: { de: "Sprachen & Backend", en: "Languages & backend" },
    items: ["Python", "FastAPI", "Django", "asyncio", "Pydantic", "TypeScript"],
  },
  {
    title: { de: "KI & Retrieval", en: "AI & retrieval" },
    items: [
      "OpenAI API",
      "Prompt engineering",
      "RAG",
      "Embeddings",
      "Qdrant",
      "Semantic search",
      "Tool calling",
      "Structured outputs",
    ],
  },
  {
    title: { de: "Daten & Automatisierung", en: "Data & automation" },
    items: [
      "Selenium",
      "Playwright",
      "ETL pipelines",
      "Scraping",
      "JSON / CSV / XML",
      "Data validation",
      "Scheduled jobs",
    ],
  },
  {
    title: { de: "Voice & Streaming", en: "Voice & streaming" },
    items: [
      "LiveKit",
      "Twilio",
      "Deepgram",
      "Cartesia",
      "Speech-to-text",
      "Text-to-speech",
      "WebSockets",
    ],
  },
  {
    title: { de: "Schnittstellen & Speicherung", en: "Integrations & storage" },
    items: [
      "REST APIs",
      "Webhooks",
      "HubSpot",
      "PostgreSQL",
      "SQL",
      "Vector databases",
      "API authentication",
    ],
  },
  {
    title: { de: "Qualität & Betrieb", en: "Quality & operations" },
    items: [
      "Git",
      "Docker",
      "CI/CD",
      "Logging",
      "Retries & backoff",
      "Idempotency",
      "Output evaluation",
      "Cost & latency",
    ],
  },
];
export const experience = [
  {
    period: "2023 — 2025",
    company: "Future Search Group GmbH · Switzerland",
    role: { de: "Software Developer", en: "Software Developer" },
    detail: {
      de: "Python-Automatisierung und OpenAI-Integrationen für Recruiting-Prozesse. Interne Dashboards und eine KI-Wissensplattform mit FastAPI, Qdrant und einer internen Benutzeroberfläche.",
      en: "Python automation and OpenAI integrations for recruiting workflows. Internal dashboards and an AI knowledge platform using FastAPI, Qdrant, and an internal user interface.",
    },
    tags: ["Python", "OpenAI", "FastAPI", "Qdrant"],
  },
  {
    period: "2021 — 2026",
    company: "Lens & Frame Co. · Los Angeles",
    role: {
      de: "Fokus: API-Integrationen & Automatisierung",
      en: "Focus: API integrations & automation",
    },
    detail: {
      de: "Datenflüsse für Produkte, Bestellungen und Kunden. Anbindung von HubSpot, Bestandssynchronisierung, Stock Alerts und individuelle Datenprozesse mit langfristiger technischer Betreuung.",
      en: "Product, order, and customer data workflows. HubSpot integrations, inventory synchronization, stock alerts, and custom data processes with long-term technical ownership.",
    },
    tags: ["APIs", "HubSpot", "Data workflows", "Synchronization"],
  },
  {
    period: "2024 — 2025",
    company: "AZ Mediendesign GmbH · Germany",
    role: {
      de: "Fokus: interne Python-Tools",
      en: "Focus: internal Python tooling",
    },
    detail: {
      de: "Entwicklung interner Python-Tools zur Unterstützung wiederkehrender Arbeitsabläufe und technischer Aufgaben im Team.",
      en: "Developed internal Python tools to support recurring team workflows and technical tasks.",
    },
    tags: ["Python", "Internal tools", "Process automation"],
  },
  {
    period: "2012 — Present",
    company: "Code Studio / Independent",
    role: {
      de: "Selbstständiger Softwareentwickler",
      en: "Independent software developer",
    },
    detail: {
      de: "Eigenverantwortliche Entwicklung für internationale Kunden. Heute Schwerpunkt auf KI-Integrationen, Python-Backends, Datenverarbeitung und individuellen Automatisierungssystemen.",
      en: "Independent software development for international clients. Current focus on AI integrations, Python backends, data processing, and custom automation systems.",
    },
    tags: ["Architecture", "Implementation", "Integration", "Maintenance"],
  },
];
export const caseStudies: CaseStudy[] = [
  ...existingAIStudies,
  ...additionalAIStudies,
];
export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
