"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { publicNav } from "@/data/mock";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="card-border bg-surface sticky top-4 z-20 rounded-[2rem] px-5 py-4 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-5 focus:z-50 focus:rounded-full focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
      >
        Skip to content
      </a>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link href="/" className="display-font text-2xl tracking-[-0.05em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] rounded-lg">
            Campaign Marketplace
          </Link>
          <div className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--accent-strong)]">
            Pitch-ready frontend prototype
          </div>
        </div>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-2 text-sm text-[rgba(98,87,72,0.95)]">
          {publicNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] ${
                  active ? "bg-[var(--ink)] text-white" : "hover:bg-white/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-wrap gap-2">
          <Link href="/login" className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] hover:bg-white/70">
            Log in
          </Link>
          <Link href="/signup" className="rounded-full bg-[var(--accent-strong)] px-4 py-2 text-sm font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] hover:opacity-95">
            Request access
          </Link>
        </div>
      </div>
    </header>
  );
}
