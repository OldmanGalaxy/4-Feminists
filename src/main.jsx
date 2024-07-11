import React from 'react'
import ReactDOM from 'react-dom/client'
import Background from './Background.jsx'
import Navbar from './Navbar.jsx'
import Textbox from './Textbox.jsx'
import './index.css'
import './lib/leaves.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Background />
  </React.StrictMode>
)