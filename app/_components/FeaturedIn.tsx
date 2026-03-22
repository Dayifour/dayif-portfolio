import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Section } from "./Section";

const ITEMS = [
  {
    name: "Cloudflare",
    href: "https://github.com/search?q=org%3Acloudflare+author%3ADayifour+is%3Apr&type=pullrequests",
    logo: "/logos/cloudflare.svg",
  },
  {
    name: "npmx.dev",
    href: "https://github.com/search?q=npmx-dev%2Fnpmx.dev+author%3ADayifour+is%3Apr&type=pullrequests",
    logo: "/logos/npmx.svg",
  },
  {
    name: "iii-hq",
    href: "https://github.com/search?q=org%3Aiii-hq+author%3ADayifour+is%3Apr&type=pullrequests",
    logo: "/logos/iii.svg",
  },
];

export const FeaturedIn = () => {
  return (
    <Section id="featured" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Code Shipped To</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Open Source Contributions
      </h2>
      <div className="grid w-full gap-4 md:grid-cols-3">
        {ITEMS.map((item) => (
          <Card
            key={item.name}
            className="surface-card motion-lift group p-5 animate-enter"
          >
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full flex-col items-center gap-3 text-center text-primary hover:underline"
            >
              <Image
                src={item.logo}
                alt={`${item.name} logo`}
                width={42}
                height={42}
                className="h-10 w-10 grayscale brightness-125"
              />
              <span className="text-sm font-semibold">{item.name}</span>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
};
