import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  const contactCardDetails = [
    {
      className: "h-full",
      url: "mailto:sekoudayifourouk@gmail.com",
      name: "Email",
      description: "sekoudayifourouk@gmail.com",
      image: "/dayif.png",
      mediumImage: "/logos/email.svg",
    },
    {
      className: "h-full",
      url: "https://linkedin.com/in/dayifour",
      name: "LinkedIn",
      description: "Professional profile and experience",
      image: "/dayif.png",
      mediumImage: "/logos/linkedin.svg",
    },
  ];

  return (
    <Section id="contact" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Contact</Badge>
      <h2 className="section-title">
        Direct contact
      </h2>
      <p className="section-lead">
        Open to full-time engineering roles and high-impact product challenges.
      </p>
      <div className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
        {contactCardDetails.map((props, idx) => (
          <ContactCard key={idx} {...props} />
        ))}
      </div>
    </Section>
  );
};
