# Mejillas Tequila — Site Refresh Mockup

A complete multi-page static mockup (plain HTML + CSS, no build tools) of a refreshed
mejillastequila.com. This is a **design mockup** for review and hand-off to a Squarespace
designer — not production code.

## How to view

Open `index.html` in any browser. Every page is a flat file in the repo root, so all links
work from `file://` with no server. (Web fonts load from Google Fonts; offline, the pages
fall back to system serif/sans.)

## What it delivers (per the brief)

1. **Architecture** — hub-and-spoke sitemap (jimbeam.com model): products in persistent nav,
   every page reachable in two clicks.
2. **Flow** — conversion-first homepage (mijenta-tequila.com model): shoppable hero, product
   grid, story band, pillars, proof, cocktails teaser, buy band, email capture, footer — in
   that exact order.
3. **Brand communication** — premium craft positioning: Los Altos sourcing, resilience
   narrative, NOM/distillery transparency trust marks.

## Sitemap

```
index.html (Home)
├── tequilas.html (hub)
│   ├── blanco.html · reposado.html · anejo.html (Extra Añejo) · mezcal.html
├── our-story.html (hub)
│   ├── land-and-family.html · process.html · tequila-vs-mezcal.html
├── cocktails.html (6 recipe cards with pairings)
├── where-to-buy.html (store CTA + locator placeholder)
├── contact.html (contact / press / wholesale)
└── privacy.html · terms.html · shipping-refunds.html (legal placeholders)
```

Shared on every page: persistent nav (Tequilas ▾ | Our Story ▾ | Cocktails | Where to Buy |
Contact), age-gate overlay (birth-year entry, `sessionStorage`, session-scoped only), and a
fully wired footer.

## Step 0 — Asset calibration (COMPLETE)

Assets were pulled from the live site (Squarespace CDN) into `/assets` and the palette was
checked against the actual bottle labels, per the brief's rule that **the bottles are the
fixed point**. One change was required:

> **The signature accent was recalibrated from pink rose gold `#B76E79` to label copper
> `#BE8E71`.** The brand's logo lockup and all four bottle labels print the agave mark and
> wordmark in a warm copper foil — sampled at `#BF9274` (light) / `#A87858` (dark) from the
> logo asset and the lineup labels. The live site's UI pink `#B76E79` visibly clashes with
> that copper when a real bottle photo sits next to a CTA. Its dark companion `--rosewood`
> moved accordingly (`#7D3B42` wine → `#8A5F44` bronze), and the foil-rule gradient was
> re-tinted to match. Token names were kept (`--rosegold`, `--rosewood`) to avoid churn.

No other token conflicted: the label black (`#100C0A`–`#141109`) sits comfortably under our
warmed charcoal `#1A1714`; bone, agave/sage, amber, and smoke are design choices with no
label counterpart.

## Assets (`/assets`, sourced from the live site)

| File | What it is / where it's used |
|---|---|
| `mark-agave.png` | Copper agave mark, background keyed out — header, footer, age gate |
| `logo-lockup.webp` | Full logo (agave + MEJILLAS + "Bésame.") — reference, unused in pages |
| `bottles-lineup.webp` | All four bottles — Tequilas hub hero, Where to Buy |
| `bottle-{blanco,reposado,extra-anejo,mezcal}.webp` | Single-bottle crops from the lineup — heroes + product cards |
| `promo-{blanco,reposado,mezcal}.webp` | Event/promo shots — product pages |
| `founders-edition.webp` | Extra Añejo Founder's Edition + cocktail — Extra Añejo page, Cocktails hero |
| `mezcal-pour.webp` | Mezcal being poured — Mezcal page, Tequila vs Mezcal |
| `barrels-branded.webp` | MEJILLAS 2026 branded barrels — Our Story, Process |
| `barrel-warehouse.webp` | Aging warehouse aisle — Process, Land & Family |
| `event-bar-team.webp` | Team pouring at an event — Contact/Press |
| `event-tasting-bar.webp` | Event bar photo — spare, unused |

Files are WebP (as served by the Squarespace CDN). No photo of agave fields or the growing
family exists on the live site, so those two slots on Land & Family remain styled
placeholders rather than faking it with an unrelated image.

## Design system

- **Palette:** "Copper & Volcanic" tokens in `css/styles.css` `:root` (see calibration note
  above). Copper (`--rosegold #BE8E71`) is the only CTA color; bronze (`--rosewood #8A5F44`)
  is its hover state. No pure #000/#FFF anywhere. Tier coding: Blanco = sage `--agave`,
  Reposado = `--amber` (badges + tier only, never buttons), Extra Añejo = `--rosewood`,
  Mezcal = `--smoke` (#6E675F, derived from charcoal).
- **Signature element (the only one):** the thin copper **foil rule** — anchors the hero and
  recurs as the section divider, echoing the label's foil printing.
- **Textures:** SVG-noise paper grain on bone sections, volcanic grain on charcoal sections
  (both ≤ 6% opacity, backgrounds only), plus an agave-fiber weave divider used sparingly.
- **Typography:** **Fraunces** for display, replacing the live site's Playfair Display.
  Rationale: it keeps the high-contrast serif elegance but has genuine character — optical
  sizing and slightly "wonky" letterforms that read as *crafted* rather than templated, which
  matches the small-batch positioning; Newsreader was the runner-up but reads more editorial
  than label-like. Body/utility is **Archivo**. Sentence case throughout; ALL-CAPS survives
  only in small eyebrow labels. Spanish diacritics (Añejo, piña, espadín, jimador) render
  throughout.

## Copy decisions (fixing live-site errors — all verified against the live site)

- One tagline sitewide: **"Forged by nature. Grounded in tradition."**
- "pairing" spelled correctly — the live site's `/signature-cocktail-paring` URL and page
  title carry the "paring" typo (confirmed).
- The mezcal page lives at **`mezcal.html`** — the live site's `/meczel` URL typo is
  confirmed real (page title "Meczel"). Mezcal is never called tequila; its page opens with
  the one-line distinction.
- **The flagship is "Extra Añejo", not "Añejo."** The live site's nav and URL say "Anejo,"
  but the bottle label reads EXTRA ANEJO and the live copy says it is "matured for years in
  select barrels." The mockup follows the bottle (naming, aging copy, and the
  `anejo.html` filename kept for the brief's sitemap). If the team actually sells a standard
  añejo, revert the naming and the aging copy together.
- Brand story rewritten to ~110 words (≤ 150), leading with the Los Altos land and the
  growing family; the "cheeks" name explanation is exactly one sentence.
- Trust marks "NOM ____ · Distilled at ____, Jalisco" on every product page, Land & Family,
  and the footer — fill in the real numbers before launch.
- All CTAs are specific verbs ("Shop Extra Añejo", "Read the process", "Find a bottle").

## ⚠️ Open items / flags

- **Social-handle mismatch (confirmed):** the live site links Instagram and Facebook as
  **`mejillastequilla`** (double-L) but X as **`mejillastequila`** (single-L, matching the
  domain). The mockup standardizes on `@mejillastequila`; either rename the IG/FB accounts
  or update the footer, but pick one spelling everywhere.
- **"Bésame."** appears as a script tagline inside the logo lockup and on every label. Per
  the brief there is one site tagline, so the mockup never sets "Bésame." as copy — but it
  is visible inside the label photography. The team should decide whether it's a label-only
  mark or belongs in the brand voice.
- Placeholders awaiting real content: prices, NOM + distillery numbers, award medals & press
  logos (proof slots), verified customer quotes, agave-field and family photography, retail
  locator data, press kit, shipping states, and counsel-reviewed legal copy.
- Forms (email capture, locator, contact) are non-functional mocks.

## Quality floor covered

Responsive to 375px · visible `:focus-visible` states · `prefers-reduced-motion` respected ·
semantic HTML with skip links and labeled nav regions · descriptive alt text on every real
image and `role="img"` + `aria-label` on remaining placeholders · no lorem ipsum — all copy
is real draft copy.
