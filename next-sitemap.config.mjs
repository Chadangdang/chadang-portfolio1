/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://chadang.dev",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/404"],
  generateIndexSitemap: false,
};

export default config;
