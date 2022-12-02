import React from 'react'
import ReactDOM from 'react-dom/client'
import {App,Animals} from './app'
import Router from "./Router"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
