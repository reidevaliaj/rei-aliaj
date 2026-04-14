"use client";

import Link from "next/link";
import { useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";

const mobileLinks = [
  ["Services", "#services"],
  ["AI Assistant", "#ai-assistant"],
  ["Case Studies", "#work"],
  ["About Me", "#about"],
  ["Contact", "#contact"],
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header px-4 py-3 md:px-10 md:py-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 font-display text-[0.82rem] font-semibold uppercase tracking-[0.28em] text-white/88 md:text-sm md:tracking-[0.32em]"
            onClick={closeMenu}
          >
            Rei Aliaj
          </Link>

          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.3em] text-white/42 lg:flex">
            <a href="#services" className="transition-colors hover:text-white/84">
              Services
            </a>
            <a href="#ai-assistant" className="transition-colors hover:text-white/84">
              AI Assistant
            </a>
            <a href="#work" className="transition-colors hover:text-white/84">
              Case Studies
            </a>
            <a href="#about" className="transition-colors hover:text-white/84">
              About Me
            </a>
            <a href="#contact" className="transition-colors hover:text-white/84">
              Contact
            </a>
          </nav>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((current) => !current)}
            className="mobile-menu-button lg:hidden"
          >
            {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        <div className={`mobile-menu-panel lg:hidden ${isOpen ? "open" : ""}`}>
          <div className="mobile-menu-shell">
            {mobileLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="mobile-menu-link"
              >
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
