import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaign-marketplace.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/owner/",
          "/kp/",
          "/influencer/",
          "/workspace/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
