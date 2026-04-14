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
  title: "Rei Aliaj | Shopify Technical Solutions",
  description:
    "Technical Shopify solutions, custom apps, integrations, automation, and freelance support for ecommerce brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
