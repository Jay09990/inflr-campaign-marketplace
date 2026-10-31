import type { Metadata } from "next";
﻿import Link from "next/link";
import { Panel } from "@/components/dashboard/panel";
import { Hero } from "@/components/marketing/hero";
import { PublicShell } from "@/components/marketing/public-shell";
import { Reveal } from "@/components/shared/reveal";
import { faqItems, pricingPlans, trustPillars } from "@/data/mock";

export const metadata: Metadata = {
  title: "Campaign Marketplace | Outcome-Driven Creator Platform",
  description:
    "Connect local brands with Knowledge Persons and creator squads. Plan briefs, pitch strategies, and run outcome-driven campaigns without agency bloat.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Campaign Marketplace | Outcome-Driven Creator Platform",
    description:
      "Connect local brands with Knowledge Persons and creator squads. Plan briefs, pitch strategies, and run outcome-driven campaigns without agency bloat.",
    url: "/",
    siteName: "Campaign Marketplace",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaign Marketplace | Outcome-Driven Creator Platform",
    description:
      "Connect local brands with Knowledge Persons and creator squads. Plan briefs, pitch strategies, and run outcome-driven campaigns without agency bloat.",
  },
};

export default function HomePage() {
  return (
    <PublicShell>
      <Hero />
      <section id="how-it-works" className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Panel eyebrow="Core loop" title="A campaign moves through one controlled operating system.">
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Owner publishes brief with clear KPI and budget",
                "KPs pitch strategy and team logic",
                "Owner selects the strongest idea",
                "KP assembles influencer micro-team",
                "Execution runs inside shared workspace",
                "Ratings and payouts close the loop"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-[var(--line)] bg-white/70 px-4 py-3 text-sm text-[rgba(98,87,72,0.95)]">
                  {item}
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>
        <Reveal delay={0.08}>
          <Panel eyebrow="Pitch deck value" title="What this frontend already demonstrates">
            <div className="grid gap-3 text-sm text-[rgba(98,87,72,0.95)]">
              {[
                "Public marketing website",
                "Auth and onboarding entry points",
                "Owner, KP, influencer, and admin cockpits",
                "Campaign creation flow and workspace UX",
                "Clickable routes for stakeholder walkthroughs"
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[var(--ink)] px-4 py-3 text-white/85">
                  {item}
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>
      </section>
      <section className="grid gap-4 lg:grid-cols-3">
        {trustPillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={0.05 * index}>
            <Panel eyebrow="Trust" title={pillar.title}>
              <p className="text-sm leading-6 text-[rgba(98,87,72,0.95)]">{pillar.text}</p>
            </Panel>
          </Reveal>
        ))}
      </section>
      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <Reveal>
          <Panel eyebrow="Pricing" title="Simple early-stage monetization">
            <div className="grid gap-3">
              {pricingPlans.map((plan) => (
                <div key={plan.name} className="rounded-[1.6rem] border border-[var(--line)] bg-white/75 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="display-font text-2xl tracking-[-0.04em]">{plan.name}</h3>
                      <p className="mt-2 text-sm text-[rgba(98,87,72,0.95)]">{plan.summary}</p>
                    </div>
                    <span className="rounded-full bg-[rgba(217,93,57,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                      {plan.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>
        <Reveal delay={0.08}>
          <Panel eyebrow="FAQ" title="Questions a pitch audience will ask">
            <div className="grid gap-3">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-[1.6rem] border border-[var(--line)] bg-white/75 p-5">
                  <h3 className="text-base font-semibold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-[rgba(98,87,72,0.95)]">{item.answer}</p>
                </div>
              ))}
            </div>
          </Panel>
        </Reveal>
      </section>
      <section className="card-border bg-surface rounded-[2rem] px-6 py-8 md:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">Explore the product</div>
            <h2 className="display-font mt-2 text-4xl tracking-[-0.05em]">Walk every side of the marketplace.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/owner" className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white">Owner app</Link>
            <Link href="/kp" className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold">KP app</Link>
            <Link href="/influencer" className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold">Influencer app</Link>
            <Link href="/admin" className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold">Admin ops</Link>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
