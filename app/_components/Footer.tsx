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
    { label: "Email", href: "mailto:sekoudayifourouk@gmail.com" },
  ];

  return (
    <footer
      className="mt-8 border-t border-border/60 bg-card/60"
      role="contentinfo"
    >
      <Section className="grid w-full gap-8 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-xl font-semibold text-foreground">
            Sekou Dayifourou KEITA
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Full-Stack Software Engineer building high-performance, type-safe
            systems for product startups.
          </p>
          <p className="text-xs text-muted-foreground">Remote-friendly | UTC</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/90">
            Navigate
          </p>
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
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/90">
            Connect
          </p>
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

        <div className="md:col-span-3 border-t border-border/70 pt-4">
          <p className="text-muted-foreground text-sm" aria-label="Copyright">
            &copy; {year} Sekou Dayifourou KEITA. All rights reserved.
          </p>
        </div>
      </Section>
    </footer>
  );
};
