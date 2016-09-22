import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './lib/Home'
import Albums from './lib/Albums'

render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Home }/>
    <Route path="/Albums/:title" component={ Albums }/>
  </Router>
), document.getElementById('app'))
