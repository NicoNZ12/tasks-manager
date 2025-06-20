import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <StrictMode>
      <App />
      <Toaster position="top-center" reverseOrder={false} />
    </StrictMode>
    
  </BrowserRouter>
)
