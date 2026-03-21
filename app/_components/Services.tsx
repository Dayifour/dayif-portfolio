import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, CloudCog, Rocket, Waypoints } from "lucide-react";
import { Section } from "./Section";

const SERVICES = [
  {
    domain: "Architecture",
    Icon: Waypoints,
    title: "Systems Architecture",
    description:
      "Event-driven microservices, resilient API contracts, and database optimization for scale.",
    outcome: "Reliable foundations for high-throughput, multi-service products.",
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
    outcome: "Faster iteration cycles with measurable web performance improvements.",
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
    outcome: "Stable delivery flow from code to production with fewer release risks.",
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
        {SERVICES.map((service, index) => (
          <Card
            key={service.title}
            className="surface-card h-full overflow-hidden border-border/70 bg-card/70 p-0"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
            <div className="flex h-full flex-col gap-5 p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                    Expertise {index + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                </div>
                <span className="rounded-lg border border-primary/30 bg-primary/10 p-2.5 text-primary">
                  <service.Icon size={15} />
                </span>
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.12em] text-foreground/70">
                {service.domain}
              </p>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/75">
                  Typical outcome
                </p>
                <p className="mt-1.5 border-l border-primary/40 pl-3 text-sm leading-relaxed text-foreground/90">
                  {service.outcome}
                </p>
              </div>

              <div className="mt-auto rounded-lg border border-border/50 bg-background/20 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Core capabilities
                </p>
                <ul className="mt-3 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-foreground/90"
                    >
                      <Check size={14} className="mt-[2px] shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
