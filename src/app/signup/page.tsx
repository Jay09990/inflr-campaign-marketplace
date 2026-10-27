import type { Metadata } from "next";
import { PublicShell } from "@/components/marketing/public-shell";

// Auth page: must not be indexed by search engines
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  return (
    <PublicShell>
      <section className="mx-auto max-w-3xl card-border bg-surface rounded-[2rem] px-6 py-8 md:px-8">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">Request access</div>
        <h1 className="display-font mt-2 text-4xl tracking-[-0.05em]">Create a role-specific profile for the pitch demo.</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["Owner", "Knowledge Person", "Influencer"].map((role) => (
            <button key={role} type="button" className="rounded-[1.6rem] border border-[var(--line)] bg-white/80 p-5 text-left">
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-strong)]">Role</div>
              <div className="display-font mt-3 text-2xl tracking-[-0.04em]">{role}</div>
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-[var(--line)] px-4 py-3" placeholder="Full name" />
          <input className="rounded-2xl border border-[var(--line)] px-4 py-3" placeholder="Email" />
          <input className="rounded-2xl border border-[var(--line)] px-4 py-3" placeholder="City" />
          <input className="rounded-2xl border border-[var(--line)] px-4 py-3" placeholder="Primary niche" />
          <textarea className="min-h-32 rounded-2xl border border-[var(--line)] px-4 py-3 md:col-span-2" placeholder="What would you use the platform for?" />
        </div>
        <button type="button" className="mt-6 rounded-full bg-[var(--accent-strong)] px-5 py-2.5 text-sm font-semibold text-white">Create demo account</button>
      </section>
    </PublicShell>
  );
}
