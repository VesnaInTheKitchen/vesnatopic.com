# Notes for Claude Code

Context for future sessions in this repo. Read this before making changes.

## What this is

Single-page site for **Sir Henry Collective** (Vesna Topić's brand umbrella). Live at <https://vesnatopic.com>. See `README.md` for the full overview.

## Hard rules

- **Dutch copy is canonical.** Don't translate or rewrite the Dutch text in section components unless explicitly asked. Phrases like "Van tent tot servet", "Minder vlees. Meer smaak. Meer impact.", "Wat maak ik?", "Sinds 1994", "Bedrijfshoreca" are intentional brand voice.
- **Brand wordmark is lowercase** ("sir henry collective") in the Footer. Nav uses title case ("Sir Henry Collective"). Hero typography uses ALL CAPS "SIR HENRY" + italic "Collective". These are deliberate.
- **Founding year 1994** is real, not a typo.
- **Don't add a CTA button to the nav** — the 5 hero arms are the navigation surface; nav is just brand + anchor links.
- **Don't touch email DNS records** on Hostinger (MX, SPF, DKIM, DMARC, autodiscover, autoconfig). They look unused but removing them would break email if Vesna ever activates it.
- **Don't touch the `menu` subdomain DNS records** — reserved for the future Menu Builder PWA.

## Workflow

```bash
cd site
npm run dev          # local preview at localhost:5173
npm run build        # verify TS + build before pushing
```

Push to `main` on GitHub auto-deploys to Netlify. Repo: <https://github.com/VesnaInTheKitchen/vesnatopic.com>.

## Visual system

- **Palette** (in `site/tailwind.config.ts`): bg `#131110`, bg2 `#1c1916`, foreground `#e2dcd4`, muted `#8a8078`, accent `oklch(0.52 0.07 32)` (terracotta), line `rgba(226,220,212,0.12)`.
- **Fonts** (in `site/src/styles/fonts.css`): Bebas Neue (display), Cormorant Garamond (serif italic for pull-quotes + nav links), Inter (small UI).
- **Reveal-on-scroll**: any element with class `reveal` fades up when crossing 88vh. `Section.tsx` wires the listener; `reveal-d1`/`reveal-d2`/`reveal-d3` are stagger delays.
- **Custom cursor**: only mounts on `(hover: hover)` devices. Don't disable globally.
- **Particle constellation**: 90 dots + 5 anchors, mouse-attraction at distance 0.18, pauses on `document.hidden`. Keep these tunings — they were dialed in.

## Image conventions

- Catering hero: 4:3, dark/moody portrait
- Studio hero: 4:3, can use `objectPosition` prop on `Section` to bias the crop
- Studio gallery: 3:4 portrait thumbs in 2-col mobile / 3-col desktop grid
- Kitchen hero: 4:3
- Kitchen kicker: 16:9 full-width below the lists
- All images go in `site/public/images/<section>/`. Use lowercase, hyphens, no spaces.

## Common gotchas

- **`.jpeg` vs `.jpg`**: macOS exports default to `.jpeg`. Components reference `.jpg`. Always rename on import: `mv foo.jpeg foo.jpg`.
- **Vite dev server hot-reload sometimes misses image renames** — hard reload (Cmd+Shift+R) clears it.
- **TypeScript build runs in `npm run build`** via `tsc -b && vite build`. Don't skip the build before pushing — Netlify will fail loudly otherwise.

## Deploy / DNS quick facts

- Netlify site: `frabjous-piroshki-236e96.netlify.app`
- DNS host: Hostinger (nameservers unchanged)
- Apex A record: `75.2.60.5`
- `www` CNAME: `frabjous-piroshki-236e96.netlify.app`
- HTTPS + force-redirect to apex: enabled

## What's NOT done yet

- Menu Builder PWA (planned, separate repo + Netlify site, see README)
- og-image.jpg dedicated social card (currently uses the catering hero photo)
- Favicon is a minimal "SH" wordmark — could be upgraded to a custom mark later
