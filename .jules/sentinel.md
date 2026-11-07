## 2026-11-07 - Server fingerprinting and missing CSP in Next.js config
**Vulnerability:** The application exposed `X-Powered-By: Next.js` in response headers disclosing server framework information, and lacked a `Content-Security-Policy` header to provide defense-in-depth against unauthorized resource loading and injection.
**Learning:** Next.js includes `X-Powered-By: Next.js` by default unless explicitly disabled with `poweredByHeader: false` in `next.config.ts`, and security headers defined in `next.config.ts` must explicitly provide a `Content-Security-Policy` with appropriate fallback directives.
**Prevention:** Always set `poweredByHeader: false` in `next.config.ts` and define a strict Content Security Policy matching the application's resource requirements.
