## 2026-05-18 - Content Security Policy for Next.js Static & Interactive Prototypes

**Vulnerability:** Missing `Content-Security-Policy` (CSP) header allowed unrestricted resource loading, inline execution from arbitrary origins, and external framing risks beyond standard `X-Frame-Options`.
**Learning:** Next.js static builds require `'unsafe-inline'` and `'unsafe-eval'` for React runtime hydration and Turbopack dev tooling, but strict directives (`default-src 'self'`, `frame-ancestors 'none'`, `object-src 'none'`, `base-uri 'self'`) prevent malicious script injection, unauthorized iframing, and external exfiltration.
**Prevention:** Configure CSP in `next.config.ts` headers array alongside existing security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and `HSTS`) to establish defense-in-depth across all routes.
