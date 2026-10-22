"use client";

import { useState } from "react";

const steps = ["Business", "Audience", "Budget", "Review"];

export function CreateCampaignWizard() {
  const [step, setStep] = useState(0);

  return (
    <div className="grid gap-6 xl:grid-cols-[0.7fr_1.3fr]">
      <aside className="card-border bg-surface rounded-[1.8rem] p-5">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">Campaign setup</div>
        <div className="mt-5 grid gap-3">
          {steps.map((item, index) => (
            <button
              key={item}
              type="button"
              aria-current={step === index ? "step" : undefined}
              onClick={() => setStep(index)}
              className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] ${
                step === index ? "bg-[var(--ink)] text-white" : "border border-[var(--line)] bg-white/70"
              }`}
            >
              {index + 1}. {item}
            </button>
          ))}
        </div>
      </aside>
      <section className="card-border bg-surface rounded-[1.8rem] p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">Step {step + 1}</div>
            <h2 className="display-font mt-2 text-3xl tracking-[-0.04em]">{steps[step]}</h2>
          </div>
          <div className="rounded-full bg-[rgba(217,93,57,0.1)] px-4 py-2 text-sm font-semibold text-[var(--accent-strong)]">
            Demo form
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium">
            Campaign title
            <input className="rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)]" defaultValue="Cafe Mysa brunch relaunch" />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Business category
            <select className="rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)]">
              <option>Food and Beverage</option>
              <option>Beauty</option>
              <option>Education</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Target geography
            <input className="rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)]" defaultValue="Ahmedabad" />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Success metric
            <input className="rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)]" defaultValue="Coupon redemptions + DM inquiries" />
          </label>
          <label className="grid gap-2 text-sm font-medium md:col-span-2">
            Brief notes
            <textarea className="min-h-32 rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)]" defaultValue="Weekend brunch positioning, premium but approachable tone, focus on local discovery and code-based visits." />
          </label>
        </div>
        <div className="mt-6 flex flex-wrap justify-between gap-3">
          <button
            type="button"
            onClick={() => setStep((current) => Math.max(0, current - 1))}
            className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)]"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => setStep((current) => Math.min(steps.length - 1, current + 1))}
            className="rounded-full bg-[var(--accent-strong)] px-5 py-2.5 text-sm font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)]"
          >
            {step === steps.length - 1 ? "Publish demo brief" : "Next step"}
          </button>
        </div>
      </section>
    </div>
  );
}
