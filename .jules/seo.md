## 2026-05-18 - App Router native robots and sitemap routing
**Learning:** Next.js App Router natively compiles `app/robots.ts` and `app/sitemap.ts` into `/robots.txt` and `/sitemap.xml` static output routes without needing third-party libraries.
**Action:** Use Next.js `MetadataRoute.Robots` and `MetadataRoute.Sitemap` native types for clean, zero-dependency crawl controls and sitemap generation.
