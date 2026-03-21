"use client";

import { Badge } from "@/components/ui/badge";
import { GitHubCalendar } from "react-github-calendar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";

export const GithubActivity = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [calendarConfig, setCalendarConfig] = useState({
    blockSize: 9,
    blockMargin: 2,
    fontSize: 11,
    showWeekdayLabels: false as boolean,
  });

  useEffect(() => {
    const updateConfigFromContainer = () => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.clientWidth;
      if (!width) return;

      const compact = width < 560;
      const blockMargin = compact ? 1 : 2;
      const usable = Math.max(190, width - 2);

      // 53 weeks + 52 margins for a full-year heatmap
      const computedBlock = Math.floor((usable - 52 * blockMargin) / 53);
      const blockSize = Math.max(4, Math.min(computedBlock, 22));

      setCalendarConfig({
        blockSize,
        blockMargin,
        fontSize: compact ? 9 : 10,
        showWeekdayLabels: false,
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
      <h2 className="section-title">Daily contribution signal</h2>
      <p className="section-lead">
        Real contribution history, styled to match the product visual language.
      </p>
      <div className="w-full animate-enter">
        <div className="surface-card mx-auto w-full max-w-5xl overflow-hidden rounded-2xl">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 px-3 py-4 sm:px-5 sm:py-5">
            <div
              ref={containerRef}
              className="w-full [&_article]:w-full [&_article]:max-w-none [&_article_svg]:h-auto [&_article_svg]:w-full [&_article_text]:fill-muted-foreground [&_rect]:rounded-[4px] [&_rect]:stroke-background [&_rect]:stroke-[0.4]"
            >
              <GitHubCalendar
                className="github-calendar"
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
