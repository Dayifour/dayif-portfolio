import { getTranslations } from "@/lib/i18n";

/** Server-only text: translating static content adds no client-side JavaScript. */
export async function T({ children }: { children: string }) {
  const t = await getTranslations();
  return t(children);
}
