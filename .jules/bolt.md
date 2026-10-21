## 2025-03-30 - GSAP context cleanup in React components
**Learning:** Instantiating GSAP tweens (like `gsap.fromTo`) inside `useEffect` without `gsap.context()` leaves active tweens registered in GSAP's global ticker on unmount and re-renders, causing memory leaks and unnecessary main-thread ticker ticks.
**Action:** Always wrap GSAP animations in `gsap.context(() => { ... }, scopeRef)` and return `() => ctx.revert()` in `useEffect` cleanup.
