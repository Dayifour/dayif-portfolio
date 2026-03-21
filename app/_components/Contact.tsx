import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ContactCard } from "./ContactCard";
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
      mediumBadgeClassName:
        "bg-[linear-gradient(135deg,hsl(var(--primary)/0.22),hsl(var(--primary)/0.12))]",
    },
    {
      className: "h-full",
      url: "https://linkedin.com/in/dayifour",
      name: "LinkedIn",
      description: "Professional profile and experience",
      hint: "Best for networking and profile details",
      mediumImage: "/logos/linkedin.svg",
      mediumBadgeClassName:
        "bg-[linear-gradient(135deg,hsl(var(--accent)/0.22),hsl(var(--accent)/0.12))]",
    },
  ];

  return (
    <Section id="contact" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Contact</Badge>
      <h2 className="section-title">Let&apos;s build something serious</h2>
      <p className="section-lead">
        Open to full-time engineering roles and high-impact product challenges.
      </p>

      <Card className="surface-card relative w-full overflow-hidden border-border/70 bg-card/70 p-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,hsl(var(--primary)/0.1),transparent_45%),radial-gradient(circle_at_92%_10%,hsl(var(--accent)/0.08),transparent_42%)]" />
        <div className="h-px w-full bg-gradient-to-r from-primary/45 via-accent/45 to-primary/30" />
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
          <div className="rounded-lg border border-border/60 bg-[linear-gradient(135deg,hsl(var(--primary)/0.12),hsl(var(--accent)/0.08))] px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/75">
              Availability
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground/92">
              Open to full-time roles and selective freelance missions.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
        {contactCardDetails.map((props, idx) => (
          <ContactCard key={idx} {...props} />
        ))}
      </div>
    </Section>
  );
};
