import { Contact } from "./_components/Contact";
import { FeaturedIn } from "./_components/FeaturedIn";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { OpenSourceImpact } from "./_components/OpenSourceImpact";
import { Expertise } from "./_components/Services";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="sm" />
      <Hero />
      <Spacing />
      <OpenSourceImpact />
      <Spacing />
      <Status />
      <Spacing />
      <Expertise />
      <Spacing />
      <Skills />
      <Spacing />
      <FeaturedIn />
      <Spacing />
      <Contact />
      <Spacing />
      <Footer />
    </main>
  );
}
