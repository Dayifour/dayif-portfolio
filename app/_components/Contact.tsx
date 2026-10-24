import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { contact } from "@/lib/contact";
import { Icons } from "./icons/Icons";
import { Reveal } from "./Reveal";
import { T } from "./TranslatedText";
import { Contour } from "./Contour";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Contour className="contact-contour" />
      <div className="section-shell">
        <Reveal>
          <div className="contact-eyebrow"><Image src="/images/dayif-portrait-professional.webp" alt="" width={60} height={60} sizes="47px" quality={90} /><span>Sekou Dayifourou Keita</span></div>
          <h2 className="contact-title"><T>Have a project?</T><br /><em><T>{"Let's talk."}</T></em></h2>
          <div className="contact-actions">
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="button button-accent" data-magnetic><Icons.WhatsAppIcon size={24} viewBox="0 0 256 258" aria-hidden="true" />WhatsApp<ArrowUpRight size={20} /></a>
            <a href={contact.email} className="contact-email"><T>Or write me an email</T><ArrowUpRight size={18} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
