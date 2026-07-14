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
│   ├── blanco.html · reposado.html · anejo.html · mezcal.html
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

## Design system

- **Palette:** "Rose Gold & Volcanic" tokens in `css/styles.css` `:root`. Rose gold
  (#B76E79) is the only CTA color; rosewood (#7D3B42) is its hover state. No pure #000/#FFF
  anywhere. Tier coding: Blanco = sage `--agave`, Reposado = `--amber` (badges + tier only,
  never buttons), Añejo = `--rosewood`, Mezcal = `--smoke` (#6E675F, derived from charcoal).
- **Signature element (the only one):** the thin rose-gold **foil rule** — anchors the hero
  and recurs as the section divider.
- **Textures:** SVG-noise paper grain on bone sections, volcanic grain on charcoal sections
  (both ≤ 6% opacity, backgrounds only), plus an agave-fiber weave divider used sparingly
  between major sections.
- **Typography:** **Fraunces** for display, replacing the live site's Playfair Display.
  Rationale: it keeps the high-contrast serif elegance but has genuine character — optical
  sizing and slightly "wonky" letterforms that read as *crafted* rather than templated, which
  matches the small-batch positioning; Newsreader was the runner-up but reads more editorial
  than label-like. Body/utility is **Archivo**. Sentence case throughout; ALL-CAPS survives
  only in small eyebrow labels. Spanish diacritics (Añejo, piña, espadín, jimador) render
  throughout via proper UTF-8/entities.

## Copy decisions (fixing live-site errors)

- One tagline sitewide: **"Forged by nature. Grounded in tradition."** ("Where Flavor Meets
  Heritage" and variants deleted.)
- "pairing" spelled correctly throughout.
- The mezcal page lives at **`mezcal.html`** — correcting the live site's `/meczel` URL typo.
  Mezcal is never called tequila; its page opens with the one-line distinction and links to
  the educational tequila-vs-mezcal page.
- Brand story rewritten to ~110 words (≤ 150), leading with the Los Altos land and the
  growing family; the "cheeks" name explanation is exactly one sentence.
- Trust marks "NOM ____ · Distilled at ____, Jalisco" appear on every product page, the
  Land & Family page, and the footer — fill in the real numbers before launch.
- All CTAs are specific verbs ("Shop Añejo", "Read the process", "Find a bottle").

## ⚠️ Open items / flags

- **Asset calibration (Step 0, unfinished):** the brief calls for checking the palette
  tokens against the bottle/label photos in `/assets`, but no `/assets` folder or photos
  exist in this repo yet. Tokens are left exactly as calibrated against the live rendered
  site. **When label photos land, drop them in `/assets`, compare against the token table in
  the brief, and adjust only if a label color clearly conflicts.**
- **Social-handle mismatch:** the mockup standardizes on **@mejillastequila** everywhere to
  match the domain. The live site's social links appear to use a differently spelled handle —
  verify the real account names and either rename the accounts or update the footer before
  launch.
- Placeholders awaiting real content: bottle/label photography (SVG silhouettes stand in),
  prices, NOM + distillery numbers, award medals & press logos (proof section slots),
  verified customer quotes, retail locator data, press kit, shipping states, and
  counsel-reviewed legal copy.
- Forms (email capture, locator, contact) are non-functional mocks — they acknowledge
  inline and submit nowhere.

## Quality floor covered

Responsive to 375px · visible `:focus-visible` states · `prefers-reduced-motion` respected ·
semantic HTML with skip links and labeled nav regions · alt text (or `role="img"` +
`aria-label`) on every image placeholder · no lorem ipsum — all copy is real draft copy.
