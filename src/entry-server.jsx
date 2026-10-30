// Used only at build time to pre-render the page to HTML (scripts/prerender.mjs),
// so search engines and link previews see the full text without running JavaScript.
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function render() {
  return renderToString(<App />)
}
