import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Section } from "./Section";

const SERVICES = [
  {
    title: "Landing Pages & Websites",
    description:
      "Fast, responsive websites designed to convert visitors into clients.",
    points: ["SEO-ready", "Accessible", "Performance-focused"],
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "Custom Next.js applications with robust backend logic and clean architecture.",
    points: ["Scalable codebase", "API integration", "Production deployment"],
  },
  {
    title: "Frontend Modernization",
    description:
      "Upgrade existing interfaces for speed, clarity, and better UX.",
    points: ["UI refactor", "Design system", "Core Web Vitals"],
  },
];

export const Services = () => {
  return (
    <Section id="services" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Services</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        How I can help
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
