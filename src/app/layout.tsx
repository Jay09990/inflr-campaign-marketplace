import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Campaign Marketplace | Influencer & Strategy Operating System",
    template: "%s | Campaign Marketplace",
  },
  description:
    "Connect business owners, Knowledge Persons, and influencers to launch, manage, and track creator marketing campaigns in one platform.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Campaign Marketplace | Influencer & Strategy Operating System",
    description:
      "Connect business owners, Knowledge Persons, and influencers to launch, manage, and track creator marketing campaigns in one platform.",
    url: siteUrl,
    siteName: "Campaign Marketplace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Marketplace | Influencer & Strategy Operating System",
    description:
      "Connect business owners, Knowledge Persons, and influencers to launch, manage, and track creator marketing campaigns in one platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Campaign Marketplace",
        "description": "Platform connecting business owners, strategy leads, and influencers."
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Campaign Marketplace",
        "url": siteUrl
      }
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
