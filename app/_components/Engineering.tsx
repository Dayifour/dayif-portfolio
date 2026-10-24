import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { T } from "./TranslatedText";
import { Contour } from "./Contour";

const disciplines = [
  {
    id: "interface", title: "Frontend development",
    description: "Responsive web interfaces with React and Next.js, with attention to accessibility.",
    tools: ["React", "Next.js", "TypeScript"],
    proof: "Explore SUGUBA", href: "#project-suguba",
  },
  {
    id: "systems", title: "Backend development",
    description: "APIs, business logic and data modeling with Node.js and PostgreSQL.",
    tools: ["Node.js", "NestJS", "PostgreSQL", "Redis"],
    proof: "My backend work on Bestrans", href: "#project-bestrans",
  },
  {
    id: "delivery", title: "Cloud & deployment",
    description: "Application deployment and infrastructure with Docker, AWS and Cloudflare.",
    tools: ["Docker", "AWS", "Cloudflare"],
    proof: "Explore my open-source work", href: "#open-source",
  },
];

export async function Engineering() {
  const t = await getTranslations();
  return (
    <section id="expertise" className="engineering-section" aria-labelledby="engineering-title">
      <div className="section-shell engineering-layout">
        <Reveal className="engineering-heading">
          <p className="section-tag"><span>02 /</span><T>Expertise</T></p>
          <h2 id="engineering-title" className="display-title"><T>Web development.</T><br /><em>Backend & cloud.</em></h2>
          <Contour className="engineering-contour" />
        </Reveal>
        <div className="engineering-list">
          {disciplines.map((discipline, index) => (
            <Reveal key={discipline.id} delayMs={index * 70}>
              <article className="expertise-row">
                <span className="expertise-number" aria-hidden="true">0{index + 1}</span>
                <div className="expertise-content">
                  <h3>{t(discipline.title)}</h3>
                  <p>{t(discipline.description)}</p>
                  <ul className="expertise-tools" aria-label={t("Stack")}>{discipline.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
                  <a className="expertise-proof" href={discipline.href}>{t(discipline.proof)}<ArrowUpRight size={17} /></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
