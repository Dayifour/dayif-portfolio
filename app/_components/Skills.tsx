import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { NextLogo } from "./icons/NextLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{
              animationDuration: "10s",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framwork is <Code>React</Code>
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            I can create a <u>beautiful</u> application <i>in seconds</i> using{" "}
            <Code>TailwindCSS</Code>
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <NextLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Next</h3>
          <p className="text-sm text-muted-foreground">
            I love creating a backendusing <Code>Nextjs</Code>.
          </p>
        </div>
      </div>
    </Section>
  );
};
