import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

  const publicRoutes = [
    "",
    "/for-owners",
    "/for-kps",
    "/for-influencers",
    "/pricing",
    "/trust",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
  ];

  return publicRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
