import { T } from "./TranslatedText";

const technologies = ["TypeScript", "Next.js", "React", "Node.js", "NestJS", "PostgreSQL", "Redis", "AWS", "Docker", "Cloudflare"];

export function Skills() {
  const loop = [...technologies, ...technologies];

  return (
    <section id="skills" className="skills-section">
      <div className="mb-4 px-5 text-center text-[10px] font-black uppercase tracking-[0.28em] opacity-50"><T>Tools I trust</T></div>
      <div className="ticker-track" aria-label="Technology stack">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} aria-hidden={index >= technologies.length ? true : undefined} className="flex shrink-0 items-center gap-7 text-2xl font-black tracking-[-0.03em] sm:text-3xl">
            {item}<i aria-hidden="true">✳</i>
          </span>
        ))}
      </div>
    </section>
  );
}
