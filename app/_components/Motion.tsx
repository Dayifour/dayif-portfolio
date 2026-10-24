"use client";

import { useEffect } from "react";
import { usePreferences } from "./Preferences";

/** One small enhancement layer; every section and project remains a Server Component. */
export function Motion() {
  const { language } = usePreferences();

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
    const cleanups: (() => void)[] = [];
    let frame = 0;
    const progress = document.querySelector<HTMLElement>(".reading-progress");
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });

    revealElements.forEach(element => {
      if (!media.matches && element.getBoundingClientRect().top > innerHeight * 0.9) {
        element.classList.add("will-reveal");
        observer.observe(element);
      } else element.classList.add("is-visible");
    });

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const distance = document.documentElement.scrollHeight - innerHeight;
        if (progress) progress.style.transform = `scaleX(${distance > 0 ? scrollY / distance : 0})`;
      });
    };
    const onMotionChange = () => {
      if (media.matches) revealElements.forEach(element => element.classList.add("is-visible"));
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    media.addEventListener("change", onMotionChange);

    document.querySelectorAll<HTMLElement>("[data-magnetic], [data-portrait]").forEach(element => {
      const portrait = element.hasAttribute("data-portrait");
      const move = (event: PointerEvent) => {
        if (media.matches || !finePointer.matches) return;
        const bounds = element.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        element.style.setProperty("--pointer-x", `${x * (portrait ? 8 : 12)}${portrait ? "deg" : "px"}`);
        element.style.setProperty("--pointer-y", `${y * (portrait ? -6 : 10)}${portrait ? "deg" : "px"}`);
      };
      const reset = () => {
        element.style.removeProperty("--pointer-x");
        element.style.removeProperty("--pointer-y");
      };
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", reset);
      cleanups.push(() => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", reset);
        reset();
      });
    });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      media.removeEventListener("change", onMotionChange);
      cleanups.forEach(cleanup => cleanup());
    };
  }, [language]);

  return null;
}
