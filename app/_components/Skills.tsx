import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";

const SKILL_GROUPS = [
  {
    title: "Languages",
    items: ["TypeScript (Expert)", "JavaScript", "SQL", "Go"],
  },
  {
    title: "Frontend",
    items: [
      "Next.js (App Router)",
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "Radix UI (A11y)",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "SST", "Drizzle ORM", "Prisma"],
  },
  {
    title: "Infra",
    items: [
      "AWS (Lambda, EventBridge, SQS)",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Cloudflare",
    ],
  },
];

export const Skills = () => {
  return (
    <Section id="skills" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
      <h2 className="section-title">
        Stack optimized for product startups
      </h2>
      <p className="section-lead">
        Practical tools used in production, not a keyword list.
      </p>
      <div className="section-grid md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <Card
            key={group.title}
            className="surface-card motion-lift h-full p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>
              <span className="text-xs uppercase tracking-[0.14em] text-primary/80">
                {group.items.length} tools
              </span>
            </div>
            <ul className="mt-4 divide-y divide-border/40 rounded-md border border-border/45 bg-background/25">
              {group.items.map((item) => (
                <li key={item} className="px-3 py-2 text-sm text-foreground/90">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};
