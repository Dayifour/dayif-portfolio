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
          Manager Dayif
        </h1>
        <h2 className="text-3xl font-caption">Full-Stack Software Developer</h2>
        <p className="text-base leading-relaxed">
          I am a{" "}
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code>full-stack developer</Code>
          </Link>{" "}
          focused on building scalable and user-friendly applications from
          <Code>Mali</Code>. I build modern products with React, Next.js, and
          Node.js, with strong attention to performance, accessibility, and
          clean architecture.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="#contact"
            className={buttonVariants({ variant: "default" })}
          >
            Start a project
          </Link>
          <Link
            href="https://github.com/Dayifour"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            View GitHub
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
          alt="Manager Dayif's picture"
        />
      </div>
    </Section>
  );
};
