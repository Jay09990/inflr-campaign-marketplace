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

// Hoist tab keys constant outside component render loop to prevent re-allocating
// new Object.keys array on every state change / tab click.
const TAB_KEYS = Object.keys(tabs) as Array<keyof typeof tabs>;

export function WorkspaceTabs() {
  const [active, setActive] = useState<keyof typeof tabs>("Overview");

  return (
    <div className="card-border bg-surface rounded-[1.8rem] p-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Workspace sections">
        {TAB_KEYS.map((tab) => {
          const tabId = `tab-${tab.toLowerCase()}`;
          const panelId = `panel-${tab.toLowerCase()}`;
          const isSelected = active === tab;

          return (
            <button
              key={tab}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId}
              onClick={() => setActive(tab as keyof typeof tabs)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] ${
                isSelected ? "bg-[var(--ink)] text-white" : "border border-[var(--line)] bg-white/80 hover:bg-white"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div
        id={`panel-${active.toLowerCase()}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.toLowerCase()}`}
        className="mt-6 grid gap-3"
      >
        {tabs[active].map((item) => (
          <div key={item} className="rounded-2xl border border-[var(--line)] bg-white/75 px-4 py-3 text-sm text-[rgba(98,87,72,0.95)]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
