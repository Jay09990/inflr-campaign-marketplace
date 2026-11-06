import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace | Outcome-Driven Influencer Marketing Platform",
    template: "%s | Campaign Marketplace",
  },
  description:
    "Connect brand owners, strategic Knowledge Persons, and creators into accountable campaign squads for Indian regional and Tier 2/3 markets.",
  openGraph: {
    siteName: "Campaign Marketplace",
    type: "website",
    locale: "en_IN",
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
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
