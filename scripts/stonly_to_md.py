#!/usr/bin/env python3
"""One-off converter: Stonly guide-export JSON -> MkDocs Markdown.

Run once from repo root: .venv/bin/python scripts/stonly_to_md.py
Not idempotent-safe against hand edits made to docs/ after running --
re-running will overwrite generated files. Diff before re-running.
"""
import json
import pathlib
import re

from bs4 import BeautifulSoup, NavigableString

RAW = pathlib.Path("raw-stonly-export")
OUT = pathlib.Path("docs")

# Steps to exclude outright (superseded backups / pre-anonymization drafts).
EXCLUDE_STEP_IDS = {3500396}  # "[Backup - original] AI Discover" -- pre-anonymization duplicate of step 3497191

PLACEHOLDER_MARKERS = (
    "[Insert existing documentation",
    "[add existing documentation",
    "[This is where older release notes go]",
)

# Text-level anonymization: real company name -> placeholder, applied to
# every emitted block. "Acme" is already used in the source JSON's own
# prose for Release Notes/Discover; only the Introduction step still names
# the real company.
REPLACEMENTS = [
    (re.compile(r"\bfor Shield's Technical Writer position\b"), "for a compliance/eDiscovery platform's Technical Writer position"),
    (re.compile(r"\bShield's Technical Writer position\b"), "a compliance/eDiscovery platform's Technical Writer position"),
    (re.compile(r"\ba me\.com\b"), "acme.com"),  # pre-existing typo in the source content ("app.a me.com")
    (re.compile(r"\bShield\b"), "Acme"),  # catch-all safety net for any leftover real-name mentions (e.g. image captions)
]


def apply_replacements(text: str) -> str:
    for pattern, repl in REPLACEMENTS:
        text = pattern.sub(repl, text)
    return text


def inline_to_md(node) -> str:
    """Render an inline node (text, b/i/a) to Markdown text."""
    if isinstance(node, NavigableString):
        return str(node)
    name = node.name
    inner = "".join(inline_to_md(c) for c in node.children)
    if name in ("b", "strong"):
        stripped = inner.strip()
        if not stripped:
            return inner
        lead = inner[: len(inner) - len(inner.lstrip())]
        trail = inner[len(inner.rstrip()):]
        return f"{lead}**{stripped}**{trail}"
    if name in ("i", "em"):
        stripped = inner.strip()
        if not stripped:
            return inner
        lead = inner[: len(inner) - len(inner.lstrip())]
        trail = inner[len(inner.rstrip()):]
        return f"{lead}*{stripped}*{trail}"
    if name == "a":
        href = node.get("href", "")
        return f"[{inner}]({href})"
    if name == "br":
        return "\n"
    return inner


def block_to_md(node) -> str:
    """Render a block-level node (p, ul, ol, h4, h5, aside) to a Markdown block."""
    name = node.name
    if name == "p":
        return inline_to_md_children(node).strip()
    if name in ("h4", "h5"):
        level = "####" if name == "h4" else "#####"
        return f"{level} {inline_to_md_children(node).strip()}"
    if name in ("ul", "ol"):
        lines = []
        ordered = name == "ol"
        for i, li in enumerate(node.find_all("li", recursive=False), start=1):
            prefix = f"{i}." if ordered else "-"
            # nested lists inside <li> render as indented sub-blocks
            own_text_parts = []
            nested_blocks = []
            for child in li.children:
                if getattr(child, "name", None) in ("ul", "ol"):
                    nested_blocks.append(block_to_md(child))
                else:
                    own_text_parts.append(inline_to_md(child))
            own_text = "".join(own_text_parts).strip()
            lines.append(f"{prefix} {own_text}")
            for nb in nested_blocks:
                for nl in nb.splitlines():
                    lines.append(f"    {nl}")
        return "\n".join(lines)
    if name == "aside":
        classes = node.get("class", [])
        kind = "warning" if "warning" in classes else "tip"
        inner_lines = []
        for child in node.find_all(["p", "ul", "ol"], recursive=False):
            inner_lines.append(block_to_md(child))
        body = "\n\n".join(inner_lines)
        indented = "\n".join(f"    {l}" if l else "" for l in body.splitlines())
        return f"!!! {kind}\n{indented}"
    # fallback: treat as inline
    return inline_to_md(node).strip()


def inline_to_md_children(node) -> str:
    return "".join(inline_to_md(c) for c in node.children)


def html_to_md(html: str) -> str:
    if not html or not html.strip():
        return ""
    soup = BeautifulSoup(html, "html.parser")
    for span in soup.find_all("span"):
        span.unwrap()
    blocks = []
    for child in soup.children:
        if getattr(child, "name", None):
            md = block_to_md(child)
            if md.strip():
                blocks.append(md)
    return "\n\n".join(blocks)


def content_blocks(step):
    """Yield (title, html) for each CONTENT stepModule in a step, in order."""
    for mod in step.get("stepModule", []):
        if mod.get("type") == "CONTENT":
            c = mod.get("content", {}).get("en", {})
            if c.get("content") or c.get("title"):
                yield c.get("title", ""), c.get("content", "")


def wrap_placeholder(body: str) -> str:
    indented = "\n".join(f"    {l}" if l else "" for l in body.splitlines())
    return f'!!! note "TODO (placeholder from original guide)"\n{indented}'


def convert_guide(path: pathlib.Path, dest: pathlib.Path, skip_step_ids=frozenset(), title_prefix=None):
    data = json.loads(path.read_text())
    guide = data["content"]["guides"][0]
    lines = []
    first = True
    for step in guide["steps"]:
        if step["stepId"] in skip_step_ids:
            continue
        for title, html in content_blocks(step):
            body = html_to_md(html)
            if not body.strip():
                continue
            body = apply_replacements(body)
            title = apply_replacements(title) if title else title
            is_placeholder = any(marker in body for marker in PLACEHOLDER_MARKERS)
            if is_placeholder:
                block = wrap_placeholder(body)
            else:
                block = body
            if title and first and title_prefix is None:
                lines.append(f"# {title}\n\n{block}" if block else f"# {title}")
            elif title:
                lines.append(f"## {title}\n\n{block}" if block else f"## {title}")
            else:
                lines.append(block)
            first = False
        # media: real images get a resolvable marker; embedded code snippets
        # render as fenced code blocks; decorative icons (search/info glyphs
        # with no image/code payload) are skipped entirely.
        media = step.get("media", {}).get("en", [])
        for m in media:
            if m.get("imageId"):
                caption = apply_replacements(m.get("caption") or "")
                lines.append(f'<!-- SHIELD-IMAGE: caption="{caption}" step={step["stepId"]} imageId={m.get("imageId")} -->')
            elif m.get("mode") == "javascript" and m.get("content"):
                code = apply_replacements(m["content"])
                lines.append(f"```\n{code}\n```")
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text("\n\n".join(lines).strip() + "\n")
    print(f"wrote {dest} ({len(lines)} blocks)")


if __name__ == "__main__":
    convert_guide(RAW / "da-stonly-4-tw-assignment.json", OUT / "case-studies/acme-2024/index.md")
    convert_guide(RAW / "da-stonly-2-release-notes.json", OUT / "case-studies/acme-2024/release-notes.md")
    convert_guide(RAW / "da-stonly-3-discover.json", OUT / "case-studies/acme-2024/discover.md", skip_step_ids=EXCLUDE_STEP_IDS)
    convert_guide(RAW / "da-stonly-5-perf.json", OUT / "extras/perf-vero-board.md")
