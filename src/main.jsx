import React from 'react'
import ReactDOM from 'react-dom/client'
import Background from './Background.jsx'
import Navbar from './Navbar.jsx'
import ExtinctAnimal from './ExtinctAnimal.jsx'
import './index.css'
import './lib/leaves.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Landing Page = 
    <Navbar gap="false" time="8000"/>
    <Background/>
    */}
    <Navbar gap="false" time="8000"/>
    <Background/>

    {/* Wildlife = 
    <Navbar gap="true" time="0"/>
    <ExtinctAnimal/>
    */}
  </React.StrictMode>
)