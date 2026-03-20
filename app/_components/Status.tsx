import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LucideIcon, Rss, StickyNote, Video } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section id="projects" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Projects</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Selected work
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
    Logo: Rss,
    title: "E-learning",
    description:
      "Modern e-learning platform for course management, student progress tracking, and interactive assessments.",
    url: "https://github.com/Dayifour/e-learning",
  },
  {
    Logo: Video,
    title: "Video_downloader",
    description:
      "Next.js application to fetch downloadable YouTube streams by URL and quality through a clear, fast UI.",
    url: "https://github.com/Dayifour/video_downloader",
  },
  {
    Logo: StickyNote,
    title: "My-next-blog",
    description:
      "Personal Next.js blog with dynamic content and a clean editorial experience.",
    url: "https://github.com/Dayifour/my-next-blog",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
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
      </div>
    </Link>
  );
};
