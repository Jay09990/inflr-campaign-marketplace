import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace | Outcomes, Not Creator Chaos",
    template: "%s | Campaign Marketplace",
  },
  description:
    "A three-sided marketplace where business owners post briefs, Knowledge Persons pitch strategy, and influencer squads execute verified campaigns.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Campaign Marketplace | Outcomes, Not Creator Chaos",
    description:
      "A three-sided marketplace connecting business owners, Knowledge Persons, and creator squads to execute pitch-led campaigns.",
    url: siteUrl,
    siteName: "Campaign Marketplace",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Marketplace | Outcomes, Not Creator Chaos",
    description:
      "A three-sided marketplace connecting business owners, Knowledge Persons, and creator squads to execute pitch-led campaigns.",
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
