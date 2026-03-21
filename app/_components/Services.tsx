import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CloudCog, Rocket, Waypoints } from "lucide-react";
import { Section } from "./Section";

const EXPERTISE_ACCENT = {
  icon: "border-border/60 bg-[linear-gradient(135deg,hsl(var(--primary)/0.16),hsl(var(--accent)/0.1))] text-foreground/95",
  marker: "bg-accent/75",
  outcome:
    "border-border/60 bg-[linear-gradient(135deg,hsl(var(--primary)/0.1),hsl(var(--accent)/0.06))]",
} as const;

const SERVICES = [
  {
    domain: "Architecture",
    Icon: Waypoints,
    title: "Systems Architecture",
    description:
      "Event-driven microservices, resilient API contracts, and database optimization for scale.",
    outcome:
      "Reliable foundations for high-throughput, multi-service products.",
    points: [
      "NestJS microservices",
      "REST/GraphQL APIs",
      "Indexing and caching strategy",
    ],
  },
  {
    domain: "Product",
    Icon: Rocket,
    title: "Product Engineering",
    description:
      "Building 0-to-1 products with Next.js and TypeScript, focused on performance and SEO outcomes.",
    outcome:
      "Faster iteration cycles with measurable web performance improvements.",
    points: [
      "Next.js App Router",
      "Core Web Vitals (Lighthouse 95+)",
      "Type-safe architecture",
    ],
  },
  {
    domain: "Cloud",
    Icon: CloudCog,
    title: "Cloud and DevOps",
    description:
      "Production pipelines, serverless execution, and infrastructure reliability.",
    outcome:
      "Stable delivery flow from code to production with fewer release risks.",
    points: [
      "Docker and Linux VPS",
      "GitHub Actions CI/CD",
      "AWS Lambda and SST",
    ],
  },
];

export const Expertise = () => {
  return (
    <Section id="expertise" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Expertise</Badge>
      <h2 className="section-title">Engineering systems that scale</h2>
      <p className="section-lead">
        End-to-end ownership from architecture choices to production delivery.
      </p>

      <div className="section-grid md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service, index) => {
          const accent = EXPERTISE_ACCENT;

          return (
            <Card
              key={service.title}
              className="surface-card relative h-full overflow-hidden border-border/70 bg-card/70 p-0"
            >
              <div className="h-px w-full bg-gradient-to-r from-primary/45 via-accent/45 to-primary/30" />
              <div className="flex h-full flex-col gap-5 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                      Expertise {index + 1}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-foreground/70">
                      {service.domain}
                    </p>
                  </div>
                  <span className={`rounded-lg border p-2.5 ${accent.icon}`}>
                    <service.Icon size={15} />
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-foreground/90"
                    >
                      <span
                        className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${accent.marker}`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-auto rounded-lg border px-4 py-3 ${accent.outcome}`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/75">
                    Typical outcome
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
                    {service.outcome}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
