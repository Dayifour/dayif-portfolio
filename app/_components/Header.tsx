import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./icons/Icons";
import { Section } from "./Section";

export const Header = () => {
  const socialLinks = [
    {
      title: "GitHub",
      href: "https://github.com/Dayifour",
      logo: Icons.GithubIcon({ size: 12, className: "text-foreground" }),
    },
    {
      title: "Twitter",
      href: "https://twitter.com/Dayifour",
      logo: Icons.TwitterIcon({ size: 12, className: "text-foreground" }),
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/dayifour",
      logo: Icons.LinkedinIcon({ size: 12, className: "text-foreground" }),
    },
    {
      title: "WhatsApp",
      href: "https://wa.me/22379994640?text=Salut!%20Je%20veux%20travailler%20avec%20vous%20😍",
      logo: Icons.WhatsAppIcon({ size: 14, className: "text-foreground" }),
    },
    {
      title: "Telegram",
      href: "https://telegram.me/managerdayif?text=Salut!%20Je%20veux%20travailler%20avec%20vous%20😍",
      logo: Icons.TelegramIcon({ size: 20, className: "text-foreground" }),
    },
  ];

  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Services", href: "#services" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className="top-0 py-4" role="banner">
      <Section className="flex flex-wrap items-center gap-3">
        <p className="text-lg font-bold text-primary">Manager Dayif</p>
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
        <ul className="flex items-center gap-2" aria-label="Social links">
          {socialLinks.map((props, idx) => (
            <li key={idx}>
              <Link
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "size-6 p-0",
                )}
                aria-label={`${props.title} Manager Dayif`}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              >
                {props.logo}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </header>
  );
};
