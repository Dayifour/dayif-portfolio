import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Section } from "./Section";

const SERVICES = [
  {
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
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Engineering systems that scale
      </h2>
      <div className="grid w-full gap-4 md:grid-cols-3">
        {SERVICES.map((service) => (
          <Card key={service.title} className="p-4">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {service.description}
            </p>
            <ul className="mt-4 space-y-2">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};
