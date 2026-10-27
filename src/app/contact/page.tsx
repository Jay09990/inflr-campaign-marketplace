import type { Metadata } from "next";
import { PublicShell } from "@/components/marketing/public-shell";

export const metadata: Metadata = {
  title: "Contact & Demo | Campaign Marketplace",
  description:
    "Get in touch with the Campaign Marketplace team for platform inquiries, stakeholder demos, and partnership walkthroughs.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PublicShell>
      <section className="card-border bg-surface rounded-[2rem] px-6 py-8 md:px-8">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">Contact</div>
        <h1 className="display-font mt-2 text-5xl tracking-[-0.05em] md:text-6xl">Use this frontend as a pitch walkthrough or stakeholder demo.</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.6rem] border border-[var(--line)] bg-white/80 p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-[var(--accent-strong)]">Demo contact</div>
            <p className="mt-3 text-sm leading-6 text-[rgba(98,87,72,0.95)]">hello@campaignmarketplace.demo</p>
            <p className="text-sm leading-6 text-[rgba(98,87,72,0.95)]">+91 90000 00000</p>
          </div>
          <form className="rounded-[1.6rem] border border-[var(--line)] bg-white/80 p-5">
            <div className="grid gap-4">
              <input className="rounded-2xl border border-[var(--line)] px-4 py-3" placeholder="Your name" />
              <input className="rounded-2xl border border-[var(--line)] px-4 py-3" placeholder="Email" />
              <textarea className="min-h-32 rounded-2xl border border-[var(--line)] px-4 py-3" placeholder="What do you want to discuss?" />
              <button type="button" className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white">Send inquiry</button>
            </div>
          </form>
        </div>
      </section>
    </PublicShell>
  );
}
