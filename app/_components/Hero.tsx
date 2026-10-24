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
            <span className="hero-line hero-line-accent">
              <span><T>engineer.</T></span>
              <svg className="hero-ink-stroke" viewBox="0 0 420 28" fill="none" aria-hidden="true">
                <path d="M8 20C112 5 252 3 411 10M253 17C299 13 348 14 383 18" pathLength="1" />
              </svg>
            </span>
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
          <svg className="hero-ribbon" viewBox="0 0 560 620" fill="none" aria-hidden="true">
            <g className="hero-ribbon-lines">
              <path d="M393 25C509-10 570 51 524 164C480 273 60 323 37 432C16 527 154 609 292 586" pathLength="1" />
              <path d="M410 31C520 5 565 66 514 171C462 280 67 333 49 437C32 527 160 599 292 580" pathLength="1" />
              <path d="M428 39C531 24 558 80 504 178C446 285 76 342 61 442C49 527 168 589 292 574" pathLength="1" />
              <path d="M445 49C540 43 550 94 494 185C430 290 86 352 73 447C65 527 176 579 292 568" pathLength="1" />
              <path d="M460 61C545 62 540 110 484 192C414 295 96 361 85 452C82 527 184 569 292 562" pathLength="1" />
            </g>
          </svg>
          <div className="hero-portrait-card">
            <Image src="/images/dayif-portrait-professional.webp" alt="Sekou Dayifourou Keita" width={1122} height={1402} quality={90} priority sizes="(max-width: 640px) 77vw, (max-width: 1000px) 40vw, 400px" className="hero-portrait" />
          </div>
          <svg className="hero-flourish" viewBox="0 0 120 100" fill="none" aria-hidden="true">
            <path d="M12 61C36 22 92 9 105 29C120 53 49 87 31 72C17 58 54 33 90 40" pathLength="1" />
          </svg>
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
