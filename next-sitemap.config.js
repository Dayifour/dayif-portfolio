/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.dayifour.dev",
  generateRobotsTxt: false, // public/robots.txt is maintained manually.
  sitemapSize: 5000,
  changefreq: "monthly", // ton portfolio ne change pas souvent
  priority: 1.0, // comme tu n’as qu’une seule page, elle doit être max prioritaire
  // Locale negotiation makes the homepage dynamic; keep it in the sitemap.
  additionalPaths: async (config) => [await config.transform(config, "/")],
  exclude: ["/manifest.webmanifest"],
};

export default config;
