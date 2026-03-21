import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowUpRight,
  Layers3,
  LucideIcon,
  ShieldCheck,
  Video,
} from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

const PROJECT_ACCENT = {
  icon: "border-border/60 bg-[linear-gradient(135deg,hsl(var(--primary)/0.16),hsl(var(--accent)/0.1))] text-foreground/95",
  chip: "border-border/60 bg-[linear-gradient(135deg,hsl(var(--primary)/0.14),hsl(var(--accent)/0.08))] text-foreground/90",
  impact: "border-border/60 bg-[linear-gradient(135deg,hsl(var(--primary)/0.1),hsl(var(--accent)/0.06))]",
  details: "border-border/60 bg-[linear-gradient(135deg,hsl(var(--primary)/0.08),hsl(var(--accent)/0.05))]",
  link: "hover:text-accent",
} as const;

export const Status = () => {
  const [featuredProject, ...otherProjects] = SIDE_PROJECTS;
  const featuredAccent = PROJECT_ACCENT;

  return (
    <Section id="projects" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Projects</Badge>
      <h2 className="section-title">Selected product work</h2>
      <p className="section-lead">
        A concise selection of products with clear architecture choices and
        practical outcomes.
      </p>

      {featuredProject && (
        <Card className="surface-card relative w-full overflow-hidden border-border/70 bg-card/70 p-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_8%,hsl(var(--primary)/0.1),transparent_44%),radial-gradient(circle_at_92%_12%,hsl(var(--accent)/0.08),transparent_42%)]" />
          <div className="h-px w-full bg-gradient-to-r from-primary/45 via-accent/45 to-primary/30" />
          <div className="grid lg:grid-cols-[1.3fr_0.9fr]">
            <div className="space-y-5 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-lg border bg-background/35 p-2.5 ${featuredAccent.icon}`}
                >
                  <featuredProject.Logo size={16} />
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/70">
                  Featured project
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                  {featuredProject.title}
                </h3>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-foreground/65">
                  {featuredProject.role}
                </p>
              </div>

              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {featuredProject.stack.split(",").map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border bg-background/25 px-2.5 py-1 text-xs font-medium ${featuredAccent.chip}`}
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <Link
                href={featuredProject.url}
                aria-label={`View project ${featuredProject.title}`}
                target={
                  featuredProject.url.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  featuredProject.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 underline-offset-4 transition-colors hover:underline ${featuredAccent.link}`}
              >
                Open project repository
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="border-t border-border/60 bg-background/20 p-6 sm:p-8 lg:border-l lg:border-t-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/75">
                Impact
              </p>
              <p
                className={`mt-2 rounded-lg border-l-2 px-3 py-2 text-sm leading-relaxed text-foreground/92 ${featuredAccent.impact}`}
              >
                {featuredProject.impact}
              </p>

              <details
                className={`mt-5 rounded-xl border px-4 py-3 text-sm ${featuredAccent.details}`}
              >
                <summary className="cursor-pointer select-none font-medium text-foreground/90 transition-colors hover:text-foreground">
                  View case study
                </summary>
                <div className="mt-3 space-y-2.5 text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">
                      Challenge:
                    </span>{" "}
                    {featuredProject.caseStudy.challenge}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">
                      Architecture:
                    </span>{" "}
                    {featuredProject.caseStudy.architecture}
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Result:</span>{" "}
                    {featuredProject.caseStudy.result}
                  </p>
                </div>
              </details>
            </div>
          </div>
        </Card>
      )}

      <div className="section-grid md:grid-cols-2">
        {otherProjects.map((project, index) => (
          <Card
            key={project.title}
            className="surface-card h-full border-border/70 p-6"
          >
            <SideProject
              accent={PROJECT_ACCENT}
              index={index + 2}
              {...project}
            />
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
  accent,
  index,
  ...props
}: SideProjectProps & {
  index: number;
  accent: typeof PROJECT_ACCENT;
}) => {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="h-px w-full bg-gradient-to-r from-primary/45 via-accent/45 to-primary/30" />
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Project {index.toString().padStart(2, "0")}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
            {props.title}
          </h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-foreground/65">
            {props.role}
          </p>
        </div>
        <span
          className={`rounded-lg border bg-background/30 p-2.5 ${accent.icon}`}
        >
          <props.Logo size={15} />
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {props.description}
      </p>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Stack
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {props.stack.split(",").map((tech) => (
            <span
              key={tech}
              className={`rounded-full border bg-background/25 px-2.5 py-1 text-xs font-medium ${accent.chip}`}
            >
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>

      <div className={`rounded-lg border p-4 ${accent.impact}`}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Impact
        </p>
        <p className="mt-1.5 border-l border-accent/40 pl-3 text-sm leading-relaxed text-foreground/88">
          {props.impact}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/50 pt-4">
        <Link
          href={props.url}
          aria-label={`View project ${props.title}`}
          target={props.url.startsWith("http") ? "_blank" : undefined}
          rel={props.url.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 underline-offset-4 transition-colors hover:underline ${accent.link}`}
        >
          Open project repository
          <ArrowUpRight size={14} />
        </Link>
      </div>

      <details
        className={`w-full rounded-xl border px-4 py-3 text-sm ${accent.details}`}
      >
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
  );
};
