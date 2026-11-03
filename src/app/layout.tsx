import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-rei-body",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-rei-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rei-aliaj.com"),
  title: "Rei Aliaj | AI Engineer & Automation Developer",
  description:
    "AI Engineer und Automation Developer für Python, LLM-Anwendungen, RAG, Voice AI, Datenpipelines und API-Integrationen. Offen für Remote-Rollen und B2B-Projekte.",
  alternates: {
    canonical: "/",
    languages: { de: "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_US",
    url: "/",
    siteName: "Rei Aliaj",
    title: "Rei Aliaj | AI Engineer & Automation Developer",
    description:
      "KI-Anwendungen, RAG, Voice AI und Python-Automatisierung. Von Daten zu zuverlässigen Workflows.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
