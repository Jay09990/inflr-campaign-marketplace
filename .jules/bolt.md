## 2026-10-19 - GSAP Animation Lifecycle Cleanup in React
**Learning:** Instantiating `gsap.fromTo` inside React `useEffect` without `gsap.context()` leaves active tweens in GSAP's global ticker loop after component unmounts during client-side navigation, causing memory leaks and unnecessary frame ticker processing.
**Action:** Always wrap GSAP animations in `gsap.context()` inside `useEffect` and return `() => ctx.revert()` for clean garbage collection on component unmount or state update.
