import type { Metadata } from "next";
import Link from "next/link";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Panel } from "@/components/dashboard/panel";
import { StatGrid } from "@/components/dashboard/stat-grid";
import { Reveal } from "@/components/shared/reveal";
import { adminMetrics, roleNav } from "@/data/mock";

// Private dashboard route: must not be indexed by search engines
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <DashboardShell
      role="admin"
      title="Operations control room"
      subtitle="The MVP stays healthy through active trust, payment, dispute, and quality operations."
      nav={roleNav.admin}
    >
      <Reveal>
        <StatGrid items={adminMetrics} />
      </Reveal>
      <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <Panel eyebrow="Admin actions" title="Critical flows to show in a pitch">
          <div className="grid gap-3">
            {[
              ["Open dispute queue", "/admin/disputes"],
              ["Inspect shared workspace", "/workspace"],
              ["Return to public site", "/"]
            ].map(([label, href]) => (
              <Link key={label} href={href} className="rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-3 text-sm font-semibold">
                {label}
              </Link>
            ))}
          </div>
        </Panel>
        <Panel eyebrow="Moderation" title="Managed marketplace essentials">
          <div className="grid gap-3 text-sm text-[rgba(98,87,72,0.95)]">
            {[
              "Approve or reject early KP applications",
              "Monitor payout holds and manual release queue",
              "Review campaign timelines when issues arise",
              "Track rating abuse or repeated complaints"
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[var(--ink)] px-4 py-3 text-white/85">{item}</div>
            ))}
          </div>
        </Panel>
      </div>
    </DashboardShell>
  );
}
