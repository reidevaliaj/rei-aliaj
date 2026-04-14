import { contactDetails } from "@/lib/site-data";

const RESEND_API_URL = "https://api.resend.com/emails";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  message?: string;
};

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

function buildTextEmail(payload: Required<ContactPayload>) {
  return [
    "New contact form submission",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "-"}`,
    `Project type: ${payload.projectType || "-"}`,
    "",
    "Project details:",
    payload.message,
  ].join("\n");
}

function buildHtmlEmail(payload: Required<ContactPayload>) {
  return `
    <div style="font-family: Arial, sans-serif; color: #16181d; line-height: 1.7;">
      <h2 style="margin: 0 0 20px;">New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(payload.company || "-")}</p>
      <p><strong>Project type:</strong> ${escapeHtml(payload.projectType || "-")}</p>
      <p style="margin: 24px 0 8px;"><strong>Project details:</strong></p>
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
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() || "";
  const email = payload.email?.trim() || "";
  const company = payload.company?.trim() || "";
  const projectType = payload.projectType?.trim() || "";
  const message = payload.message?.trim() || "";

  if (!name || !email || !message) {
    return Response.json(
      { message: "Name, email, and project details are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const normalizedPayload = {
    name,
    email,
    company,
    projectType,
    message,
  };

  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Rei Aliaj Website <${contactDetails.email}>`,
      to: [contactDetails.email],
      reply_to: email,
      subject: `New Shopify inquiry from ${name}`,
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
          resendError?.message ||
          resendError?.error?.message ||
          "Unable to send your message right now.",
      },
      { status: 500 },
    );
  }

  return Response.json({
    message: `Your message has been sent to ${contactDetails.email}.`,
  });
}
