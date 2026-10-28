import type { Metadata } from "next";
import Link from "next/link";
import { Panel } from "@/components/dashboard/panel";
import { PublicShell } from "@/components/marketing/public-shell";

export const metadata: Metadata = {
  title: "For Micro-Influencers | Structured Campaign Briefs & Guaranteed Escrow",
  description:
    "Join campaign micro-teams matched by niche expertise. Receive clear deliverables, transparent deadlines, and timely payouts.",
  alternates: {
    canonical: "/for-influencers",
  },
  openGraph: {
    title: "For Micro-Influencers | Structured Campaign Briefs & Guaranteed Escrow",
    description:
      "Join campaign micro-teams matched by niche expertise. Receive clear deliverables, transparent deadlines, and timely payouts.",
    url: "/for-influencers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function InfluencersLandingPage() {
  return (
    <PublicShell>
      <section className="card-border bg-surface rounded-[2rem] px-6 py-8 md:px-8">
        <div className="max-w-4xl">
          <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">For Influencers</div>
          <h1 className="display-font mt-2 text-5xl tracking-[-0.05em] md:text-6xl">Get clearer briefs, tighter tasks, and payout visibility.</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[rgba(98,87,72,0.95)]">Influencers join campaigns through KPs, receive scoped deliverables, and can focus on execution instead of messy negotiation.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/influencer" className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white">Open influencer app</Link>
            <Link href="/influencer/invites" className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold">Review invites</Link>
          </div>
        </div>
      </section>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Structured participation", "Know exactly what you need to create, by when, and for how much."],
          ["Cleaner reviews", "Submit proof, receive revision requests, and close work without confusion."],
          ["Platform trust", "Track campaign status and payout release in one place."]
        ].map(([title, text]) => (
          <Panel key={title} eyebrow="Influencer value" title={title}>
            <p className="text-sm leading-6 text-[rgba(98,87,72,0.95)]">{text}</p>
          </Panel>
        ))}
      </div>
    </PublicShell>
  );
}
