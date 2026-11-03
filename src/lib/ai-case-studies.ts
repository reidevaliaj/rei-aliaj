import type { CaseStudy } from "./site-data";

export const existingAIStudies: CaseStudy[] = [
  {
    slug: "ai-voice-receptionist",
    title: "AI Voice Receptionist",
    track: "automation",
    visual: "voice",
    stack: [
      "Python",
      "FastAPI",
      "LiveKit",
      "Cartesia",
      "Deepgram",
      "OpenAI",
      "Twilio",
    ],
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
];
