import Link from "next/link";
import { Section } from "./Section";

export const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Open Source", href: "#open-source" },
    { label: "Projects", href: "#projects" },
    { label: "Expertise", href: "#expertise" },
    { label: "Skills", href: "#skills" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Dayifour" },
    { label: "LinkedIn", href: "https://linkedin.com/in/dayifour" },
    { label: "X / Twitter", href: "https://twitter.com/dayifour" },
  ];

  return (
    <footer className="mt-4 border-t border-border/60 bg-card/40" role="contentinfo">
      <Section className="grid w-full gap-8 py-10 md:grid-cols-3">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-primary">
            Sekou Dayifourou KEITA
          </p>
          <p className="text-sm text-muted-foreground">
            Full-Stack Software Engineer building high-performance, type-safe
            systems for product startups.
          </p>
          <p className="text-xs text-muted-foreground">Remote-friendly | UTC</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-primary">Navigate</p>
          <ul className="space-y-1">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-primary">Connect</p>
          <ul className="space-y-1">
            {socialLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 border-t border-border pt-4">
          <p className="text-muted-foreground text-sm" aria-label="Copyright">
            &copy; {year} Sekou Dayifourou KEITA. All rights reserved.
          </p>
        </div>
      </Section>
    </footer>
  );
};
