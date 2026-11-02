import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace | Influencer Campaign Orchestration Platform",
    template: "%s | Campaign Marketplace",
  },
  description:
    "A three-sided marketplace where owners buy outcomes, Knowledge Persons pitch strategy, and influencer squads execute verified campaigns.",
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
