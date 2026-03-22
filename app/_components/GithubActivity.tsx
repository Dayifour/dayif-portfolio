"use client";

import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-[150px] w-full animate-pulse rounded-lg border border-border/60 bg-background/35" />
    ),
  },
);

export const GithubActivity = () => {
  const calendarViewportRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldRenderCalendar, setShouldRenderCalendar] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  const [calendarConfig, setCalendarConfig] = useState({
    blockSize: 9,
    blockMargin: 2,
    fontSize: 11,
    showWeekdayLabels: false as boolean,
  });

  useEffect(() => {
    const target = calendarViewportRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px", threshold: 0.25 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasIntersected) return;

    const start = () => setShouldRenderCalendar(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(start, { timeout: 900 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(start, 200);
    return () => globalThis.clearTimeout(timeoutId);
  }, [hasIntersected]);

  useEffect(() => {
    if (!shouldRenderCalendar) return;

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

      setCalendarConfig((prev) => {
        const next = {
          blockSize,
          blockMargin,
          fontSize: compact ? 9 : 10,
          showWeekdayLabels: false,
        };

        if (
          prev.blockSize === next.blockSize &&
          prev.blockMargin === next.blockMargin &&
          prev.fontSize === next.fontSize &&
          prev.showWeekdayLabels === next.showWeekdayLabels
        ) {
          return prev;
        }

        return next;
      });
    };

    updateConfigFromContainer();

    const observer = new ResizeObserver(() => {
      updateConfigFromContainer();
    });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [shouldRenderCalendar]);

  return (
    <Section id="github-activity" className="flex flex-col items-start gap-4">
      <Badge variant="outline">GitHub Activity</Badge>
      <h2 className="section-title">Daily contribution signal</h2>
      <p className="section-lead">
        Real contribution history, styled to match the product visual language.
      </p>

      <div className="w-full animate-enter">
        <div className="surface-card motion-lift mx-auto w-full max-w-5xl overflow-hidden rounded-2xl">
          <div className="bi-tone-line" />
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 px-3 py-4 sm:px-5 sm:py-5">
            <div ref={calendarViewportRef} className="w-full">
              <div
                ref={containerRef}
                className="w-full [&_article]:w-full [&_article]:max-w-none [&_article_svg]:h-auto [&_article_svg]:w-full [&_article_text]:fill-muted-foreground [&_rect]:rounded-[4px] [&_rect]:stroke-background [&_rect]:stroke-[0.4]"
              >
                {shouldRenderCalendar ? (
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
                      dark: [
                        "#0A0F0B",
                        "#0E2A18",
                        "#1C5A36",
                        "#2F9A5D",
                        "#74E59F",
                      ],
                    }}
                    labels={{
                      totalCount: "{{count}} contributions in the last year",
                    }}
                  />
                ) : (
                  <div className="h-[150px] w-full rounded-lg border border-border/60 bg-background/35" />
                )}
              </div>
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
