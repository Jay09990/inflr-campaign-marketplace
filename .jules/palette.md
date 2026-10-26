## 2026-10-26 - ARIA Tab Navigation and Roving Focus in Workspace Components
**Learning:** Components using ARIA roles (`role="tablist"`, `role="tab"`, `role="tabpanel"`) need explicit roving `tabIndex` (`tabIndex={isSelected ? 0 : -1}`) and arrow keyboard handlers (`ArrowLeft`, `ArrowRight`, `Home`, `End`) so keyboard and screen reader users can navigate tabs without having to tab through every button.
**Action:** When implementing or updating tablist components in this design system, ensure `tabIndex` roving focus and `onKeyDown` arrow key navigation are present.
