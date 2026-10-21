import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace | Hire Micro-Influencer Teams Managed by Niche Experts",
    template: "%s | Campaign Marketplace",
  },
  description:
    "Connect business owners with Knowledge Persons and micro-influencer teams to run high-converting, managed marketing campaigns in India.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Campaign Marketplace | Hire Micro-Influencer Teams Managed by Niche Experts",
    description:
      "Connect business owners with Knowledge Persons and micro-influencer teams to run high-converting, managed marketing campaigns in India.",
    url: "./",
    siteName: "Campaign Marketplace",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Marketplace | Hire Micro-Influencer Teams Managed by Niche Experts",
    description:
      "Connect business owners with Knowledge Persons and micro-influencer teams to run high-converting, managed marketing campaigns in India.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Campaign Marketplace",
  url: siteUrl,
  description:
    "A three-sided marketplace connecting business owners, Knowledge Persons, and micro-influencers for managed marketing campaigns.",
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
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
