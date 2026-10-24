import { getTranslations } from "@/lib/i18n";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { T } from "./TranslatedText";

const process = [
  { title: "Understand", text: "We define the needs and scope of the project." },
  { title: "Build", text: "I share progress regularly so we can review and adjust." },
  { title: "Deliver", text: "I deploy the application and document how it works." },
];

export async function About() {
  const t = await getTranslations();

  return (
    <section id="about" className="about-section">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <Reveal>
            <div className="about-photo-wrap">
              <div className="about-photo">
                <Image src="/images/dayif-work-professional.webp" alt={t("Sekou Dayifourou Keita working on a laptop")} width={1122} height={1402} quality={90} sizes="(max-width: 1024px) 90vw, 42vw" className="h-full w-full object-cover object-[center_18%]" />
              </div>
            </div>
          </Reveal>

          <div>
            <p className="section-tag"><span>04 /</span> <T>About</T></p>
            <h2 className="display-title max-w-3xl"><T>How I approach</T><br /><em><T>your project.</T></em></h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"><T>I’m Sekou Dayifourou Keita, a full-stack software engineer based in Mali.</T></p>

            <ol className="working-process">
              {process.map((step, index) => (
                <li key={step.title}>
                  <span className="process-number">0{index + 1}<span aria-hidden="true">↗</span></span>
                  <h3>{t(step.title)}</h3>
                  <p>{t(step.text)}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
