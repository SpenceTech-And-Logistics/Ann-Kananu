import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The built page arrives pre-rendered, so attach to it; in dev, render from scratch.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
