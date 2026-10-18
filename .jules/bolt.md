## 2025-03-03 - Clean up GSAP Animations in React/Next.js Client Components
**Learning:** In Next.js client components, running GSAP `fromTo` or timeline animations inside `useEffect` without `gsap.context()` cleanup leaves active tweens, memory references, and inline style mutations orphaned when components unmount during route navigation.
**Action:** Always wrap GSAP animations inside `gsap.context()` in `useEffect` and return `ctx.revert()` in the cleanup function to prevent memory leaks and ticker overhead.
