"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, useTransition, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Moon, Sun } from "lucide-react";

type Language = "en" | "fr";
type ThemePreference = "light" | "dark" | "system";
type ThemeState = { theme: "light" | "dark"; themePreference: ThemePreference };
type LocaleProps = {
  language: Language;
  languagePreference: Language | "system";
  messages: Record<string, string>;
};
const defaults: ThemeState = { theme: "light", themePreference: "system" };
const Context = createContext<ThemeState & LocaleProps>({ ...defaults, language: "en", languagePreference: "system", messages: {} });
const key = "portfolio-preferences";
let snapshot = defaults;
let memoryPreference: ThemePreference | undefined;
const listeners = new Set<() => void>();

function readTheme() {
  let preference: unknown = memoryPreference;
  if (!preference) {
    try { preference = JSON.parse(localStorage.getItem(key) ?? "{}")?.themePreference; }
    catch { /* System theme still works when storage is unavailable. */ }
  }
  const themePreference = preference === "light" || preference === "dark" ? preference : "system";
  const theme = themePreference === "system"
    ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : themePreference;
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  if (theme !== snapshot.theme || themePreference !== snapshot.themePreference) {
    snapshot = { theme, themePreference };
    listeners.forEach(listener => listener());
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const media = matchMedia("(prefers-color-scheme: dark)");
  readTheme();
  media.addEventListener("change", readTheme);
  window.addEventListener("storage", readTheme);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", readTheme);
    window.removeEventListener("storage", readTheme);
  };
}

function saveTheme(themePreference: ThemePreference) {
  try {
    localStorage.setItem(key, JSON.stringify({ themePreference }));
    memoryPreference = undefined;
  } catch {
    memoryPreference = themePreference;
  }
  readTheme();
}

/** Server-rendered children pass through this provider without becoming client components. */
export function PreferencesProvider({ children, ...locale }: LocaleProps & { children: ReactNode }) {
  const preferences = useSyncExternalStore(subscribe, () => snapshot, () => defaults);
  const router = useRouter();
  useEffect(() => {
    document.documentElement.lang = locale.language;
    const refreshLanguage = () => router.refresh();
    window.addEventListener("languagechange", refreshLanguage);
    return () => window.removeEventListener("languagechange", refreshLanguage);
  }, [locale.language, router]);
  return <Context.Provider value={{ ...preferences, ...locale }}>{children}</Context.Provider>;
}

export function usePreferences() {
  const preferences = useContext(Context);
  return { ...preferences, t: (text: string) => preferences.messages[text] ?? text };
}

export function T({ children }: { children: string }) {
  return usePreferences().t(children);
}

export function PreferenceControls() {
  const { t, language, theme } = usePreferences();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const nextLanguage = language === "fr" ? "en" : "fr";

  return (
    <div className="preference-controls">
      <button
        type="button"
        className="preference-button language-toggle"
        aria-label={t(language === "fr" ? "Switch to English" : "Switch to French")}
        title={t(language === "fr" ? "Switch to English" : "Switch to French")}
        disabled={pending}
        onClick={() => {
          document.cookie = `portfolio-language=${nextLanguage}; Path=/; Max-Age=31536000; SameSite=Lax`;
          startTransition(() => router.refresh());
        }}
      >
        {language.toUpperCase()}<span aria-hidden="true">↗</span>
      </button>
      <button
        type="button"
        className="preference-button theme-toggle"
        aria-label={t(theme === "dark" ? "Switch to light mode" : "Switch to dark mode")}
        title={t(theme === "dark" ? "Switch to light mode" : "Switch to dark mode")}
        onClick={() => saveTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="theme-sun" size={19} aria-hidden="true" />
        <Moon className="theme-moon" size={19} aria-hidden="true" />
      </button>
    </div>
  );
}
