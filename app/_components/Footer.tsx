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
      className="relative mt-10 overflow-hidden border-t border-border/60 bg-card/60"
      role="contentinfo"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,hsl(var(--primary)/0.1),transparent_42%),radial-gradient(circle_at_90%_12%,hsl(var(--accent)/0.08),transparent_40%)]" />
      <div className="h-px w-full bg-gradient-to-r from-primary/45 via-accent/45 to-primary/30" />

      <Section className="grid w-full gap-8 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-xl font-semibold tracking-tight text-foreground">
            Sekou Dayifourou KEITA
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Full-Stack Software Engineer building high-performance, type-safe
            systems for product startups.
          </p>
          <p className="text-xs uppercase tracking-[0.12em] text-foreground/70">
            Remote-friendly | UTC
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground/75">
            Navigate
          </p>
          <ul className="space-y-1.5">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-md border border-transparent px-2 py-1 text-sm text-muted-foreground transition-colors hover:border-border/60 hover:bg-background/20 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground/75">
            Connect
          </p>
          <ul className="space-y-1.5">
            {socialLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-md border border-transparent px-2 py-1 text-sm text-muted-foreground transition-colors hover:border-border/60 hover:bg-background/20 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 border-t border-border/70 pt-5">
          <p
            className="text-sm text-muted-foreground"
            aria-label="Copyright"
          >
            &copy; {year} Sekou Dayifourou KEITA. All rights reserved.
          </p>
        </div>
      </Section>
    </footer>
  );
};
