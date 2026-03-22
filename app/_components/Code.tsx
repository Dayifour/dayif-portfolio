import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "rounded-sm border border-primary/35 bg-primary/12 px-1 py-0.5 font-mono text-primary transition-colors hover:bg-primary/22",
        className,
      )}
      {...props}
    />
  );
};
