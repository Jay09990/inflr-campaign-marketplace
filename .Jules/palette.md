## 2025-02-21 - Accessible Tab Navigation Pattern
**Learning:** Custom tab navigation components in mock/prototype dashboards often use plain `<button>` lists without ARIA tab roles (`tablist`, `tab`, `tabpanel`), dynamic state bindings (`aria-selected`, `aria-controls`), or visible keyboard focus indicators.
**Action:** When working with custom tab components, always apply standard WAI-ARIA tab pattern markup (`role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby`) and explicit `focus-visible:` focus ring styles.
