import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Campaign Marketplace | Micro-Agency Influencer Marketing Platform",
    template: "%s | Campaign Marketplace",
  },
  description:
    "Connect business owners with Knowledge Persons and micro-influencer teams to execute performance-based campaigns in India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Campaign Marketplace | Micro-Agency Influencer Marketing Platform",
    description:
      "Connect business owners with Knowledge Persons and micro-influencer teams to execute performance-based campaigns in India.",
    url: "/",
    siteName: "Campaign Marketplace",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Marketplace | Micro-Agency Influencer Marketing Platform",
    description:
      "Connect business owners with Knowledge Persons and micro-influencer teams to execute performance-based campaigns in India.",
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
