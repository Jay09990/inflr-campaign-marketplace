"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { landingStats } from "@/data/mock";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // force3D: true hardware accelerates GSAP stagger animations on GPU compositing layers, clearing temporary GPU properties when complete
      gsap.fromTo(
        "[data-hero='line']",
        { y: 42, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out", force3D: true, clearProps: "willChange" },
      );
      gsap.fromTo(
        "[data-hero='card']",
        { y: 28, opacity: 0, rotate: -2 },
        { y: 0, opacity: 1, rotate: 0, stagger: 0.08, duration: 0.8, delay: 0.25, ease: "power3.out", force3D: true, clearProps: "willChange" },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="grain relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[rgba(255,249,240,0.8)] px-6 py-8 shadow-[var(--shadow)] backdrop-blur md:px-10 md:py-12">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(217,93,57,0.16),transparent_60%)] lg:block" />
      <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-strong)]">
            <span data-hero="line">Campaign orchestration</span>
            <span data-hero="line">Pitch-led marketplace</span>
            <span data-hero="line">Hyperlocal intelligence</span>
          </div>
          <div className="space-y-4">
            <h1 className="display-font max-w-4xl text-5xl leading-none tracking-[-0.05em] md:text-7xl">
              <span data-hero="line" className="block">
                Where local brands buy
              </span>
              <span data-hero="line" className="block text-[var(--accent-strong)]">
                campaign outcomes,
              </span>
              <span data-hero="line" className="block">
                not creator chaos.
              </span>
            </h1>
            <p data-hero="line" className="max-w-2xl text-lg leading-8 text-[rgba(98,87,72,0.95)] md:text-xl">
              A three-sided marketplace where owners publish briefs, Knowledge Persons pitch strategy, and creator
              squads execute inside one controlled campaign workspace.
            </p>
          </div>
          <div data-hero="line" className="flex flex-wrap gap-4">
            <Link
              href="/owner"
              className="rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
            >
              Explore Owner Flow
            </Link>
            <Link
              href="/workspace"
              className="rounded-full border border-[var(--line)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:-translate-y-0.5"
            >
              Open Campaign Workspace
            </Link>
          </div>
        </div>
        <div className="grid gap-4 self-end">
          {landingStats.map((item) => (
            <div
              key={item.label}
              data-hero="card"
              className="rounded-[1.6rem] border border-[var(--line)] bg-[rgba(255,252,246,0.96)] p-5"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-[rgba(98,87,72,0.95)]">{item.label}</div>
              <div className="display-font mt-3 text-5xl leading-none tracking-[-0.05em]">{item.value}</div>
              <p className="mt-3 text-sm leading-6 text-[rgba(98,87,72,0.95)]">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
