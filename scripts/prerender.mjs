// Runs after `vite build` and the SSR build (see the "build" script in package.json).
// 1. Puts the pre-rendered page HTML into dist/index.html.
// 2. Writes dist/sitemap.xml and dist/robots.txt from src/seo.js.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const ssrDir = resolve(root, 'dist-ssr')

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
const { sitemapXml, robotsTxt } = await import(pathToFileURL(resolve(root, 'src/seo.js')).href)

const indexPath = resolve(dist, 'index.html')
const html = readFileSync(indexPath, 'utf8')
if (!html.includes('<!--app-->')) throw new Error('prerender: <!--app--> marker missing from dist/index.html')
writeFileSync(indexPath, html.replace('<!--app-->', render()))

writeFileSync(resolve(dist, 'sitemap.xml'), sitemapXml())
writeFileSync(resolve(dist, 'robots.txt'), robotsTxt())
rmSync(ssrDir, { recursive: true, force: true })

console.log('prerender: index.html, sitemap.xml and robots.txt written')
