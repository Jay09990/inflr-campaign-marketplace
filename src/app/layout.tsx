import type { Metadata } from "next";
import "./globals.css";

const baseUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://campaign-marketplace.vercel.app"
);

export const metadata: Metadata = {
  metadataBase: baseUrl,
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
      <body>{children}</body>
    </html>
  );
}
