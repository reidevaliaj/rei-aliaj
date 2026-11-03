import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";

export const metadata: Metadata = {
  title: "Rei Aliaj | AI Engineer & Automation Developer",
  description:
    "AI Engineer and Automation Developer building Python systems, LLM applications, RAG, voice AI, data pipelines, and API integrations. Available for remote roles and B2B projects.",
  alternates: {
    canonical: "/en",
    languages: { de: "/", en: "/en" },
  },
  openGraph: {
    title: "Rei Aliaj | AI Engineer & Automation Developer",
    description:
      "AI applications, RAG, voice AI, and Python automation. From data to dependable workflows.",
    url: "/en",
    locale: "en_US",
    alternateLocale: "de_DE",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function EnglishHomePage() {
  return <PortfolioPage locale="en" />;
}
