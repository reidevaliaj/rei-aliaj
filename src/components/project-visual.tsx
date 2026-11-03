import type { CaseStudy, Locale } from "@/lib/site-data";

export function SystemDiagram({ locale }: { locale: Locale }) {
  const de = locale === "de";
  return (
    <div
      className="system-diagram"
      role="img"
      aria-label={
        de
          ? "Architektur: Datenquellen, KI-Verarbeitung und automatisierte Aktionen"
          : "Architecture: data sources, AI processing, and automated actions"
      }
    >
      <div className="diagram-heading">
        <span className="diagram-dot" />
        {de ? "SYSTEMARCHITEKTUR" : "SYSTEM ARCHITECTURE"}
        <span>01 — 03</span>
      </div>
      <div className="diagram-flow">
        <div className="diagram-inputs">
          <span className="diagram-caption">01 / INPUT</span>
          {["Documents", "APIs & data", "Voice & events"].map((x, i) => (
            <div className="diagram-node" key={x}>
              <span>{["≡", "{ }", "⌁"][i]}</span>
              {x}
              <small>→</small>
            </div>
          ))}
        </div>
        <div className="diagram-engine">
          <span className="engine-corner tl" />
          <span className="engine-corner tr" />
          <span className="engine-corner bl" />
          <span className="engine-corner br" />
          <span className="diagram-caption">02 / PROCESS</span>
          <div className="engine-symbol">
            AI<span>_</span>
          </div>
          <strong>Python + LLM</strong>
          <span className="engine-detail">Retrieve · Reason · Validate</span>
        </div>
        <div className="diagram-outputs">
          <span className="diagram-caption">03 / OUTPUT</span>
          {["Structured data", "Connected tools", "Automated work"].map((x) => (
            <div className="diagram-node" key={x}>
              <span>↳</span>
              {x}
            </div>
          ))}
        </div>
      </div>
      <div className="diagram-code">
        <span className="code-line-number">01</span>
        <code>
          <span>input</span> → context → <b>action</b>
        </code>
        <span className="code-cursor" />
      </div>
      <div className="diagram-bottom">
        <span>PYTHON / LLM / API</span>
        <span>{de ? "Von Daten zu Aktionen" : "From data to action"}</span>
      </div>
    </div>
  );
}
const flows = {
  voice: {
    label: "REALTIME / VOICE AI",
    steps: ["Twilio", "Deepgram", "OpenAI", "Cartesia"],
    title: "Listen. Reason. Respond.",
    sub: "Audio stream → STT → LLM → TTS",
    mark: "⌁",
  },
  jobs: {
    label: "DATA / RECRUITING AUTOMATION",
    steps: ["Sources", "Selenium", "OpenAI", "Dashboard"],
    title: "From listings to insights.",
    sub: "Collect → Extract → Classify → Deliver",
    mark: "{ }",
  },
  rag: {
    label: "RETRIEVAL / KNOWLEDGE AI",
    steps: ["Documents", "Embeddings", "Qdrant", "Answer"],
    title: "Context before answers.",
    sub: "Ingest → Index → Retrieve → Generate",
    mark: "≡",
  },
  sync: {
    label: "WORKFLOWS / CATALOG DATA",
    steps: ["Supplier", "Mapping", "Processing", "Platforms"],
    title: "One source. Many destinations.",
    sub: "Import → Map → Process → Publish",
    mark: "↗",
  },
  api: {
    label: "INTEGRATION / OPERATIONS",
    steps: ["Products", "API", "HubSpot", "Workflows"],
    title: "Connect the moving parts.",
    sub: "Products ↔ Orders ↔ Customers ↔ CRM",
    mark: "⤳",
  },
};
const german = {
  voice: [
    "Zuhören. Verstehen. Antworten.",
    "Audio → Transkription → LLM → Sprache",
  ],
  jobs: [
    "Von Inseraten zu Erkenntnissen.",
    "Erfassen → Extrahieren → Zuordnen → Bereitstellen",
  ],
  rag: [
    "Erst Kontext. Dann Antworten.",
    "Aufbereiten → Indexieren → Abrufen → Generieren",
  ],
  sync: [
    "Eine Quelle. Mehrere Ziele.",
    "Importieren → Zuordnen → Verarbeiten → Veröffentlichen",
  ],
  api: [
    "Systeme sinnvoll verbinden.",
    "Produkte ↔ Bestellungen ↔ Kunden ↔ CRM",
  ],
};
export function ProjectVisual({
  study,
  locale = "en",
  large = false,
}: {
  study: CaseStudy;
  locale?: Locale;
  large?: boolean;
}) {
  const flow = flows[study.visual];
  return (
    <div
      className={`project-visual visual-${study.visual} ${large ? "visual-large" : ""}`}
    >
      <div className="visual-topline">
        <span>{flow.label}</span>
        <span>{locale === "de" ? "ARCHITEKTUR" : "ARCHITECTURE"}</span>
      </div>
      <div className="visual-core">
        {study.visual === "voice" ? (
          <div className="voice-wave" aria-hidden="true">
            {[20, 36, 56, 30, 70, 48, 82, 60, 40, 64, 30, 48, 20].map(
              (h, i) => (
                <i key={i} style={{ height: h }} />
              ),
            )}
          </div>
        ) : (
          <span className="visual-symbol" aria-hidden="true">
            {flow.mark}
          </span>
        )}
        <strong>
          {locale === "de" ? german[study.visual][0] : flow.title}
        </strong>
        <span>{locale === "de" ? german[study.visual][1] : flow.sub}</span>
      </div>
      <div className="visual-pipeline">
        {flow.steps.map((step, i) => (
          <span key={step}>
            <b>{String(i + 1).padStart(2, "0")}</b>
            {step}
            {i < flow.steps.length - 1 ? <i>→</i> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
