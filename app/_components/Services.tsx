import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "./Section";

const SERVICES = [
  {
    domain: "Architecture",
    title: "Systems Architecture",
    description:
      "Event-driven microservices, resilient API contracts, and database optimization for scale.",
    points: [
      "NestJS microservices",
      "REST/GraphQL APIs",
      "Indexing and caching strategy",
    ],
  },
  {
    domain: "Product",
    title: "Product Engineering",
    description:
      "Building 0-to-1 products with Next.js and TypeScript, focused on performance and SEO outcomes.",
    points: [
      "Next.js App Router",
      "Core Web Vitals (Lighthouse 95+)",
      "Type-safe architecture",
    ],
  },
  {
    domain: "Cloud",
    title: "Cloud and DevOps",
    description:
      "Production pipelines, serverless execution, and infrastructure reliability.",
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
      <h2 className="section-title">
        Engineering systems that scale
      </h2>
      <p className="section-lead">
        End-to-end ownership from architecture choices to production delivery.
      </p>
      <div className="section-grid md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service) => (
          <Card
            key={service.title}
            className="surface-card motion-lift h-full p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/75">
              {service.domain}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <ul className="mt-5 divide-y divide-border/45 rounded-md border border-border/45 bg-background/30">
              {service.points.map((point) => (
                <li key={point} className="px-3 py-2 text-sm text-foreground/90">
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};
