import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Cloud, Code2, Layers3, ServerCog } from "lucide-react";
import { Section } from "./Section";

const SKILL_GROUPS = [
  {
    Icon: Code2,
    title: "Languages",
    items: ["TypeScript (Expert)", "JavaScript", "SQL", "Go"],
    focus: "Type safety, runtime clarity, and maintainable code paths.",
  },
  {
    Icon: Layers3,
    title: "Frontend",
    items: [
      "Next.js (App Router)",
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "Radix UI (A11y)",
    ],
    focus: "Fast interfaces with strong UX foundations and accessibility.",
  },
  {
    Icon: ServerCog,
    title: "Backend",
    items: ["Node.js", "NestJS", "SST", "Drizzle ORM", "Prisma"],
    focus: "Reliable APIs, explicit contracts, and scalable service design.",
  },
  {
    Icon: Cloud,
    title: "Infra",
    items: [
      "AWS (Lambda, EventBridge, SQS)",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Cloudflare",
    ],
    focus: "Resilient deployment and production-first operations.",
  },
];

export const Skills = () => {
  const totalTools = SKILL_GROUPS.reduce((acc, group) => acc + group.items.length, 0);

  return (
    <Section id="skills" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
      <h2 className="section-title">Stack optimized for product startups</h2>
      <p className="section-lead">
        Practical tools used in production, not a keyword list.
      </p>

      <Card className="surface-card relative w-full overflow-hidden border-border/70 bg-card/70 p-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,hsl(var(--primary)/0.09),transparent_46%),radial-gradient(circle_at_90%_10%,hsl(var(--accent)/0.07),transparent_42%)]" />
        <div className="h-px w-full bg-gradient-to-r from-primary/45 via-accent/45 to-primary/30" />
        <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
              Capability snapshot
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Balanced front-end and back-end execution with infrastructure fluency,
              focused on shipping maintainable products and measurable outcomes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border/60 bg-[linear-gradient(135deg,hsl(var(--primary)/0.12),hsl(var(--accent)/0.08))] px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/75">
                Domains
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                {SKILL_GROUPS.length}
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-[linear-gradient(135deg,hsl(var(--primary)/0.12),hsl(var(--accent)/0.08))] px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/75">
                Tools
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                {totalTools}
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div className="section-grid md:grid-cols-2">
        {SKILL_GROUPS.map((group, index) => (
          <Card
            key={group.title}
            className="surface-card h-full overflow-hidden border-border/70 bg-card/70 p-0"
          >
            <div className="h-px w-full bg-gradient-to-r from-primary/45 via-accent/45 to-primary/30" />
            <div className="flex h-full flex-col gap-4 p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Domain {index + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                    {group.title}
                  </h3>
                </div>
                <span className="rounded-lg border border-border/60 bg-[linear-gradient(135deg,hsl(var(--primary)/0.16),hsl(var(--accent)/0.1))] p-2.5 text-foreground/95">
                  <group.Icon size={15} />
                </span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {group.focus}
              </p>

              <div className="mt-auto rounded-lg border border-border/60 bg-background/20 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Toolset
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/60 bg-[linear-gradient(135deg,hsl(var(--primary)/0.14),hsl(var(--accent)/0.08))] px-2.5 py-1 text-xs font-medium text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
