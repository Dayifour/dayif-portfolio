import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";

export const Header = () => {
  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Open Source", href: "#open-source" },
    { title: "Projects", href: "#projects" },
    { title: "Expertise", href: "#expertise" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className="top-0 py-4" role="banner">
      <Section className="flex flex-wrap items-center gap-3">
        <div className="flex flex-col">
          <p className="text-lg font-bold text-primary">Sekou Dayifourou KEITA</p>
          <p className="text-xs text-muted-foreground">
            Full-Stack Software Engineer
          </p>
        </div>
        <nav aria-label="Primary" className="mr-auto ml-2">
          <ul className="flex items-center gap-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "text-xs",
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
