import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Code } from "./Code";
import { ContributedLogos } from "./ContributedLogos";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section id="about" className="flex flex-col items-start gap-6">
      <div className="hero-surface w-full p-6 sm:p-8 lg:p-10">
        <p className="section-kicker">Software Engineering</p>
        <h1 className="mt-3 font-caption text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Sekou Dayifourou KEITA
        </h1>
        <h2 className="mt-3 max-w-4xl text-xl leading-snug text-foreground/95 sm:text-2xl lg:text-3xl">
          TypeScript Full-Stack Engineer for high-performance product systems.
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I design and ship reliable full-stack architectures, with recent work
          spanning <Code>Cloudflare vinext</Code> contributions and the
          multi-tenant foundation of <Code>SUGUBA</Code>.
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <span className="chip">Ownership and accountability</span>
          <span className="chip">Clear async communication</span>
          <span className="chip">Reliable delivery under pressure</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="https://github.com/Dayifour"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }), "h-10 px-5")}
          >
            Explore Code
          </Link>
          <Link
            href="https://linkedin.com/in/dayifour"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "h-10 px-5")}
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:sekoudayifourouk@gmail.com"
            className="self-center text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Email
          </Link>
        </div>
        <div className="mt-7">
          <p className="mb-2 text-xs uppercase tracking-[0.16em] text-muted-foreground/90">
            Selected Contributions
          </p>
          <ContributedLogos />
        </div>
      </div>
    </Section>
  );
};
