import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Cloud, Code2, Layers3, ServerCog } from "lucide-react";
import { Reveal } from "./Reveal";
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
  const totalTools = SKILL_GROUPS.reduce(
    (acc, group) => acc + group.items.length,
    0,
  );

  return (
    <Section id="skills" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
      <h2 className="section-title">Stack optimized for product startups</h2>
      <p className="section-lead">
        Practical tools used in production, not a keyword list.
      </p>

      <Reveal>
        <Card className="surface-card motion-lift relative w-full overflow-hidden border-border/70 bg-card/70 p-0">
          <div className="h-px w-full bg-primary/35" />
          <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                Capability snapshot
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Balanced front-end and back-end execution with infrastructure
                fluency, focused on shipping maintainable products and measurable
                outcomes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border/60 bg-primary/10 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/75">
                  Domains
                </p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                  {SKILL_GROUPS.length}
                </p>
              </div>
              <div className="rounded-lg border border-border/60 bg-primary/10 px-4 py-3">
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
      </Reveal>

      <div className="section-grid md:grid-cols-2">
        {SKILL_GROUPS.map((group, index) => (
          <Reveal key={group.title} delayMs={index * 70}>
            <Card className="surface-card motion-lift h-full overflow-hidden border-border/70 bg-card/70 p-0">
              <div className="h-px w-full bg-primary/35" />
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
                  <span className="rounded-lg border border-border/60 bg-primary/12 p-2.5 text-foreground/95">
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
                        className="rounded-full border border-border/60 bg-primary/10 px-2.5 py-1 text-xs font-medium text-foreground/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
