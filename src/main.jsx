import React from 'react'
import ReactDOM from 'react-dom/client'
import Background from './Background.jsx'
import Navbar from './Navbar.jsx'
import ExtinctAnimal from './ExtinctAnimal.jsx'
import './index.css'
import './lib/leaves.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar gap="true" time="0"/>
    <ExtinctAnimal />
    {/* <Background /> */}
  </React.StrictMode>
)