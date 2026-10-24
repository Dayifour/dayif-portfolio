import { getLanguage, getLanguagePreference, getClientMessages } from "@/lib/i18n";
import { PreferencesProvider } from "./_components/Preferences";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const language = await getLanguage();
  const french = language === "fr";
  const title = french
    ? "Sekou Dayifourou Keita | Ingénieur logiciel full-stack"
    : "Sekou Dayifourou Keita | Full-Stack Software Engineer";
  const description = french
    ? "Ingénieur logiciel full-stack basé au Mali. Applications web, API et cloud. Projets : SUGUBA, Bestrans, SmartSchool et Doumini Douman."
    : "Full-stack software engineer based in Mali. Web applications, APIs and cloud. Projects: SUGUBA, Bestrans, SmartSchool and Doumini Douman.";

  return {
    metadataBase: new URL("https://www.dayifour.dev"),
    title: { default: title, template: "%s | Sekou Dayifourou Keita" },
    description,
    applicationName: "Dayifour",
    manifest: "/manifest.webmanifest",
    keywords: [
      "Sekou Dayifourou Keita", "Software Engineer", "Full-Stack Engineer",
      "TypeScript", "Next.js", "Node.js", "NestJS", "Cloudflare",
      "PostgreSQL", "Redis", "Docker", "Portfolio",
    ],
    authors: [{ name: "Sekou Dayifourou Keita", url: "https://www.dayifour.dev" }],
    creator: "Sekou Dayifourou Keita",
    publisher: "Sekou Dayifourou Keita",
    openGraph: {
      type: "website",
      url: "https://www.dayifour.dev",
      title,
      description,
      siteName: "Sekou Dayifourou Keita",
      locale: french ? "fr_FR" : "en_US",
      images: [{ url: "/og-banner-professional.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@dayifour",
      creator: "@dayifour",
      title,
      description,
      images: [{ url: "/og-banner-professional.jpg", alt: title }],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
        { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
        { url: "/logos/brand-mark.svg?v=4", sizes: "any", type: "image/svg+xml" },
      ],
      shortcut: "/favicon.ico",
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    alternates: { canonical: "https://www.dayifour.dev" },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "43GrJqZ_dVhqyrNqDoRFfFKVXk63ZXQL761ChPELXh4",
      other: { "msvalidate.01": "02A41F4B595E5D347D01F647DF226596" },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [language, languagePreference, messages] = await Promise.all([getLanguage(), getLanguagePreference(), getClientMessages()]);
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sekou Dayifourou KEITA",
    url: "https://www.dayifour.dev",
    image: "https://www.dayifour.dev/images/dayif-portrait-professional.webp",
    jobTitle: "Software Engineer",
    knowsAbout: [
      "TypeScript",
      "Next.js",
      "Distributed Systems",
      "Node.js",
      "NestJS",
      "Cloudflare",
      "AWS Lambda",
      "PostgreSQL",
      "Redis",
    ],
    sameAs: [
      "https://github.com/Dayifour",
      "https://linkedin.com/in/dayifour",
      "https://twitter.com/Dayifour",
    ],
  };

  return (
    <html lang={language} className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var p=JSON.parse(localStorage.getItem('portfolio-preferences')||'{}')||{};var dark=p.themePreference==='dark'||(p.themePreference!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',dark);document.documentElement.style.colorScheme=dark?'dark':'light';}catch(e){var dark=matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',dark);document.documentElement.style.colorScheme=dark?'dark':'light';}})();` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "h-full bg-background font-sans text-foreground [--font-caption:var(--font-geist-sans)]",
        )}
      >
        <PreferencesProvider language={language} languagePreference={languagePreference} messages={messages}>{children}</PreferencesProvider>
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  );
}
