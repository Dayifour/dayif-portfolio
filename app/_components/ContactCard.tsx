/* eslint-disable @next/next/no-img-element */
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
      className={cn("w-full", props.className)}
    >
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-3">
        <div className="relative w-10 h-10">
          <Image
            src={props.image}
            alt={`Photo de profil de ${props.name}`}
            width={40}
            height={40}
            className="w-full h-full rounded-full object-contain"
          />
          <Image
            src={props.mediumImage}
            alt={`Icône de contact pour ${props.name}`}
            width={16}
            height={16}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          size={16}
          className="group-hover:translate-x-2 mr-auto group-hover:translate-y-2"
        />
      </Card>
    </Link>
  );
};
