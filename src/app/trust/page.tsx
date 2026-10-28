import type { Metadata } from "next";
import { Panel } from "@/components/dashboard/panel";
import { PublicShell } from "@/components/marketing/public-shell";
import { trustPillars } from "@/data/mock";

export const metadata: Metadata = {
  title: "Trust & Safety | Escrow & Accountability",
  description:
    "Discover how Campaign Marketplace safeguards campaigns with payment escrow, rating systems, and admin dispute moderation.",
  alternates: {
    canonical: "/trust",
  },
  openGraph: {
    title: "Trust & Safety | Escrow & Accountability",
    description:
      "Discover how Campaign Marketplace safeguards campaigns with payment escrow, rating systems, and admin dispute moderation.",
    url: "/trust",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function TrustPage() {
  return (
    <PublicShell>
      <section className="card-border bg-surface rounded-[2rem] px-6 py-8 md:px-8">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">Trust and Safety</div>
        <h1 className="display-font mt-2 text-5xl tracking-[-0.05em] md:text-6xl">The product wins only if all three sides trust the workflow.</h1>
      </section>
      <div className="grid gap-4 md:grid-cols-3">
        {trustPillars.map((pillar) => (
          <Panel key={pillar.title} eyebrow="Pillar" title={pillar.title}>
            <p className="text-sm leading-6 text-[rgba(98,87,72,0.95)]">{pillar.text}</p>
          </Panel>
        ))}
      </div>
      <Panel eyebrow="Operations" title="How the MVP stays stable">
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "Manual approval of early KPs and influencers",
            "Visible payment and payout state",
            "Role-based ratings after campaign completion",
            "Admin-led dispute review and intervention"
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-3 text-sm">{item}</div>
          ))}
        </div>
      </Panel>
    </PublicShell>
  );
}
