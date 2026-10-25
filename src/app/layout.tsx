import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace | Pitch-Led Creator Campaigns",
    template: "%s | Campaign Marketplace",
  },
  description:
    "A three-sided marketplace where local brand owners post briefs, Knowledge Persons pitch strategy, and micro-influencers execute in targeted campaign squads.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Campaign Marketplace | Pitch-Led Creator Campaigns",
    description:
      "A three-sided marketplace connecting brand owners, Knowledge Persons, and micro-influencers for structured campaign execution.",
    url: siteUrl,
    siteName: "Campaign Marketplace",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Marketplace | Pitch-Led Creator Campaigns",
    description:
      "A three-sided marketplace connecting brand owners, Knowledge Persons, and micro-influencers for structured campaign execution.",
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
