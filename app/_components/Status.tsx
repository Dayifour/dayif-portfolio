import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Layers3, LucideIcon, ShieldCheck, Video } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section id="projects" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Projects</Badge>
      <h2 className="section-title">Selected product work</h2>
      <p className="section-lead">
        A concise selection of products with clear architecture choices and
        practical outcomes.
      </p>
      <div className="section-grid md:grid-cols-2 xl:grid-cols-3">
        {SIDE_PROJECTS.map((project, index) => (
          <Card
            key={project.title}
            className="surface-card group relative h-full overflow-hidden border-border/70 bg-card/65 p-0"
          >
            <SideProject index={index + 1} {...project} />
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

const SideProject = ({
  index,
  ...props
}: SideProjectProps & { index: number }) => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/45 to-transparent" />

      <div className="flex h-full flex-col gap-5 p-6">
        <div className="flex w-full items-start justify-between gap-3">
          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-border/70 bg-background/50 px-2 text-xs font-semibold tracking-[0.08em] text-foreground/70">
            {index.toString().padStart(2, "0")}
          </span>
          <span className="rounded-lg border border-border/60 bg-background/35 p-2.5 text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
            <props.Logo size={15} />
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-[1.1rem] font-semibold tracking-tight text-foreground sm:text-xl">
            {props.title}
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-foreground/65">
            {props.role}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground/95">
            {props.description}
          </p>
        </div>

        <dl className="space-y-3 rounded-lg border border-border/60 bg-background/20 p-4">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Stack
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-foreground/88">
              {props.stack}
            </dd>
          </div>
          <div className="h-px w-full bg-border/60" />
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Impact
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-foreground/88">
              {props.impact}
            </dd>
          </div>
        </dl>

        <div className="mt-auto flex w-full items-center justify-between gap-3 border-t border-border/50 pt-4">
          <Link
            href={props.url}
            aria-label={`View project ${props.title}`}
            target={props.url.startsWith("http") ? "_blank" : undefined}
            rel={
              props.url.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="text-sm font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Open project repository
          </Link>
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            Case notes below
          </span>
        </div>

        <details className="w-full rounded-xl border border-border/60 bg-background/15 px-4 py-3 text-sm">
          <summary className="cursor-pointer select-none font-medium text-foreground/90 transition-colors hover:text-foreground">
            View case study
          </summary>
          <div className="mt-3 space-y-2.5 text-muted-foreground">
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
    </div>
  );
};
