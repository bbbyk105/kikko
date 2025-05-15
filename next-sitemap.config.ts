module.exports = {
  siteUrl: "https://mtfuji-kikkou.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/admin/*", "/private/*"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://mtfuji-kikkou.com/server-sitemap.xml"],
  },
};
