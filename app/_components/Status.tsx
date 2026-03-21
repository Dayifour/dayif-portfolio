import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Layers3, LucideIcon, ShieldCheck, Video } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section id="projects" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Projects</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0 sm:text-4xl">
        High-impact product engineering
      </h2>
      <div className="grid w-full gap-5 md:grid-cols-2">
        {SIDE_PROJECTS.map((project) => (
          <Card
            key={project.title}
            className="surface-card motion-lift h-full p-6"
          >
            <SideProject {...project} />
          </Card>
        ))}
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Layers3,
    title: "SUGUBA Marketplace",
    role: "Lead Full-Stack Engineer",
    stack: "Next.js, NestJS, PostgreSQL, Redis, Docker",
    description:
      "Multi-tenant marketplace built with Next.js, NestJS, PostgreSQL, Redis, and Docker.",
    impact:
      "Scaled product listing workloads with tenant-safe data design and caching.",
    caseStudy: {
      challenge:
        "Support high write/read traffic across tenant-isolated product catalogs without latency spikes.",
      architecture:
        "Introduced modular service boundaries, indexed query paths, and Redis-backed hot-path caching for listing and search requests.",
      result:
        "Improved catalog responsiveness under concurrent load and reduced query pressure on core tables.",
    },
    url: "https://github.com/Dayifour",
  },
  {
    Logo: Video,
    title: "Video_downloader",
    role: "Backend/Platform Engineer",
    stack: "Node.js, yt-dlp, Stream Processing",
    description:
      "Download service built around yt-dlp, stream processing, and resilient fallback flows.",
    impact:
      "Improved reliability and consistency across multiple media quality paths.",
    caseStudy: {
      challenge:
        "Handle unstable upstream media responses while keeping UX simple and resilient.",
      architecture:
        "Used yt-dlp orchestration with controlled stream handling and defensive fallback flows for unsupported formats.",
      result:
        "Raised successful completion rates and reduced user-facing failures in edge cases.",
    },
    url: "https://github.com/Dayifour/video_downloader",
  },
  {
    Logo: ShieldCheck,
    title: "ITAK Management Platform",
    role: "Application Architect",
    stack: "RBAC, Analytics, Workflow Automation",
    description:
      "Operational platform with analytics dashboards, authentication, and workflow orchestration.",
    impact:
      "Reduced manual overhead through centralized visibility and RBAC workflows.",
    caseStudy: {
      challenge:
        "Unify fragmented operations and enforce secure access for different user roles.",
      architecture:
        "Implemented RBAC-aware modules, dashboard aggregation pipelines, and clear workflow boundaries per actor.",
      result:
        "Lowered operational friction and improved decision-making through centralized analytics visibility.",
    },
    url: "https://github.com/Dayifour",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  role: string;
  stack: string;
  description: string;
  impact: string;
  caseStudy: {
    challenge: string;
    architecture: string;
    result: string;
  };
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <div className="inline-flex flex-col items-start gap-5 rounded-md">
      <Link
        href={props.url}
        aria-label={`Voir le projet ${props.title}`}
        target={props.url.startsWith("http") ? "_blank" : undefined}
        rel={props.url.startsWith("http") ? "noopener noreferrer" : undefined}
        className="inline-flex w-full items-start gap-4 rounded-lg border border-border/60 bg-background/30 p-4 transition-colors hover:bg-background/45"
      >
        <span className="rounded-md bg-secondary/70 p-3 text-primary">
          <props.Logo size={16} />
        </span>
        <div className="w-full space-y-2">
          <p className="text-xl font-semibold tracking-tight text-foreground">
            {props.title}
          </p>
          <p className="text-sm text-muted-foreground">{props.role}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {props.description}
          </p>
          <p className="text-xs text-foreground/85">
            <span className="font-medium">Stack:</span> {props.stack}
          </p>
          <p className="text-sm text-foreground/90">
            <span className="font-medium text-primary">Impact:</span>{" "}
            {props.impact}
          </p>
        </div>
      </Link>

      <details className="w-full rounded-lg border border-border/60 bg-background/35 p-4 text-sm">
        <summary className="cursor-pointer select-none font-medium text-primary hover:text-foreground">
          View case study
        </summary>
        <div className="mt-3 space-y-2 text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Challenge:</span>{" "}
            {props.caseStudy.challenge}
          </p>
          <p>
            <span className="font-medium text-foreground">Architecture:</span>{" "}
            {props.caseStudy.architecture}
          </p>
          <p>
            <span className="font-medium text-foreground">Result:</span>{" "}
            {props.caseStudy.result}
          </p>
        </div>
      </details>
    </div>
  );
};
