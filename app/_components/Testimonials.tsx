import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Section } from "./Section";

const TESTIMONIALS = [
  {
    author: "Startup Founder",
    quote:
      "Sekou quickly transformed our idea into a production-ready web app with excellent communication and delivery speed.",
  },
  {
    author: "Product Manager",
    quote:
      "Strong engineering mindset, clean code, and great attention to user experience.",
  },
  {
    author: "Small Business Owner",
    quote:
      "Our website became faster and clearer, and we started getting better client inquiries.",
  },
];

export const Testimonials = () => {
  return (
    <Section id="testimonials" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Social Proof</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        What people say
      </h2>
      <div className="grid w-full gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <Card key={item.author} className="p-4">
            <Quote className="h-5 w-5 text-muted-foreground" />
            <p className="mt-3 text-sm text-muted-foreground">{item.quote}</p>
            <p className="mt-4 text-sm font-medium text-primary">
              {item.author}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
