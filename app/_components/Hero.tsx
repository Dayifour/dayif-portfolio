/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Code } from "./Code";
import { Section } from "./Section";
export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Manager Dayif
        </h2>
        <h3 className="text-3xl font-caption">Software developper</h3>
        <p className="text-base">
          I am a{" "}
          <Link href="https://www.nextjs.com">
            <Code>full-stack developer</Code>
          </Link>{" "}
          with expertise in building scalable and user-friendly applications,
          living in <Code>🍀Mali</Code>. I focus on creating impactful projects
          and continuously honing my skills in modern web technologies.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto round ml-auto">
        <Image
          src="/dayif.png"
          className="w-full h-auto max-w-xs rounded-full  object-cover max-md:w-56"
          alt="Manager Dayif's picture"
        />
      </div>
    </Section>
  );
};
