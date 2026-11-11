## 2026-05-18 - Disable X-Powered-By Banner in Next.js Config
**Vulnerability:** Information disclosure via server technology banners (`X-Powered-By: Next.js`), which advertises backend framework details to attackers and reconnaissance tooling.
**Learning:** Next.js includes `poweredByHeader: true` by default unless explicitly disabled in `next.config.ts`, exposing framework-level stack information on all HTTP responses.
**Prevention:** Always set `poweredByHeader: false` in `next.config.ts` alongside other HTTP defense-in-depth headers (`X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security`, `Permissions-Policy`).
