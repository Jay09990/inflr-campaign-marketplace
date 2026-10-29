import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace - Connect Business Owners, Strategy KPs & Influencers",
    template: "%s | Campaign Marketplace",
  },
  description:
    "Controlled operating system for influencer marketing campaigns. Connect business owners, strategic Knowledge Persons (KPs), and creators in one place.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Campaign Marketplace - Influencer Marketing Operating System",
    description:
      "Controlled operating system for influencer marketing campaigns connecting owners, strategic KPs, and creators.",
    url: "/",
    siteName: "Campaign Marketplace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Marketplace",
    description: "Operating system for influencer marketing campaigns.",
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
