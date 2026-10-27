import type { Metadata } from "next";
import Link from "next/link";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Panel } from "@/components/dashboard/panel";
import { StatGrid } from "@/components/dashboard/stat-grid";
import { Reveal } from "@/components/shared/reveal";
import { influencerMetrics, roleNav } from "@/data/mock";

// Private dashboard route: must not be indexed by search engines
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function InfluencerPage() {
  return (
    <DashboardShell
      role="influencer"
      title="Influencer workboard"
      subtitle="Built to keep creator participation clear: invites, deadlines, proof submission, and payout visibility."
      nav={roleNav.influencer}
    >
      <Reveal>
        <StatGrid items={influencerMetrics} />
      </Reveal>
      <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <Panel eyebrow="Fast actions" title="Open the most important flows">
          <div className="grid gap-3">
            {[
              ["Review campaign invites", "/influencer/invites"],
              ["Open active workspace", "/workspace"],
              ["Check deliverables tab", "/workspace#deliverables"]
            ].map(([label, href]) => (
              <Link key={label} href={href} className="rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-3 text-sm font-semibold">
                {label}
              </Link>
            ))}
          </div>
        </Panel>
        <Panel eyebrow="Creator experience" title="What should feel polished in a pitch">
          <div className="grid gap-3 text-sm text-[rgba(98,87,72,0.95)]">
            {[
              "Invite-first entry into campaigns",
              "Clear task list and deadlines",
              "Simple proof submission and review loop",
              "Visible earnings and payout status"
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[rgba(217,93,57,0.12)] px-4 py-3">{item}</div>
            ))}
          </div>
        </Panel>
      </div>
    </DashboardShell>
  );
}
