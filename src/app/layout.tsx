import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace",
    template: "%s | Campaign Marketplace",
  },
  description:
    "Three-sided marketplace connecting business owners, Knowledge Persons, and micro-influencers for outcome-driven campaigns.",
  openGraph: {
    title: "Campaign Marketplace",
    description:
      "Outcome-driven campaign marketplace connecting business owners, Knowledge Persons, and micro-influencers.",
    url: siteUrl,
    siteName: "Campaign Marketplace",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
