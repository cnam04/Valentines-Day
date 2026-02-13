import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReasonsPage from './components/ReasonsPage.jsx'
import './app.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReasonsPage />
  </StrictMode>,
)

