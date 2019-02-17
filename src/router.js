import React, { Component } from 'react'
import { IndexRoute, Route, Router, hashHistory } from 'react-router'
import Root from './apps/Root'
import Main from './apps/Main'
import Teriyaki from './apps/TeriyakiChicken'
import NotFound from './apps/NotFound'
import JsonResume from './apps/JSONResume'

class TyHalRouter extends Component {
  render () {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path='/' component={Root}>
          <IndexRoute component={Main} />
          <Route path='teriyaki' component={Teriyaki} />
          <Route path='jsonresume' component={JsonResume} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

// export
export default TyHalRouter
