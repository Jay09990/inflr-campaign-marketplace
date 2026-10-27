import type { Metadata } from "next";
import { PublicShell } from "@/components/marketing/public-shell";

// Auth page: must not be indexed by search engines
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function ForgotPasswordPage() {
  return (
    <PublicShell>
      <section className="mx-auto max-w-xl card-border bg-surface rounded-[2rem] px-6 py-8 md:px-8">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">Reset access</div>
        <h1 className="display-font mt-2 text-4xl tracking-[-0.05em]">Password reset screen for the demo flow.</h1>
        <div className="mt-6 grid gap-4">
          <input className="rounded-2xl border border-[var(--line)] px-4 py-3" placeholder="Email" />
          <button type="button" className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white">Send reset link</button>
        </div>
      </section>
    </PublicShell>
  );
}
