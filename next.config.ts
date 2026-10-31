import type { NextConfig } from "next";

// Content Security Policy (CSP) restricts dynamic resources to mitigate XSS and injection attacks.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self' data:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Mitigate XSS and data injection attacks
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          // Prevent clickjacking by disallowing embedding in frames
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Prevent MIME-type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Enable legacy browser XSS filtering
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Control referrer information sent in HTTP headers
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Disable DNS prefetching to avoid privacy leaks and untrusted domain lookups
          {
            key: "X-DNS-Prefetch-Control",
            value: "off",
          },
          // Restrict browser features and APIs
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Enforce HTTPS
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
