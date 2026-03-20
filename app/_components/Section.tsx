import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section className={cn("max-w-3xl px-4 m-auto", className)} {...props}>
      {children}
    </section>
  );
};
