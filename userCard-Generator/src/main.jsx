import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import RealApp from './RealApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RealApp />
  </StrictMode>,
)
