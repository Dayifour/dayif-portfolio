import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";

export default function Home() {
  const components = [
    { component: <Header /> },
    { component: <Hero /> },
    { component: <Status /> },
    { component: <Skills /> },
    { component: <Contact /> },
    { component: <Footer /> },
  ];
  return (
    <main>
      {components.map(({ component }, idx) => (
        <div key={idx}>
          {component}
          <Spacing />
        </div>
      ))}
    </main>
  );
}
