import { getTranslations } from "@/lib/i18n";
import { Boxes, Cloud, Sparkles } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { T } from "./TranslatedText";

const strengths = [
  { icon: Sparkles, title: "Product thinking", text: "I simplify the hard parts and keep the experience human.", color: "bg-coral" },
  { icon: Boxes, title: "Solid architecture", text: "Clear systems that stay fast and maintainable as they grow.", color: "bg-primary text-white" },
  { icon: Cloud, title: "From idea to production", text: "One partner across interface, backend, cloud and delivery.", color: "bg-mint" },
];

export async function Expertise() {
  const t = await getTranslations();

  return (
    <section id="about" className="about-section section-shell">
      <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
        <Reveal>
          <div className="about-photo-wrap">
            <div className="about-photo">
              <Image src="/images/dayif-at-work.webp" alt={t("Sekou Dayifourou Keita working on a laptop")} width={1200} height={1600} sizes="(max-width: 1024px) 90vw, 42vw" className="h-full w-full object-cover object-[center_18%]" />
            </div>
            <div className="about-sticker" aria-hidden="true">✳</div>
            <div className="about-caption"><T>Curious mind. Hands-on builder.</T></div>
          </div>
        </Reveal>

        <div>
          <p className="section-tag"><span>03 /</span> <T>How I work</T></p>
          <h2 className="display-title max-w-3xl"><T>Meet your</T><br /><em><T>next teammate.</T></em></h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"><T>I’m Dayifour. I connect the dots between what your users need and what your technology can do.</T></p>

          <div className="mt-10 space-y-3">
            {strengths.map((strength, index) => (
              <Reveal key={strength.title} delayMs={index * 70}>
                <article className="strength-row group">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-ink ${strength.color}`}><strength.icon size={21} /></span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-black tracking-tight">{t(strength.title)}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t(strength.text)}</p>
                  </div>
                  <span className="text-3xl font-black text-ink/10 transition-colors group-hover:text-primary/30 dark:text-white/10">0{index + 1}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
