import React, { Component } from 'react'

import Recipe from './components/Recipe'
import Recipes from './components/Recipes'
import recipes from '../../resource/recipes'

import { BrowserRouter as Switch, Route } from 'react-router-dom'

// app component
class Food extends Component {
  // render
  render () {
    return (<Switch>
      <Route path={this.props.match.url} exact render={props => <Recipes {...props} recipes={recipes} />} />
      <Route path={this.props.match.url + '/*'} render={props => <Recipe {...props} recipes={recipes} />} />
    </Switch>)
  }
}

export default Food
