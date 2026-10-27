import type { Metadata } from "next";
import Link from "next/link";
import { PublicShell } from "@/components/marketing/public-shell";

// Auth page: must not be indexed by search engines
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <PublicShell>
      <section className="mx-auto max-w-2xl card-border bg-surface rounded-[2rem] px-6 py-8 md:px-8">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">Log in</div>
        <h1 className="display-font mt-2 text-4xl tracking-[-0.05em]">Access the product demo.</h1>
        <div className="mt-6 grid gap-4">
          <input className="rounded-2xl border border-[var(--line)] px-4 py-3" placeholder="Email" />
          <input type="password" className="rounded-2xl border border-[var(--line)] px-4 py-3" placeholder="Password" />
          <button type="button" className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white">Log in</button>
        </div>
        <div className="mt-4 flex flex-wrap justify-between gap-3 text-sm text-[rgba(98,87,72,0.95)]">
          <Link href="/forgot-password">Forgot password?</Link>
          <Link href="/signup">Need access?</Link>
        </div>
      </section>
    </PublicShell>
  );
}
