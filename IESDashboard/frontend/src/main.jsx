import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SimpleDashboard from './SimpleDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleDashboard />
  </StrictMode>,
)
