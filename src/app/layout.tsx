import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace | Managed Influencer Marketing Platform",
    template: "%s | Campaign Marketplace",
  },
  description:
    "A managed campaign marketplace connecting brand owners, Knowledge Persons (KPs), and influencer micro-teams in one controlled operating system.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Campaign Marketplace | Managed Influencer Marketing Platform",
    description:
      "A managed campaign marketplace connecting brand owners, Knowledge Persons (KPs), and influencer micro-teams.",
    url: "./",
    siteName: "Campaign Marketplace",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Marketplace | Managed Influencer Marketing Platform",
    description:
      "A managed campaign marketplace connecting brand owners, Knowledge Persons (KPs), and influencer micro-teams.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Campaign Marketplace",
  url: siteUrl,
  description:
    "Managed campaign marketplace connecting brand owners, Knowledge Persons (KPs), and influencer micro-teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
