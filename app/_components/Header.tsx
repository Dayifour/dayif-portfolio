import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithunIcons } from "./icons/GithunIcons";
import { LinkedInIcon } from "./icons/LinkedinIcon";
import { TelegramIcon } from "./icons/TelegramIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { WathsAppIcon } from "./icons/WathsAppIcon";
import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">Manager Dayif</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/Dayifour3"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithunIcons size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://twitter.com/Dayifour"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <TwitterIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://linkedin.com/in/sekou-dayifourou-keita"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedInIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://wa.me/22379994640?text=Salut!%20Je%20veux%20travailler%20avec%20vous%20😍"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <WathsAppIcon size={14} className="text-foreground" />
          </Link>
          <Link
            href="https://telegram.me/managerdayif?text=Salut!%20Je%20veux%20travailler%20avec%20vous%20😍"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <TelegramIcon size={20} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
