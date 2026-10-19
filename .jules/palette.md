# Palette's Journal - UX & Accessibility Learnings

## 2025-05-18 - Tab Control Accessibility
**Learning:** Interactive tab components in prototype applications often miss essential WAI-ARIA attributes (`role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`), which impairs screen reader navigation and keyboard user experience.
**Action:** Always wrap tab button groups in `role="tablist"`, assign `role="tab"` and explicit `aria-selected`/`aria-controls` to tab triggers, provide visible `focus-visible` styles, and associate panels with `role="tabpanel"` and `aria-labelledby`.
