import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { OpenSourceImpact } from "./_components/OpenSourceImpact";
import { Expertise } from "./_components/Services";
import { Skills } from "./_components/Skills";
import { Status } from "./_components/Status";
import { T } from "./_components/TranslatedText";
import { Motion } from "./_components/Motion";

export default function Home() {
  return (
    <>
      <a href="#content" className="skip-link">
        <T>Skip to content</T>
      </a>
      <Header />
      <Motion />
      <main id="content" className="overflow-hidden">
        <Hero />
        <Status />
        <OpenSourceImpact />
        <Expertise />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
