# KB Stack Detector

KB Stack Detector is an open-source Chrome extension. It shows what a help center, knowledge base, or docs site is built on. It works like Wappalyzer, with more than 100 technologies chosen for the support and docs stack.

[:fontawesome-brands-github: Get it on GitHub](https://github.com/iiimonfiiire/kb-stack-detector){ .md-button }

## What it detects

Click the toolbar icon on any docs site to see these layers:

- **Knowledge base platform** – Zendesk Guide, Intercom Articles, GitBook, Mintlify, ReadMe, Confluence, and many others.
- **AI and search** – Algolia DocSearch, Inkeep, Kapa.ai, Coveo, and generic "Ask AI" buttons.
- **Chat and ticketing** – Intercom Messenger, Zendesk Web Widget, Drift, Crisp, and ticket-form links.
- **Hosting and frameworks** – Cloudflare, Vercel, Netlify, Next.js, Astro, and more.
- **Analytics and feedback** – GA4, Segment, Hotjar, Pendo, PostHog, and article-rating widgets.
- **AI-readiness** – `robots.txt` rules per AI crawler, `llms.txt`, `sitemap.xml`, and JSON-LD types.
- **Content structure** – Categories, sections, linked articles, languages, and versioning on the current page.

## Custom domains reveal the vendor

A custom domain such as `help.example.com` often hides the vendor. Its DNS CNAME usually points to the vendor anyway, for example `example.zendesk.com`. The extension follows that chain to name the platform.

## Results show their evidence

Each match lists the signals that fired and a confidence level of high, medium, or low. A wrong "high" costs more trust than an honest "Unknown platform", so the rules favor accuracy over coverage.

When no rule matches, the popup shows raw clues. These include the generator tag, the CNAME chain, and third-party script hosts. A contributor can turn those clues into a new rule in one JSON file.

Some features stay undetected on purpose. Intercom Fin and Zendesk AI agents appear in the language files of every help center on those platforms. They appear whether the feature is on or not. No passive signal can confirm them, so the extension does not guess.

## Privacy

The extension runs only when you click its icon. It has no content scripts, no storage, no history, and no telemetry.

A scan makes these requests:

- **The current site** – A `HEAD` request and four well-known files, all without cookies.
- **Cloudflare's public DNS resolver** – The hostname and its CNAME targets, for the custom domain lookup. Paths are never sent.

The [privacy section of the README](https://github.com/iiimonfiiire/kb-stack-detector#privacy) lists every request.

## Why this matters for knowledge teams

- **Platform research** – See what comparable docs sites run on before you choose or migrate a platform.
- **AI-readiness checks** – See which AI crawlers a site allows, and whether it publishes `llms.txt`.
- **Stack mapping** – See the search, chat, and analytics tools around a help center in one view.

This page follows [Signal](style-as-code.md), and PAKT checked it before it went live.

## Install it

The extension is free under the MIT License, and you load it directly from the repository:

1. Clone or download the [repository](https://github.com/iiimonfiiire/kb-stack-detector).
2. Open `chrome://extensions`, and switch on **Developer mode**.
3. Click **Load unpacked**, and select the repository folder.
4. Open a help center, and click the extension icon.

[:fontawesome-brands-github: Get it on GitHub](https://github.com/iiimonfiiire/kb-stack-detector){ .md-button }
