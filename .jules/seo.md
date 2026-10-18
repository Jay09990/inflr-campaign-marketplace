## 2026-05-18 - App Router Sitemap & Robots Generation
**Learning:** Next.js App Router automatically generates `/sitemap.xml` and `/robots.txt` dynamic routes when `sitemap.ts` and `robots.ts` are placed in `src/app/`. Configuring `metadataBase` in `layout.tsx` ensures relative canonical and OpenGraph URLs resolve correctly.
**Action:** Always leverage `src/app/sitemap.ts` and `src/app/robots.ts` for clean, type-safe sitemap and robots configuration without external dependencies.
