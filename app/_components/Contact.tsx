import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ContactCard } from "./ContactCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export const Contact = () => {
  const contactCardDetails = [
    {
      className: "h-full",
      url: "mailto:sekoudayifourouk@gmail.com",
      name: "Email",
      description: "sekoudayifourouk@gmail.com",
      hint: "Preferred for direct opportunities",
      mediumImage: "/logos/email.svg",
      mediumBadgeClassName: "bg-primary/18",
    },
    {
      className: "h-full",
      url: "https://linkedin.com/in/dayifour",
      name: "LinkedIn",
      description: "Professional profile and experience",
      hint: "Best for networking and profile details",
      mediumImage: "/logos/linkedin.svg",
      mediumBadgeClassName: "bg-primary/18",
    },
  ];

  return (
    <Section id="contact" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Contact</Badge>
      <h2 className="section-title">Let&apos;s build something serious</h2>
      <p className="section-lead">
        Open to full-time engineering roles and high-impact product challenges.
      </p>

      <Reveal>
        <Card className="surface-card motion-lift relative w-full overflow-hidden border-border/70 bg-card/70 p-0">
          <div className="h-px w-full bg-primary/35" />
          <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
                Collaboration
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                I partner with teams that value robust architecture, clean
                delivery, and long-term product quality.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-primary/10 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/75">
                Availability
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/92">
                Open to full-time roles and selective freelance missions.
              </p>
            </div>
          </div>
        </Card>
      </Reveal>

      <div className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
        {contactCardDetails.map((props, idx) => (
          <Reveal key={props.name} delayMs={idx * 80}>
            <ContactCard {...props} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
