## 2025-05-18 - Multi-step Wizard Navigation & State Clarity
**Learning:** Multi-step wizard sidebars should use semantic `<nav>` with `aria-current="step"`, provide explicit total step context (e.g. "Step X of Y"), and visually disable the backward control on the initial step with proper `disabled` and `aria-disabled` semantics to prevent user confusion.
**Action:** When auditing or implementing multi-step form wizards, always pair step indicators with `aria-current="step"` and ensure boundary navigation buttons (Previous/Next) reflect their disabled state visually and programmatically.
