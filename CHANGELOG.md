# 0.3.0 (Thu Jun 05 2025)

#### 🚀 Enhancement

Security
	•	Escaped link labels to neutralise <, >, ", ', ` and strip zero-width chars → prevents XSS when notes are exported/rendered.
	•	Hardened slug generator (safeSlug) – NFC normalisation, removal of .., /, \, zero-width chars; thwarts anchor-collision and path-traversal tricks.

Performance / Stability
	•	Compiled the heavy emoji RegExp once at module load to avoid repeated recompilation.
	•	Added idle-chunk processing and MAX_HEADINGS guard (default = 1 000) to prevent UI freezes on very large documents.

Settings
	•	New slider: “Abort if headings exceed …” (100 – 5 000).
	•	Settings are now deep-cloned on load to isolate them from runtime mutation by other plugins.

Behaviour
	•	Optional GitHub-compatible anchors retained; now applied on top of hardened slugs.
	•	No visual or functional regressions expected for normal vaults.

Upgrade Notes
	•	Drop‐in replacement for previous main.js; TypeScript users should rebuild.
	•	Review the new Max headings default if your vault routinely exceeds 1 000 headings per note.

(Internal reference: mitigates security issues #1–#5 and perf issue #3 from the 2025-06-05 audit.)


# 0.2.0 (Thu May 11 2023)

#### 🚀 Enhancement

- Add MD link option and GH link option (closes #30 and #8) [#33](https://github.com/hipstersmoothie/obsidian-plugin-toc/pull/33) ([@4very](https://github.com/4very))

#### Authors: 1

- avery ([@4very](https://github.com/4very))

---

# 0.1.4 (Mon Feb 06 2023)

#### 🐛 Bug Fix

- maximumDepth slider bug fix [#29](https://github.com/hipstersmoothie/obsidian-plugin-toc/pull/29) ([@xoltar89](https://github.com/xoltar89))

#### Authors: 1

- [@xoltar89](https://github.com/xoltar89)

---

# 0.1.3 (Mon Mar 21 2022)

#### 🐛 Bug Fix

- add previous level heading to the link [#23](https://github.com/hipstersmoothie/obsidian-plugin-toc/pull/23) ([@f1238762001](https://github.com/f1238762001))

#### Authors: 1

- paul_lin ([@f1238762001](https://github.com/f1238762001))

---

# 0.1.2 (Mon Mar 01 2021)

#### ⚠️ Pushed to `main`

- add fancy ordered list instructions ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# 0.1.1 (Sat Feb 27 2021)

#### 🐛 Bug Fix

- fix generating top level TOC when minimumDepth > 1 [#6](https://github.com/hipstersmoothie/obsidian-plugin-toc/pull/6) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# 0.1.0 (Sat Feb 27 2021)

#### 🚀 Enhancement

- show Notice when no headers are matched [#5](https://github.com/hipstersmoothie/obsidian-plugin-toc/pull/5) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# 0.0.16 (Sat Feb 27 2021)

#### 🐛 Bug Fix

- Add newline at end of TOC [#4](https://github.com/hipstersmoothie/obsidian-plugin-toc/pull/4) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# 0.0.15 (Thu Feb 25 2021)

#### ⚠️ Pushed to `main`

- improve docs ([@hipstersmoothie](https://github.com/hipstersmoothie))
- fix indentation of headings ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# 0.0.14 (Tue Feb 23 2021)

#### ⚠️ Pushed to `main`

- simplify getting active file ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# 0.0.13 (Tue Feb 23 2021)

#### ⚠️ Pushed to `main`

- code review ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# 0.0.12 (Mon Feb 22 2021)

#### ⚠️ Pushed to `main`

- Use heading cache instead of regex ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# 0.0.11 (Sun Feb 21 2021)

#### ⚠️ Pushed to `main`

- fix description ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# 0.0.10 (Sun Feb 21 2021)

#### ⚠️ Pushed to `main`

- remove unnecassary file name ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# 0.0.9 (Sun Feb 21 2021)

#### ⚠️ Pushed to `main`

- use working plugin ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# 0.0.8 (Sun Feb 21 2021)



---

# 0.0.8 (Sun Feb 21 2021)



---

# 0.0.7 (Sun Feb 21 2021)



---

# 0.0.6 (Sun Feb 21 2021)



---

# 0.0.4 (Sun Feb 21 2021)



---

# 0.0.4 (Sun Feb 21 2021)



---

# 0.0.3 (Sun Feb 21 2021)

#### ⚠️ Pushed to `main`

- update auto version ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# 0.0.2 (Sun Feb 21 2021)

#### ⚠️ Pushed to `main`

- update auto plugin ([@hipstersmoothie](https://github.com/hipstersmoothie))
- update auto ([@hipstersmoothie](https://github.com/hipstersmoothie))
- pdate automation ([@hipstersmoothie](https://github.com/hipstersmoothie))
- add another command ([@hipstersmoothie](https://github.com/hipstersmoothie))
- init ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
