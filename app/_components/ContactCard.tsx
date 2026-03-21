import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ContactCardProps = {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string;
  className?: string;
};

export const ContactCard = (props: ContactCardProps) => {
  const isExternal =
    props.url.startsWith("http") || props.url.startsWith("mailto:");

  return (
    <Link
      href={props.url}
      aria-label={`Contact via ${props.name}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn("w-full h-full", props.className)}
    >
      <Card className="group flex h-full min-h-32 items-center gap-3 border-border/60 bg-card/50 p-3 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
        <div className="relative w-10 h-10 shrink-0">
          <Image
            src={props.image}
            alt={`Profile image of ${props.name}`}
            width={40}
            height={40}
            className="w-full h-full rounded-full object-cover"
          />
          <Image
            src={props.mediumImage}
            alt={`${props.name} platform icon`}
            width={16}
            height={16}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-base font-semibold">{props.name}</p>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          size={16}
          className="mr-1 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Card>
    </Link>
  );
};
