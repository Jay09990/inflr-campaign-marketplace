import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/influencer/",
        "/kp/",
        "/owner/",
        "/workspace/",
        "/login",
        "/signup",
        "/forgot-password",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
