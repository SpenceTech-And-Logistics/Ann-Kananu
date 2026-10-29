// All page content lives here. Edit this file to update the site.
// Items with `placeholder: true` are shown with a "to be confirmed" marker.

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'record', label: 'Record' },
  { id: 'awards', label: 'Awards' },
  { id: 'maara', label: 'Maara' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'news', label: 'News' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  eyebrow: 'Former Governor, Nairobi City County',
  first: 'Anne',
  last: 'Kananu',
  surname: 'Mwenda',
  lede:
    'From airport security supervisor to the first woman to lead Nairobi City County. Now seeking to serve the people of Maara, Tharaka Nithi.',
  // Put a portrait in /public (for example /public/anne.jpg) and set photo: '/anne.jpg'.
  photo: '',
  photoAlt: 'Portrait of Anne Kananu Mwenda',
  badges: ['First woman Governor', 'Nairobi', 'Maara 2027'],
  strip: 'Nairobi ✦ Maara',
  seal: 'SERVICE · INTEGRITY · DELIVERY · ',
  ctas: [
    { label: 'Her journey', href: '#journey' },
    { label: 'Maara vision', href: '#maara' },
  ],
}

export const ticker = [
  'First woman Governor of Nairobi',
  '13 years at Kenya Airports Authority',
  'Chief Officer, Disaster Management',
  'Deputy Governor, January 2021',
  'Sworn in as Governor, 16 November 2021',
  'Seeking the Maara seat, Tharaka Nithi',
]

// Figures shown "as reported" in the press.
export const figures = [
  { value: 1, suffix: 'st', label: 'Woman Governor of Nairobi' },
  { value: 590, prefix: 'Sh', suffix: 'M', label: 'Bursaries, as reported' },
  { value: 24, label: 'Hospitals, with NMS, as reported' },
  { value: 520, label: 'Teachers, as reported' },
]

export const about = {
  title: 'A public servant shaped by security, discipline and service',
  paragraphs: [
    'Anne Kananu Mwenda was born in May 1980 in Embu County. She sat her KCSE in 1999 at Our Lady of Mercy Girls.',
    'Her career began at Mokir Enterprises and H. Mogambi and Company Advocates, before 13 years at Kenya Airports Authority as a security supervisor.',
    'She moved to Nairobi City Hall in 2018 as Chief Officer for Disaster Management, became Deputy Governor in January 2021, and on 16 November 2021 was sworn in as Governor, the first woman to hold the office.',
  ],
  education: [
    { year: '1999', title: 'KCSE', place: 'Our Lady of Mercy Girls' },
    { year: '2011–2012', title: 'Certificates in HR and Public Relations', place: 'University of Nairobi' },
    { year: '2013', title: 'Diploma, Criminology and Security Management', place: "St. Paul's University" },
    { year: '2016', title: 'BSc', place: 'Dedan Kimathi University of Technology' },
  ],
}

export const journey = [
  { year: '1980', title: 'Born in Embu County', text: 'Born in May 1980.' },
  { year: 'Early career', title: 'First jobs', text: 'Mokir Enterprises, then H. Mogambi and Company Advocates.' },
  { year: '13 years', title: 'Kenya Airports Authority', text: 'Security supervisor.' },
  { year: 'May 2018', title: 'Chief Officer, Disaster Management', text: 'Nairobi City Hall.' },
  { year: 'Nov 2019', title: 'Acting Chief Officer, Water', text: 'Took on the water docket in an acting role.' },
  { year: 'Jan 2021', title: 'Deputy Governor and Acting Governor', text: 'Sworn in as Deputy Governor and led the county in an acting capacity.' },
  { year: '16 Nov 2021', title: 'Governor of Nairobi', text: 'Sworn in as the first woman Governor of Nairobi City County.' },
  { year: '23 Jul 2026', title: 'Joins NEDP, eyes Maara', text: 'Joined the National Economic Development Party and said she will seek the Maara seat in Tharaka Nithi, subject to party primaries.' },
]

export const record = [
  { tag: 'Education', title: 'Bursaries and teachers', text: 'Sh590M in bursaries and 520 teachers, as reported.' },
  { tag: 'Health', title: 'Hospitals', text: '24 hospitals delivered alongside Nairobi Metropolitan Services, as reported.' },
  { tag: 'Finance', title: 'Pending bills', text: 'Ksh1.3bn in pending bills handed to NMS for settlement, as reported.' },
  { tag: 'Land', title: 'Land crackdown', text: 'Action against grabbing of public land, as reported.' },
  { tag: 'Safety', title: 'Fire stations and safe houses', text: 'Fire stations and Mji wa Huruma safe houses.', planned: true },
  { tag: 'Region', title: 'CEREB', text: 'Joined Central Region Economic Bloc governors at a meeting hosted by the British High Commissioner.' },
]

// No verified awards were found. Replace these with confirmed awards.
export const awards = [
  { year: 'Year', title: 'Award title', body: 'Awarding body', text: 'One line on what the award recognised.', placeholder: true },
  { year: 'Year', title: 'Award title', body: 'Awarding body', text: 'One line on what the award recognised.', placeholder: true },
  { year: 'Year', title: 'Award title', body: 'Awarding body', text: 'One line on what the award recognised.', placeholder: true },
]

export const quotes = [
  { text: 'Leadership is about integrity.', source: 'Anne Kananu, April 2022' },
  { text: 'Quote to be confirmed by the office.', source: 'Source and date', placeholder: true },
  { text: 'Quote to be confirmed by the office.', source: 'Source and date', placeholder: true },
]

export const maara = {
  title: 'Maara, Tharaka Nithi',
  intro:
    'On 23 July 2026 Anne Kananu said she will seek the Maara seat on a National Economic Development Party ticket, subject to party primaries.',
  partyFocus: ['Poverty eradication', 'Infrastructure', 'Jobs', 'Education', 'Clean water', 'Livelihoods'],
  plan: {
    placeholder: true,
    title: 'Her plan for Maara',
    text: 'To be provided by the office. No commitments are listed here until they are confirmed.',
  },
}

// Replace with real photos placed in /public, e.g. { src: '/gallery/1.jpg', caption: '...' }.
export const gallery = Array.from({ length: 6 }, (_, i) => ({
  src: '',
  caption: `Photo ${i + 1}, to be supplied`,
}))

export const news = [
  {
    outlet: 'The Standard, Evewoman',
    title: "Meet Nairobi's first female governor",
    url: 'https://standardmedia.co.ke/evewoman/achieving-woman/article/2001429341/ann-kananu-meet-nairobis-first-female-governor',
  },
  {
    outlet: 'The Star',
    title: 'Anne Kananu sworn in as new Nairobi governor',
    url: 'https://www.the-star.co.ke/news/2021-11-16-anne-kananu-sworn-in-as-new-nairobi-governor/',
  },
  {
    outlet: 'Nairobi City County',
    title: 'Kananu joins CEREB county heads hosted by the British High Commissioner',
    url: 'https://nairobi.go.ke/nairobi-deputy-governor-acting-governor-ann-kananu-mwenda-joins-ten-county-heads-hosted-british-high-commissioner-kenya-ms-jane-marriott-central-region-economic-bloc-cereb-governo',
  },
  {
    outlet: 'Kenyans.co.ke',
    title: 'Profile: Anne Kananu',
    url: 'https://www.kenyans.co.ke/politician/anne-kananu',
  },
  {
    outlet: 'Wikipedia',
    title: 'Anne Kananu',
    url: 'https://en.wikipedia.org/wiki/Anne_Kananu',
  },
  {
    outlet: 'The Star, 23 Jul 2026',
    title: 'Kananu joins NEDP, eyes Maara seat',
    url: '',
  },
]

export const contact = {
  items: [
    { label: 'Office', value: 'Office address to be confirmed', placeholder: true },
    { label: 'Email', value: 'Email to be confirmed', placeholder: true },
    { label: 'Phone', value: 'Phone to be confirmed', placeholder: true },
    // Set href to her Facebook page link and remove `placeholder`.
    { label: 'Facebook', value: 'Facebook page link to be added', href: '', placeholder: true },
  ],
}
