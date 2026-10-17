import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaign-marketplace.vercel.app";
  const lastModified = new Date();

  const routes = [
    "",
    "/for-owners",
    "/for-kps",
    "/for-influencers",
    "/pricing",
    "/trust",
    "/contact",
    "/login",
    "/signup",
    "/forgot-password",
    "/legal/terms",
    "/legal/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
