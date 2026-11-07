"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import type { NavItem } from "@/data/mock";

type DashboardShellProps = {
  role: string;
  title: string;
  subtitle: string;
  nav: NavItem[];
  children: ReactNode;
};

export function DashboardShell({ role, title, subtitle, nav, children }: DashboardShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-transparent px-4 py-4 md:px-6">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-[1600px] gap-4 lg:grid-cols-[280px_1fr]">
        <aside className="bg-soft card-border rounded-[2rem] p-5">
          <div className="display-font text-2xl tracking-[-0.04em]">Campaign Marketplace</div>
          <div className="mt-2 text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]">{role} cockpit</div>
          <nav className="mt-8 space-y-2">
            {nav.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[var(--ink)] text-white"
                      : "border border-transparent text-[rgba(98,87,72,0.95)] hover:border-[var(--line)] hover:bg-white/60 hover:text-[var(--ink)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 rounded-[1.4rem] bg-[var(--ink)] p-4 text-white">
            <div className="text-xs uppercase tracking-[0.22em] text-white/70">System note</div>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Every screen in this MVP is wired around campaign state, trust, and payout visibility.
            </p>
          </div>
        </aside>
        <main id="main-content" tabIndex={-1} className="outline-none space-y-4">
          <header className="card-border bg-surface rounded-[2rem] px-6 py-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.26em] text-[var(--accent-strong)]">{role}</div>
                <h1 className="display-font mt-2 text-4xl tracking-[-0.05em] md:text-5xl">{title}</h1>
                <p className="mt-3 max-w-3xl text-base leading-7 text-[rgba(98,87,72,0.95)]">{subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="rounded-full border border-[var(--line)] bg-white/70 px-5 py-2.5 text-sm font-semibold"
                >
                  Back to Home
                </Link>
                <Link
                  href="/workspace"
                  className="rounded-full bg-[var(--accent-strong)] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Open Workspace
                </Link>
              </div>
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
