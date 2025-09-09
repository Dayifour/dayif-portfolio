import { Section } from "./Section";

export const Footer = () => {
  return (
    <footer className="bg-card" role="contentinfo">
      <Section className="py-8 flex flex-col items-center">
        <p className="text-muted-foreground text-sm" aria-label="Copyright">
          &copy; 2024 Manager Dayif
        </p>
      </Section>
    </footer>
  );
};
