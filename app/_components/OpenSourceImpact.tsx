import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Cloud, Github, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

const CONTRIBUTIONS = [
  {
    title: "Cloudflare (vinext)",
    description:
      "Standardized Route Handler behaviors for Next.js compatibility. Optimized HTTP OPTIONS and Allow header logic for edge runtimes.",
    icon: Cloud,
    href: "https://github.com/search?q=org%3Acloudflare+Dayifour+is%3Apr&type=pullrequests",
  },
  {
    title: "npmx.dev",
    description:
      "Led a full accessibility (A11y) refactor. Implemented WAI-ARIA patterns, roving tabindex, and complex keyboard navigation for the registry browser.",
    icon: ShieldCheck,
    href: "https://github.com/search?q=npmx+Dayifour+is%3Apr&type=pullrequests",
  },
  {
    title: "iii-hq (motia-js)",
    description:
      "Engineered robust state and stream guard helpers. Implemented unit testing for event-driven trigger filtering.",
    icon: Github,
    href: "https://github.com/search?q=motia-js+Dayifour+is%3Apr&type=pullrequests",
  },
];

export const OpenSourceImpact = () => {
  return (
    <Section id="open-source" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Open Source Impact</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Proven contributions on production-grade codebases
      </h2>
      <div className="grid w-full gap-4 md:grid-cols-3">
        {CONTRIBUTIONS.map((item) => (
          <Card key={item.title} className="p-4">
            <item.icon className="h-5 w-5 text-primary" />
            <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
            >
              View contribution proof
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
};
