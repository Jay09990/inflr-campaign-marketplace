import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";
  const routes = [
    "",
    "/pricing",
    "/for-owners",
    "/for-influencers",
    "/for-kps",
    "/contact",
    "/trust",
    "/legal/privacy",
    "/legal/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
