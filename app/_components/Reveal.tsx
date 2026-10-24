import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

/** The content stays server-rendered; Motion progressively enhances its entrance. */
export function Reveal({ children, className, delayMs = 0 }: { children: ReactNode; className?: string; delayMs?: number }) {
  return <div className={cn("reveal-item", className)} data-reveal style={{ "--reveal-delay": `${delayMs}ms` } as CSSProperties}>{children}</div>;
}
