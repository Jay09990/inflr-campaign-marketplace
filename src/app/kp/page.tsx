import type { Metadata } from "next";
import Link from "next/link";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Panel } from "@/components/dashboard/panel";
import { StatGrid } from "@/components/dashboard/stat-grid";
import { Reveal } from "@/components/shared/reveal";
import { kpMetrics, roleNav } from "@/data/mock";

// Private dashboard route: must not be indexed by search engines
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function KpPage() {
  return (
    <DashboardShell
      role="kp"
      title="Knowledge Person cockpit"
      subtitle="This is the strategy-and-operations layer: opportunity discovery, pitch quality, team assembly, and campaign control."
      nav={roleNav.kp}
    >
      <Reveal>
        <StatGrid items={kpMetrics} />
      </Reveal>
      <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <Panel eyebrow="Fast actions" title="Demo paths for a KP">
          <div className="grid gap-3">
            {[
              ["Browse campaign opportunities", "/kp/opportunities"],
              ["Review pitch pipeline", "/kp/pitches"],
              ["Jump into active workspace", "/workspace"]
            ].map(([label, href]) => (
              <Link key={label} href={href} className="rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-3 text-sm font-semibold">
                {label}
              </Link>
            ))}
          </div>
        </Panel>
        <Panel eyebrow="Role value" title="How KPs differentiate the platform">
          <div className="grid gap-3 text-sm text-[rgba(98,87,72,0.95)]">
            {[
              "Translate owner intent into campaign architecture",
              "Curate influencer combinations that fit the market",
              "Own delivery discipline inside one system",
              "Generate structured recipe data for future matching"
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[rgba(49,81,67,0.08)] px-4 py-3">{item}</div>
            ))}
          </div>
        </Panel>
      </div>
    </DashboardShell>
  );
}
