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
  metadataBase: new URL("https://rei-aliaj.com"),
  title: "Rei Aliaj | Full-Stack Entwickler für KI, Shopify & WordPress",
  description:
    "Remote Full-Stack-Entwickler mit über 10 Jahren Erfahrung in Python-Automatisierung, KI-Integrationen, Shopify und WordPress.",
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
    title: "Rei Aliaj | Full-Stack Entwickler",
    description:
      "Python-Automatisierung, KI-Integrationen, Shopify und WordPress für Remote-Teams.",
  },
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
