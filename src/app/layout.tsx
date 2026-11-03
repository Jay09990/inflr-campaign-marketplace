import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace | Influencer Campaign Orchestration",
    template: "%s | Campaign Marketplace",
  },
  description:
    "Three-sided marketplace where SMB owners buy campaign outcomes, Knowledge Persons pitch strategy, and creator squads execute.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Campaign Marketplace",
    title: "Campaign Marketplace | Influencer Campaign Orchestration",
    description:
      "Where local brands buy campaign outcomes, not creator chaos. Orchestrated by Knowledge Persons and executed by micro-influencers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Marketplace | Influencer Campaign Orchestration",
    description:
      "Where local brands buy campaign outcomes, not creator chaos. Orchestrated by Knowledge Persons and executed by micro-influencers.",
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
