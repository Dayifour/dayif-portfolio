"use client";

import { Badge } from "@/components/ui/badge";
import { GitHubCalendar } from "react-github-calendar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";

export const GithubActivity = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [calendarConfig, setCalendarConfig] = useState({
    blockSize: 10,
    blockMargin: 3,
    fontSize: 11,
    showWeekdayLabels: true as boolean,
  });

  useEffect(() => {
    const updateConfigFromContainer = () => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.clientWidth;
      if (!width) return;

      const small = width < 560;
      const blockMargin = small ? 2 : 3;
      const sideLabelsWidth = small ? 0 : 28;
      const usable = Math.max(200, width - sideLabelsWidth - 10);

      // 53 weeks + 52 margins for a full-year heatmap
      const computedBlock = Math.floor((usable - 52 * blockMargin) / 53);
      const blockSize = Math.max(5, Math.min(computedBlock, 13));

      setCalendarConfig({
        blockSize,
        blockMargin,
        fontSize: small ? 10 : 11,
        showWeekdayLabels: !small,
      });
    };

    updateConfigFromContainer();

    const observer = new ResizeObserver(() => {
      updateConfigFromContainer();
    });

    if (containerRef.current) observer.observe(containerRef.current);
    window.addEventListener("resize", updateConfigFromContainer);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateConfigFromContainer);
    };
  }, []);

  return (
    <Section id="github-activity" className="flex flex-col items-start gap-4">
      <Badge variant="outline">GitHub Activity</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0 sm:text-4xl">
        Daily contribution signal
      </h2>
      <p className="max-w-2xl text-base text-muted-foreground">
        Real contribution history, styled to match the product visual language.
      </p>
      <div className="w-full animate-enter">
        <div
          ref={containerRef}
          className="surface-card w-full overflow-hidden rounded-2xl p-4 sm:p-5"
        >
          <div className="[&_article]:w-full [&_article]:max-w-full [&_article_svg]:w-full [&_rect]:rounded-[3px]">
            <GitHubCalendar
              username="Dayifour"
              showColorLegend={false}
              showMonthLabels
              showTotalCount={false}
              showWeekdayLabels={calendarConfig.showWeekdayLabels}
              blockSize={calendarConfig.blockSize}
              blockMargin={calendarConfig.blockMargin}
              blockRadius={3}
              fontSize={calendarConfig.fontSize}
              colorScheme="dark"
              theme={{
                dark: ["#0A0F0B", "#0E2A18", "#1C5A36", "#2F9A5D", "#74E59F"],
              }}
              labels={{
                totalCount: "{{count}} contributions in the last year",
              }}
            />
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Contribution heatmap customized to be native to this portfolio.
        </p>
        <Link
          href="https://github.com/Dayifour"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          View full GitHub profile
        </Link>
      </div>
    </Section>
  );
};
