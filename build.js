import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Main from './lib/Main'
import Albums from './lib/Albums'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }/>
    <Route path="/Albums/:title" component={ Albums }/>
  </Router>
), document.getElementById('app'))
