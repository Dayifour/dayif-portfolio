import { ArrowDown, ArrowDownRight, ArrowUpRight, Globe2 } from "lucide-react";
import Image from "next/image";
import { contact } from "@/lib/contact";
import { T } from "./TranslatedText";
import { Icons } from "./icons/Icons";

export function Hero() {
  return (
    <section id="top" className="hero-stage">
      <div className="hero-topline section-shell">
        <span><span className="status-dot" /><T>Open for good collaborations</T></span>
        <span className="hero-location"><Globe2 size={14} /><T>Based in Mali. Building everywhere.</T></span>
      </div>
      <div className="hero-composition section-shell">
        <div className="hero-copy">
          <p className="hero-name">Sekou Dayifourou Keita <span>© 2026</span></p>
          <h1 className="hero-title">
            <span className="hero-line"><span><T>Your ideas.</T></span></span>
            <span className="hero-line hero-line-accent"><span><T>Brought to life.</T></span></span>
          </h1>
          <div className="hero-intro">
            <span className="hero-intro-arrow" aria-hidden="true"><ArrowDownRight /></span>
            <div>
              <p className="hero-role"><T>Full-stack engineer. Your product partner.</T></p>
              <p className="hero-description"><T>I turn ambitious ideas into products people actually use. From the first sketch to going live.</T></p>
            </div>
          </div>
          <div className="hero-actions">
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="button button-ink" data-magnetic>
              <span className="button-label"><T>{"Let's build together"}</T></span>
              <Icons.WhatsAppIcon size={21} viewBox="0 0 256 258" aria-hidden="true" />
            </a>
            <a href="#work" className="text-link"><T>Explore my work</T><ArrowDown size={17} /></a>
          </div>
        </div>
        <div className="hero-art" data-portrait>
          <span className="hero-art-word" aria-hidden="true">create.</span>
          <div className="portrait-halo" aria-hidden="true" />
          <div className="hero-portrait-card">
            <Image src="/images/dayif-portrait-cobalt.webp" alt="Sekou Dayifourou Keita" width={1024} height={1536} priority sizes="(max-width: 767px) 85vw, 40vw" className="hero-portrait" />
            <div className="portrait-caption"><span>Dayifour</span><span><T>Engineer & maker</T><ArrowUpRight size={16} /></span></div>
          </div>
          <div className="hero-seal" aria-hidden="true">
            <svg viewBox="0 0 120 120"><defs><path id="seal-circle" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" /></defs><text><textPath href="#seal-circle" textLength="268">IDEAS INTO REALITY · IDEAS INTO REALITY · </textPath></text></svg>
            <span>✳</span>
          </div>
          <div className="portrait-note"><span className="status-dot" /><T>A person behind every pixel.</T></div>
        </div>
      </div>
      <div className="hero-bottom section-shell">
        <a href="#work" className="hero-scroll"><span className="scroll-circle"><ArrowDown size={18} /></span><span><T>Scroll to discover</T></span></a>
        <div className="hero-proof"><strong>04</strong><span><T>real products.</T><br /><T>Already out in the world.</T></span></div>
        <div className="hero-disciplines">WEB <span>✳</span> BACKEND <span>✳</span> OPEN SOURCE</div>
      </div>
    </section>
  );
}
