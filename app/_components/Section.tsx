import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section
      className={cn(
        "m-auto max-w-6xl scroll-mt-24 px-4 lg:scroll-mt-28",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
