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
      mediumImage: "https://cdn-icons-png.flaticon.com/128/5968/5968534.png",
    },
    {
      className: "h-full",
      url: "https://wa.me/22379994640?text=Salut!",
      name: "WhatsApp",
      description: "Fast responses for project discussions",
      image: "/dayif.png",
      mediumImage: "https://cdn-icons-png.flaticon.com/128/15713/15713434.png",
    },
    {
      className: "h-full",
      url: "https://telegram.me/managerdayif?text=Salut!",
      name: "Telegram",
      description: "@managerdayif",
      image: "/dayif.png",
      mediumImage: "https://cdn-icons-png.flaticon.com/128/5968/5968804.png",
    },
    {
      className: "h-full",
      url: "https://linkedin.com/in/dayifour",
      name: "LinkedIn",
      description: "Professional profile and experience",
      image: "/dayif.png",
      mediumImage: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
    },
    {
      className: "h-full",
      url: "https://github.com/Dayifour",
      name: "GitHub",
      description: "Code, open-source work, and experiments",
      image: "/dayif.png",
      mediumImage: "/logos/github.svg",
    },
    {
      className: "h-full",
      url: "https://twitter.com/dayifour",
      name: "X / Twitter",
      description: "Technical insights and updates",
      image: "/dayif.png",
      mediumImage: "/logos/x.svg",
    },
  ];

  return (
    <Section id="contact" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Contact</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Let&apos;s build your next product milestone
      </h2>
      <div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {contactCardDetails.map((props, idx) => (
          <ContactCard key={idx} {...props} />
        ))}
      </div>
    </Section>
  );
};
