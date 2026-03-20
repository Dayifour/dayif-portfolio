import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Code } from "./Code";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section id="about" className="flex max-md:flex-col items-start gap-6">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h1 className="font-caption font-bold text-5xl text-primary">
          Sekou Dayifourou KEITA
        </h1>
        <h2 className="text-2xl font-caption leading-snug">
          Full-Stack Software Engineer specializing in TypeScript, Next.js, and
          Distributed Systems.
        </h2>
        <p className="text-base leading-relaxed">
          Contributor to <Code>Cloudflare</Code>, <Code>npmx</Code>, and
          <Code>iii-hq</Code>. Building high-performance, type-safe
          architectures from 0 to 1.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
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
      </div>
      <div className="flex-[2] max-md:m-auto round ml-auto">
        <Image
          src="/dayif.png"
          width={300}
          height={300}
          priority
          loading="eager"
          className="w-full h-auto max-w-xs rounded-full object-cover max-md:w-56"
          alt="Sekou Dayifourou Keita portrait"
        />
      </div>
    </Section>
  );
};
