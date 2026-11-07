import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://campaignmarketplace.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Campaign Marketplace MVP",
  description:
    "A frontend MVP for a campaign marketplace connecting owners, Knowledge Persons, and influencers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-[var(--ink)] px-4 py-2 text-sm font-semibold !text-white shadow-lg outline-none focus:ring-2 focus:ring-[var(--accent)]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
