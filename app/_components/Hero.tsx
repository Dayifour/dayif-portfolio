import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { contact } from "@/lib/contact";
import { T } from "./TranslatedText";
import { Icons } from "./icons/Icons";

export function Hero() {
  return (
    <section id="top" className="hero-stage">
      <div className="hero-composition section-shell">
        <div className="hero-copy">
          <p className="hero-name">Sekou Dayifourou Keita <span>Mali</span></p>
          <h1 className="hero-title">
            <span className="hero-line"><span><T>Software</T></span></span>
            <span className="hero-line hero-line-accent"><span><T>engineer.</T></span></span>
          </h1>
          <div className="hero-intro">
            <p className="hero-description"><T>I develop web applications and APIs, from the interface to deployment.</T></p>
          </div>
          <div className="hero-actions">
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="button button-ink" data-magnetic>
              <span className="button-label"><T>Contact me</T></span>
              <Icons.WhatsAppIcon size={21} viewBox="0 0 256 258" aria-hidden="true" />
            </a>
            <a href="#work" className="text-link"><T>Explore my work</T><ArrowDown size={17} /></a>
          </div>
        </div>
        <figure className="hero-art">
          <div className="hero-portrait-card">
            <Image src="/images/dayif-portrait-professional.webp" alt="Sekou Dayifourou Keita" width={1122} height={1402} quality={90} priority sizes="(max-width: 640px) 77vw, (max-width: 1000px) 40vw, 400px" className="hero-portrait" />
          </div>
        </figure>
      </div>
      <div className="hero-bottom section-shell">
        <a href="#work" className="hero-scroll"><span className="scroll-circle"><ArrowDown size={18} /></span><span><T>Scroll to discover</T></span></a>
        <div className="hero-proof"><strong>04</strong><span><T>projects online</T></span></div>
        <div className="hero-disciplines">WEB <span>/</span> BACKEND <span>/</span> OPEN SOURCE</div>
      </div>
    </section>
  );
}
