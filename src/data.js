// All page content lives here. Edit this file to update the site.
// Main source: her CV (14 May 2025). Press figures are marked "as reported".
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
    'Over 17 years in public and private service, from airport security to the first woman to lead Nairobi City County. Now seeking to serve the people of Maara, Tharaka Nithi.',
  // Portrait file lives in /public.
  photo: '/anne-kananu.jpg',
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
  'Governor, 16 Nov 2021 to 25 Aug 2022',
  'Signed the Nairobi SGBV Bill into law',
  '4 fire stations built',
  'Champion of the Nairobi Risk Hub',
  '13 years in aviation security at Kenya Airports Authority',
  'BSc Criminology and Security Management',
  'Seeking the Maara seat, Tharaka Nithi',
]

export const figures = [
  { value: 1, suffix: 'st', label: 'Woman Governor of Nairobi' },
  { value: 17, suffix: '+', label: 'Years in public and private service' },
  { value: 4, label: 'Fire stations built' },
  { value: 590, prefix: 'Sh', suffix: 'M', label: 'Bursaries, as reported' },
]
export const figuresNote = 'Bursary figure as reported in the press. Other figures from her CV.'

export const about = {
  title: 'A public servant shaped by security, discipline and service',
  // Lead paragraph, shown first in larger type. Also used as her description for search engines.
  intro:
    'Ann Kananu Mwenda is a Kenyan public administrator and former Governor of Nairobi City County, recognised as the first woman to hold the office. She served as Nairobi’s third Governor from 16 November 2021 to 25 August 2022, having previously served as Deputy Governor from January 2021 and as Chief Officer for Disaster Management and Coordination, where she championed the Nairobi Risk Hub to sharpen disaster policy and also held acting roles for Water, Energy and Sanitation and for Agriculture. Her professional background includes 13 years at the Kenya Airports Authority, where she worked as a Security Supervisor responsible for quality control and training, checking airport security against ICAO Annex 17 and the national civil aviation security programme, and training airport staff and partner agencies. Her career spans county leadership, public administration, security management and emergency coordination, marking a significant milestone for women’s representation in Kenya’s capital.',
  // Extra paragraphs after the lead, in normal type. Leave empty for none.
  paragraphs: [],
  values: ['Integrity', 'Self-motivated', 'Team player', 'Works under pressure', 'Clear communicator'],
  languages: 'English, Swahili',
  education: [
    { year: 'From May 2025', title: 'MSc Leadership and Governance (ongoing)', place: 'Jomo Kenyatta University of Agriculture and Technology' },
    { year: '2014–2016', title: 'BSc Criminology and Security Management', place: 'Dedan Kimathi University. Forensic and Criminal Investigation, Second Class Upper' },
    { year: '2013', title: 'Diploma, Criminology and Security Management', place: "St. Paul's University" },
    { year: '2012', title: 'Certificate in Public Relations', place: 'University of Nairobi' },
    { year: '2011', title: 'Certificate in Human Resource Management', place: 'University of Nairobi' },
    { year: '2001–2002', title: 'Computer packages', place: 'AMS College of Banking and Management' },
    { year: '1996–1999', title: 'KCSE', place: 'Our Lady of Mercy High School, Magundu' },
  ],
  training: [
    { year: '2017', course: 'MANPADS training', org: 'Man Portable Air Defense Systems' },
    { year: '2017', course: 'Female screening', org: 'US Department of Homeland Security' },
    { year: '2017', course: 'Incident Command System', org: 'Humanitarian Peace Support School' },
    { year: '2016', course: 'National Inspectors Course', org: 'ICAO' },
    { year: '2016', course: 'Active shooter and hostage taking', org: 'Humanitarian Peace Support School' },
    { year: '2016', course: 'Quality Control in Civil Aviation', org: 'US Department of Homeland Security' },
    { year: '2015', course: 'Mines and Improvised Explosive Devices', org: 'Humanitarian Peace Support School' },
    { year: '2013', course: 'ICAO National Instructors Course', org: 'Airports Company South Africa' },
    { year: '2012', course: 'Basic Wellness Champions', org: 'Kenya HIV/AIDS Business Council' },
    { year: '2012', course: 'STP 123 Cargo and Mail', org: 'ICAO' },
    { year: '2011', course: 'Emergency Preparedness and Response', org: 'ICAO' },
    { year: '2011', course: 'Workplace HIV/AIDS Peer Education', org: 'Kenya HIV/AIDS Business Council' },
    { year: '2008', course: 'Screener Certification', org: 'ICAO' },
    { year: '2007', course: 'X-ray and Advanced X-ray Screeners', org: 'UK Department for Transport' },
    { year: '2007', course: 'Change Management', org: 'Outward Bound Trust Kenya' },
    { year: '2006', course: 'AVSEC Supervisors Course', org: 'ICAO' },
    { year: '2005', course: 'Basic Paramilitary, Access Control and Screening', org: 'KWS Field Training School, Manyani' },
  ],
}

// Newest first.
export const journey = [
  { year: '23 Jul 2026', title: 'Joins UDA, eyes Maara', text: 'Joined the United Democratic Alliance (UDA) and said she will seek the Maara seat in Tharaka Nithi.' },
  { year: 'May 2025', title: 'MSc Leadership and Governance', text: 'Began a master’s degree at Jomo Kenyatta University of Agriculture and Technology.' },
  { year: '16 Nov 2021', title: 'Governor of Nairobi', text: 'Sworn in as the first woman Governor of Nairobi City County. Served until 25 August 2022.' },
  { year: 'Jan 2021', title: 'Deputy Governor and Acting Governor', text: 'Signed the SGBV Bill into law and launched free ECDE funds.' },
  { year: 'Nov 2019', title: 'Acting Chief Officer, Water, Energy and Sanitation', text: 'Held alongside disaster management, as well as an acting role for Agriculture.' },
  { year: 'May 2018', title: 'Chief Officer, Disaster Management and Coordination', text: 'Nairobi City County. Built fire stations, recruited fire officers and championed the Nairobi Risk Hub.' },
  { year: '2005–2018', title: 'Kenya Airports Authority', text: 'Security officer in charge of quality control and training: audits, inspections, ICAO compliance and security awareness training.' },
]

export const record = [
  { tag: 'Safety', title: 'Fire stations', text: 'Built four fire stations to cut response times, and recruited fire officers and county security constables.' },
  { tag: 'Safety', title: 'Nairobi Risk Hub', text: 'Championed the Risk Hub to refine disaster management policy, with risk assessments and emergency response plans.' },
  { tag: 'Justice', title: 'SGBV law', text: 'Signed the Sexual and Gender Based Violence Bill into law to speed up efforts to end gender-based violence in Nairobi.' },
  { tag: 'Education', title: 'Free ECDE and bursaries', text: 'Launched free ECDE funds. Sh590M in bursaries and 520 teachers, as reported. New classrooms and learning materials.' },
  { tag: 'Transport', title: 'Green Park Terminus', text: 'Launched the NMS Green Park Bus Terminus to ease traffic congestion in the city.' },
  { tag: 'Health', title: 'Hospitals', text: 'Equipped hospitals and added health workers. 24 hospitals delivered with NMS, as reported.' },
  { tag: 'City services', title: 'Roads, water and waste', text: 'Better garbage collection, rehabilitated and new roads, and new boreholes and repaired water pipes.' },
  { tag: 'Finance', title: 'Pending bills', text: 'Ksh1.3bn in pending bills handed to NMS for settlement.' },
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
    'On 23 July 2026 Anne Kananu said she will seek the Maara seat on a United Democratic Alliance (UDA) ticket.',
  partyFocus: ['Poverty eradication', 'Infrastructure', 'Jobs', 'Education', 'Clean water', 'Livelihoods'],
  plan: {
    placeholder: true,
    title: 'Her plan for Maara',
    text: 'To be provided by the office. No commitments are listed here until they are confirmed.',
  },
}

// Photos live in /public/gallery as NN.jpg (full size) and NN-thumb.jpg (grid).
// `size` sets the tile shape: 'big' (2×2), 'wide' (2×1), 'tall' (1×2) or '' (1×1).
const photos = [
  ['Sharing food hampers with elderly residents', 'big'],
  ['Addressing families at a food distribution', 'tall'],
  ['Blankets and supplies laid out for distribution', 'wide'],
  ['A warm moment with an elderly resident', ''],
  ['Meeting residents on a community site visit', ''],
  ['Visiting pupils in hospital', 'tall'],
  ['Handing over a hamper of food and essentials', ''],
  ['Volunteers preparing blankets and flour', 'wide'],
  ['Greeting elderly residents at the hamper drive', ''],
  ['Walking the neighbourhood with local leaders', ''],
  ['Handing a hamper to an elderly resident', ''],
  ['Food hampers ready for families', 'tall'],
  ['Listening to an elderly resident', 'wide'],
  ['Checking on pupils recovering in hospital', 'tall'],
  ['Sharing a laugh at the hamper drive', 'wide'],
  ['With an elderly resident at the distribution', 'wide'],
]
export const gallery = photos.map(([caption, size], i) => {
  const n = String(i + 1).padStart(2, '0')
  return { src: `/gallery/${n}.jpg`, thumb: `/gallery/${n}-thumb.jpg`, caption, size }
})

// Newest first. `date` is optional; leave it '' when unknown.
export const news = [
  {
    outlet: 'Citizen Digital',
    date: 'Jul 2026',
    title: 'A new party and a new seat: her bid for Maara',
    url: 'https://citizen.digital/article/ex-nairobi-governor-anne-kananu-joins-sonkos-nedp-as-she-eyes-maara-mp-seat-n386969',
  },
  {
    outlet: 'The Star',
    date: '16 Nov 2021',
    title: "Sworn in as Nairobi's first woman governor",
    url: 'https://www.the-star.co.ke/news/2021-11-16-anne-kananu-sworn-in-as-new-nairobi-governor/',
  },
  {
    outlet: 'The Standard, Evewoman',
    date: '',
    title: 'Meet the woman who made history at City Hall',
    url: 'https://standardmedia.co.ke/evewoman/achieving-woman/article/2001429341/ann-kananu-meet-nairobis-first-female-governor',
  },
  {
    outlet: 'Nairobi City County',
    date: '',
    title: 'At the table with Central Region governors and the UK High Commissioner',
    url: 'https://nairobi.go.ke/nairobi-deputy-governor-acting-governor-ann-kananu-mwenda-joins-ten-county-heads-hosted-british-high-commissioner-kenya-ms-jane-marriott-central-region-economic-bloc-cereb-governo',
  },
  {
    outlet: 'Kenyans.co.ke',
    date: '',
    title: 'Her career in public service at a glance',
    url: 'https://www.kenyans.co.ke/politician/anne-kananu',
  },
]

export const contact = {
  items: [
    { label: 'Facebook', value: 'Anne Kananu Mwenda', href: 'https://www.facebook.com/p/Anne-Kananu-Mwenda-100072647281930/' },
  ],
}

// Footer icons. Fill in a url to show more (x, instagram, youtube, tiktok, linkedin, whatsapp).
// Entries with an empty url are hidden.
export const social = [
  { icon: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/p/Anne-Kananu-Mwenda-100072647281930/' },
  { icon: 'x', label: 'X (Twitter)', url: '' },
  { icon: 'instagram', label: 'Instagram', url: '' },
  { icon: 'youtube', label: 'YouTube', url: '' },
  { icon: 'tiktok', label: 'TikTok', url: '' },
  { icon: 'linkedin', label: 'LinkedIn', url: '' },
  { icon: 'whatsapp', label: 'WhatsApp', url: '' },
]
