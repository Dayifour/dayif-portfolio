/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.dayifour.dev",
  generateRobotsTxt: false, // génère robots.txt automatiquement
  sitemapSize: 5000,
  changefreq: "monthly", // ton portfolio ne change pas souvent
  priority: 1.0, // comme tu n’as qu’une seule page, elle doit être max prioritaire
  exclude: [], // pas de pages à exclure pour le moment
};

export default config;
