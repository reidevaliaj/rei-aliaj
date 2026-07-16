import { contactDetails, type Locale } from "@/lib/site-data";

const RESEND_API_URL = "https://api.resend.com/emails";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  opportunity?: string;
  message?: string;
  locale?: Locale;
};

type NormalizedPayload = Required<Omit<ContactPayload, "locale">> & {
  locale: Locale;
};

const messages = {
  de: {
    title: "Neue Anfrage über die Portfolio-Website",
    company: "Unternehmen",
    opportunity: "Position / Bereich",
    message: "Nachricht",
    invalidBody: "Ungültige Anfrage.",
    required: "Name, E-Mail und Nachricht sind erforderlich.",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    unavailable: "Die Nachricht konnte gerade nicht gesendet werden.",
    success: `Ihre Nachricht wurde an ${contactDetails.email} gesendet.`,
  },
  en: {
    title: "New portfolio website inquiry",
    company: "Company",
    opportunity: "Position / area",
    message: "Message",
    invalidBody: "Invalid request.",
    required: "Name, email, and message are required.",
    invalidEmail: "Please provide a valid email address.",
    unavailable: "Your message could not be sent right now.",
    success: `Your message has been sent to ${contactDetails.email}.`,
  },
} as const;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildTextEmail(payload: NormalizedPayload) {
  const copy = messages[payload.locale];

  return [
    copy.title,
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `${copy.company}: ${payload.company || "-"}`,
    `${copy.opportunity}: ${payload.opportunity || "-"}`,
    "",
    `${copy.message}:`,
    payload.message,
  ].join("\n");
}

function buildHtmlEmail(payload: NormalizedPayload) {
  const copy = messages[payload.locale];

  return `
    <div style="font-family: Arial, sans-serif; color: #16181d; line-height: 1.7;">
      <h2 style="margin: 0 0 20px;">${copy.title}</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>${copy.company}:</strong> ${escapeHtml(payload.company || "-")}</p>
      <p><strong>${copy.opportunity}:</strong> ${escapeHtml(payload.opportunity || "-")}</p>
      <p style="margin: 24px 0 8px;"><strong>${copy.message}:</strong></p>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(payload.message)}</p>
    </div>
  `;
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { message: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: messages.en.invalidBody }, { status: 400 });
  }

  const locale: Locale = payload.locale === "de" ? "de" : "en";
  const copy = messages[locale];
  const normalizedPayload: NormalizedPayload = {
    name: payload.name?.trim() || "",
    email: payload.email?.trim() || "",
    company: payload.company?.trim() || "",
    opportunity: payload.opportunity?.trim() || "",
    message: payload.message?.trim() || "",
    locale,
  };

  if (!normalizedPayload.name || !normalizedPayload.email || !normalizedPayload.message) {
    return Response.json({ message: copy.required }, { status: 400 });
  }

  if (!isValidEmail(normalizedPayload.email)) {
    return Response.json({ message: copy.invalidEmail }, { status: 400 });
  }

  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Rei Aliaj Website <${contactDetails.email}>`,
      to: [contactDetails.email],
      reply_to: normalizedPayload.email,
      subject: `New job opportunity from ${normalizedPayload.name}`,
      text: buildTextEmail(normalizedPayload),
      html: buildHtmlEmail(normalizedPayload),
    }),
  });

  if (!resendResponse.ok) {
    const resendError = (await resendResponse.json().catch(() => null)) as
      | { message?: string; error?: { message?: string } }
      | null;

    return Response.json(
      {
        message:
          resendError?.message || resendError?.error?.message || copy.unavailable,
      },
      { status: 500 },
    );
  }

  return Response.json({ message: copy.success });
}
