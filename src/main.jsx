import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NexaLanding from './App.jsx'
import Gracias from './Gracias.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NexaLanding />} />
        <Route path="/confirmacion" element={<Gracias />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
