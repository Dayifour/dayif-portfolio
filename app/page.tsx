import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Services } from "./_components/Services";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";
import { Testimonials } from "./_components/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="sm" />
      <Hero />
      <Spacing />
      <Status />
      <Spacing />
      <Services />
      <Spacing />
      <Skills />
      <Spacing />
      <Testimonials />
      <Spacing />
      <Contact />
      <Spacing />
      <Footer />
    </main>
  );
}
