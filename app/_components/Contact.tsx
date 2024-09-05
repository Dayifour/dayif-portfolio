import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
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
          image="https://images.betweentheaxles.net/lamborghini_urus_s_1st_gen_2022/2023-lamborghini-urus-s-00025_x201c4.jpg"
          mediumImage="https://cdn-icons-png.flaticon.com/128/15713/15713434.png"
          description="contact me"
        />
        <ContactCard
          className="flex-1"
          url="https://telegram.me/managerdayif?text=Salut!"
          name="@managerdayif"
          image="https://m.media-amazon.com/images/M/MV5BOTQ1MmE4MDUtNjJlZi00MzhkLTk5M2EtOWRjOTI1YTk4NTkyXkEyXkFqcGdeQWFybm8@._V1_.jpg"
          mediumImage="https://cdn-icons-png.flaticon.com/128/5968/5968804.png"
          description="contact me"
        />
      </div>
    </Section>
  );
};
