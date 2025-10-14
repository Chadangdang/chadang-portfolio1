/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://chadang-portfolio1.vercel.app',
    generateRobotsTxt: true,         // creates robots.txt
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/api/*'],
    // Optional: tweak per-path
    transform: async (config, path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }),
  };  