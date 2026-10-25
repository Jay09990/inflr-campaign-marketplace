import type { Metadata } from "next";
import { PublicShell } from "@/components/marketing/public-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for Campaign Marketplace governing platform usage, campaign terms, and party obligations.",
  alternates: {
    canonical: "/legal/terms",
  },
  openGraph: {
    title: "Terms of Service | Campaign Marketplace",
    description:
      "Read the Terms of Service for Campaign Marketplace governing platform usage, campaign terms, and party obligations.",
    url: "/legal/terms",
  },
  twitter: {
    title: "Terms of Service | Campaign Marketplace",
    description:
      "Read the Terms of Service for Campaign Marketplace governing platform usage, campaign terms, and party obligations.",
  },
};

export default function TermsPage() {
  return (
    <PublicShell>
      <section className="card-border bg-surface rounded-[2rem] px-6 py-8 md:px-8">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">Legal</div>
        <h1 className="display-font mt-2 text-4xl tracking-[-0.05em]">Terms of Service</h1>
        <div className="mt-6 grid gap-4 text-sm leading-7 text-[rgba(98,87,72,0.95)]">
          <p>This frontend demo presents a fictional campaign marketplace product concept for pitching and product exploration.</p>
          <p>Campaign pricing, payout flows, and dispute handling shown here are illustrative and not yet legally binding system behavior.</p>
          <p>Any live deployment would require formal operating terms, payment conditions, and platform liability language.</p>
        </div>
      </section>
    </PublicShell>
  );
}
