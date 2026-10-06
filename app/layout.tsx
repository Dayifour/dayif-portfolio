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
    ? "Je conçois des produits numériques rapides, fiables et simples, de l’interface au cloud. Contributeur à Cloudflare, npmx et iii-hq."
    : "I build fast, reliable and beautifully simple digital products, from interface to cloud. Contributor to Cloudflare, npmx and iii-hq.";

  return {
    metadataBase: new URL("https://www.dayifour.dev"),
    title: { default: title, template: "%s | Sekou Dayifourou Keita" },
    description,
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
      images: [{ url: "/og-banner.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@dayifour",
      creator: "@dayifour",
      title,
      description,
      images: ["/og-banner.png"],
    },
    icons: {
      icon: [{ url: "/logos/brand-mark.svg", type: "image/svg+xml" }],
      shortcut: "/logos/brand-mark.svg",
      apple: [{ url: "/logos/brand-mark.svg" }],
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
    image: "https://www.dayifour.dev/images/dayif-portrait-cobalt.webp",
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
