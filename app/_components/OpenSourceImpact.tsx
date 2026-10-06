import { getTranslations } from "@/lib/i18n";
import { ArrowUpRight, GitPullRequest } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { T } from "./TranslatedText";

const contributions = [
  {
    name: "Cloudflare",
    project: "vinext",
    note: "Next.js-compatible routing at the edge.",
    logo: "/logos/cloudflare.svg",
    href: "https://github.com/search?q=org%3Acloudflare+author%3ADayifour+is%3Apr&type=pullrequests",
    color: "bg-partner-cloudflare",
  },
  {
    name: "npmx",
    project: "npmx.dev",
    note: "A more accessible package registry browser.",
    logo: "/logos/npmx.png",
    href: "https://github.com/search?q=npmx-dev%2Fnpmx.dev+author%3ADayifour+is%3Apr&type=pullrequests",
    color: "bg-mint",
  },
  {
    name: "iii-hq",
    project: "motia-js",
    note: "Safer state and stream primitives.",
    logo: "/logos/iii.svg",
    href: "https://github.com/search?q=org%3Aiii-hq+author%3ADayifour+is%3Apr&type=pullrequests",
    color: "bg-coral",
  },
];

export async function OpenSourceImpact() {
  const t = await getTranslations();

  return (
    <section id="open-source" className="open-source-section">
      <div className="open-source-grid" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="section-tag !text-mint"><span>02 /</span> <T>Open-source energy</T></p>
            <h2 className="display-title max-w-4xl !text-white"><T>Better,</T><br /><em><T>together.</T></em></h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-white/65"><T>Open source is part of how I build.</T><br /><T>Code, shared with the people moving the web forward.</T></p>
        </div>

        <div className="oss-list">
          {contributions.map((item, index) => (
            <Reveal key={item.project} delayMs={index * 80}>
              <Link href={item.href} target="_blank" rel="noopener noreferrer" className="oss-card group">
                <div className={`oss-logo ${item.color}`}>
                  <Image src={item.logo} alt="" width={28} height={28} className={`h-7 w-7 object-contain ${item.name === "iii-hq" ? "invert" : ""}`} />
                </div>
                <h3>{item.project}<span>{item.name}</span></h3>
                <p className="oss-note">{t(item.note)}</p>
                <span className="oss-contributor"><GitPullRequest size={14} /><T>Contributor</T></span>
                <ArrowUpRight className="oss-arrow" />
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-[2rem] border border-white/10 bg-white/[0.05] px-6 py-5 backdrop-blur sm:px-8">
          <p className="text-sm font-semibold text-white/65"><T>Curious about the code behind the work?</T></p>
          <Link href="https://github.com/Dayifour" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-ink transition-transform hover:-translate-y-0.5">
            GitHub <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
