import { getTranslations } from "@/lib/i18n";
import { ArrowUpRight, ArrowRight, Smartphone } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { T } from "./TranslatedText";

const projects = [
  {
    name: "Doumini Douman", number: "01", kind: "Restaurant management", className: "work-doumini",
    description: "From the first order to the last service. One place to run a restaurant.",
    tags: ["Orders", "QR menus", "Multi-location"], href: "https://douminidouman.cloud/", domain: "douminidouman.cloud",
    image: "/images/projects/doumini-orders.webp", alt: "Doumini Douman — live restaurant order management",
  },
  {
    name: "SUGUBA", number: "02", kind: "Marketplace", className: "work-suguba",
    description: "Local commerce, with room to grow. A marketplace connecting shops and customers.",
    tags: ["Commerce", "Marketplace"], href: "https://suguba.vercel.app/", domain: "suguba.vercel.app",
    image: "/images/projects/suguba.webp", alt: "SUGUBA — marketplace product selection",
  },
  {
    name: "Bestrans", number: "03", kind: "Backend development", className: "work-bestrans",
    description: "Behind the journeys. Backend development for a transport and delivery app.",
    tags: ["Backend", "iOS & Android"], href: "https://bestransp.com/", domain: "bestransp.com",
    image: null, alt: "",
  },
  {
    name: "SmartSchool", number: "04", kind: "School management", className: "work-school",
    description: "School life, connected. Timetables, grades and administration in one platform.",
    tags: ["Education", "Dashboard", "Administration"], href: "https://smart-school-738f8ffc2e7b.herokuapp.com", domain: "SmartSchool",
    image: "/images/projects/smart-school.webp", alt: "SmartSchool — student dashboard and timetable",
  },
];

export async function Status() {
  const t = await getTranslations();
  return (
    <section id="work" className="work-section section-shell">
      <div className="section-heading">
        <Reveal><p className="section-tag"><span>01 /</span> <T>Selected work</T></p><h2 className="display-title"><T>Good ideas.</T><br /><em><T>Out in the world.</T></em></h2></Reveal>
        <Reveal className="section-heading-note"><span className="status-dot" /><p><T>Real products. Real interfaces.</T><br /><T>Take a look around.</T></p><span className="work-count">(04)</span></Reveal>
      </div>
      <div className="work-grid">
        {projects.map(project => (
          <Reveal key={project.name} className={`work-item ${project.className}`}>
            <article>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-stage" aria-label={`${t("Visit")} ${project.name}`}>
                <div className="project-stage-top"><span>{project.number} / {t(project.kind)}</span><span className="project-live"><i />{t("Live")}</span></div>
                {project.image ? (
                  <div className="project-device">
                    <div className="device-toolbar" aria-hidden="true"><span className="device-dots"><i /><i /><i /></span><span>{project.domain}</span><ArrowUpRight size={12} /></div>
                    <Image src={project.image} alt={t(project.alt)} width={1600} height={project.className === "work-school" ? 828 : 845} sizes="(max-width: 767px) 94vw, (max-width: 1023px) 90vw, 80vw" className="project-screenshot" />
                  </div>
                ) : <MobilityVisual />}
                {project.className === "work-doumini" && (
                  <div className="project-secondary-screen" aria-hidden="true"><Image src="/images/projects/doumini-dashboard.webp" alt="" width={640} height={338} sizes="(max-width: 767px) 40vw, 28vw" /></div>
                )}
                <div className="project-open"><span>{t("Explore project")}</span><ArrowUpRight size={24} /></div>
                <div className="project-stage-bottom" aria-hidden="true"><span>{project.name}</span><span>↗</span></div>
              </a>
              <div className="project-caption">
                <div><a href={project.href} target="_blank" rel="noopener noreferrer" className="project-name"><h3>{project.name}</h3><ArrowUpRight size={26} /></a><p>{t(project.description)}</p></div>
                <ul className="project-tags">{project.tags.map(tag => <li key={tag}>{t(tag)}</li>)}</ul>
              </div>
              {project.className === "work-bestrans" && (
                <div className="store-links">
                  <a href="https://play.google.com/store/apps/details?id=com.besttrans.best_trans" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true"><path d="M4 3.2v17.6L16.5 12 4 3.2Zm1.7-1L18 10.9l2.9-1.6L5.7 2.2Zm0 19.6 15.2-7.1-2.9-1.6-12.3 8.7ZM19.5 12l2.6 1.5c1.2-.7 1.2-2.3 0-3L19.5 12Z" /></svg>Google Play<ArrowUpRight size={14} /></a>
                  <a href="https://apps.apple.com/us/app/bestrans/id6794670744?l=fr-FR" target="_blank" rel="noopener noreferrer"><Smartphone size={17} />App Store<ArrowUpRight size={14} /></a>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
      <a href="https://github.com/Dayifour" target="_blank" rel="noopener noreferrer" className="work-more"><span><T>And always something new in the making.</T></span><span>GitHub <ArrowRight size={17} /></span></a>
    </section>
  );
}

function MobilityVisual() {
  return (
    <div className="mobility-visual" aria-hidden="true">
      <div className="mobility-grid" />
      <svg className="mobility-route" viewBox="0 0 600 430" fill="none"><path className="route-shadow" d="M40 310H160Q195 310 195 275V170Q195 135 230 135H335Q375 135 375 175V275Q375 310 415 310H555" /><path className="route-line" d="M40 310H160Q195 310 195 275V170Q195 135 230 135H335Q375 135 375 175V275Q375 310 415 310H555" /><circle className="route-endpoint" cx="40" cy="310" r="10" /><circle className="route-endpoint" cx="555" cy="310" r="10" /></svg>
      <div className="mobility-phone"><span className="phone-island" /><div className="mobility-phone-brand">bestrans<span>↗</span></div><div className="phone-route"><i /><span /><i /></div><strong><T>Going places.</T></strong><p><T>People. Parcels. Possibilities.</T></p><div className="phone-button"><T>{"Let's go"}</T><ArrowRight size={17} /></div></div>
      <span className="mobility-label mobility-label-one">iOS</span><span className="mobility-label mobility-label-two">Android</span>
      <span className="mobility-backend"><span className="status-dot" /><T>My role: backend development</T></span>
    </div>
  );
}
