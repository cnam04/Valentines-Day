import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MemoryTimeline from './components/MemoryTimeline.jsx'
import './app.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoryTimeline />
  </StrictMode>,
)
