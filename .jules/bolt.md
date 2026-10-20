## 2025-10-20 - GSAP context cleanup in shared React animation wrappers
**Learning:** Shared React animation wrappers using GSAP (like `Reveal`) without `gsap.context()` cleanup cause orphaned tweens to linger on GSAP's global ticker and leak DOM references across page route changes in Next.js App Router.
**Action:** Always wrap GSAP animations inside `gsap.context()` in `useEffect` and return `() => ctx.revert()` for proper cleanup on unmount and prop changes.
