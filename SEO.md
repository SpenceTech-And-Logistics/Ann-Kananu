# SEO tracker: Anne Kananu Mwenda site

Living record of the site's search and sharing setup. Update the **Change log** and **To do** every time content or SEO changes.

## Where things live

| What | File |
| --- | --- |
| Site address (used in every absolute link) | `site.config.js` → `siteUrl` |
| Page title, description, share title, share image, other name spellings | `src/seo.js` → `seo` |
| Structured data about her (Google "knowledge" facts) | `src/seo.js` → `structuredData()` |
| Tags written into `<head>` | `src/seo.js` → `headTags()`, injected by `vite.config.js` |
| Pre-rendered HTML, `sitemap.xml`, `robots.txt` | `scripts/prerender.mjs` (runs inside `npm run build`) |
| Share image (1200 × 630) | `public/og-image.jpg` |
| Icons and manifest | `public/favicon.svg`, `public/apple-touch-icon.png`, `public/site.webmanifest` |

Most SEO text is built from `src/data.js`, so content edits there flow into the structured data and sitemap on the next deploy.

## What is in place

- **Title (~60 chars):** Anne Kananu Mwenda | Former Nairobi Governor, Maara 2027
- **Description (~155 chars):** first woman Governor of Nairobi (2021–2022), now seeking the Maara seat in Tharaka Nithi.
- **Pre-rendering:** the full page text is in the HTML, so Google, Bing, WhatsApp, Facebook and X see it without running JavaScript.
- **Canonical URL**, `robots` meta (index, follow, large image previews), `lang="en-KE"`.
- **Open Graph and X (Twitter) cards:** profile type, 1200 × 630 share image with alt text.
- **Structured data (JSON-LD):** `WebSite`, `ProfilePage` and `Person` with roles and dates, education, languages, birthplace, party (UDA), and `sameAs` links (Facebook, Wikipedia).
- **Alternate spellings** in structured data: Ann Kananu, Anne Kananu, Ann Kananu Mwenda, Governor Kananu.
- **Sitemap** with the portrait and all 16 gallery photos as image entries; **robots.txt** pointing to it.
- **Images:** descriptive alt text on the portrait and every gallery photo; portrait preloaded for a faster first paint; gallery thumbnails lazy-loaded.
- **Headings:** one `<h1>` (her name, readable by screen readers and crawlers despite the letter animation), `<h2>` per section.

## Target searches

Primary: *Anne Kananu*, *Ann Kananu*, *Anne Kananu Mwenda*, *Kananu Maara*, *Maara MP candidate 2027*.
Secondary: *first woman governor Nairobi*, *former Nairobi governor*, *UDA Maara*, *Tharaka Nithi Maara aspirant*.

## To do

- [x] **Live address confirmed (2026-11-05):** `https://ann-kananu.spencetechandlogistics.workers.dev`. If a custom domain is added, change `siteUrl` in `site.config.js` and redeploy.
- [ ] Add the site to **Google Search Console** and **Bing Webmaster Tools**, and submit `/sitemap.xml`.
- [ ] Check the share preview with the **Facebook Sharing Debugger** and a WhatsApp test message.
- [ ] Add the site link to her **Facebook page** "About" section (strongest signal tying the site to her).
- [ ] Add more `sameAs` profiles (X, Instagram, YouTube, TikTok, LinkedIn) as soon as the links are given; fill the same links in `social` in `src/data.js`.
- [ ] Replace placeholder awards and quotes; real content adds searchable text.
- [ ] Add her own Maara plan; that section is the most likely landing point for *Maara* searches.
- [ ] Gallery captions: add place and date once known (for example "Hamper drive, Embakasi, Dec 2021").
- [ ] Optional: a custom domain (for example `annekananu.co.ke`) ranks and shares better than a workers.dev address.

## How to check after a deploy

1. View page source on the live site: the `<title>`, description and full section text should be visible.
2. Open `/sitemap.xml` and `/robots.txt` on the live site.
3. Paste the address into Google's **Rich Results Test** to confirm the structured data reads correctly.
4. Paste it into the Facebook Sharing Debugger and press **Scrape again** after any change to the title, description or share image.

## Change log

| Date | Change |
| --- | --- |
| 2026-11-05 | Journey card and About bio: acting role now reads "Acting Chief Officer, Agriculture, Water, Energy and Sanitation". |
| 2026-11-05 | "Subject to party primaries" removed from the Journey card and Maara section. |
| 2026-11-05 | Party corrected from NEDP to UDA in the Journey card, Maara section and Person `memberOf`; Maara chips heading now "Areas of focus". Target search updated to *UDA Maara*. |
| 2026-11-05 | About: birth paragraph removed; KAA and Nairobi City County paragraphs merged into the lead bio (one paragraph, also the Person `description`). |
| 2026-11-05 | About: new lead bio paragraph (first woman and third Governor of Nairobi, KAA background). Same text now used as the Person `description` in structured data. |
| 2026-11-05 | News: The Star (23 Jul 2026) article removed; photos removed from news cards (her photos are for the gallery only). Live address confirmed. |
| 2026-11-02 | News section rebuilt as photo cards (her own photos, with alt text), titles reworded, dates added, newest first. The Star (23 Jul 2026) link added; Citizen Digital story added; Wikipedia moved out of News (still in `sameAs`). Postal address, email and phone removed from Contact and footer. |
| 2026-11-02 | Journey timeline reordered newest first; "Born in Embu County" entry removed. No change to tags or structured data (birthplace kept in Person data). |
| 2026-10-30 | Initial SEO setup: titles and descriptions, Open Graph and X cards, share image, JSON-LD (WebSite, ProfilePage, Person), pre-rendered HTML, sitemap with image entries, robots.txt, icons and manifest, screen-reader-safe animated heading. |
