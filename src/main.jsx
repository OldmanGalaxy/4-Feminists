import React from 'react'
import ReactDOM from 'react-dom/client'
import Background from './Background.jsx'
import Navbar from './Navbar.jsx'
import './index.css'
import './lib/leaves.js'
import Animals from './Animals.jsx'
import Awareness from './Awareness.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Landing Page = 
    <Navbar gap="false" time="8000"/>
    <Background/>
    */}

    {/* Wildlife = 
    <Navbar gap="true" time="0"/>
    <ExtinctAnimal/>
    */}
    {/* <Navbar sticky="no" gap="false"/> */}
    <Animals />
  </React.StrictMode>
)