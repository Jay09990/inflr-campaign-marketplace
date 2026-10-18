"use client";

import { useState } from "react";

const tabs = {
  Overview: ["Campaign KPI: coupon visits + DMs", "Owner brief locked", "KP strategy approved"],
  Team: ["Neha Shah - KP", "Riya Patel - food reels", "Jainil Desai - neighborhood discoverability"],
  Tasks: ["Shoot brunch hero reel", "Publish story set with offer code", "Submit screenshot proof"],
  Deliverables: ["2 reels approved", "1 story pack pending", "Owner feedback applied"],
  Chat: ["Draft captions are locked.", "Need final export by tonight.", "Owner wants stronger coupon CTA."],
  Payments: ["Owner payment confirmed", "KP payout queued", "Influencer payout release after sign-off"]
};

// Perf optimization: Hoist static array of tab keys outside component scope to avoid array allocations on re-render
const TAB_NAMES = Object.keys(tabs) as (keyof typeof tabs)[];

export function WorkspaceTabs() {
  const [active, setActive] = useState<keyof typeof tabs>("Overview");

  return (
    <div className="card-border bg-surface rounded-[1.8rem] p-6">
      <div className="flex flex-wrap gap-2">
        {TAB_NAMES.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab as keyof typeof tabs)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === tab ? "bg-[var(--ink)] text-white" : "border border-[var(--line)] bg-white/80"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-3">
        {tabs[active].map((item) => (
          <div key={item} className="rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-3 text-sm text-[rgba(98,87,72,0.95)]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
