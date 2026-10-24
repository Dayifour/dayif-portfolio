import "server-only";

import { cache } from "react";
import { cookies, headers } from "next/headers";
import { translate } from "./translations";

/** Resolve once per request. Explicit choice wins over the browser's language. */
export const getLanguage = cache(async (): Promise<"en" | "fr"> => {
  const preference = (await cookies()).get("portfolio-language")?.value;
  if (preference === "fr" || preference === "en") return preference;

  const accepted = (await headers()).get("accept-language") ?? "en";
  const languages = accepted.split(",").map((entry) => {
    const [tag, quality] = entry.trim().split(";");
    return { language: tag.toLowerCase().split("-")[0], quality: quality ? Number(quality.split("=")[1]) : 1 };
  }).filter(entry => entry.quality > 0).sort((a, b) => b.quality - a.quality);
  return languages.find(entry => entry.language === "fr" || entry.language === "en")?.language === "fr" ? "fr" : "en";
});

export async function getTranslations() {
  const language = await getLanguage();
  return (text: string) => translate(text, language);
}

export const getLanguagePreference = cache(async () => {
  const preference = (await cookies()).get("portfolio-language")?.value;
  return preference === "en" || preference === "fr" ? preference : "system";
});

/** Only interactive components' messages cross the server/client boundary. */
export async function getClientMessages() {
  const t = await getTranslations();
  return Object.fromEntries([
    "About", "Open Source", "GitHub Activity", "Projects", "Expertise", "Skills", "Contact",
    "Full-Stack Software Engineer", "Portfolio brand logo", "Primary", "Explore Code",
    "Close menu", "Open menu", "Language", "Theme", "Automatic", "Light", "Dark", "Work", "Let's talk",
    "Switch to light mode", "Switch to dark mode", "Switch to English", "Switch to French", "Let's talk about your project", "Contact Sekou Dayifourou KEITA on WhatsApp",
    "Daily contribution signal", "Real contribution history, styled to match the product visual language.",
    "Contribution heatmap customized to be native to this portfolio.", "View full GitHub profile",
    "{{count}} contributions in the last year",
  ].map(key => [key, t(key)]));
}
