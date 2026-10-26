import type { Metadata } from "next";
import { Panel } from "@/components/dashboard/panel";
import { PublicShell } from "@/components/marketing/public-shell";
import { pricingPlans } from "@/data/mock";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "Transparent marketplace monetization for business owners, Knowledge Persons, and micro-influencer campaign teams.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <PublicShell>
      <section className="card-border bg-surface rounded-[2rem] px-6 py-8 md:px-8">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">Pricing</div>
        <h1 className="display-font mt-2 text-5xl tracking-[-0.05em] md:text-6xl">Monetization designed for real campaigns, not vanity access.</h1>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {pricingPlans.map((plan) => (
          <Panel key={plan.name} eyebrow="Plan" title={plan.name}>
            <div className="rounded-full bg-[rgba(217,93,57,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)] inline-block">{plan.price}</div>
            <p className="mt-4 text-sm leading-6 text-[rgba(98,87,72,0.95)]">{plan.summary}</p>
            <div className="mt-4 grid gap-3">
              {plan.bullets.map((bullet) => (
                <div key={bullet} className="rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-3 text-sm">{bullet}</div>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </PublicShell>
  );
}
