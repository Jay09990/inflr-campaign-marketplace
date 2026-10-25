import type { Metadata } from "next";
import { PublicShell } from "@/components/marketing/public-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for Campaign Marketplace regarding data processing, platform consent, and privacy commitments.",
  alternates: {
    canonical: "/legal/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Campaign Marketplace",
    description:
      "Read the Privacy Policy for Campaign Marketplace regarding data processing, platform consent, and privacy commitments.",
    url: "/legal/privacy",
  },
  twitter: {
    title: "Privacy Policy | Campaign Marketplace",
    description:
      "Read the Privacy Policy for Campaign Marketplace regarding data processing, platform consent, and privacy commitments.",
  },
};

export default function PrivacyPage() {
  return (
    <PublicShell>
      <section className="card-border bg-surface rounded-[2rem] px-6 py-8 md:px-8">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">Legal</div>
        <h1 className="display-font mt-2 text-4xl tracking-[-0.05em]">Privacy Policy</h1>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-[rgba(98,87,72,0.95)]">
          <p>This pitch prototype does not collect live user data or connect to production services.</p>
          <p>In a real product, user profile information, campaign messages, payout status, and rating history would require secure storage and access controls.</p>
          <p>Any production launch would also require clear consent, retention, and deletion policies.</p>
        </div>
      </section>
    </PublicShell>
  );
}
