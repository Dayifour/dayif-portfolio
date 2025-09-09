/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Code, LucideIcon, Rss, StickyNote } from "lucide-react";
import Link from "next/link";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun project.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4 h-full">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <p className="text-lg text-muted-foreground">
            I love working on projects
          </p>
        </Card>
        <Card className="flex flex-col p-4 flex-1 gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            url="mailto:sekoudayifourouk@gmail.com"
            name="Sékou Dayifour"
            image="https://lh3.googleusercontent.com/a/ACg8ocLGIqhX10Of3b-3BJvCZ4GpVyHYKuD_YKaZn_gfQnRBZaskXMQ=s360-c-no"
            mediumImage="https://cdn-icons-png.flaticon.com/128/5968/5968534.png"
            description="contact me"
          />
          <ContactCard
            url="https://wa.me/22379994640?text=Salut!"
            name="Sékou Dayifour"
            image="https://th.bing.com/th/id/OIP.I3QqeH2JKSF72phdrza7LQAAAA?rs=1&pid=ImgDetMain&w=180&h=180&c=7&dpr=1.3"
            mediumImage="https://cdn-icons-png.flaticon.com/128/15713/15713434.png"
            description="contact me"
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Rss, // Remplacez par le chemin vers l'icône de calendrier
    title: "E-learning",
    description:
      "About Interactive Learning Hub – A modern e-learning platform for seamless course management, student progress tracking, interactive discussions, and assessments. 🚀📚",
    url: "https://github.com/Dayifour/e-learning",
  },
  {
    Logo: Code, // Remplacez par le chemin vers l'icône de plume
    title: "Video_downloader",
    description:
      "Next.js web application for downloading YouTube videos by specifying the URL and desired quality, using yt-dlp to fetch download links through an intuitive interface.",
    url: "https://github.com/Dayifour/video_downloader",
  },
  {
    Logo: StickyNote, // Remplacez par le chemin vers l'icône de casserole
    title: "My-next-blog",
    description:
      "Personal blog built with Next.js, featuring dynamic content, sleek design, and modern web development practices. Follow along as I share my journey, insights, and projects!",
    url: "https://github.com/Dayifour/my-next-blog",
  },

  // {
  //   Logo: MessageCircle, // Remplacez par le chemin vers l'icône de liste de choses à faire
  //   title: "Chat2Code",
  //   description: "Un outil simple pour organiser vos tâches et vos projets.",
  //   url: "/",
  // },
  // {
  //   Logo: Weight, // Remplacez par le chemin vers l'icône de liste de choses à faire
  //   title: "LinkedLeads",
  //   description: "Un outil simple pour organiser vos tâches et vos projets.",
  //   url: "/",
  // },
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
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
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
