# Style as code: Signal and PAKT

A style guide only works when people follow it. Most guides live in a wiki that nobody opens after onboarding. Two open-source projects close that gap.

- **[Signal](https://github.com/iiimonfiiire/signal-style-guide)** – A style guide for clear, concise, and easy-to-scan product writing. It ships with a machine-readable rules file.
- **[PAKT](https://github.com/iiimonfiiire/pakt)** – The Portable Agentic Knowledge Toolkit. It checks KB articles, release notes, UI microcopy, API docs, and GTM briefs against one style guide.

Signal sets the standard. PAKT enforces it.

## Signal: a guide that a machine can read

Signal covers the rules behind clear product writing. Examples include short sentences, sentence-case headings, the Oxford comma, and one term per concept.

Each rule has an ID, a summary, a fix, and optional overrides per content type. The same rules file feeds both human writers and automated checks.

[Read the Signal guide](https://github.com/iiimonfiiire/signal-style-guide){ .md-button }

## PAKT: a reviewer for every content type

PAKT is a Claude Code plugin with eleven skills, plus a command-line tool for offline checks.

Each review runs in two layers:

- **Deterministic checks** – Regex and structure checks that run in milliseconds. They catch long sentences, contractions, and missing release-note sections.
- **Judgment** – Rules that a regex cannot judge, such as consistent terminology. A language model applies them.

Every reviewer returns the same report: four scores, a verdict, and line-level findings with a fix for each one.

A team can swap Signal for its own guide without touching any skill.

[Explore PAKT on GitHub](https://github.com/iiimonfiiire/pakt){ .md-button }

## Why this matters for knowledge teams

- **Consistency at scale** – One guide covers every content type, from a tooltip to a launch brief.
- **Faster reviews** – Writers fix mechanical issues before a person ever reads the draft.
- **Measurable quality** – A content audit ranks a whole docs folder worst-first, so you know where to start.

This page follows Signal, and PAKT checked it before it went live.

[Try PAKT on your own docs](https://github.com/iiimonfiiire/pakt#quickstart){ .md-button }
