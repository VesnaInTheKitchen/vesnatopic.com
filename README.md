# vesnatopic.com

Single-page site for **Sir Henry Collective** — Vesna Topić's multi-brand creative collective: SH Catering, SH Studio (meubels & krijtverf), Vesna in de keuken (plantaardig lunchconcept), with a Menu Builder PWA planned.

Live: <https://vesnatopic.com>

---

## Tech stack

- **React 19** + **Vite** + **TypeScript**
- **TailwindCSS 4**
- **Bebas Neue** (display) + **Cormorant Garamond** (italic serif) + **Inter** (body)
- HTML Canvas particle constellation (hero background)
- Custom cursor, grain overlay, marquee, scroll-reveal — pure CSS + small `useEffect` hooks
- **Netlify** auto-deploy from `main`

---

## Local development

```bash
cd site
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to site/dist
```

Source lives in `site/src/`. Public assets (favicon, robots, sitemap, images) in `site/public/`.

---

## Deploy

Pushing to `main` on GitHub triggers an automatic Netlify build.

```bash
git add .
git commit -m "your message"
git push
```

Netlify config is at the repo root (`netlify.toml`):
- base directory: `site`
- build command: `npm run build`
- publish directory: `dist` (resolved relative to base → `site/dist`)

Manual deploy (if needed): `cd site && npx netlify deploy --prod`

---

## Project structure

```
vesnatopic.com/
├── netlify.toml              # Netlify build config
├── README.md
├── CLAUDE.md                 # Notes for Claude Code sessions
└── site/
    ├── index.html            # SEO meta + JSON-LD LocalBusiness schema
    ├── public/
    │   ├── favicon.svg
    │   ├── robots.txt
    │   ├── sitemap.xml
    │   └── images/
    │       ├── catering/     # sh-catering.jpg
    │       ├── studio/       # 6 furniture pieces
    │       └── kitchen/      # vesna-ricotta-bread, vesna-bowl-strawberry
    └── src/
        ├── App.tsx           # Top-level layout
        ├── components/
        │   ├── Hero.tsx              # Typographic stack + 5 arms + particle bg
        │   ├── ParticleConstellation.tsx
        │   ├── HeroLines.tsx         # SVG diagonals to arms
        │   ├── HeroArms.tsx          # 5 nav arms around hero
        │   ├── CustomCursor.tsx      # Desktop only, dot + ring
        │   ├── GrainOverlay.tsx
        │   ├── Marquee.tsx
        │   ├── Nav.tsx               # Fixed top
        │   ├── Section.tsx           # Generic two-col hero w/ image
        │   ├── CateringSection.tsx
        │   ├── StudioSection.tsx
        │   ├── KitchenSection.tsx
        │   ├── MenuBuilderSection.tsx
        │   ├── ContactSection.tsx
        │   └── Footer.tsx
        ├── styles/
        │   ├── fonts.css     # Google Fonts import
        │   └── theme.css     # All keyframes + utility classes
        └── index.css         # Tailwind base + body palette
```

---

## Common edits

### Change text in a section
Edit the relevant component in `site/src/components/`. Each section keeps its Dutch copy as plain text (or in a small `const` array at the top of the file). Push to `main` → live in ~1 min.

### Swap a photo
1. Drop the new image into `site/public/images/<section>/`
2. Update the `src` prop in the section's component (`CateringSection.tsx`, `StudioSection.tsx`, `KitchenSection.tsx`)
3. Use a 4:3 dark/moody photo for the hero image, 16:9 for the kitchen kicker, 3:4 for studio gallery thumbs

### Adjust the palette
Edit `site/tailwind.config.ts` colors. Then anywhere using `bg-background`, `text-foreground`, `text-muted`, `text-accent`, `border-line` will pick it up.

### Update SEO / JSON-LD
Edit `site/index.html`. The JSON-LD `LocalBusiness` block contains contact info, founding year, brands.

---

## DNS architecture

- **Domain registrar + DNS host:** Hostinger (nameservers stay on Hostinger)
- **Web hosting:** Netlify (`frabjous-piroshki-236e96.netlify.app`)
- Apex `vesnatopic.com` → A record `75.2.60.5` (Netlify load balancer)
- `www.vesnatopic.com` → CNAME `frabjous-piroshki-236e96.netlify.app` (redirects to apex)
- Email records (MX, SPF, DKIM, DMARC, autodiscover, autoconfig) stay on Hostinger

**Don't touch** the email-related records or the `menu` subdomain records when editing DNS.

---

## Future: Menu Builder PWA

Subdomain `menu.vesnatopic.com` already has DNS records on Hostinger (currently pointing to Hostinger hosting). When ready:

1. Build the PWA in a separate repo (e.g. `VesnaInTheKitchen/menu-builder`)
2. Deploy as a **separate Netlify site**
3. In Hostinger DNS, replace the `menu` A/AAAA records with a CNAME to the new Netlify site

Keeping it as a separate site avoids triggering double builds on every push.

---

## Contact info baked into the site

Used in `ContactSection.tsx` and `index.html` JSON-LD:

- Email: `info@vesnatopic.com`
- WhatsApp: `+31 6 25407828`
- Instagram: [@vtopic](https://www.instagram.com/vtopic)
- Facebook: [share/1AUDvvBK83](https://www.facebook.com/share/1AUDvvBK83/)

Founding year 1994 is a brand fact (not a typo) and appears in the marquee, nav brand line, and footer meta.
