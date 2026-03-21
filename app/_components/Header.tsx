"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Section } from "./Section";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Open Source", href: "#open-source" },
  { title: "Projects", href: "#projects" },
  { title: "Expertise", href: "#expertise" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

export const Header = () => {
  const sectionIds = navLinks.map((item) => item.href.replace("#", ""));
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/40 bg-background/70 py-3 backdrop-blur-md"
      role="banner"
    >
      <Section className="flex flex-wrap items-center gap-3">
        <div className="flex flex-col">
          <p className="text-lg font-bold text-primary">
            Sekou Dayifourou KEITA
          </p>
          <p className="text-xs text-muted-foreground">
            Full-Stack Software Engineer
          </p>
        </div>
        <nav aria-label="Primary" className="mr-auto ml-2">
          <ul className="flex flex-wrap items-center gap-1.5">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "text-xs text-muted-foreground hover:text-primary",
                    activeSection === item.href.slice(1) &&
                      "bg-accent/40 text-primary"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="#contact"
          className={cn(buttonVariants({ variant: "default", size: "sm" }))}
        >
          Let&apos;s talk
        </Link>
      </Section>
    </header>
  );
};
