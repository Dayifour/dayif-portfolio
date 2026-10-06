import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { contact } from "@/lib/contact";
import { Icons } from "./icons/Icons";
import { Reveal } from "./Reveal";
import { T } from "./TranslatedText";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid" aria-hidden="true" />
      <div className="section-shell">
        <Reveal>
          <div className="contact-eyebrow"><Image src="/images/dayif-portrait-cobalt.webp" alt="" width={60} height={60} /><span><T>A good collaboration starts with a hello.</T></span><span className="contact-asterisk" aria-hidden="true">✳</span></div>
          <h2 className="contact-title"><T>Something in mind?</T><br /><em><T>{"Let's make it happen."}</T></em></h2>
          <div className="contact-actions">
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="button button-coral" data-magnetic><Icons.WhatsAppIcon size={24} viewBox="0 0 256 258" aria-hidden="true" /><T>Tell me about your project</T><ArrowUpRight size={20} /></a>
            <a href={contact.email} className="contact-email"><T>Or write me an email</T><ArrowUpRight size={18} /></a>
          </div>
          <div className="contact-bottom"><span className="status-dot" /><T>Open for good collaborations</T><span><T>Mali · Working worldwide</T></span></div>
        </Reveal>
      </div>
    </section>
  );
}
