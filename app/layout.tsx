import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sekou Dayifourou KEITA | Full-Stack Software Engineer",
    template: "%s | Sekou Dayifourou KEITA",
  },
  description:
    "Full-Stack Software Engineer specializing in TypeScript, Next.js, and distributed systems. Contributor to Cloudflare, npmx, and iii-hq.",
  keywords: [
    "Sekou Dayifourou Keita",
    "Software Engineer",
    "Full-Stack Software Engineer",
    "TypeScript",
    "Next.js",
    "Distributed Systems",
    "Cloudflare Contributor",
    "NestJS",
    "AWS Lambda",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Portfolio",
  ],
  authors: [
    {
      name: "Sekou Dayifourou KEITA",
      url: "https://www.dayifour.dev",
    },
  ],
  creator: "Sekou Dayifourou KEITA",
  publisher: "Sekou Dayifourou KEITA",

  openGraph: {
    type: "website",
    url: "https://www.dayifour.dev",
    title: "Sekou Dayifourou KEITA | Software Engineer Portfolio",
    description:
      "Portfolio of a Full-Stack Software Engineer specializing in TypeScript, Next.js, and distributed systems.",
    siteName: "Sekou Dayifourou KEITA Portfolio",
    images: [
      {
        url: "https://www.dayifour.dev/og-banner.svg",
        width: 1200,
        height: 630,
        alt: "Sekou Dayifourou KEITA Portfolio",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@dayifour", // ajout pour correspondre aux guidelines
    creator: "@dayifour",
    title: "Sekou Dayifourou KEITA | Software Engineer Portfolio",
    description:
      "Contributor to Cloudflare, npmx, and iii-hq. Building type-safe, high-performance software architectures.",
    images: ["https://www.dayifour.dev/og-banner.svg"],
  },

  icons: {
    icon: [{ url: "/logos/brand-mark.svg", type: "image/svg+xml" }],
    shortcut: "/logos/brand-mark.svg",
    apple: [{ url: "/logos/brand-mark.svg" }],
  },

  metadataBase: new URL("https://www.dayifour.dev"),
  alternates: {
    canonical: "https://www.dayifour.dev",
  },
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
    other: {
      "msvalidate.01": "02A41F4B595E5D347D01F647DF226596",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sekou Dayifourou KEITA",
    url: "https://www.dayifour.dev",
    image: "https://www.dayifour.dev/logos/brand-mark.svg",
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
    <html lang="en" className="h-full">
      <head>
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
        {children}
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  );
}
