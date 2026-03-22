import { cn } from "@/lib/utils";

export type SpacingProps = {
  size?: "sm" | "md" | "lg";
};

export const Spacing = ({ size = "md" }: SpacingProps) => {
  return (
    <div
      className={cn({
        "h-6 lg:h-10": size === "sm",
        "h-10 lg:h-16": size === "md",
        "h-14 lg:h-24": size === "lg",
      })}
    />
  );
};
