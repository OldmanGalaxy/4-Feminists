import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Trees from './Trees.jsx'
import Background from './Background.jsx'
import './header.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Background />
  </React.StrictMode>,
)