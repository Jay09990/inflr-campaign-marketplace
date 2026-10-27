import type { Metadata } from "next";
import Link from "next/link";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Panel } from "@/components/dashboard/panel";
import { StatGrid } from "@/components/dashboard/stat-grid";
import { Reveal } from "@/components/shared/reveal";
import { ownerMetrics, roleNav } from "@/data/mock";

// Private dashboard route: must not be indexed by search engines
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function OwnerPage() {
  return (
    <DashboardShell
      role="owner"
      title="Owner dashboard"
      subtitle="Designed to keep owners focused on campaign outcomes, not creator coordination overhead."
      nav={roleNav.owner}
    >
      <Reveal>
        <StatGrid items={ownerMetrics} />
      </Reveal>
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Reveal delay={0.08}>
          <Panel eyebrow="Next actions" title="What the owner needs to do now">
            <div className="grid gap-3">
              {[
                ["Review 3 new pitches", "/owner/campaigns"],
                ["Open campaign creation flow", "/owner/create-campaign"],
                ["Check active campaign workspace", "/workspace"]
              ].map(([label, href]) => (
                <Link key={label} href={href} className="rounded-2xl border border-[var(--line)] bg-white/65 px-4 py-3 text-sm font-semibold">
                  {label}
                </Link>
              ))}
            </div>
          </Panel>
        </Reveal>
        <Reveal delay={0.16}>
          <Panel eyebrow="Owner promise" title="This side of the product should feel low-chaos">
            <div className="space-y-3">
              {[
                "Strategy comparison before any team is locked",
                "One selected KP owns campaign coordination",
                "Payment and delivery state stay visible",
                "Clear closure through ratings and payout sign-off"
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[var(--ink)] px-4 py-3 text-sm text-white/85">{item}</div>
              ))}
            </div>
          </Panel>
        </Reveal>
      </div>
    </DashboardShell>
  );
}
