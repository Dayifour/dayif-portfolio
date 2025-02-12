/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
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
  return (
    <Link href={props.url} className={cn("w-full", props.className)}>
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-3">
        <div className="relative w-10 h-10">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-full rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
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
