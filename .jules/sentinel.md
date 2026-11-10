## 2026-10-21 - Content Security Policy for Next.js App Router
**Vulnerability:** Missing Content-Security-Policy header left the application susceptible to potential cross-site scripting (XSS), inline injection vulnerabilities, and unauthorized data exfiltration.
**Learning:** Next.js HTTP response headers configured in `next.config.ts` had standard hardening headers (HSTS, X-Frame-Options, X-Content-Type-Options) but lacked a CSP directive to restrict script execution, inline styles, frame ancestors, and form submission targets.
**Prevention:** Always define explicit Content-Security-Policy directives alongside standard headers in Next.js configuration to enforce defense-in-depth against unauthorized script and asset loading.
