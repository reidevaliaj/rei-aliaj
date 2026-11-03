import type { CaseStudy } from "./site-data";
export const additionalAIStudies: CaseStudy[] = [
  {
    slug: "ai-knowledge-platform",
    title: "AI Knowledge Platform",
    track: "automation",
    visual: "rag",
    stack: ["Python", "FastAPI", "Qdrant", "OpenAI", "RAG", "Embeddings"],
    content: {
      de: {
        category: "RAG & Knowledge Engineering",
        location: "Internes System · Switzerland",
        period: "Future Search Group",
        summary:
          "Eine interne KI-Wissensplattform, die Unternehmensinformationen für Suche und KI-gestützte Antworten nutzbar macht.",
        cardResult:
          "Dokumente, Vektorsuche und LLM-Antworten in einer internen Wissensanwendung verbunden.",
        scopeIntro:
          "Entwicklung einer KI-Wissensplattform bei Future Search Group, mit Python-Backend und Qdrant als Vektordatenbank.",
        scope: [
          "Informationen für den Zugriff durch eine KI-Anwendung strukturieren.",
          "Retrieval-Schicht mit Qdrant und Backend-Logik in FastAPI verbinden.",
          "OpenAI-Integration für Fragen mit relevantem Kontext.",
          "Anbindung an eine interne Oberfläche für das Team.",
        ],
        technicalHighlights: [
          "RAG: Inhalte aufbereiten, indexieren, abrufen und als Kontext bereitstellen.",
          "Vektorsuche für die semantische Zuordnung von Fragen und Informationen.",
          "Trennung zwischen Wissensabruf, Modellaufruf und Anwendungslogik.",
          "Python-API als Schnittstelle zwischen Oberfläche, Modellen und Daten.",
        ],
        proofNote:
          "Interne Anwendung. Architektur und meinen Beitrag erläutere ich gerne im technischen Gespräch.",
        metrics: [
          { label: "Bereich", value: "Knowledge AI" },
          { label: "Datenbank", value: "Qdrant" },
          { label: "Backend", value: "Python · FastAPI" },
          { label: "Kontext", value: "Internes Team" },
        ],
      },
      en: {
        category: "RAG & Knowledge Engineering",
        location: "Internal system · Switzerland",
        period: "Future Search Group",
        summary:
          "An internal AI knowledge platform that makes company information accessible through search and AI-assisted answers.",
        cardResult:
          "Connected documents, vector retrieval, and LLM responses in an internal knowledge application.",
        scopeIntro:
          "Developed an AI knowledge platform at Future Search Group, with a Python backend and Qdrant as the vector database.",
        scope: [
          "Structured information for use by an AI application.",
          "Connected Qdrant retrieval with FastAPI backend logic.",
          "Integrated OpenAI to process questions with relevant context.",
          "Connected an internal interface for the team.",
        ],
        technicalHighlights: [
          "RAG: prepare, index, retrieve, and supply content as context.",
          "Vector search for semantic matching between questions and information.",
          "Separated retrieval, model calls, and application logic.",
          "Python API as the interface between the UI, models, and data.",
        ],
        proofNote:
          "Internal application. I can walk through the architecture and my contribution in a technical conversation.",
        metrics: [
          { label: "Area", value: "Knowledge AI" },
          { label: "Database", value: "Qdrant" },
          { label: "Backend", value: "Python · FastAPI" },
          { label: "Context", value: "Internal team" },
        ],
      },
    },
  },
  {
    slug: "catalog-publishing-automation",
    title: "Catalog Publishing Automation",
    track: "automation",
    visual: "sync",
    stack: [
      "Python",
      "Supplier data",
      "Data mapping",
      "Multi-platform publishing",
    ],
    content: {
      de: {
        category: "Daten- & Prozessautomatisierung",
        location: "Kundenprojekt",
        period: "Individuelle Integration",
        summary:
          "Ein automatisierter Ablauf, der Produktdaten eines Lieferanten übernimmt und für die Veröffentlichung auf mehreren Plattformen verarbeitet.",
        cardResult:
          "Lieferantendaten einmal übernehmen, für verschiedene Plattformen aufbereiten und wiederholte manuelle Eingaben reduzieren.",
        scopeIntro:
          "Ein Händler mit einem umfangreichen Produktkatalog musste Lieferantendaten auf verschiedene Verkaufsplattformen übertragen. Ich habe diesen wiederkehrenden Ablauf automatisiert.",
        scope: [
          "Produktinformationen aus der Datenquelle des Lieferanten übernehmen.",
          "Datenfelder den Anforderungen der Zielplattform zuordnen.",
          "Produktinformationen für die Veröffentlichung auf mehreren Plattformen verarbeiten.",
          "Die wiederkehrenden Schritte in einem Automatisierungssystem zusammenführen.",
        ],
        technicalHighlights: [
          "Eine gemeinsame Datenquelle für mehrere Veröffentlichungsziele.",
          "Plattformspezifische Zuordnung von Feldern und Produktinformationen.",
          "Automatisierte Verarbeitung eines umfangreichen Produktkatalogs.",
          "Weniger wiederholte Dateneingabe und geringerer manueller Pflegeaufwand.",
        ],
        proofNote:
          "Individuelles Kundensystem. Den Datenfluss und die Integration erläutere ich im Gespräch.",
        metrics: [
          { label: "Quelle", value: "Lieferantendaten" },
          { label: "Ziele", value: "Mehrere Plattformen" },
          { label: "Fokus", value: "Katalog-Publishing" },
          { label: "Nutzen", value: "Weniger Handarbeit" },
        ],
      },
      en: {
        category: "Data & workflow automation",
        location: "Client project",
        period: "Custom integration",
        summary:
          "An automated workflow that imports supplier product data and processes it for publishing across multiple platforms.",
        cardResult:
          "Import supplier data once, prepare it for different platforms, and reduce repetitive manual entry.",
        scopeIntro:
          "A seller with a large product catalog needed to transfer supplier data to several selling platforms. I automated that recurring workflow.",
        scope: [
          "Imported product information from the supplier data source.",
          "Mapped data fields to each destination platform.",
          "Processed product information for publishing across multiple platforms.",
          "Combined the recurring steps in a custom automation system.",
        ],
        technicalHighlights: [
          "One data source feeding multiple publishing destinations.",
          "Platform-specific mapping of fields and product information.",
          "Automated processing of a large product catalog.",
          "Less repetitive data entry and lower manual maintenance effort.",
        ],
        proofNote:
          "Custom client system. I can explain the data flow and integration on a call.",
        metrics: [
          { label: "Source", value: "Supplier data" },
          { label: "Destinations", value: "Multiple platforms" },
          { label: "Focus", value: "Catalog publishing" },
          { label: "Benefit", value: "Less manual work" },
        ],
      },
    },
  },
  {
    slug: "customer-operations-automation",
    title: "Customer Operations Automation",
    track: "automation",
    visual: "api",
    stack: ["REST APIs", "HubSpot", "Inventory data", "Workflow automation"],
    content: {
      de: {
        category: "API-Integration & Datenflüsse",
        location: "Lens & Frame Co. · USA",
        period: "2021 — 2026",
        summary:
          "Verknüpfte Abläufe für Produkt-, Bestell-, Kunden- und Bestandsdaten sowie CRM-Integration über mehrere Jahre technischer Betreuung.",
        cardResult:
          "CRM, Produktdaten und Bestellprozesse durch API-Integrationen und automatisierte Datenflüsse verbunden.",
        scopeIntro:
          "Die Arbeit konzentrierte sich auf die Daten und Prozesse hinter dem Tagesgeschäft: Informationen zwischen Systemen übertragen und individuelle Abläufe technisch abbilden.",
        scope: [
          "API-Integrationen für Produkt-, Bestell- und Kundendaten entwickeln.",
          "HubSpot mit Kunden- und Prozessinformationen verbinden.",
          "Bestandsüberwachung, Produktsynchronisierung und Stock Alerts automatisieren.",
          "Individuelle Prescription- und PD-Daten in Bestellprozesse integrieren.",
        ],
        technicalHighlights: [
          "Datenabgleich zwischen operativen Systemen und CRM.",
          "Individuelle Datenmodelle für messungsabhängige Produkte und Bestellungen.",
          "Automatisierte Bestandsinformationen und Benachrichtigungen.",
          "Langfristige Betreuung und Weiterentwicklung der Integrationen.",
        ],
        proofNote:
          "Langfristiges Kundenprojekt. Technische Abläufe und meine Verantwortung erläutere ich im Gespräch.",
        metrics: [
          { label: "Zeitraum", value: "2021 — 2026" },
          { label: "CRM", value: "HubSpot" },
          { label: "Umfang", value: "API-Workflows" },
          { label: "Fokus", value: "Operative Daten" },
        ],
      },
      en: {
        category: "API integration & data workflows",
        location: "Lens & Frame Co. · USA",
        period: "2021 — 2026",
        summary:
          "Connected product, order, customer, and inventory workflows with CRM integration over several years of technical ownership.",
        cardResult:
          "Connected CRM, product data, and ordering processes through API integrations and automated workflows.",
        scopeIntro:
          "This work focused on data and processes behind daily operations: moving information between systems and implementing custom workflows.",
        scope: [
          "Developed API integrations for product, order, and customer data.",
          "Connected HubSpot with customer and workflow information.",
          "Automated inventory monitoring, product synchronization, and stock alerts.",
          "Integrated custom prescription and PD measurement data into ordering workflows.",
        ],
        technicalHighlights: [
          "Data exchange between operational systems and the CRM.",
          "Custom data models for measurement-dependent products and orders.",
          "Automated inventory information and notifications.",
          "Long-term maintenance and integration improvements.",
        ],
        proofNote:
          "Long-term client project. I can explain the technical workflows and my responsibilities on a call.",
        metrics: [
          { label: "Period", value: "2021 — 2026" },
          { label: "CRM", value: "HubSpot" },
          { label: "Scope", value: "API workflows" },
          { label: "Focus", value: "Operational data" },
        ],
      },
    },
  },
];
