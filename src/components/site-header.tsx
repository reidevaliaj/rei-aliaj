"use client";

import Link from "next/link";
import { useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { navigationCopy, type Locale } from "@/lib/site-data";

type SiteHeaderProps = {
  locale: Locale;
  alternateHref?: string;
};

export function SiteHeader({ locale, alternateHref }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const copy = navigationCopy[locale];
  const homeHref = locale === "de" ? "/" : "/en";
  const languageHref = alternateHref ?? (locale === "de" ? "/en" : "/");
  const links = [
    [copy.expertise, `${homeHref}#expertise`],
    [copy.work, `${homeHref}#work`],
    [copy.experience, `${homeHref}#experience`],
    [copy.about, `${homeHref}#about`],
    [copy.contact, `${homeHref}#contact`],
  ] as const;

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenu();
      }}
    >
      <div className="header-inner">
        <Link href={homeHref} className="site-wordmark" onClick={closeMenu}>
          <span>
            R<span className="wordmark-cursor">_</span>
          </span>
          <strong>
            Rei Aliaj<small>AI & AUTOMATION</small>
          </strong>
        </Link>

        <nav
          className="desktop-nav"
          aria-label={
            locale === "de" ? "Hauptnavigation" : "Primary navigation"
          }
        >
          {links.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link
            href={languageHref}
            className="language-switch"
            hrefLang={locale === "de" ? "en" : "de"}
            aria-label={
              locale === "de" ? "Switch to English" : "Auf Deutsch wechseln"
            }
          >
            <span className={locale === "de" ? "active" : ""}>DE</span>
            <i />
            <span className={locale === "en" ? "active" : ""}>EN</span>
          </Link>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? copy.closeMenu : copy.openMenu}
            onClick={() => setIsOpen((current) => !current)}
            className="mobile-menu-button"
          >
            {isOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`mobile-menu-panel ${isOpen ? "open" : ""}`}
        >
          <div className="mobile-menu-shell">
            {links.map(([label, href], index) => (
              <Link
                key={label}
                href={href}
                onClick={closeMenu}
                className="mobile-menu-link"
              >
                <span>{label}</span>
                <small>0{index + 1}</small>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
