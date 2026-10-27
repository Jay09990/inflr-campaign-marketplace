"use client";

import { memo, useState } from "react";

// Performance optimization: Static tab data and tab keys extracted outside component render cycle
// to prevent re-creating object key arrays on every state change or parent re-render.
const tabs = {
  Overview: ["Campaign KPI: coupon visits + DMs", "Owner brief locked", "KP strategy approved"],
  Team: ["Neha Shah - KP", "Riya Patel - food reels", "Jainil Desai - neighborhood discoverability"],
  Tasks: ["Shoot brunch hero reel", "Publish story set with offer code", "Submit screenshot proof"],
  Deliverables: ["2 reels approved", "1 story pack pending", "Owner feedback applied"],
  Chat: ["Draft captions are locked.", "Need final export by tonight.", "Owner wants stronger coupon CTA."],
  Payments: ["Owner payment confirmed", "KP payout queued", "Influencer payout release after sign-off"]
} as const;

type TabKey = keyof typeof tabs;
const TAB_KEYS = Object.keys(tabs) as TabKey[];

// Performance optimization: Wrapped in React.memo to prevent unnecessary re-renders
// when parent container updates state or props.
export const WorkspaceTabs = memo(function WorkspaceTabs() {
  const [active, setActive] = useState<TabKey>("Overview");

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
              onClick={() => setActive(tab)}
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
});
