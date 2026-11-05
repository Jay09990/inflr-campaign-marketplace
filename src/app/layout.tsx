import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace | Outcomes Over Creator Chaos",
    template: "%s | Campaign Marketplace",
  },
  description:
    "A three-sided campaign marketplace connecting business owners, Knowledge Persons, and creator squads to deliver targeted outcomes.",
  openGraph: {
    title: "Campaign Marketplace | Outcomes Over Creator Chaos",
    description:
      "A three-sided campaign marketplace connecting business owners, Knowledge Persons, and creator squads to deliver targeted outcomes.",
    siteName: "Campaign Marketplace",
    locale: "en_IN",
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
