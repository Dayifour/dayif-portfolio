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
        <Reveal className="about-heading">
          <div>
            <p className="section-tag"><span>04 /</span> <T>About</T></p>
            <h2 className="display-title"><T>How I approach</T><br /><em><T>your project.</T></em></h2>
          </div>
          <p className="about-introduction"><T>I’m Sekou Dayifourou Keita, a full-stack software engineer based in Mali.</T></p>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-photo-wrap">
            <div className="about-photo">
              <Image src="/images/dayif-at-work-real.webp" alt={t("Sekou Dayifourou Keita at his desk, smiling behind his laptop")} width={1600} height={900} quality={90} sizes="(max-width: 850px) 92vw, 650px" className="about-image" />
            </div>
          </Reveal>
          <Reveal>
            <ol className="working-process">
              {process.map((step, index) => (
                <li key={step.title}>
                  <span className="process-number">0{index + 1}</span>
                  <div><h3>{t(step.title)}</h3><p>{t(step.text)}</p></div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
