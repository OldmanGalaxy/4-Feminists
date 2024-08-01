import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './lib/leaves.js';
import Navbar from './Navbar.jsx';
import Wildlife from './Wildlife.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
)