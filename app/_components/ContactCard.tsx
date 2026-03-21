import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ContactCardProps = {
  image: string;
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
      <Card className="surface-card group relative flex h-full min-h-44 flex-col overflow-hidden border-border/70 bg-card/70 p-0">
        <div className="h-px w-full bg-gradient-to-r from-primary/45 via-accent/45 to-primary/30" />
        <div className="flex h-full flex-col gap-4 p-5">
          <div className="flex items-center justify-between">
            <div className="relative h-14 w-14 shrink-0">
              <Image
                src={props.image}
                alt={`${props.name} contact visual`}
                width={56}
                height={56}
                className="h-full w-full rounded-full object-cover"
              />
              <span
                className={cn(
                  "absolute -bottom-1.5 -right-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border/70 bg-[linear-gradient(135deg,hsl(var(--primary)/0.15),hsl(var(--accent)/0.1))]",
                  props.mediumBadgeClassName,
                )}
              >
                <Image
                  src={props.mediumImage}
                  alt={`${props.name} platform icon`}
                  width={13}
                  height={13}
                  className="h-[13px] w-[13px] object-contain"
                />
              </span>
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
