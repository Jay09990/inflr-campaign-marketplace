import type { Metadata } from "next";
import Link from "next/link";
import { Panel } from "@/components/dashboard/panel";
import { PublicShell } from "@/components/marketing/public-shell";

export const metadata: Metadata = {
  title: "For Brand Owners",
  description:
    "Buy campaign outcomes without creator chaos. Publish briefs, select vetted KP pitches, and track campaign execution from one dashboard.",
  alternates: {
    canonical: "/for-owners",
  },
  openGraph: {
    title: "For Brand Owners | Campaign Marketplace",
    description:
      "Buy campaign outcomes without creator chaos. Publish briefs, select vetted KP pitches, and track campaign execution from one dashboard.",
    url: "/for-owners",
  },
  twitter: {
    title: "For Brand Owners | Campaign Marketplace",
    description:
      "Buy campaign outcomes without creator chaos. Publish briefs, select vetted KP pitches, and track campaign execution from one dashboard.",
  },
};

export default function OwnersLandingPage() {
  return (
    <PublicShell>
      <section className="card-border bg-surface rounded-[2rem] px-6 py-8 md:px-8">
        <div className="max-w-4xl">
          <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">For Owners</div>
          <h1 className="display-font mt-2 text-5xl tracking-[-0.05em] md:text-6xl">Buy campaigns without running creator chaos yourself.</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[rgba(98,87,72,0.95)]">Owners publish a brief, compare strategic pitches, lock one team, and monitor progress from a clean campaign dashboard.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/owner" className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white">Open owner dashboard</Link>
            <Link href="/owner/create-campaign" className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold">Try campaign form</Link>
          </div>
        </div>
      </section>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Brief-first workflow", "Define objective, geography, deliverables, and budget before supply enters."],
          ["Idea-based selection", "Choose the strongest pitch instead of guessing from follower counts."],
          ["Low management load", "The KP owns coordination so the business can focus on outcomes."]
        ].map(([title, text]) => (
          <Panel key={title} eyebrow="Owner value" title={title}>
            <p className="text-sm leading-6 text-[rgba(98,87,72,0.95)]">{text}</p>
          </Panel>
        ))}
      </div>
    </PublicShell>
  );
}
