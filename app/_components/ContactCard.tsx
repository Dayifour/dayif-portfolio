import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ContactCardProps = {
  mediumImage: string;
  mediumBadgeClassName?: string;
  name: string;
  description: string;
  hint: string;
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
      className={cn("h-full w-full", props.className)}
    >
      <Card className="surface-card motion-lift group relative flex h-full min-h-44 flex-col overflow-hidden border-border/70 bg-card/70 p-0">
        <div className="h-px w-full bg-primary/35" />
        <div className="flex h-full flex-col gap-4 p-5">
          <div className="flex items-center justify-between">
            <div
              className={cn(
                "inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-primary/12",
                props.mediumBadgeClassName,
              )}
            >
              <Image
                src={props.mediumImage}
                alt={`${props.name} platform icon`}
                width={22}
                height={22}
                className="h-[22px] w-[22px] object-contain"
              />
            </div>
            <ArrowUpRight
              size={16}
              className="shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            />
          </div>

          <div>
            <p className="text-lg font-semibold tracking-tight text-foreground">
              {props.name}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {props.description}
            </p>
          </div>

          <p className="mt-auto border-t border-border/50 pt-3 text-xs uppercase tracking-[0.12em] text-foreground/70">
            {props.hint}
          </p>
        </div>
      </Card>
    </Link>
  );
};
