## 2025-05-18 - Clean up GSAP context in React useEffect hooks
**Learning:** GSAP animations triggered inside React `useEffect` without `gsap.context()` cleanup leak active tweens and ticker callbacks into memory when components unmount or re-render during client routing.
**Action:** Always wrap GSAP animations in `gsap.context(() => { ... }, ref)` and return `() => ctx.revert()` in the `useEffect` cleanup function.
