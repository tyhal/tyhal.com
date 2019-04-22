import React, { Component } from 'react'
import { IndexRoute, Route, Router, hashHistory } from 'react-router'
import Root from './apps/Root'
import Basics from './apps/Main'
import Teriyaki from './apps/TeriyakiChicken'
import NotFound from './apps/NotFound'
import JsonResume from './apps/Json'
import Food from './apps/Food'
import Recipe from './apps/Food/components/Recipe'
import Recipes from './apps/Food/components/Recipes'
import Graph from './apps/PlotTest'

class TyHalRouter extends Component {
  render () {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path='/' component={Root}>
          <IndexRoute component={Basics} />
          <Route path='food' component={Food} >
            <IndexRoute component={Recipes} />
            <Route path='teriyaki' component={Teriyaki} />
            <Route path='*' component={Recipe} />
          </Route>
          <Route path='json' component={JsonResume} />
          <Route path='graph' component={Graph} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

// export
export default TyHalRouter
