import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Section } from "./Section";

const ITEMS = [
  { name: "Cloudflare", href: "https://github.com/cloudflare" },
  { name: "GitHub", href: "https://github.com/Dayifour" },
  { name: "npm", href: "https://www.npmjs.com" },
];

export const FeaturedIn = () => {
  return (
    <Section id="featured" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Featured In / Contributions</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Credibility through shipped contributions
      </h2>
      <div className="grid w-full gap-4 md:grid-cols-3">
        {ITEMS.map((item) => (
          <Card key={item.name} className="p-5">
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-primary hover:underline"
            >
              {item.name}
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
};
