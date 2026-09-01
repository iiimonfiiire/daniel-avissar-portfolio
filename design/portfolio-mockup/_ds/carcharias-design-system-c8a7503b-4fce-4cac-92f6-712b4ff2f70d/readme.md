# Carcharias — Design System

**Owner:** Daniel Avissar · GitHub [@iiimonfiiire](https://github.com/iiimonfiiire)
**Brand name:** Carcharias
**Mascot:** a shark (the founder's long-running avatar)

## What this is

A brand and interface system for **Carcharias**, a professional software product.
Dark, dense, quiet. The system exists to make screens that are **clear, concise and
easy to scan** — those three words drive every rule below, visual and verbal.

Three words for the look: **calm · precise · unadorned**.

## Sources this was built from

| Source | Status |
|---|---|
| Brand brief | Chat only — brand name, mascot, font preference, icon link |
| Codebase | **None provided.** No repo was attached or linked |
| Figma | **None provided** |
| Slide decks | **None provided** |
| Font direction | "DIN 2014, or Barlow / Golos as alternatives" — from the brief |
| Icon direction | <https://icon-sets.iconify.design/fluent-emoji-high-contrast/shark/> — from the brief |
| GitHub handle | `iiimonfiiire` (not read; no repo given) |

**Everything here is an original construction, not a recreation.** With no existing
product to copy, the UI kits demonstrate the rules on a plausible surface — an event
monitoring tool — chosen because it exercises tables, status colour, quotas and forms.
Each kit's README says so. No logo, photography, or illustration was invented.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills wrapper so this folder works in Claude Code.
- `readme.md` — this file.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`

**`guidelines/`** — `keyframes.css` plus 22 specimen cards (Colors, Type, Spacing, Brand)

**`assets/`** — `README.md` (what exists, what is missing), `icons/README.md`, `fonts/README.md`. **No binaries.**

**`components/`** — 20 primitives in four groups:

| Group | Components |
|---|---|
| `core/` | **Button**, **IconButton**, **Icon**, **Card**, **Badge**, **Tag**, **ImagePlate** |
| `forms/` | **Field**, **Input**, **Select**, **Checkbox**, **Radio**, **Switch**, **Slider** |
| `feedback/` | **Dialog**, **Toast**, **Tooltip**, **Meter** |
| `navigation/` | **Tabs**, **SideNav** |

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage).

### Intentional additions
No source design system existed, so this is the standard from-scratch inventory.
Two entries are worth calling out:

- **Icon** — a wrapper over the Iconify CDN, because there is no house glyph set. Swapping in real glyphs later means editing one file.
- **ImagePlate** — a labelled placeholder, so no stock or generated imagery ever ships.

**`ui_kits/`**
- `app/` — the product: Overview, Events, Settings → `ui_kits/app/index.html`
- `marketing/` — the site: Home, Pricing, Docs → `ui_kits/marketing/index.html`

---

## CONTENT FUNDAMENTALS

### The three pillars

Every word in a Carcharias interface is measured against these, in order:

1. **Clear.** One reading. No ambiguity about what will happen next.
2. **Concise.** Only the necessary words. If a sentence survives losing a word, lose it.
3. **Easy to scan.** The reader is not reading; they are looking. Structure carries meaning.

### The visibility rule

**Assume what is on screen is all the reader will read.** Whatever stage of a
workflow they are in, everything they need to act must be visible right now — not in
a tooltip, not below the fold, not behind "Learn more". If a decision needs a number,
put the number next to the decision.

> ✅ Dialog: "Delete this project? This removes 2,410 events and cannot be undone."
> ❌ Dialog: "Are you sure?" with the consequence in a help article.

> ✅ Radio: "Team — 5M events, 20 seats. $29 per month."
> ❌ Radio: "Team" with a "Compare plans" link.

### Register

Professional SaaS. Plain, neutral, unembellished. Not friendly, not cold — **not
about warmth at all**. The interface is a tool; it states facts and names actions.

- No jokes, no encouragement, no personality. No "Oops", "Nice work", "Let's get started".
- No hype words: *powerful, seamless, effortless, revolutionary, delightful, unlock, supercharge, robust, leverage*.
- No filler openers: *In order to, Please note that, It looks like, We're excited to*.

### Written for non-native readers

This is a hard constraint, not a preference:

- **Short sentences.** One idea each. Aim under 15 words; hard-stop around 25.
- **Common words.** *Use*, not *utilise*. *Start*, not *commence*. *About*, not *approximately*. *Change*, not *modify*.
- **No idioms, no metaphors, no phrasal verbs where a single verb exists.** Not "spin up a project" — "create a project".
- **Active voice, present tense.** "We retry three times", not "Retries will be attempted".
- **Literal labels.** A button that deletes says "Delete". Never a metaphor.
- **No contractions in UI strings.** "Do not", not "don't" — easier to parse, and it survives translation.

### Person

- **"You"** for the reader: "You have used 92% of 5M events."
- **"We"** for the product, only when the product does something on the reader's behalf: "We retry three times over five minutes."
- Never "our team", "users", "customers", "folks".

### Casing

**Sentence case everywhere.** Headings, buttons, tabs, labels, table headers, badges, nav.

- ✅ "Save changes" · "Delete project" · "Usage this month" · "Open alerts"
- ❌ "Save Changes" (title case) · "SAVE CHANGES" (uppercase) · "S A V E" (tracked caps)

Proper nouns and product names keep their capitals. Acronyms stay uppercase (API, SSO, UTC).

### Length budgets

| Element | Budget |
|---|---|
| Button label | 1–3 words, verb first |
| Badge | 1–2 words |
| Tab | 1–2 words |
| Field label | 1–4 words, no colon |
| Field hint | one sentence, under 15 words |
| Toast title | 2–5 words, past tense |
| Dialog title | a question or a task, under 8 words |
| Page description | one sentence stating scope and scale |
| Empty state | a line saying what is missing, then one action |

### Patterns

**Buttons** — verb + object. "Save changes", "Create alert", "Invite member",
"Delete project". Never "Submit", "OK", "Yes", "Continue" where a real verb exists.
A confirm button repeats the destructive verb so it is readable in isolation.

**Field labels and hints** — the label names the thing; the hint sits **above** the
input and says what the reader needs *before* they type.
"Project name" / "Used in URLs. You can change it later."

**Errors** — name the cause and the fix. Never blame, never apologise, never "went wrong".
- ✅ "Enter a number between 1 and 90."
- ✅ "The file is larger than 25 MB." + a Retry action
- ❌ "Invalid input" · "Oops, something went wrong!"

**Empty states** — fact, then action. "No events yet. Send your first event to see it here."

**Numbers** — always specific, always in mono type, always with a unit and a limit
where one exists: `2.4M / 5M`, `182 ms`, `0.41%`, `19 of 20 seats`. Use the real minus
sign (−). Never "approximately" when a number exists. Never invent a statistic.

**Dates and times** — `14:02 UTC`, `19 Aug 2026`. Relative time only inside a day
("3 minutes ago"); absolute after that.

### Emoji

**Never.** Not in UI, not in marketing, not in docs. The shark is a *mark* — an SVG,
never 🦈.

### Punctuation

Full stops on sentences, including single-sentence hints. **No full stop on labels,
buttons, badges, or headings.** No exclamation marks, ever. No ampersands in prose
("and"). Middle dot `·` separates metadata (`acme-production · 14:02`). Serial commas.
British spelling in prose; keep US spelling in any code identifier.

---

## VISUAL FOUNDATIONS

### Ground

**Dark by default.** Abyss (`#05080A`–`#33444C`) is a cool near-black neutral ramp;
nothing is pure grey-black. `.cfx-light` is the light scope for documents, print and
light page sections. Two background values carry any screen — page and inset — never more.

### Colour discipline

- **Tide teal `#2ED3C0`** is the brand and the primary: primary buttons, active nav, focus rings, links, success. One primary action per view.
- **Signal orange `#FF6B1A`** is highlight only — a "Beta" badge, a single emphasis. Never a primary button, never a background.
- **Danger / warning / info** report state. Colour is never decoration: if a thing is red, something is wrong.
- No brand gradients. No bluish-purple. No colour used to make a screen "feel" like anything.

### Type

One face does the work: **Barlow** (standing in for DIN 2014) for headings, UI and
short body. **Golos Text** 17/1.65 at 68ch for docs and long prose. **JetBrains Mono**
with tabular figures for every number, ID and key. Headings are semibold and sentence
case with slightly tightened tracking (−0.011 to −0.022em); body sits at 15/1.55.
**No condensed face, no uppercase display type, no wide tracking anywhere.**

### Spacing and layout

4px-derived scale; 8, 16 and 24 carry most layouts. Control heights 28 / 36 / 44 / 52;
tap targets never below 44px. Content maxes at 1200px, prose at 68ch, page sections
separated by 72px. Fixed elements: the site header (60px, sticky, translucent + blur)
and the app top bar (52px). App tables run 13–15px with 12px vertical padding.

### Corner radii

4px on badges and checkboxes, **6px on buttons and inputs**, 8px on cards and panels,
12px on dialogs, pill on tags and switches. One step per element class, applied
consistently. Nothing is sharp; nothing is a lozenge.

### Cards

`--surface-card` fill, 1px hairline border at 14% Chrome, 8px radius, **no shadow**
unless the card genuinely floats (`raised`). Accents are a **2px full-width rule
across the top**, used only to carry status. **Never a coloured left border.**
Card padding is 24px; 16–20px in dense contexts.

### Shadows

Borders carry structure; shadows are almost absent. `sm` (`0 1px 2px`) for a raised
card, `md` for a menu, `panel` for a floating panel, `dialog` for a modal. Recessed
inputs use a fill change plus a border, not an inset shadow. No glows — the LED glow
from the earlier draft has been removed; focus is a flat teal ring.

### Borders and rules

1px hairline at 14% for structure, 28% for control borders. 2px for the active tab
underline and card status rules. Dividers are hairlines, never solid grey bars.

### Backgrounds, texture, imagery

No photographic backgrounds ship (none exist — see *Assets*). Empty ground takes
`--texture-grid` (28px hairline graph at 3.5%) or `--texture-hairline`. Both are
near-invisible: tooth, not pattern. Planned imagery is **product screenshots first** —
real UI, dark theme, cropped tight. Any photography should be cool-graded, low-key
and neutral; no warm filters, no lifestyle stock, no illustration, no 3D renders.

### Protection over imagery

Text over an image always sits on a scrim: `--scrim-bottom` for text at the foot of a
hero, `--scrim-flat` (62% Abyss) for small overlays. No capsules or pills behind text.

### Transparency and blur

Two places only: the sticky headers (86% Abyss + `--blur-glass`, `saturate(130%) blur(12px)`)
and the dialog scrim (78% + the same blur). Panels and cards are always opaque.

### Motion

Quiet and quick. 90ms for control state, 140ms for hover and focus, 200ms for panel
and dialog entry, 300ms maximum. One curve: `--ease-standard`
(`cubic-bezier(.2,0,.2,1)`). **No bounce, no spring, no overshoot, no scale-up
entrances, no parallax, no attention-seeking animation.** Dialogs fade and rise 6px;
toasts do the same. Everything collapses to 0ms under `prefers-reduced-motion`.

### Hover states

Surfaces take a 6–8% Chrome wash; borders step up one value. Primary buttons go one
step **lighter** (Tide 400). Nothing lifts, scales, or changes hue on hover.

### Press states

Colour deepens one step. Nothing translates, shrinks, or scales — the earlier
"press down 1px" behaviour has been removed as too physical for this system.

### Focus

2px Tide outline at 2px offset, plus a 3px 20%-teal ring (`--ring-focus`) on form
controls. Always visible. Never removed, never replaced by a colour change alone.

### Selected states

A 10% Tide wash (`--surface-selected`) plus a teal icon or teal text. **No left rule** —
selection is a fill, so it survives inside tables, nav and lists alike.

### Disabled

40% opacity and `not-allowed`. No recolouring, no strikethrough, no explanatory
tooltip standing in for a visible reason.

---

## ICONOGRAPHY

**There is no house icon set.** Two open CDN sets are used, and both substitutions are
deliberate and flagged:

| Purpose | Set | Prefix | Licence |
|---|---|---|---|
| Interface icons | **Lucide** | `lucide:` | ISC |
| Brand mark | **Fluent Emoji High Contrast** (Microsoft) | `fluent-emoji-high-contrast:` | MIT |

- **Why Lucide:** 2px stroke, geometric, neutral — it reads as interface furniture rather than decoration, which is what this system wants. It is a **substitution for a set that does not exist**; replace it when real glyphs exist.
- **Why Fluent Emoji High Contrast:** the set the founder nominated. Its `shark` glyph is a solid single-colour silhouette that works as a mark at any size.
- **Delivery:** the Iconify runtime (`iconify-icon.min.js`), or `api.iconify.design/<set>/<name>.svg` as a plain `<img>` in static contexts. Nothing is vendored, because nothing is licensed locally.
- **Always** go through the `Icon` component so a future house set swaps in one place.
- **Sizes:** 14 in badges, 15–17 in controls, 20 in nav, 24+ for the mark. No odd sizes.
- **Colour:** `currentColor`. An icon takes its control's colour; it is never coloured for emphasis. Teal only when the item is active or successful, red/amber only for status.
- **Icons alone** only where the meaning is unambiguous (search, close, settings, more). Anything else gets a label. Every icon-only control has a `Tooltip` **and** an `aria-label`.
- **PNG icons:** never. **Unicode as icons:** never, except the middle dot `·` as a text separator. **Emoji:** never.

---

## Assets — what is missing

There is **no logo file, no photography, no illustration** in this system, because
none was supplied and none was invented.

- The wordmark **is type**: "Carcharias" in Barlow semibold, sentence case, −0.012em.
- The mark is the MIT shark glyph, standing in for the founder's own shark artwork.
- Every image slot in the UI kits is an `ImagePlate` carrying a written brief for the shot that belongs there.

See `assets/README.md` for the list of what to send.

## Fonts — substitution notice

**DIN 2014 is not bundled** (Monotype commercial licence). **Barlow** is the shipped
substitute — metrically close enough to swap without relayout — with **Golos Text**
for prose and **JetBrains Mono** for numbers. All three load from the Google Fonts
CDN, so this system ships **zero font binaries** and needs network access.
`tokens/fonts.css` has a commented `@font-face` block: drop licensed `.woff2` files
into `assets/fonts/`, uncomment, and every token follows.
