import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: {
    default: "Manager Dayif (Sékou Dayifourou KEITA) | Software Engineer",
    template: "%s | Manager Dayif",
  },
  description:
    "Portfolio of Manager Dayif (Sékou Dayifourou KEITA), a Full-Stack Software Engineer based in Bamako, Mali. Expert in TypeScript, React, Next.js, Node.js, Tailwind CSS. Développeur web, front-end et back-end.",
  keywords: [
    // English keywords
    "Sekou Dayifourou Keita",
    "Manager Dayif",
    "dayifour",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "TypeScript Developer",
    "Node.js Developer",
    "Portfolio",

    // French keywords
    "Développeur Web",
    "Développeur Front-End",
    "Développeur Back-End",
    "Développeur Full Stack",
    "React",
    "Next.js",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Portfolio développeur",

    // Local SEO (Mali)
    "Développeur Mali",
    "Développeur Bamako",
    "Software Engineer Mali",
    "Full Stack Developer Bamako",
    "Web Developer Mali",
  ],
  authors: [
    {
      name: "Sékou Dayifourou KEITA (Manager Dayif)",
      url: "https://managerdayif.netlify.app",
    },
  ],
  creator: "Manager Dayif",
  publisher: "Manager Dayif",

  openGraph: {
    type: "website",
    url: "https://managerdayif.netlify.app",
    title: "Manager Dayif | Software Engineer Portfolio",
    description:
      "Discover the portfolio of Manager Dayif (Sékou Dayifourou KEITA), Software Engineer based in Bamako, Mali. Specialized in React, Next.js, Tailwind, Node.js, and TypeScript.",
    siteName: "Manager Dayif Portfolio",
    images: [
      {
        url: "https://managerdayif.netlify.app/dayif.png",
        width: 1200,
        height: 630,
        alt: "Manager Dayif Portfolio",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@dayifour", // ajout pour correspondre aux guidelines
    creator: "@dayifour",
    title: "Manager Dayif | Software Engineer Portfolio",
    description:
      "Portfolio of Manager Dayif (Sékou Dayifourou KEITA), Full-Stack Developer from Bamako, Mali. Specialized in Next.js, React, Tailwind, and Node.js.",
    images: ["https://managerdayif.netlify.app/dayif.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://managerdayif.netlify.app"),
  alternates: {
    canonical: "https://managerdayif.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta
          name="google-site-verification"
          content="VOr7GsTMAtkoICeIvt9GK-19fHon1mt2ZPqO5Xl4RaY"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sékou Dayifourou KEITA",
              url: "https://managerdayif.netlify.app",
              image: "https://managerdayif.netlify.app/dayif.png",
              jobTitle: "Software Engineer",
              sameAs: [
                "https://github.com/Dayifour",
                "https://linkedin.com/in/dayifour",
                "https://twitter.com/Dayifour",
              ],
            }),
          }}
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "font-sans",
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
