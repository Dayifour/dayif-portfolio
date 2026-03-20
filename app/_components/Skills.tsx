import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { Icons } from "./icons/Icons";

export const Skills = () => {
  return (
    <Section id="skills" className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Core technologies I use
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          {Icons.ReactLogo({
            size: 42,
            className: "animate-spin motion-reduce:animate-none",
            style: {
              animationDuration: "10s",
            },
          })}
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          {Icons.TailwindLogo({ size: 42 })}
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            I can create a <u>beautiful</u> application <i>in seconds</i> using{" "}
            <Code>Tailwind CSS</Code>.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          {Icons.NextLogo({ size: 42 })}
          <h3 className="text-2xl font-semibold tracking-tight">Next</h3>
          <p className="text-sm text-muted-foreground">
            I love building full-stack products with <Code>Next.js</Code>.
          </p>
        </div>
      </div>
    </Section>
  );
};
