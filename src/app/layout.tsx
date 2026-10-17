import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaign-marketplace.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace | Hyperlocal Influencer & Strategy Campaigns",
    template: "%s | Campaign Marketplace",
  },
  description:
    "A three-sided campaign marketplace connecting business owners, Knowledge Persons (campaign strategists), and micro-influencers across India.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Campaign Marketplace",
    title: "Campaign Marketplace | Hyperlocal Influencer & Strategy Campaigns",
    description:
      "Connect business owners, niche campaign strategists, and micro-influencers for structured marketing projects in India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Marketplace | Hyperlocal Influencer & Strategy Campaigns",
    description:
      "Connect business owners, niche campaign strategists, and micro-influencers for structured marketing projects in India.",
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
