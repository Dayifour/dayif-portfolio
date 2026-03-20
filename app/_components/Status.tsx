import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LucideIcon, Layers3, ShieldCheck, Video } from "lucide-react";
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
          <Card key={project.title} className="p-4">
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
    url: "https://github.com/Dayifour",
  },
  {
    Logo: Video,
    title: "Video_downloader",
    description:
      "Performance-oriented download tooling using yt-dlp integration, stream handling, and resilient error flows.",
    impact:
      "Improved download reliability and response consistency across multiple video quality paths.",
    url: "https://github.com/Dayifour/video_downloader",
  },
  {
    Logo: ShieldCheck,
    title: "ITAK Management Platform",
    description:
      "Resource management platform with analytics dashboards, secure authentication, and operational workflows.",
    impact:
      "Reduced manual tracking overhead through centralized visibility and role-based access flows.",
    url: "https://github.com/Dayifour",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  impact: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      aria-label={`Voir le projet ${props.title}`}
      target={props.url.startsWith("http") ? "_blank" : undefined}
      rel={props.url.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex items-start gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
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
  );
};
