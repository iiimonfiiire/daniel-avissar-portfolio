# Daniel Avissar — Portfolio

Source for [Daniel Avissar's portfolio site](https://iiimonfiiire.github.io/daniel-avissar-portfolio/), an interactive portfolio of knowledge architecture, technical writing, and UX writing case studies, built with [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

This replaces an earlier version hosted on Stonly. Content is anonymized throughout — real employer/product names are replaced with placeholders (see below) since these are portfolio writing samples, not case studies the original companies commissioned.

## Structure

- `docs/index.md` — hero, skill overview, links to each case study (listed most recent first).
- `docs/case-studies/secyra-2025/` — a 2025 writing sample for a data-security platform ("Secyra"/"the InsightEdge Platform").
- `docs/case-studies/acme-2024/` — a 2024 writing sample for a compliance/eDiscovery platform ("Acme").
- `docs/case-studies/webapi-2021/` — a 2021 technical writing sample explaining how APIs work, using a website-builder platform's client-side API as the worked example.
- `docs/extras/perf-vero-board.md` — a guide from pedal-building (Carcharias Effects), kept in as a personality/bonus section.
- `raw-stonly-export/` — raw JSON guide exports pulled from Stonly's editor preview API, the source material for the Acme case study and the Extras guide. Kept as an audit trail for `scripts/stonly_to_md.py`.
- `design/portfolio-mockup/` — the Claude Design mockup (`.dc.html` + its bundled Carcharias design-system tokens) this site's styling was translated from. Not part of the build; kept as an audit trail for `docs/stylesheets/`.
- `scripts/stonly_to_md.py` — one-off converter from the raw Stonly JSON exports to Markdown. Not part of the build; re-running it will overwrite hand-edited files in `docs/case-studies/acme-2024/` and `docs/extras/`.

## Local development

```
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/mkdocs serve
```

## Making changes

`main` is protected — direct pushes are rejected, including for the repo
owner. Every change goes through a PR:

```
git checkout main && git pull
git checkout -b your-branch-name
# edit files, preview with `.venv/bin/mkdocs serve` at http://localhost:8000
git add -A && git commit -m "..."
git push -u origin your-branch-name
gh pr create
# wait for the Test check to pass, then merge the PR into main
```

No approving review is required, just a green **Test** check
(`.github/workflows/test.yml`, runs `mkdocs build --strict`) before the
merge button unlocks.

## Deploy

Deploys are automatic: pushing to `main` triggers
`.github/workflows/deploy.yml`, which builds the site with MkDocs and
publishes it via GitHub Pages (Actions-based Pages source, not a
`gh-pages` branch). No manual `mkdocs gh-deploy` step is needed.

Watch the run with `gh run watch`, then check
[the live site](https://iiimonfiiire.github.io/daniel-avissar-portfolio/) to
confirm.

To build locally without deploying:

```
.venv/bin/mkdocs build --strict
```
