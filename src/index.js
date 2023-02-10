// BUILD REACT
import React from 'react'
import ReactDOM from 'react-dom'
// CSS
import './index.css'
// APP.JS
import App from './App'

// RENDER REACT @ ROOT
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
)