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
      url: "https://dayif-portfolio.vercel.app",
    },
  ],
  creator: "Sekou Dayifourou KEITA",
  publisher: "Sekou Dayifourou KEITA",

  openGraph: {
    type: "website",
    url: "https://dayif-portfolio.vercel.app",
    title: "Sekou Dayifourou KEITA | Software Engineer Portfolio",
    description:
      "Portfolio of a Full-Stack Software Engineer specializing in TypeScript, Next.js, and distributed systems.",
    siteName: "Sekou Dayifourou KEITA Portfolio",
    images: [
      {
        url: "https://dayif-portfolio.vercel.app/dayif.png",
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
    images: ["https://dayif-portfolio.vercel.app/dayif.png"],
  },

  icons: {
    icon: "/dayif.png",
    apple: "/dayif.png",
  },

  metadataBase: new URL("https://dayif-portfolio.vercel.app"),
  alternates: {
    canonical: "https://dayif-portfolio.vercel.app",
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
    url: "https://dayif-portfolio.vercel.app",
    image: "https://dayif-portfolio.vercel.app/dayif.png",
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
