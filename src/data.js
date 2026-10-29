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
  paragraphs: [
    'Anne Kananu Mwenda was born on 1 May 1980 in Embu County. She brings a background in criminology and security, and more than 17 years of experience across the public and private sectors.',
    'For 13 years she served at Kenya Airports Authority as the security officer in charge of quality control and training, checking airport security against ICAO Annex 17 and the national civil aviation security programme, and training airport staff and partner agencies.',
    'At Nairobi City County she led the Disaster Management and Coordination department, held acting roles for Water, Energy and Sanitation and for Agriculture, and championed the Nairobi Risk Hub to sharpen disaster policy. She became Deputy Governor in January 2021 and served as Governor from 16 November 2021 to 25 August 2022, the first woman in the post.',
  ],
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

export const journey = [
  { year: '1980', title: 'Born in Embu County', text: 'Born on 1 May 1980.' },
  { year: '2005–2018', title: 'Kenya Airports Authority', text: 'Security officer in charge of quality control and training: audits, inspections, ICAO compliance and security awareness training.' },
  { year: 'May 2018', title: 'Chief Officer, Disaster Management and Coordination', text: 'Nairobi City County. Built fire stations, recruited fire officers and championed the Nairobi Risk Hub.' },
  { year: 'Nov 2019', title: 'Acting Chief Officer, Water, Energy and Sanitation', text: 'Held alongside disaster management, as well as an acting role for Agriculture.' },
  { year: 'Jan 2021', title: 'Deputy Governor and Acting Governor', text: 'Signed the SGBV Bill into law and launched free ECDE funds.' },
  { year: '16 Nov 2021', title: 'Governor of Nairobi', text: 'Sworn in as the first woman Governor of Nairobi City County. Served until 25 August 2022.' },
  { year: 'May 2025', title: 'MSc Leadership and Governance', text: 'Began a master’s degree at Jomo Kenyatta University of Agriculture and Technology.' },
  { year: '23 Jul 2026', title: 'Joins NEDP, eyes Maara', text: 'Joined the National Economic Development Party and said she will seek the Maara seat in Tharaka Nithi, subject to party primaries.' },
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
    { label: 'Postal address', value: 'P.O. Box 798-00200, Nairobi' },
    { label: 'Email', value: 'kananumwenda@yahoo.com', href: 'mailto:kananumwenda@yahoo.com' },
    { label: 'Phone', value: '+254 721 456 033', href: 'tel:+254721456033' },
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
  { icon: 'email', label: 'Email', url: 'mailto:kananumwenda@yahoo.com' },
  { icon: 'phone', label: 'Phone', url: 'tel:+254721456033' },
]
