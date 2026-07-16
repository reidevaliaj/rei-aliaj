import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";

export const metadata: Metadata = {
  title: "Rei Aliaj | Full-Stack Developer for AI, Shopify & WordPress",
  description:
    "Remote full-stack developer with 10+ years of experience in Python automation, AI integrations, Shopify, and WordPress.",
  alternates: {
    canonical: "/en",
    languages: { de: "/", en: "/en" },
  },
};

export default function EnglishHomePage() {
  return <PortfolioPage locale="en" />;
}
