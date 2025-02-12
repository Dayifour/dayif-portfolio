import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Contact</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you.
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full"></div>
      <div className="flex max-md:flex-col gap-4">
        <ContactCard
          className="flex-1"
          url="mailto:sekoudayifourouk@gmail.com"
          name="me@gmail.com"
          image="https://lh3.googleusercontent.com/a/ACg8ocLGIqhX10Of3b-3BJvCZ4GpVyHYKuD_YKaZn_gfQnRBZaskXMQ=s360-c-no"
          mediumImage="https://cdn-icons-png.flaticon.com/128/5968/5968534.png"
          description="contact me"
        />
        <ContactCard
          className="flex-1"
          url="https://wa.me/22379994640?text=Salut!"
          name="Manager"
          image="https://th.bing.com/th/id/OIP.I3QqeH2JKSF72phdrza7LQAAAA?rs=1&pid=ImgDetMain&w=180&h=180&c=7&dpr=1.3"
          mediumImage="https://cdn-icons-png.flaticon.com/128/15713/15713434.png"
          description="contact me"
        />
        <ContactCard
          className="flex-1"
          url="https://telegram.me/managerdayif?text=Salut!"
          name="@managerdayif"
          image="https://th.bing.com/th/id/OIP.OyF4mXsxEUGfDqTEBlq6SAAAAA?pid=ImgDet&w=180&h=180&c=7&dpr=1.3"
          mediumImage="https://cdn-icons-png.flaticon.com/128/5968/5968804.png"
          description="contact me"
        />
      </div>
    </Section>
  );
};
