# Anne Kananu Mwenda: single-page site

Animated single-page site for Anne Kananu Mwenda, former Governor of Nairobi City County.
Built by SpenceTec and Logistics Limited.

React 19 + Vite, deployed on Cloudflare Workers (static assets with single-page fallback).

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
npx wrangler deploy
```

`wrangler.jsonc` serves `dist/` and falls back to `index.html` for every route.

## Editing content

All page text lives in `src/data.js`. Site-wide settings (name, footer credit) are in `site.config.js`.

- **Hero portrait:** put the file in `public/` (for example `public/anne.jpg`) and set `hero.photo: '/anne.jpg'`.
  The photo sits in a leaf-shaped frame (two opposite corners rounded wide, two tight). Change the shape with `--leaf` in `src/styles.css`.
- **Gallery:** put photos in `public/gallery/` and set each `src` and `caption`.
- **Awards, quotes, Maara plan, contact details, Facebook link:** entries marked `placeholder: true` show a "To be confirmed" tag. Replace the text and remove the flag.

## Sections

Hero, ticker, Figures, About, Journey, Record, Awards, Quotes, Maara, Gallery, In the news, Contact, footer.

Motion: split-letter headline, pointer spotlight, floating badges, rotating seal, ticker, count-up figures,
scroll-filling timeline, tilt cards, quote swap, gallery lightbox, spinning medal on award cards.
All motion is switched off for visitors who prefer reduced motion.

## Content notes

- Main source: her CV (14 May 2025): roles and dates, achievements, education, professional training, contact details.
- Other sources: Wikipedia, Nairobi City County, The Standard, The Star, Citizen Digital, People Daily, Kenyans.co.ke.
- The bursary, teacher, hospital and pending-bill figures are as reported in the press.
- The constituency is spelt Maara (Citizen, Capital FM); The Star used "Mara".
- No verified awards were found; the three award cards are placeholders.
- No campaign promises are invented. The Maara section shows the party's stated focus and a placeholder for her own plan.
- Family and personal details (including marital status) and the CV's referees are left out on purpose.

## Still needed from the office

Portrait and photos, verified awards, her own plan for Maara,
the two quotes still marked as placeholders, and confirmation of the press-reported figures.
