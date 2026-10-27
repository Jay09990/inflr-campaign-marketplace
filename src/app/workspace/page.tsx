import type { Metadata } from "next";
import Link from "next/link";
import { Panel } from "@/components/dashboard/panel";
import { Reveal } from "@/components/shared/reveal";
import { WorkspaceTabs } from "@/components/workspace/workspace-tabs";
import { workspaceTimeline } from "@/data/mock";

// Private workspace route: must not be indexed by search engines
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function WorkspacePage() {
  return (
    <main className="min-h-screen px-4 py-4 md:px-6">
      <div className="mx-auto max-w-[1600px] space-y-4">
        <Reveal>
          <section className="card-border bg-surface relative overflow-hidden rounded-[2rem] px-6 py-8 md:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(49,81,67,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(217,93,57,0.18),transparent_30%)]" />
            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-[var(--accent-strong)]">Shared workspace</div>
                <h1 className="display-font mt-2 text-4xl tracking-[-0.05em] md:text-6xl">Cafe Mysa brunch campaign</h1>
                <p className="mt-3 max-w-3xl text-base leading-7 text-[rgba(98,87,72,0.95)]">
                  A single campaign room where the owner, selected KP, and creator squad coordinate delivery without fragmenting into off-platform chaos.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/" className="rounded-full border border-[var(--line)] bg-white/75 px-5 py-2.5 text-sm font-semibold">Home</Link>
                <Link href="/owner" className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white">Owner View</Link>
              </div>
            </div>
          </section>
        </Reveal>
        <div className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
          <Reveal delay={0.08}>
            <Panel eyebrow="Timeline" title="Campaign state and milestones">
              <div className="space-y-4">
                {workspaceTimeline.map((item, index) => (
                  <div key={item.title} className="relative rounded-[1.5rem] border border-[var(--line)] bg-white/70 p-4">
                    <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink)] text-xs font-bold text-white">{index + 1}</div>
                    <div className="pl-12">
                      <h2 className="display-font text-2xl tracking-[-0.04em]">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-[rgba(98,87,72,0.95)]">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </Reveal>
          <div className="grid gap-4">
            <WorkspaceTabs />
            <Reveal delay={0.18}>
              <Panel eyebrow="Live room" title="Conversation and proof">
                <div className="grid gap-3">
                  {[
                    ["Neha Shah", "Draft captions are locked. Waiting on final reel export from Riya."],
                    ["Cafe Mysa", "Please keep the coupon mention stronger in the first 5 seconds."],
                    ["Riya Patel", "Updated link shared. Added opening shot of the brunch platter."]
                  ].map(([speaker, message]) => (
                    <div key={speaker + message} className="rounded-[1.5rem] border border-[var(--line)] bg-white/75 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent-strong)]">{speaker}</div>
                      <p className="mt-2 text-sm leading-6 text-[rgba(98,87,72,0.95)]">{message}</p>
                    </div>
                  ))}
                </div>
              </Panel>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
