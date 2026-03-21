"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Open Source", href: "#open-source" },
  { title: "GitHub Activity", href: "#github-activity" },
  { title: "Projects", href: "#projects" },
  { title: "Expertise", href: "#expertise" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

const navSectionIds = navLinks.map((item) => item.href.slice(1));

export const Header = () => {
  const [activeSection, setActiveSection] = useState(
    navSectionIds[0] ?? "about",
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const manualSelectionUntilRef = useRef(0);

  useEffect(() => {
    const getCurrentSection = () => {
      const headerOffset = 120;
      const scrollY = window.scrollY + headerOffset;

      let current = navSectionIds[0] ?? "about";
      for (const id of navSectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollY) {
          current = id;
        }
      }

      return current;
    };

    let ticking = false;
    const syncWithScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        if (Date.now() < manualSelectionUntilRef.current) {
          ticking = false;
          return;
        }
        const next = getCurrentSection();
        setActiveSection((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };

    const syncWithHash = () => {
      const hashId = window.location.hash.replace("#", "");
      if (hashId && navSectionIds.includes(hashId)) {
        setActiveSection(hashId);
        setIsMobileMenuOpen(false);
      }
    };

    syncWithScroll();
    syncWithHash();

    window.addEventListener("scroll", syncWithScroll, { passive: true });
    window.addEventListener("hashchange", syncWithHash);

    return () => {
      window.removeEventListener("scroll", syncWithScroll);
      window.removeEventListener("hashchange", syncWithHash);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/50 bg-background/80 py-3 backdrop-blur-xl"
      role="banner"
    >
      <Section className="!max-w-6xl flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-col">
          <p className="text-lg font-bold tracking-tight text-foreground">
            Sekou Dayifourou KEITA
          </p>
          <p className="text-xs text-muted-foreground">
            Full-Stack Software Engineer
          </p>
        </div>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1.5 pr-1">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => {
                    manualSelectionUntilRef.current = Date.now() + 1200;
                    setActiveSection(item.href.slice(1));
                  }}
                  aria-current={
                    activeSection === item.href.slice(1) ? "page" : undefined
                  }
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "whitespace-nowrap text-xs text-muted-foreground hover:text-primary",
                    activeSection === item.href.slice(1) &&
                      "bg-primary/15 text-primary",
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="https://github.com/Dayifour"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default", size: "sm" }))}
          >
            Explore Code
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "lg:hidden",
          )}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Section>

      {isMobileMenuOpen ? (
        <nav
          aria-label="Primary"
          className="border-t border-border/50 bg-background/95 px-4 py-3 lg:hidden"
        >
          <ul className="m-auto flex w-full max-w-6xl flex-col gap-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => {
                    manualSelectionUntilRef.current = Date.now() + 1200;
                    setActiveSection(item.href.slice(1));
                    setIsMobileMenuOpen(false);
                  }}
                  aria-current={
                    activeSection === item.href.slice(1) ? "page" : undefined
                  }
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "w-full justify-start text-sm text-muted-foreground hover:text-primary",
                    activeSection === item.href.slice(1) &&
                      "bg-primary/15 text-primary",
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="https://github.com/Dayifour"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "w-full",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore Code
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
