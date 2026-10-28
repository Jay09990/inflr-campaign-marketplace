import type { Metadata } from "next";
import Link from "next/link";
import { Panel } from "@/components/dashboard/panel";
import { PublicShell } from "@/components/marketing/public-shell";

export const metadata: Metadata = {
  title: "For Knowledge Persons | Lead Influencer Campaign Strategy",
  description:
    "Turn niche understanding into campaign leadership. Pitch strategies to business owners, assemble micro-influencer teams, and earn per project.",
  alternates: {
    canonical: "/for-kps",
  },
  openGraph: {
    title: "For Knowledge Persons | Lead Influencer Campaign Strategy",
    description:
      "Turn niche understanding into campaign leadership. Pitch strategies to business owners, assemble micro-influencer teams, and earn per project.",
    url: "/for-kps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function KpsLandingPage() {
  return (
    <PublicShell>
      <section className="card-border bg-surface rounded-[2rem] px-6 py-8 md:px-8">
        <div className="max-w-4xl">
          <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">For Knowledge Persons</div>
          <h1 className="display-font mt-2 text-5xl tracking-[-0.05em] md:text-6xl">Turn niche understanding into campaign leadership.</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[rgba(98,87,72,0.95)]">KPs are the strategic layer in this marketplace. They pitch, assemble creator teams, and operate delivery from one cockpit.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kp" className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white">Open KP cockpit</Link>
            <Link href="/kp/opportunities" className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold">Browse opportunities</Link>
          </div>
        </div>
      </section>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Pitch meritocracy", "Win campaigns by strategy quality, local insight, and execution confidence."],
          ["Team assembly", "Invite and manage influencers inside the platform instead of juggling chats."],
          ["Data flywheel", "Every completed project becomes structured campaign intelligence."]
        ].map(([title, text]) => (
          <Panel key={title} eyebrow="KP value" title={title}>
            <p className="text-sm leading-6 text-[rgba(98,87,72,0.95)]">{text}</p>
          </Panel>
        ))}
      </div>
    </PublicShell>
  );
}
