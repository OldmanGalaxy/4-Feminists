import React from 'react'
import ReactDOM from 'react-dom/client'
import Leaves from './Leaves.jsx'
import Background from './Background.jsx'
import './index.css'
import Navbar from './Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Background />
  </React.StrictMode>
)