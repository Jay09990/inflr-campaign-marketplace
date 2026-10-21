## 2026-05-18 - Dynamic Metadata Routes and Private Route Index Disallowing

**Learning:** Next.js App Router applications require native metadata route handlers (`robots.ts` and `sitemap.ts`) to manage search crawler discovery and prevent internal dashboard/portal routes (`/admin`, `/owner`, `/kp`, `/influencer`, `/workspace`) from being indexed or crawled accidentally.
**Action:** Always create `src/app/robots.ts` and `src/app/sitemap.ts` using Next.js `MetadataRoute` types, and configure `metadataBase` in `src/app/layout.tsx` to handle absolute canonical URLs properly.
