import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Code } from "./Code";
import { ContributedLogos } from "./ContributedLogos";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section id="about" className="flex flex-col items-start gap-6">
      <div className="w-full rounded-2xl border border-border/60 bg-card/40 p-6 shadow-sm backdrop-blur-sm">
        <h1 className="font-caption font-bold text-5xl text-primary leading-tight">
          Sekou Dayifourou KEITA
        </h1>
        <h2 className="mt-2 text-2xl font-caption leading-snug">
          Full-Stack Software Engineer specializing in TypeScript, Next.js, and
          Distributed Systems.
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed">
          Contributor to <Code>Cloudflare</Code>, <Code>npmx</Code>, and
          <Code>iii-hq</Code>. Building high-performance, type-safe
          architectures from 0 to 1.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="#contact"
            className={buttonVariants({ variant: "default" })}
          >
            Book a call
          </Link>
          <Link
            href="#open-source"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            View Open Source Impact
          </Link>
        </div>
        <div className="mt-5">
          <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
            Contributed Companies
          </p>
          <ContributedLogos />
        </div>
      </div>
    </Section>
  );
};
