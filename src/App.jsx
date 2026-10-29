import { useCallback, useEffect, useRef, useState } from 'react'
import config from '../site.config.js'
import {
  nav, hero, ticker, figures, about, journey, record, awards,
  quotes, maara, gallery, news, contact,
} from './data.js'
import { useInView, useReducedMotion, useRevealAll, useScrollProgress } from './motion.js'

function Tbc() {
  return <span className="tbc">To be confirmed</span>
}

function SectionHead({ kicker, title, light }) {
  return (
    <header className={`sec-head${light ? ' light' : ''}`} data-reveal>
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
    </header>
  )
}

/* ---------- Header ---------- */
// Returns the id of the section currently under the header, or '' at the top.
function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    let raf = 0
    const check = () => {
      raf = 0
      const line = window.innerHeight * 0.35
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      // At the very bottom, the last section counts as active.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1]
      }
      setActive(current)
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(check) }
    check()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => {
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ids])
  return active
}

const navIds = nav.map((n) => n.id)

function Header() {
  const active = useActiveSection(navIds)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <a href="#top" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark">AK</span>
        <span className="brand-name">Anne Kananu</span>
      </a>
      <button
        className="menu-btn"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="sr-only">Menu</span>
        <span className={`burger${open ? ' x' : ''}`} aria-hidden="true"><i /><i /><i /></span>
      </button>
      <nav id="site-nav" className={open ? 'open' : ''}>
        {nav.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            className={active === n.id ? 'active' : undefined}
            aria-current={active === n.id ? 'location' : undefined}
            onClick={() => setOpen(false)}
          >
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

/* ---------- Hero ---------- */
function SplitWord({ word, delay = 0 }) {
  return (
    <span className="split" aria-label={word}>
      {[...word].map((ch, i) => (
        <span key={i} aria-hidden="true" style={{ '--d': `${delay + i * 55}ms` }}>{ch}</span>
      ))}
    </span>
  )
}

function Seal({ text }) {
  return (
    <svg className="seal" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <path id="seal-path" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
      </defs>
      <circle cx="60" cy="60" r="58" />
      <text><textPath href="#seal-path">{text.repeat(2)}</textPath></text>
      <text x="60" y="68" textAnchor="middle" className="seal-core">✦</text>
    </svg>
  )
}

function Hero() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const onMove = useCallback(
    (e) => {
      if (reduced || !ref.current) return
      const r = ref.current.getBoundingClientRect()
      ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
      ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
    },
    [reduced],
  )
  return (
    <section id="top" className="hero" ref={ref} onPointerMove={onMove}>
      <div className="spotlight" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="kicker hero-kicker">{hero.eyebrow}</span>
          <h1>
            <SplitWord word={hero.first} />{' '}
            <SplitWord word={hero.last} delay={hero.first.length * 55 + 120} />
            <span className="surname">{hero.surname}</span>
          </h1>
          <p className="lede">{hero.lede}</p>
          <div className="ctas">
            {hero.ctas.map((c, i) => (
              <a key={c.href} href={c.href} className={`btn${i ? ' ghost' : ''}`}>{c.label}</a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="dots" aria-hidden="true" />
          <div className="leaf-back" aria-hidden="true" />
          <div className="leaf-outline" aria-hidden="true" />
          <figure className="leaf">
            {hero.photo ? (
              <img src={hero.photo} alt={hero.photoAlt} />
            ) : (
              <div className="portrait-ph" role="img" aria-label="Portrait placeholder">
                <span>AK</span>
                <small>Portrait to be supplied</small>
              </div>
            )}
          </figure>
          <span className="strip" aria-hidden="true">{hero.strip}</span>
          {hero.badges.map((b, i) => (
            <span key={b} className={`badge b${i + 1}`}>{b}</span>
          ))}
          <Seal text={hero.seal} />
        </div>
      </div>
    </section>
  )
}

function Ticker() {
  const items = [...ticker, ...ticker]
  return (
    <div className="ticker" aria-label="Highlights">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span key={i} aria-hidden={i >= ticker.length}>{t}<b>✦</b></span>
        ))}
      </div>
    </div>
  )
}

/* ---------- Figures ---------- */
function CountUp({ value, prefix = '', suffix = '', run }) {
  const reduced = useReducedMotion()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    if (reduced) {
      const id = requestAnimationFrame(() => setN(value))
      return () => cancelAnimationFrame(id)
    }
    let raf
    const start = performance.now()
    const dur = 1600
    const step = (t) => {
      const k = Math.min(1, (t - start) / dur)
      setN(Math.round(value * (1 - Math.pow(1 - k, 3))))
      if (k < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [run, value, reduced])
  return <>{prefix}{n}{suffix}</>
}

function Figures() {
  const [ref, visible] = useInView(0.4)
  return (
    <section className="figures" ref={ref} aria-label="Figures">
      <div className="wrap fig-grid">
        {figures.map((f) => (
          <div className="fig" key={f.label} data-reveal>
            <strong><CountUp {...f} run={visible} /></strong>
            <span>{f.label}</span>
          </div>
        ))}
      </div>
      <p className="wrap fig-note">Figures as reported in the press.</p>
    </section>
  )
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap about-grid">
        <div>
          <SectionHead kicker="About" title={about.title} />
          {about.paragraphs.map((p, i) => <p key={i} data-reveal>{p}</p>)}
        </div>
        <aside className="edu" data-reveal>
          <h3>Education</h3>
          <ol>
            {about.education.map((e) => (
              <li key={e.title}>
                <span className="edu-year">{e.year}</span>
                <span className="edu-title">{e.title}</span>
                <span className="edu-place">{e.place}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  )
}

/* ---------- Journey ---------- */
function Journey() {
  const [ref, p] = useScrollProgress()
  return (
    <section id="journey" className="section journey">
      <div className="wrap">
        <SectionHead kicker="Journey" title="From the airport to City Hall, and on to Maara" light />
        <ol className="timeline" ref={ref} style={{ '--p': p }}>
          <span className="tl-fill" aria-hidden="true" />
          {journey.map((j, i) => (
            <li key={j.title} className={i % 2 ? 'right' : 'left'} data-reveal>
              <span className="tl-dot" aria-hidden="true" />
              <div className="tl-card">
                <span className="tl-year">{j.year}</span>
                <h3>{j.title}</h3>
                <p>{j.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------- Record ---------- */
function TiltCard({ className = '', children }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const move = (e) => {
    if (reduced || e.pointerType === 'touch') return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-4px)`
  }
  const leave = () => { if (ref.current) ref.current.style.transform = '' }
  return (
    <article ref={ref} className={`tilt ${className}`} onPointerMove={move} onPointerLeave={leave} data-reveal>
      {children}
    </article>
  )
}

function Record() {
  return (
    <section id="record" className="section record">
      <div className="wrap">
        <SectionHead kicker="Record" title="What the record shows" />
        <div className="cards">
          {record.map((r) => (
            <TiltCard key={r.title} className="rec-card">
              <span className="tag">{r.tag}</span>
              {r.planned && <span className="planned">Planned</span>}
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Awards ---------- */
function Medal() {
  return (
    <svg className="medal" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M22 4h8l4 18h-8zM42 4h-8l-4 18h8z" className="ribbon" />
      <circle cx="32" cy="40" r="18" className="disc" />
      <circle cx="32" cy="40" r="12" className="ring" />
      <path d="M32 31l2.8 5.7 6.2.9-4.5 4.4 1 6.2L32 45.3 26.5 48.2l1-6.2-4.5-4.4 6.2-.9z" className="star" />
    </svg>
  )
}

function Awards() {
  return (
    <section id="awards" className="section awards">
      <div className="wrap">
        <SectionHead kicker="Awards" title="Recognition" />
        <div className="cards three">
          {awards.map((a, i) => (
            <TiltCard key={i} className="award">
              <Medal />
              <span className="aw-year">{a.year}</span>
              <h3>{a.title}</h3>
              <span className="aw-body">{a.body}</span>
              <p>{a.text}</p>
              {a.placeholder && <Tbc />}
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Quotes ---------- */
function Quotes() {
  const reduced = useReducedMotion()
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (reduced || paused) return
    const id = setInterval(() => setI((x) => (x + 1) % quotes.length), 6000)
    return () => clearInterval(id)
  }, [reduced, paused])
  const q = quotes[i]
  return (
    <section
      className="section quotes"
      aria-label="Quotes"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="wrap quote-wrap" data-reveal>
        <span className="qmark" aria-hidden="true">“</span>
        <blockquote key={i} className="quote" aria-live="polite">
          <p>{q.text}</p>
          <footer>{q.source} {q.placeholder && <Tbc />}</footer>
        </blockquote>
        <div className="q-dots" role="tablist" aria-label="Choose quote">
          {quotes.map((_, k) => (
            <button
              key={k}
              role="tab"
              aria-selected={k === i}
              aria-label={`Quote ${k + 1}`}
              className={k === i ? 'on' : ''}
              onClick={() => setI(k)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Maara ---------- */
function Maara() {
  return (
    <section id="maara" className="section maara">
      <div className="wrap maara-grid">
        <div>
          <SectionHead kicker="Maara 2027" title={maara.title} light />
          <p data-reveal>{maara.intro}</p>
          <h3 className="focus-h" data-reveal>The party's stated focus</h3>
          <ul className="chips" data-reveal>
            {maara.partyFocus.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
        <div className="plan" data-reveal>
          <h3>{maara.plan.title}</h3>
          <p>{maara.plan.text}</p>
          {maara.plan.placeholder && <Tbc />}
        </div>
      </div>
    </section>
  )
}

/* ---------- Gallery ---------- */
function Gallery() {
  const [open, setOpen] = useState(-1)
  const close = () => setOpen(-1)
  useEffect(() => {
    if (open < 0) return
    const key = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') setOpen((o) => (o + 1) % gallery.length)
      if (e.key === 'ArrowLeft') setOpen((o) => (o - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', key)
    return () => window.removeEventListener('keydown', key)
  }, [open])
  const g = open >= 0 ? gallery[open] : null
  return (
    <section id="gallery" className="section gallery">
      <div className="wrap">
        <SectionHead kicker="Gallery" title="In pictures" />
        <div className="g-grid">
          {gallery.map((p, i) => (
            <button key={i} className={`g-item g${i + 1}`} onClick={() => setOpen(i)} data-reveal>
              {p.src ? <img src={p.src} alt={p.caption} loading="lazy" /> : <span className="g-ph">{i + 1}</span>}
              <span className="g-cap">{p.caption}</span>
            </button>
          ))}
        </div>
      </div>
      {g && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={g.caption} onClick={close}>
          <figure onClick={(e) => e.stopPropagation()}>
            {g.src ? <img src={g.src} alt={g.caption} /> : <div className="lb-ph">{open + 1}</div>}
            <figcaption>{g.caption}</figcaption>
          </figure>
          <button className="lb-close" onClick={close} aria-label="Close">×</button>
        </div>
      )}
    </section>
  )
}

/* ---------- News ---------- */
function News() {
  return (
    <section id="news" className="section news">
      <div className="wrap">
        <SectionHead kicker="In the news" title="Coverage" />
        <ul className="news-list">
          {news.map((n) => (
            <li key={n.title} data-reveal>
              {n.url ? (
                <a href={n.url} target="_blank" rel="noopener noreferrer">
                  <span className="outlet">{n.outlet}</span>
                  <span className="n-title">{n.title}</span>
                  <span className="arrow" aria-hidden="true">↗</span>
                </a>
              ) : (
                <div className="no-link">
                  <span className="outlet">{n.outlet}</span>
                  <span className="n-title">{n.title}</span>
                  <span className="tbc">Link to be added</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <SectionHead kicker="Contact" title="Get in touch" light />
        <dl className="contact-list">
          {contact.items.map((c) => (
            <div key={c.label} data-reveal>
              <dt>{c.label}</dt>
              <dd>
                {c.href ? <a href={c.href} target="_blank" rel="noopener noreferrer">{c.value}</a> : c.value}
                {c.placeholder && <Tbc />}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <span>© {new Date().getFullYear()} {config.siteName}</span>
        <a href={config.builtByUrl} target="_blank" rel="noopener noreferrer">{config.builtBy}</a>
      </div>
    </footer>
  )
}

export default function App() {
  useRevealAll()
  return (
    <>
      <a href="#about" className="skip">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Figures />
        <About />
        <Journey />
        <Record />
        <Awards />
        <Quotes />
        <Maara />
        <Gallery />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
