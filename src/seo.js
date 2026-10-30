// Search and social-sharing settings. Everything here is written into the page <head>
// at build time (see vite.config.js) and into sitemap.xml / robots.txt (see scripts/prerender.mjs).
// Keep SEO.md in sync when changing anything here.
import config from '../site.config.js'
import { about, contact, gallery, hero } from './data.js'

const url = config.siteUrl.replace(/\/$/, '')
const abs = (path) => (path.startsWith('http') ? path : `${url}${path}`)

export const seo = {
  // ~60 characters: shown as the blue link in Google.
  title: 'Anne Kananu Mwenda | Former Nairobi Governor, Maara 2027',
  // ~155 characters: shown under the link in Google and in link previews.
  description:
    'Anne Kananu Mwenda, the first woman Governor of Nairobi City County (2021–2022), now seeking the Maara seat in Tharaka Nithi. Her journey, record and vision.',
  // Shorter title for WhatsApp, Facebook and X previews.
  shareTitle: 'Anne Kananu Mwenda: first woman Governor of Nairobi',
  image: '/og-image.jpg',
  imageAlt: 'Anne Kananu Mwenda, former Governor of Nairobi City County',
  imageWidth: 1200,
  imageHeight: 630,
  // Other spellings people search for. Used in structured data, not as meta keywords.
  alternateNames: ['Ann Kananu', 'Anne Kananu', 'Ann Kananu Mwenda', 'Governor Kananu'],
}

const facebook = contact.items.find((c) => c.label === 'Facebook')?.href

export function structuredData() {
  const person = {
    '@type': 'Person',
    '@id': `${url}/#person`,
    name: 'Anne Kananu Mwenda',
    givenName: 'Anne',
    familyName: 'Mwenda',
    alternateName: seo.alternateNames,
    gender: 'Female',
    nationality: { '@type': 'Country', name: 'Kenya' },
    birthPlace: { '@type': 'Place', name: 'Embu County, Kenya' },
    jobTitle: 'Former Governor of Nairobi City County',
    description: seo.description,
    image: abs(hero.photo),
    url: `${url}/`,
    knowsLanguage: about.languages.split(',').map((l) => l.trim()),
    alumniOf: [
      'Dedan Kimathi University of Technology',
      "St. Paul's University",
      'University of Nairobi',
      'Jomo Kenyatta University of Agriculture and Technology',
    ].map((name) => ({ '@type': 'CollegeOrUniversity', name })),
    hasOccupation: [
      { '@type': 'Occupation', name: 'Governor, Nairobi City County', description: '16 November 2021 to 25 August 2022' },
      { '@type': 'Occupation', name: 'Deputy Governor and Acting Governor, Nairobi City County', description: 'January 2021 to November 2021' },
      { '@type': 'Occupation', name: 'Chief Officer, Disaster Management and Coordination, Nairobi City County', description: 'May 2018 to January 2021' },
      { '@type': 'Occupation', name: 'Security Officer, Quality Control and Training, Kenya Airports Authority', description: '2005 to 2018' },
    ],
    memberOf: { '@type': 'PoliticalParty', name: 'National Economic Development Party (NEDP)' },
    sameAs: [facebook, 'https://en.wikipedia.org/wiki/Anne_Kananu'].filter(Boolean),
  }
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${url}/#website`,
        url: `${url}/`,
        name: config.siteName,
        inLanguage: 'en-KE',
        publisher: { '@id': `${url}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}/#webpage`,
        url: `${url}/`,
        name: seo.title,
        description: seo.description,
        inLanguage: 'en-KE',
        isPartOf: { '@id': `${url}/#website` },
        mainEntity: { '@id': `${url}/#person` },
        primaryImageOfPage: { '@type': 'ImageObject', url: abs(hero.photo) },
        dateModified: new Date().toISOString().slice(0, 10),
      },
      person,
    ],
  }
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Tags placed in <head>. Replaces the <!--seo-head--> marker in index.html.
export function headTags() {
  const img = abs(seo.image)
  const tags = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="author" content="${esc(config.siteName)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${url}/" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:site_name" content="${esc(config.siteName)}" />`,
    `<meta property="og:locale" content="${config.locale}" />`,
    `<meta property="og:url" content="${url}/" />`,
    `<meta property="og:title" content="${esc(seo.shareTitle)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:width" content="${seo.imageWidth}" />`,
    `<meta property="og:image:height" content="${seo.imageHeight}" />`,
    `<meta property="og:image:alt" content="${esc(seo.imageAlt)}" />`,
    `<meta property="profile:first_name" content="Anne" />`,
    `<meta property="profile:last_name" content="Mwenda" />`,
    `<meta property="profile:gender" content="female" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.shareTitle)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    `<meta name="twitter:image:alt" content="${esc(seo.imageAlt)}" />`,
    `<link rel="preload" as="image" href="${hero.photo}" fetchpriority="high" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData()).replace(/</g, '\\u003c')}</script>`,
  ]
  return tags.join('\n    ')
}

export function sitemapXml() {
  const today = new Date().toISOString().slice(0, 10)
  const images = [{ src: hero.photo, caption: seo.imageAlt }, ...gallery.filter((g) => g.src)]
  const imageTags = images
    .map((i) => `\n    <image:image><image:loc>${abs(i.src)}</image:loc></image:image>`)
    .join('')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${url}/</loc>
    <lastmod>${today}</lastmod>${imageTags}
  </url>
</urlset>
`
}

export function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${url}/sitemap.xml
`
}
