# Daniel Avissar — Portfolio

Source for [danielavissar.dev](https://github.com/iiimonfiiire/daniel-avissar-portfolio) (working title), an interactive portfolio of knowledge architecture, technical writing, and UX writing case studies, built with [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

This replaces an earlier version hosted on Stonly. Content is anonymized throughout — real employer/product names are replaced with placeholders (see below) since these are job-application writing samples, not case studies the original companies commissioned.

## Structure

- `docs/index.md` — hero, skill overview, links to each case study.
- `docs/case-studies/acme-2024/` — a 2024 Technical Writer application assignment for a compliance/eDiscovery platform ("Acme").
- `docs/case-studies/webapi-2021/` — a 2021 technical writing sample explaining how APIs work, using a website-builder platform's client-side API as the worked example.
- `docs/case-studies/secyra-2025/` — a 2025 Senior Technical Writer application assignment for a data-security platform ("Secyra"/"the InsightEdge Platform").
- `docs/extras/perf-vero-board.md` — a guide from pedal-building (Carcharias Effects), kept in as a personality/bonus section.
- `raw-stonly-export/` — raw JSON guide exports pulled from Stonly's editor preview API, the source material for the Acme case study and the Extras guide. Kept as an audit trail for `scripts/stonly_to_md.py`.
- `scripts/stonly_to_md.py` — one-off converter from the raw Stonly JSON exports to Markdown. Not part of the build; re-running it will overwrite hand-edited files in `docs/case-studies/acme-2024/` and `docs/extras/`.

## Local development

```
python3 -m venv .venv
.venv/bin/pip install mkdocs mkdocs-material ghp-import
.venv/bin/mkdocs serve
```

## Deploy

```
.venv/bin/mkdocs gh-deploy
```

GitHub Pages does not serve from private repositories on the GitHub Free plan — this repo needs to be public, or the account needs Pro/Team/Enterprise, before `gh-deploy` is actually visible.

## Known gaps

- The Extras (perf/vero board) guide's own images weren't recoverable via a public Stonly CDN URL. See `IMAGE-MANIFEST-perf-vero-board.csv` for the list of images (with captions) still needed — pull them from the still-live Stonly guide before retiring that hosting.
