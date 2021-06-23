import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import App from './components/App'

document.addEventListener ('DOMContentLoaded', () => {
  ReactDOM.render(
  <Router>
    <App />
    <Nav />
  </Router>,
  document.getElementById('app')
  )
})