## 2025-05-18 - Clean up GSAP context in React useEffect hooks
**Learning:** GSAP animations triggered inside React `useEffect` without `gsap.context()` cleanup leak active tweens and ticker callbacks into memory when components unmount or re-render during client routing.
**Action:** Always wrap GSAP animations in `gsap.context(() => { ... }, ref)` and return `() => ctx.revert()` in the `useEffect` cleanup function.

## 2026-03-28 - Static data extracted outside component scope vs runtime memoization
**Learning:** Re-evaluating `Object.keys()` or re-creating data arrays inside React components for static module-level objects adds unnecessary allocation per render. Using `React.memo` or `useMemo` on small static structures adds unnecessary hook and prop comparison overhead.
**Action:** Extract static keys and constants outside component scope at the top module level rather than using runtime memoization hooks.
