"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

type ContactFormProps = {
  email: string;
  whatsappNumber: string;
  whatsappHref: string;
};

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

function buildMessage(form: FormState) {
  return [
    `Name: ${form.name || "-"}`,
    `Email: ${form.email || "-"}`,
    `Company: ${form.company || "-"}`,
    `Project type: ${form.projectType || "-"}`,
    "",
    "Project details:",
    form.message || "-",
  ].join("\n");
}

export function ContactForm({
  email,
  whatsappNumber,
  whatsappHref,
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState(
    `Messages go directly to ${email}, or you can start a WhatsApp chat with ${whatsappNumber}.`,
  );

  const updateField =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));

      if (submitStatus !== "idle") {
        setSubmitStatus("idle");
        setFeedback(
          `Messages go directly to ${email}, or you can start a WhatsApp chat with ${whatsappNumber}.`,
        );
      }
    };

  const handleEmailSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitStatus === "sending") {
      return;
    }

    setSubmitStatus("sending");
    setFeedback("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(data?.message || "Unable to send your message right now.");
      }

      setSubmitStatus("success");
      setForm(initialState);
      setFeedback(
        data?.message || `Your message has been sent to ${email}. I will get back to you soon.`,
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message.";

      setSubmitStatus("error");
      setFeedback(message);
    }
  };

  const openWhatsApp = () => {
    const text = buildMessage(form);
    const separator = whatsappHref.includes("?") ? "&" : "?";

    window.open(
      `${whatsappHref}${separator}text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="glass-panel rounded-[30px] p-6 sm:p-7">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Direct form</p>
          <h3 className="mt-3 font-display text-2xl leading-tight tracking-[-0.04em] text-white">
            Tell me what you need
          </h3>
        </div>
        <span className="ghost-pill rounded-full px-3 py-1 text-[0.68rem] uppercase tracking-[0.28em] text-white/48">
          Email or WhatsApp
        </span>
      </div>

      <form onSubmit={handleEmailSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-white/42">
              Name
            </span>
            <input
              className="field-input"
              value={form.name}
              onChange={updateField("name")}
              placeholder="Your name"
              required
            />
          </label>
          <label className="space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-white/42">
              Email
            </span>
            <input
              type="email"
              className="field-input"
              value={form.email}
              onChange={updateField("email")}
              placeholder="you@example.com"
              required
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-white/42">
              Company
            </span>
            <input
              className="field-input"
              value={form.company}
              onChange={updateField("company")}
              placeholder="Brand or company"
            />
          </label>
          <label className="space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-white/42">
              Project type
            </span>
            <input
              className="field-input"
              value={form.projectType}
              onChange={updateField("projectType")}
              placeholder="Theme work, app, rebuild..."
            />
          </label>
        </div>

        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.28em] text-white/42">
            Project details
          </span>
          <textarea
            className="field-input min-h-[160px] resize-y py-4"
            value={form.message}
            onChange={updateField("message")}
            placeholder="Tell me about the store, the challenge, and what kind of help you need."
            required
          />
        </label>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button
            type="submit"
            disabled={submitStatus === "sending"}
            className="button-primary cursor-pointer border-0 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitStatus === "sending" ? "Sending..." : "Send Inquiry"}
          </button>
          <button
            type="button"
            onClick={openWhatsApp}
            className="button-secondary cursor-pointer"
          >
            Chat on WhatsApp
          </button>
        </div>
      </form>

      <p
        className={`mt-4 text-sm leading-7 ${
          submitStatus === "error"
            ? "text-red-200/90"
            : submitStatus === "success"
              ? "text-emerald-100/85"
              : "text-[var(--muted)]"
        }`}
      >
        {feedback}
      </p>
    </div>
  );
}
