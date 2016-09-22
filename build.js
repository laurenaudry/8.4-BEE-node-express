import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'


render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Home }/>
  </Router>
), document.getElementById('app'))
