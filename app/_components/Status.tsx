import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Layers3, LucideIcon, ShieldCheck, Video } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section id="projects" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Projects</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        High-impact product engineering
      </h2>
      <div className="grid w-full gap-4 md:grid-cols-2">
        {SIDE_PROJECTS.map((project) => (
          <Card key={project.title} className="h-full border-border/60 bg-card/50 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
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
    description:
      "A high-concurrency multi-tenant marketplace built with Next.js, NestJS microservices, PostgreSQL, Redis, and Docker.",
    impact:
      "Designed a scalable database schema to handle thousands of concurrent product listings.",
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
    description:
      "Performance-oriented download tooling using yt-dlp integration, stream handling, and resilient error flows.",
    impact:
      "Improved download reliability and response consistency across multiple video quality paths.",
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
    description:
      "Resource management platform with analytics dashboards, secure authentication, and operational workflows.",
    impact:
      "Reduced manual tracking overhead through centralized visibility and role-based access flows.",
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
    <div className="inline-flex flex-col items-start gap-3 rounded-md p-1">
      <Link
        href={props.url}
        aria-label={`Voir le projet ${props.title}`}
        target={props.url.startsWith("http") ? "_blank" : undefined}
        rel={props.url.startsWith("http") ? "noopener noreferrer" : undefined}
        className="inline-flex items-start gap-4 rounded-md transition-colors hover:bg-accent/20"
      >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
        <p className="mt-2 text-xs text-primary/90">Impact: {props.impact}</p>
      </div>
      </Link>

      <details className="w-full rounded-md border border-border/60 bg-background/40 p-3 text-sm">
        <summary className="cursor-pointer select-none font-medium text-primary">
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
