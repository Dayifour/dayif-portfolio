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
      "AWS (Lambda, SQS, EventBridge)",
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
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Stack optimized for product startups
      </h2>
      <div className="grid w-full gap-4 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <Card key={group.title} className="p-4">
            <h3 className="text-xl font-semibold">{group.title}</h3>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
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
