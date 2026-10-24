## 2025-05-18 - Clean up GSAP context in React useEffect hooks
**Learning:** GSAP animations triggered inside React `useEffect` without `gsap.context()` cleanup leak active tweens and ticker callbacks into memory when components unmount or re-render during client routing.
**Action:** Always wrap GSAP animations in `gsap.context(() => { ... }, ref)` and return `() => ctx.revert()` in the `useEffect` cleanup function.

## 2025-05-19 - Avoid hardcoded inline style props when using GSAP in React
**Learning:** Hardcoding initial inline `style={{ opacity: 0 }}` on React JSX nodes animated by GSAP causes React's VDOM reconciliation to reset inline styles on re-renders, causing animated elements to unexpectedly vanish.
**Action:** Let GSAP manage initial property states inside `gsap.fromTo` or `gsap.set` within `useEffect`, using `force3D: true` and `clearProps: "willChange"` for GPU layer optimization and memory cleanup.
