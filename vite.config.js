import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { headTags } from './src/seo.js'

// Writes the SEO tags from src/seo.js into <head>, in dev and in the build.
const seoHead = () => ({
  name: 'seo-head',
  transformIndexHtml: (html) => html.replace('<!--seo-head-->', headTags()),
})

export default defineConfig({
  plugins: [react(), seoHead()],
})
