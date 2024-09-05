import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono hover:bg-accent/80 transition-colors border-accent px-1 py-0.5 text-primary rounded-sm"
      )}
      {...props}
    />
  );
};
