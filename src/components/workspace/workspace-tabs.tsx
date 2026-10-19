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

export function WorkspaceTabs() {
  const [active, setActive] = useState<keyof typeof tabs>("Overview");

  return (
    <div className="card-border bg-surface rounded-[1.8rem] p-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Workspace view options">
        {Object.keys(tabs).map((tab) => {
          const isSelected = active === tab;
          const tabId = `workspace-tab-${tab.toLowerCase()}`;
          const panelId = `workspace-panel-${tab.toLowerCase()}`;

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
        id={`workspace-panel-${active.toLowerCase()}`}
        role="tabpanel"
        aria-labelledby={`workspace-tab-${active.toLowerCase()}`}
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
