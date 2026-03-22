import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const CONTRIBUTIONS = [
  {
    title: "Cloudflare (vinext)",
    description:
      "Standardized Route Handler behaviors for Next.js compatibility. Optimized HTTP OPTIONS and Allow header logic for edge runtimes.",
    logo: "/logos/cloudflare.svg",
    href: "https://github.com/search?q=org%3Acloudflare+author%3ADayifour+is%3Apr&type=pullrequests",
  },
  {
    title: "npmx.dev",
    description:
      "Led a full accessibility (A11y) refactor. Implemented WAI-ARIA patterns, roving tabindex, and complex keyboard navigation for the registry browser.",
    logo: "/logos/npmx.png",
    href: "https://github.com/search?q=npmx-dev%2Fnpmx.dev+author%3ADayifour+is%3Apr&type=pullrequests",
  },
  {
    title: "iii-hq (motia-js)",
    description:
      "Engineered robust state and stream guard helpers. Implemented unit testing for event-driven trigger filtering.",
    logo: "/logos/iii.svg",
    href: "https://github.com/search?q=org%3Aiii-hq+author%3ADayifour+is%3Apr&type=pullrequests",
  },
];

export const OpenSourceImpact = () => {
  return (
    <Section id="open-source" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Open Source Impact</Badge>
      <h2 className="section-title">
        Proven contributions on production-grade codebases
      </h2>

      <div className="section-grid md:grid-cols-3">
        {CONTRIBUTIONS.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 80}>
            <Card className="surface-card motion-lift group h-full overflow-hidden border-border/70 bg-card/70 p-0">
              <div className="bi-tone-line" />
              <div className="p-5">
                <Image
                  src={item.logo}
                  alt={`${item.title} logo`}
                  width={22}
                  height={22}
                  className="h-[24px] w-[24px] rounded-sm"
                />
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  View contribution proof
                </Link>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
