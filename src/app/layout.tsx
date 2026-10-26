import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace | Influencer & Niche Strategy Platform",
    template: "%s | Campaign Marketplace",
  },
  description:
    "A campaign marketplace connecting business owners, Knowledge Persons (niche strategists), and micro-influencers to execute performance-driven marketing campaigns.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Campaign Marketplace | Influencer & Niche Strategy Platform",
    description:
      "Connect business owners, niche strategists, and micro-influencers to execute performance-driven marketing campaigns.",
    url: siteUrl,
    siteName: "Campaign Marketplace",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Marketplace | Influencer & Niche Strategy Platform",
    description:
      "Connect business owners, niche strategists, and micro-influencers to execute performance-driven marketing campaigns.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Campaign Marketplace",
      url: siteUrl,
      description:
        "Platform connecting business owners, niche strategists, and micro-influencers.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Campaign Marketplace",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
