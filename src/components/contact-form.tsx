"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

import type { Locale } from "@/lib/site-data";

type ContactFormProps = {
  locale: Locale;
  email: string;
  whatsappNumber: string;
  whatsappHref: string;
};

type FormState = {
  name: string;
  email: string;
  company: string;
  opportunity: string;
  message: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  opportunity: "",
  message: "",
};

const formCopy = {
  de: {
    eyebrow: "Direkte Nachricht",
    title: "Kurze Nachricht genügt.",
    channel: "E-Mail oder WhatsApp",
    name: "Name",
    namePlaceholder: "Ihr Name",
    email: "E-Mail",
    company: "Unternehmen",
    companyPlaceholder: "Unternehmen oder Team",
    opportunity: "Position / Bereich",
    opportunityPlaceholder: "z. B. Python, Shopify, WordPress",
    message: "Nachricht",
    messagePlaceholder:
      "Erzählen Sie mir kurz von der Position, den Aufgaben und Ihrem Team.",
    send: "Nachricht senden",
    sending: "Wird gesendet...",
    whatsapp: "Per WhatsApp",
    idle: (email: string, phone: string) =>
      `Die Nachricht geht direkt an ${email}. Alternativ erreichen Sie mich unter ${phone}.`,
    sendingFeedback: "Ihre Nachricht wird gesendet...",
    fallbackError: "Die Nachricht konnte gerade nicht gesendet werden.",
  },
  en: {
    eyebrow: "Direct message",
    title: "A short message is enough.",
    channel: "Email or WhatsApp",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    company: "Company",
    companyPlaceholder: "Company or team",
    opportunity: "Position / area",
    opportunityPlaceholder: "e.g. Python, Shopify, WordPress",
    message: "Message",
    messagePlaceholder:
      "Tell me briefly about the position, responsibilities, and your team.",
    send: "Send message",
    sending: "Sending...",
    whatsapp: "Use WhatsApp",
    idle: (email: string, phone: string) =>
      `Your message goes directly to ${email}. You can also reach me at ${phone}.`,
    sendingFeedback: "Sending your message...",
    fallbackError: "Your message could not be sent right now.",
  },
} as const;

function buildWhatsAppMessage(form: FormState, locale: Locale) {
  const labels =
    locale === "de"
      ? ["Name", "E-Mail", "Unternehmen", "Position / Bereich", "Nachricht"]
      : ["Name", "Email", "Company", "Position / area", "Message"];

  return [
    `${labels[0]}: ${form.name || "-"}`,
    `${labels[1]}: ${form.email || "-"}`,
    `${labels[2]}: ${form.company || "-"}`,
    `${labels[3]}: ${form.opportunity || "-"}`,
    "",
    `${labels[4]}:`,
    form.message || "-",
  ].join("\n");
}

export function ContactForm({
  locale,
  email,
  whatsappNumber,
  whatsappHref,
}: ContactFormProps) {
  const copy = formCopy[locale];
  const [form, setForm] = useState<FormState>(initialState);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState(copy.idle(email, whatsappNumber));

  const resetFeedback = () => {
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setFeedback(copy.idle(email, whatsappNumber));
    }
  };

  const updateField =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      resetFeedback();
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitStatus === "sending") return;

    setSubmitStatus("sending");
    setFeedback(copy.sendingFeedback);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      const data = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(data?.message || copy.fallbackError);
      }

      setSubmitStatus("success");
      setForm(initialState);
      setFeedback(data?.message || copy.idle(email, whatsappNumber));
    } catch (error) {
      setSubmitStatus("error");
      setFeedback(error instanceof Error ? error.message : copy.fallbackError);
    }
  };

  const openWhatsApp = () => {
    const separator = whatsappHref.includes("?") ? "&" : "?";
    window.open(
      `${whatsappHref}${separator}text=${encodeURIComponent(buildWhatsAppMessage(form, locale))}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="contact-form-panel">
      <div className="form-heading">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h3>{copy.title}</h3>
        </div>
        <span>{copy.channel}</span>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <label>
            <span>{copy.name}</span>
            <input
              className="field-input"
              value={form.name}
              onChange={updateField("name")}
              placeholder={copy.namePlaceholder}
              autoComplete="name"
              required
            />
          </label>
          <label>
            <span>{copy.email}</span>
            <input
              type="email"
              className="field-input"
              value={form.email}
              onChange={updateField("email")}
              placeholder="name@company.com"
              autoComplete="email"
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            <span>{copy.company}</span>
            <input
              className="field-input"
              value={form.company}
              onChange={updateField("company")}
              placeholder={copy.companyPlaceholder}
              autoComplete="organization"
            />
          </label>
          <label>
            <span>{copy.opportunity}</span>
            <input
              className="field-input"
              value={form.opportunity}
              onChange={updateField("opportunity")}
              placeholder={copy.opportunityPlaceholder}
            />
          </label>
        </div>

        <label>
          <span>{copy.message}</span>
          <textarea
            className="field-input"
            value={form.message}
            onChange={updateField("message")}
            placeholder={copy.messagePlaceholder}
            required
          />
        </label>

        <div className="form-actions">
          <button
            type="submit"
            disabled={submitStatus === "sending"}
            className="button-primary"
          >
            {submitStatus === "sending" ? copy.sending : copy.send}
          </button>
          <button type="button" onClick={openWhatsApp} className="button-secondary">
            {copy.whatsapp}
          </button>
        </div>
      </form>

      <p className={`form-feedback form-feedback-${submitStatus}`} aria-live="polite">
        {feedback}
      </p>
    </div>
  );
}
