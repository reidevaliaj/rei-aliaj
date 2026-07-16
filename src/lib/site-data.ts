export type Locale = "de" | "en";

type Localized<T> = Record<Locale, T>;

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  track: "automation" | "shopify" | "wordpress";
  visual: "website" | "voice" | "jobs";
  screenshot?: string;
  website?: string;
  stack: string[];
  content: Localized<{
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
  }>;
};

export const contactDetails = {
  email: "hello@rei-aliaj.com",
  whatsapp: "+355675852355",
  whatsappHref: "https://wa.me/355675852355",
  address: "Tirana, Albania",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Tirana+Albania",
  linkedin: "https://www.linkedin.com/in/rei-aliaj-28a951172",
};

export const siteCopy = {
  de: {
    nav: {
      expertise: "Schwerpunkte",
      work: "Projekte",
      experience: "Erfahrung",
      about: "Profil",
      contact: "Kontakt",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
    },
    hero: {
      eyebrow: "Full-Stack Developer · Remote",
      headline: "KI-Automatisierung, Shopify & WordPress.",
      intro:
        "Ich entwickle produktionsreife Webplattformen, E-Commerce-Systeme und Automatisierungen – von Python-Backends und KI-Integrationen bis zu Shopify- und WordPress-Lösungen.",
      availability:
        "Verfügbar für eine neue Remote-Position in Vollzeit oder Teilzeit auf B2B-Basis.",
      workCta: "Projekte ansehen",
      contactCta: "Kontakt aufnehmen",
      status: "Offen für neue Positionen",
      stats: [
        { value: "10+", label: "Jahre Erfahrung" },
        { value: "80+", label: "Websites umgesetzt" },
        { value: "DE / CH", label: "Projekterfahrung" },
      ],
    },
    expertise: {
      eyebrow: "01 / Schwerpunkte",
      title: "Drei Bereiche, ein technischer Partner.",
      intro:
        "Ich verbinde Entwicklung, Systemdenken und zuverlässige Umsetzung. Je nach Rolle kann ich einen Bereich vertiefen oder die Schnittstellen zwischen allen drei übernehmen.",
    },
    work: {
      eyebrow: "02 / Ausgewählte Projekte",
      title: "Einige wenige Beispiele aus einem größeren Portfolio.",
      intro:
        "Diese sechs Projekte stehen stellvertretend für mehr als 80 Websites und mehrere produktive Automatisierungssysteme. Sie sind eine Auswahl, nicht die vollständige Liste meiner Arbeit.",
      caseStudy: "Case Study",
      live: "Live ansehen",
      demo: "Demo im Gespräch",
    },
    experience: {
      eyebrow: "03 / Erfahrung",
      title: "Von klassischen Websites zu produktiven KI-Systemen.",
      intro:
        "Seit 2012 arbeite ich an digitalen Produkten für Unternehmen in Deutschland, der Schweiz, Österreich, Albanien und den USA.",
    },
    about: {
      eyebrow: "04 / Profil",
      title: "Pragmatisch, selbstständig und nah am Ergebnis.",
      paragraphs: [
        "Ich bin Rei Aliaj, Jahrgang 1994, und habe Informatik studiert. Seit meinem 18. Lebensjahr arbeite ich in der Webentwicklung. Aus klassischen Websites wurden mit der Zeit E-Commerce-Plattformen, Backend-Systeme und KI-gestützte Automatisierungen.",
        "Ich lebe mit meiner Familie in Tirana und arbeite vollständig remote. Den Großteil meiner Laufbahn habe ich in direkter Zusammenarbeit mit Agenturen, Unternehmen und internationalen Kunden aufgebaut – oft mit viel Eigenverantwortung von der Anforderung bis zum produktiven Betrieb.",
      ],
      details: [
        { label: "Ausbildung", value: "Bachelor in Informatik" },
        { label: "Standort", value: "Tirana, Albanien · Remote" },
        { label: "Sprachen", value: "Englisch & Italienisch fließend · Deutsch Grundkenntnisse" },
        { label: "Arbeitsweise", value: "Selbstständig, direkt, produktionsorientiert" },
      ],
    },
    availability: {
      eyebrow: "05 / Verfügbarkeit",
      title: "Offen für die richtige Remote-Position.",
      intro:
        "Nach dem Abschluss eines langfristigen Projekts suche ich eine neue Vollzeit- oder Teilzeitposition. Ich kann mich als spezialisierter Entwickler einbringen oder Verantwortung über mehrere technische Bereiche übernehmen.",
      facts: [
        { label: "Umfang", value: "Vollzeit oder Teilzeit" },
        { label: "Modell", value: "100 % Remote · B2B" },
        { label: "Zusammenarbeit", value: "Langfristig und verlässlich" },
        { label: "Start", value: "Nach Vereinbarung" },
      ],
      note:
        "Einen vollständigen Lebenslauf und weitere Projektbeispiele sende ich gerne auf Anfrage.",
    },
    contact: {
      eyebrow: "06 / Kontakt",
      title: "Lassen Sie uns über die Position sprechen.",
      intro:
        "Wenn mein Profil zu Ihrem Team passen könnte, freue ich mich über eine kurze Nachricht. Ich antworte direkt und sende auf Wunsch meinen vollständigen Lebenslauf sowie weitere Referenzen.",
    },
    footer: {
      role: "Full-Stack Developer · AI Automation · Shopify · WordPress",
      copyright: "Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: {
      expertise: "Expertise",
      work: "Projects",
      experience: "Experience",
      about: "Profile",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "Full-Stack Developer · Remote",
      headline: "AI automation, Shopify & WordPress.",
      intro:
        "I build production-ready web platforms, ecommerce systems, and automations – from Python backends and AI integrations to Shopify and WordPress solutions.",
      availability:
        "Available for a new full-time or part-time remote position on a B2B basis.",
      workCta: "View selected work",
      contactCta: "Get in touch",
      status: "Open to new positions",
      stats: [
        { value: "10+", label: "Years of experience" },
        { value: "80+", label: "Websites delivered" },
        { value: "DE / CH", label: "Project experience" },
      ],
    },
    expertise: {
      eyebrow: "01 / Expertise",
      title: "Three disciplines, one technical partner.",
      intro:
        "I combine development, systems thinking, and reliable execution. Depending on the role, I can go deep in one area or own the connections between all three.",
    },
    work: {
      eyebrow: "02 / Selected work",
      title: "A few examples from a much broader portfolio.",
      intro:
        "These six projects represent more than 80 websites and several production automation systems. They are a selected sample, not the full list of my work.",
      caseStudy: "Case study",
      live: "View live",
      demo: "Demo on a call",
    },
    experience: {
      eyebrow: "03 / Experience",
      title: "From classic websites to production AI systems.",
      intro:
        "I have worked on digital products since 2012 for companies in Germany, Switzerland, Austria, Albania, and the United States.",
    },
    about: {
      eyebrow: "04 / Profile",
      title: "Pragmatic, independent, and close to the outcome.",
      paragraphs: [
        "I am Rei Aliaj, born in 1994, and I studied informatics. I have worked in web development since I was 18. Classic websites gradually grew into ecommerce platforms, backend systems, and AI-powered automations.",
        "I live with my family in Tirana and work fully remotely. Most of my career has been built through direct collaboration with agencies, companies, and international clients – often owning the work from requirements through production delivery.",
      ],
      details: [
        { label: "Education", value: "Bachelor in Informatics" },
        { label: "Location", value: "Tirana, Albania · Remote" },
        { label: "Languages", value: "English & Italian fluent · Basic German" },
        { label: "Working style", value: "Independent, direct, production-minded" },
      ],
    },
    availability: {
      eyebrow: "05 / Availability",
      title: "Open to the right remote position.",
      intro:
        "After completing a long-term project, I am looking for a new full-time or part-time position. I can contribute as a specialist or take ownership across several technical areas.",
      facts: [
        { label: "Commitment", value: "Full-time or part-time" },
        { label: "Model", value: "100% remote · B2B" },
        { label: "Collaboration", value: "Long-term and reliable" },
        { label: "Start", value: "By agreement" },
      ],
      note:
        "I am happy to provide my full CV and additional project examples on request.",
    },
    contact: {
      eyebrow: "06 / Contact",
      title: "Let’s talk about the position.",
      intro:
        "If my profile could fit your team, I would be glad to hear from you. I reply directly and can share my full CV and further references on request.",
    },
    footer: {
      role: "Full-Stack Developer · AI Automation · Shopify · WordPress",
      copyright: "All rights reserved.",
    },
  },
} as const;

export const expertiseAreas = [
  {
    id: "automation",
    number: "01",
    title: {
      de: "Python-Automatisierung & KI",
      en: "Python Automation & AI",
    },
    summary: {
      de: "Automatisierungen, KI-Integrationen und Backend-Systeme, die reale Geschäftsprozesse zuverlässig übernehmen.",
      en: "Automation, AI integrations, and backend systems that reliably handle real business processes.",
    },
    capabilities: {
      de: [
        "Python, FastAPI & Django",
        "LLM-, Voice- & API-Integrationen",
        "Scraping, Datenextraktion & Dashboards",
      ],
      en: [
        "Python, FastAPI & Django",
        "LLM, voice & API integrations",
        "Scraping, data extraction & dashboards",
      ],
    },
    stack: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "APIs"],
  },
  {
    id: "shopify",
    number: "02",
    title: {
      de: "Shopify Design & Entwicklung",
      en: "Shopify Design & Development",
    },
    summary: {
      de: "Komplette Storefronts, individuelle Liquid-Logik, Admin-API-Integrationen und skalierbare E-Commerce-Abläufe.",
      en: "Complete storefronts, custom Liquid logic, Admin API integrations, and scalable ecommerce workflows.",
    },
    capabilities: {
      de: [
        "Theme- und Store-Entwicklung",
        "Custom Apps & Integrationen",
        "Kataloge, Markets, SEO & Performance",
      ],
      en: [
        "Theme and store development",
        "Custom apps & integrations",
        "Catalogs, Markets, SEO & performance",
      ],
    },
    stack: ["Shopify", "Liquid", "Admin API", "JavaScript", "HubSpot"],
  },
  {
    id: "wordpress",
    number: "03",
    title: {
      de: "WordPress Design & Entwicklung",
      en: "WordPress Design & Development",
    },
    summary: {
      de: "Unternehmenswebsites mit klarer Informationsarchitektur, individuellem Design und sauberer technischer Umsetzung.",
      en: "Business websites with clear information architecture, custom design, and clean technical implementation.",
    },
    capabilities: {
      de: [
        "Individuelle Unternehmenswebsites",
        "Elementor, PHP & WooCommerce",
        "Responsive Umsetzung, SEO & Wartung",
      ],
      en: [
        "Custom business websites",
        "Elementor, PHP & WooCommerce",
        "Responsive delivery, SEO & maintenance",
      ],
    },
    stack: ["WordPress", "PHP", "Elementor", "WooCommerce", "SEO"],
  },
] as const;

export const experience = [
  {
    period: "2012 — Today",
    company: "Code Studio / Independent",
    role: {
      de: "Full-Stack- & Webentwickler",
      en: "Full-Stack & Web Developer",
    },
    detail: {
      de: "Websites, E-Commerce-Plattformen, individuelle Anwendungen und Automatisierungssysteme für internationale Kunden.",
      en: "Websites, ecommerce platforms, custom applications, and automation systems for international clients.",
    },
  },
  {
    period: "2023 — 2025",
    company: "Future Search Group GmbH · Switzerland",
    role: {
      de: "Software Developer",
      en: "Software Developer",
    },
    detail: {
      de: "Python-Automatisierung, OpenAI-Integrationen, interne Dashboards und eine KI-Wissensplattform mit Next.js, FastAPI und Qdrant.",
      en: "Python automation, OpenAI integrations, internal dashboards, and an AI knowledge platform with Next.js, FastAPI, and Qdrant.",
    },
  },
  {
    period: "2021 — 2026",
    company: "Lens & Frame Co. · Los Angeles",
    role: {
      de: "Shopify Developer",
      en: "Shopify Developer",
    },
    detail: {
      de: "Langfristige technische Verantwortung für Storefront, Shopify-APIs, HubSpot-Workflows und individuelle Bestellprozesse.",
      en: "Long-term technical ownership across the storefront, Shopify APIs, HubSpot workflows, and custom ordering processes.",
    },
  },
  {
    period: "2024 — 2025",
    company: "AZ Mediendesign GmbH · Germany",
    role: {
      de: "Web Developer",
      en: "Web Developer",
    },
    detail: {
      de: "WordPress-Entwicklung, Elementor, individuelles PHP, technische SEO-Verbesserungen und interne Python-Tools.",
      en: "WordPress development, Elementor, custom PHP, technical SEO improvements, and internal Python tools.",
    },
  },
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-voice-receptionist",
    title: "AI Voice Receptionist",
    track: "automation",
    visual: "voice",
    stack: ["Python", "FastAPI", "LiveKit", "Cartesia", "Deepgram", "OpenAI", "Twilio"],
    content: {
      de: {
        category: "KI-Automatisierung",
        location: "Internes Produkt / Remote",
        summary:
          "Ein Echtzeit-Sprachassistent für eingehende Anrufe, der Fragen beantwortet, Informationen erfasst und Gespräche strukturiert bearbeitet.",
        cardResult:
          "Echtzeit-Voice-Pipeline mit Telefonie, Speech-to-Text, LLM-Logik und natürlicher Sprachausgabe.",
        period: "Produktionsnahes System",
        scopeIntro:
          "Das System verbindet Telefonie, Audio-Streaming, Sprachmodelle und Backend-Logik zu einem modularen digitalen Empfang.",
        scope: [
          "Anbindung eingehender Anrufe über Twilio und Echtzeit-Audio-Sessions mit LiveKit.",
          "Speech-to-Text mit Deepgram, dialogbasierte Logik mit OpenAI und natürliche Sprachausgabe mit Cartesia.",
          "FastAPI-Backend für Sessions, Gesprächskontext, Tools und externe Integrationen.",
          "Erfassung strukturierter Informationen sowie Übergabe oder Weiterleitung an nachgelagerte Prozesse.",
        ],
        technicalHighlights: [
          "Streaming-Architektur mit Fokus auf geringe Latenz und flüssige Gesprächswechsel.",
          "Modulare Provider-Schicht für STT, TTS, Telefonie und LLM-Komponenten.",
          "Tool-basierte Aktionen für Informationsabfragen und Prozessschritte während des Gesprächs.",
          "Fehlerbehandlung und Session-Management für längere Echtzeitverbindungen.",
        ],
        proofNote:
          "Das System ist nicht öffentlich verlinkt. Eine Demonstration und technische Erläuterung sind in einem Gespräch möglich.",
        metrics: [
          { label: "Typ", value: "Realtime Voice AI" },
          { label: "Rolle", value: "Architektur & Entwicklung" },
          { label: "Backend", value: "Python · FastAPI" },
          { label: "Zugang", value: "Demo auf Anfrage" },
        ],
      },
      en: {
        category: "AI Automation",
        location: "Internal Product / Remote",
        summary:
          "A real-time voice assistant for incoming calls that answers questions, collects information, and handles conversations in a structured way.",
        cardResult:
          "A real-time voice pipeline combining telephony, speech-to-text, LLM logic, and natural speech output.",
        period: "Production-oriented system",
        scopeIntro:
          "The system connects telephony, audio streaming, language models, and backend logic into a modular digital receptionist.",
        scope: [
          "Connected incoming calls through Twilio and real-time audio sessions with LiveKit.",
          "Used Deepgram for speech-to-text, OpenAI for conversational logic, and Cartesia for natural speech output.",
          "Built a FastAPI backend for sessions, conversation context, tools, and external integrations.",
          "Captured structured information and passed calls or data into downstream workflows.",
        ],
        technicalHighlights: [
          "Streaming architecture focused on low latency and smooth conversational turn-taking.",
          "Modular provider layer for STT, TTS, telephony, and LLM components.",
          "Tool-based actions for information retrieval and workflow steps during a call.",
          "Error handling and session management for longer real-time connections.",
        ],
        proofNote:
          "The system is not publicly linked. I can demonstrate it and explain the architecture during a call.",
        metrics: [
          { label: "Type", value: "Realtime Voice AI" },
          { label: "Role", value: "Architecture & Development" },
          { label: "Backend", value: "Python · FastAPI" },
          { label: "Access", value: "Demo on request" },
        ],
      },
    },
  },
  {
    slug: "job-board-analyzer",
    title: "Job Board Analyzer",
    track: "automation",
    visual: "jobs",
    stack: ["Python", "Selenium", "OpenAI", "APIs", "PHP", "Dashboard"],
    content: {
      de: {
        category: "Python-Automatisierung",
        location: "Schweizer Recruiting-Unternehmen",
        summary:
          "Ein internes System, das neue Stellenanzeigen regelmäßig erfasst, verarbeitet und ein Recruiting-Dashboard automatisch aktuell hält.",
        cardResult:
          "Vom frischen Job-Post bis zum strukturierten Dashboard-Eintrag – automatisiert und wiederholbar.",
        period: "2023 — 2025",
        scopeIntro:
          "Die Lösung reduziert manuelle Recherche und überführt unstrukturierte Stelleninformationen in einen konsistenten internen Arbeitsablauf.",
        scope: [
          "Regelmäßige Erfassung neuer Stellenanzeigen aus relevanten Quellen.",
          "Bereinigung, Normalisierung und Aufbereitung von Titel, Unternehmen, Standort und Beschreibung.",
          "KI-gestützte Analyse und Klassifizierung für eine bessere interne Auswertung.",
          "Automatische Aktualisierung des Dashboards mit Status- und Qualitätskontrollen.",
        ],
        technicalHighlights: [
          "Robuste Python- und Selenium-Abläufe für dynamische Quellen.",
          "Duplikaterkennung und Normalisierung uneinheitlicher Jobdaten.",
          "OpenAI-Integration zur inhaltlichen Strukturierung und Analyse.",
          "Verbindung zwischen Datenerfassung, Backend-Prozessen und internem Dashboard.",
        ],
        proofNote:
          "Das System enthält vertrauliche interne Daten und ist daher nicht öffentlich. Der Workflow kann in einem Gespräch demonstriert werden.",
        metrics: [
          { label: "Branche", value: "Recruiting" },
          { label: "Markt", value: "Schweiz" },
          { label: "Rolle", value: "Automation Developer" },
          { label: "Zugang", value: "Demo auf Anfrage" },
        ],
      },
      en: {
        category: "Python Automation",
        location: "Swiss Recruiting Company",
        summary:
          "An internal system that regularly collects new job listings, processes them, and keeps a recruiting dashboard automatically up to date.",
        cardResult:
          "From a fresh job post to a structured dashboard record – automated and repeatable.",
        period: "2023 — 2025",
        scopeIntro:
          "The solution reduces manual research and turns unstructured job information into a consistent internal workflow.",
        scope: [
          "Regularly collected new job listings from relevant sources.",
          "Cleaned, normalized, and prepared titles, companies, locations, and descriptions.",
          "Applied AI-supported analysis and classification for better internal evaluation.",
          "Updated the dashboard automatically with status and quality controls.",
        ],
        technicalHighlights: [
          "Robust Python and Selenium flows for dynamic sources.",
          "Duplicate detection and normalization across inconsistent job data.",
          "OpenAI integration for content structuring and analysis.",
          "Connected data collection, backend processes, and the internal dashboard.",
        ],
        proofNote:
          "The system contains confidential internal data and is not public. I can demonstrate the workflow during a call.",
        metrics: [
          { label: "Industry", value: "Recruiting" },
          { label: "Market", value: "Switzerland" },
          { label: "Role", value: "Automation Developer" },
          { label: "Access", value: "Demo on request" },
        ],
      },
    },
  },
  {
    slug: "lens-and-frame",
    title: "Lens & Frame Co.",
    track: "shopify",
    visual: "website",
    website: "https://lensandframe.co/",
    screenshot: "/case-studies/lens-and-frame-home.png",
    stack: ["Shopify", "Liquid", "Admin API", "HubSpot", "Automation"],
    content: {
      de: {
        category: "Shopify · Retail Eyewear",
        location: "Los Angeles, USA",
        summary:
          "Langfristige Shopify-Entwicklung für einen spezialisierten Brillen-Shop mit individuellen Seh- und Bestellprozessen.",
        cardResult:
          "Storefront, API-Workflows, HubSpot-Anbindung und individuelle Prescription-/PD-Datenprozesse.",
        period: "2021 — 2026",
        scopeIntro:
          "Über mehrere Jahre umfasste meine Rolle sowohl die Storefront als auch technische Abläufe hinter Produkten, Bestellungen, Kunden und Lagerbestand.",
        scope: [
          "Weiterentwicklung und Optimierung des Shopify-Storefronts mit individuellen Liquid-Komponenten.",
          "Shopify-Admin-API-Integrationen für Produkt-, Bestell- und Kundendaten.",
          "Automatisierungen für Bestandsüberwachung, Produktsynchronisierung und Stock Alerts.",
          "HubSpot-Integration sowie individuelle Erfassung von Prescription- und PD-Messdaten im Bestellprozess.",
        ],
        technicalHighlights: [
          "Komplexe Katalogstruktur für Lesebrillen, Prescription Eyewear, Sonnenbrillen und Ersatzgläser.",
          "Individuelle Datenflüsse für messungsabhängige Produkte und Bestellungen.",
          "Verknüpfung von Shopify-Daten mit Marketing- und Kundenworkflows in HubSpot.",
          "Langfristige Verantwortung für Wartung, Fehlerbehebung und technische Weiterentwicklung.",
        ],
        proofNote:
          "Der Live-Shop zeigt heute einen umfangreichen Katalog mit individuellen Brillen- und Glasoptionen. Das Projekt ist eines von mehreren langfristig betreuten Shopify-Systemen.",
        metrics: [
          { label: "Rolle", value: "Shopify Developer" },
          { label: "Zeitraum", value: "2021 — 2026" },
          { label: "Integrationen", value: "Shopify API · HubSpot" },
          { label: "Ergebnis", value: "Langfristige Produktionsbetreuung" },
        ],
      },
      en: {
        category: "Shopify · Retail Eyewear",
        location: "Los Angeles, USA",
        summary:
          "Long-term Shopify development for a specialized eyewear store with custom vision and ordering workflows.",
        cardResult:
          "Storefront, API workflows, HubSpot integration, and custom prescription/PD data processes.",
        period: "2021 — 2026",
        scopeIntro:
          "Over several years, my role covered both the storefront and the technical workflows behind products, orders, customers, and inventory.",
        scope: [
          "Developed and improved the Shopify storefront with custom Liquid components.",
          "Integrated the Shopify Admin API for product, order, and customer data.",
          "Built automations for inventory monitoring, product synchronization, and stock alerts.",
          "Connected HubSpot and implemented custom prescription and PD measurement data in the order flow.",
        ],
        technicalHighlights: [
          "Complex catalog architecture for readers, prescription eyewear, sunglasses, and replacement lenses.",
          "Custom data flows for measurement-dependent products and orders.",
          "Connected Shopify data with marketing and customer workflows in HubSpot.",
          "Long-term ownership across maintenance, debugging, and technical improvements.",
        ],
        proofNote:
          "The live store now presents a broad catalog with custom eyewear and lens options. This is one of several Shopify systems I have supported long term.",
        metrics: [
          { label: "Role", value: "Shopify Developer" },
          { label: "Period", value: "2021 — 2026" },
          { label: "Integrations", value: "Shopify API · HubSpot" },
          { label: "Result", value: "Long-term production ownership" },
        ],
      },
    },
  },
  {
    slug: "mybody-x",
    title: "mybody x",
    track: "shopify",
    visual: "website",
    website: "https://mybody-x.com/",
    screenshot: "/case-studies/mybody-x-home.png",
    stack: ["Shopify", "Liquid", "Markets", "SEO", "Catalog Architecture"],
    content: {
      de: {
        category: "Shopify · Health Ecommerce",
        location: "Deutschland / EU",
        summary:
          "Ein umfangreicher Shopify-Shop für DNA-, Mikrobiom-, Nährstoff- und Selbsttests mit mehreren Märkten und Sprachen.",
        cardResult:
          "Komplette Shopify-Umsetzung mit Katalogstruktur, Landingpages, Markets, SEO und individuellen Storefront-Lösungen.",
        period: "Full Store Build",
        scopeIntro:
          "Das Projekt verband einen tiefen Produktkatalog mit erklärungsintensiven Inhalten, regionalen Märkten und einem vertrauensbasierten Kaufprozess.",
        scope: [
          "Aufbau und Strukturierung von Produkten, Collections, Landingpages und wiederverwendbaren Inhaltsbereichen.",
          "Individuelle Storefront-Lösungen für verschiedene Testkategorien, Bundles und Informationsbedürfnisse.",
          "Umsetzung von Sprach- und Marktanforderungen für mehrere europäische Regionen.",
          "Technische SEO-, Performance- und Merchandising-Optimierungen.",
        ],
        technicalHighlights: [
          "Informationsarchitektur für einen großen, erklärungsintensiven Gesundheitskatalog.",
          "Wiederverwendbare Komponenten für Produktbildung, Vertrauen und Conversion.",
          "Shopify-Markets- und Mehrsprachen-Struktur für europäische Zielgruppen.",
          "Skalierbare Pflege von Produkten, Kategorien und redaktionellen Inhalten.",
        ],
        proofNote:
          "Der Live-Shop führt heute zahlreiche Tests und Gesundheitskategorien in mehreren Sprachen und Märkten. Das Projekt steht für meine Erfahrung mit komplexeren Shopify-Katalogen.",
        metrics: [
          { label: "Rolle", value: "Shopify Design & Development" },
          { label: "Markt", value: "DACH / EU" },
          { label: "Umfang", value: "Store · Katalog · SEO · Markets" },
          { label: "Ergebnis", value: "Mehrsprachiger EU-Store" },
        ],
      },
      en: {
        category: "Shopify · Health Ecommerce",
        location: "Germany / EU",
        summary:
          "A comprehensive Shopify store for DNA, microbiome, nutrient, and at-home tests across multiple markets and languages.",
        cardResult:
          "Complete Shopify delivery covering catalog structure, landing pages, Markets, SEO, and custom storefront solutions.",
        period: "Full Store Build",
        scopeIntro:
          "The project combined a deep product catalog with education-heavy content, regional markets, and a trust-based buying journey.",
        scope: [
          "Built and structured products, collections, landing pages, and reusable content sections.",
          "Created custom storefront solutions for test categories, bundles, and different information needs.",
          "Implemented language and market requirements across several European regions.",
          "Handled technical SEO, performance, and merchandising improvements.",
        ],
        technicalHighlights: [
          "Information architecture for a large, education-heavy health catalog.",
          "Reusable components for product education, trust, and conversion.",
          "Shopify Markets and multilingual structure for European audiences.",
          "Scalable management of products, categories, and editorial content.",
        ],
        proofNote:
          "The live store now presents many tests and health categories across multiple languages and markets. It represents my experience with more complex Shopify catalogs.",
        metrics: [
          { label: "Role", value: "Shopify Design & Development" },
          { label: "Market", value: "DACH / EU" },
          { label: "Scope", value: "Store · Catalog · SEO · Markets" },
          { label: "Result", value: "Multilingual EU storefront" },
        ],
      },
    },
  },
  {
    slug: "marqon",
    title: "marqon",
    track: "wordpress",
    visual: "website",
    website: "https://www.marqon.de/",
    screenshot: "/case-studies/marqon-home.png",
    stack: ["WordPress", "Elementor", "PHP", "Responsive Design", "SEO"],
    content: {
      de: {
        category: "WordPress · Industrie",
        location: "Karlsruhe, Deutschland",
        summary:
          "Eine umfangreiche WordPress-Unternehmenswebsite für industrielle Lohnbeschriftung, Drucktechnologien und technische Kennzeichnung.",
        cardResult:
          "Klare B2B-Informationsarchitektur für Produkte, Technologien, Services und industrielle Anwendungsfälle.",
        period: "WordPress Design & Development",
        scopeIntro:
          "Die Website übersetzt ein breites technisches Leistungsportfolio in eine moderne, strukturierte und responsive B2B-Präsenz.",
        scope: [
          "WordPress- und Elementor-Umsetzung mit individuellen Layouts und wiederverwendbaren Inhaltsmodulen.",
          "Strukturierung umfangreicher Produkt-, Technologie- und Servicebereiche.",
          "Responsive Design für komplexe Navigation, große Typografie und bildstarke Inhaltsbereiche.",
          "Technische Optimierungen für SEO, Ladeverhalten und laufende redaktionelle Pflege.",
        ],
        technicalHighlights: [
          "Wiederverwendbare Komponenten für zahlreiche technisch ähnliche, aber inhaltlich unterschiedliche Seiten.",
          "Hierarchische Navigation für Produkte, Druckverfahren, Zusatzservices und Referenzen.",
          "Individuelle PHP-/WordPress-Anpassungen dort, wo Standard-Elementor-Funktionen nicht ausreichten.",
          "Konsistente responsive Umsetzung eines stark visuellen Corporate Designs.",
        ],
        proofNote:
          "Die Live-Website zeigt das breite Industrieangebot von Laserbeschriftung bis UV-Direktdruck. marqon ist eines von mehreren WordPress-Projekten für deutsche Unternehmen.",
        metrics: [
          { label: "Plattform", value: "WordPress" },
          { label: "Rolle", value: "Design & Development" },
          { label: "Branche", value: "Industrie / Kennzeichnung" },
          { label: "Status", value: "Live" },
        ],
      },
      en: {
        category: "WordPress · Industrial",
        location: "Karlsruhe, Germany",
        summary:
          "A comprehensive WordPress corporate website for industrial contract marking, printing technologies, and technical labeling.",
        cardResult:
          "Clear B2B information architecture across products, technologies, services, and industrial use cases.",
        period: "WordPress Design & Development",
        scopeIntro:
          "The website translates a broad technical service portfolio into a modern, structured, and responsive B2B presence.",
        scope: [
          "Delivered WordPress and Elementor layouts with reusable content modules.",
          "Structured extensive product, technology, and service areas.",
          "Implemented responsive design across complex navigation, large typography, and image-led sections.",
          "Handled technical improvements for SEO, loading behavior, and ongoing editorial maintenance.",
        ],
        technicalHighlights: [
          "Reusable components across many technically related but content-distinct pages.",
          "Hierarchical navigation for products, printing methods, additional services, and references.",
          "Custom PHP and WordPress adjustments where standard Elementor functionality was not enough.",
          "Consistent responsive implementation of a strongly visual corporate design.",
        ],
        proofNote:
          "The live website presents a broad industrial offer from laser marking to UV direct printing. marqon is one of several WordPress projects delivered for German companies.",
        metrics: [
          { label: "Platform", value: "WordPress" },
          { label: "Role", value: "Design & Development" },
          { label: "Industry", value: "Industrial Marking" },
          { label: "Status", value: "Live" },
        ],
      },
    },
  },
  {
    slug: "heliservice",
    title: "HeliService",
    track: "wordpress",
    visual: "website",
    website: "https://heliservice.com/",
    screenshot: "/case-studies/heliservice-home.png",
    stack: ["WordPress", "Elementor", "PHP", "Multilingual", "Performance"],
    content: {
      de: {
        category: "WordPress · Aviation",
        location: "Deutschland",
        summary:
          "Eine bilinguale WordPress-Unternehmenswebsite für Offshore-Helikopterlogistik, Maintenance und medizinische Luftrettung.",
        cardResult:
          "Bildstarke Corporate-Präsenz mit klarer Trennung komplexer Leistungen und internationaler Zielgruppen.",
        period: "WordPress Design & Development",
        scopeIntro:
          "Die Website musste technische Kompetenz, Sicherheit und internationale Einsatzfähigkeit in einer klaren digitalen Struktur vermitteln.",
        scope: [
          "Responsive WordPress-Umsetzung für Offshore, Maintenance, HEMS, Unternehmen und Karrierebereiche.",
          "Aufbau einer klaren Navigations- und Seitenstruktur für unterschiedliche operative Leistungen.",
          "Bilinguale Inhaltsführung für deutsch- und englischsprachige Besucher.",
          "Optimierung von großformatigen Bildern, Layouts und mobilen Interaktionen.",
        ],
        technicalHighlights: [
          "Flexible WordPress-Komponenten für unterschiedliche Service- und Corporate-Seitentypen.",
          "Mehrsprachige Struktur mit konsistenter Navigation und Designlogik.",
          "Responsive Hero- und Inhaltsbereiche mit hochwertigem Bildmaterial.",
          "Performance- und Wartungsoptimierungen für eine langfristig pflegbare Unternehmensseite.",
        ],
        proofNote:
          "Die Live-Website präsentiert Offshore-Operationen, Wartung und HEMS an mehreren Standorten. HeliService ist eines von mehreren Corporate-WordPress-Projekten meiner Laufbahn.",
        metrics: [
          { label: "Plattform", value: "WordPress" },
          { label: "Rolle", value: "Design & Development" },
          { label: "Branche", value: "Aviation / Offshore" },
          { label: "Sprachen", value: "Deutsch · Englisch" },
        ],
      },
      en: {
        category: "WordPress · Aviation",
        location: "Germany",
        summary:
          "A bilingual WordPress corporate website for offshore helicopter logistics, maintenance, and emergency medical aviation.",
        cardResult:
          "An image-led corporate presence with clear separation of complex services and international audiences.",
        period: "WordPress Design & Development",
        scopeIntro:
          "The website needed to communicate technical expertise, safety, and international operational capability through a clear digital structure.",
        scope: [
          "Delivered a responsive WordPress experience across offshore, maintenance, HEMS, company, and career areas.",
          "Built a clear navigation and page structure for distinct operational services.",
          "Implemented bilingual content paths for German and English visitors.",
          "Optimized large-format imagery, layouts, and mobile interactions.",
        ],
        technicalHighlights: [
          "Flexible WordPress components across service and corporate page types.",
          "Multilingual structure with consistent navigation and design logic.",
          "Responsive hero and content sections using high-quality imagery.",
          "Performance and maintenance improvements for a long-lived corporate site.",
        ],
        proofNote:
          "The live website presents offshore operations, maintenance, and HEMS across several locations. HeliService is one of several corporate WordPress projects from my career.",
        metrics: [
          { label: "Platform", value: "WordPress" },
          { label: "Role", value: "Design & Development" },
          { label: "Industry", value: "Aviation / Offshore" },
          { label: "Languages", value: "German · English" },
        ],
      },
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
