import Image from "next/image";
import Link from "next/link";

const companies = [
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

export const ContributedLogos = () => {
  return (
    <ul className="flex flex-wrap items-center gap-3" aria-label="Contributed companies">
      {companies.map((company) => (
        <li key={company.name}>
          <Link
            href={company.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={18}
              height={18}
              className="h-[18px] w-[18px] grayscale brightness-125"
            />
            <span>{company.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};