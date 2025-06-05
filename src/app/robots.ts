import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/", "/_next/"],
        crawlDelay: 1,
      },
    ],
    sitemap: "https://mtfuji-kikkou.com/sitemap.xml",
    host: "https://mtfuji-kikkou.com",
  };
}
