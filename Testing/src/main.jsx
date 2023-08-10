import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

import Apps from "./assets/Components/Bio/src/App.jsx"
import { Routes, Route } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Apps" element={<Apps />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
