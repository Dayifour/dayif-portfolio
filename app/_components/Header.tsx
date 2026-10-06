"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/lib/contact";
import { Icons } from "./icons/Icons";
import { PreferenceControls, usePreferences } from "./Preferences";

const links = [
  { title: "Work", href: "#work" },
  { title: "Open Source", href: "#open-source" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export function Header() {
  const { t } = usePreferences();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sync = () => setScrolled(window.scrollY > 30);
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("keydown", escape);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="#top" className="wordmark" aria-label="Sekou Dayifourou Keita" onClick={() => setOpen(false)}>
          dayifour<span aria-hidden="true">.</span>
        </Link>
        <nav className="desktop-nav" aria-label={t("Primary")}>
          {links.map(link => <Link key={link.href} href={link.href} className="nav-link"><span>{t(link.title)}</span></Link>)}
        </nav>
        <div className="header-actions">
          <PreferenceControls />
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="header-whatsapp" aria-label={t("Contact Sekou Dayifourou KEITA on WhatsApp")} data-magnetic>
            <Icons.WhatsAppIcon size={21} viewBox="0 0 256 258" aria-hidden="true" />
            <span>{t("Let's talk")}</span>
            <ArrowUpRight size={16} className="whatsapp-arrow" aria-hidden="true" />
          </a>
          <button ref={menuButton} type="button" className="mobile-menu-toggle" aria-label={open ? t("Close menu") : t("Open menu")} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label={t("Primary")}>
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span className="mobile-nav-number">0{index + 1}</span>{t(link.title)}<ArrowUpRight size={24} />
            </Link>
          ))}
        </nav>
      )}
      <div className="reading-progress" aria-hidden="true" />
    </header>
  );
}
