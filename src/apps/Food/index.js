import React from 'react'

import Recipe from './components/Recipe'
import Recipes from './components/Recipes'
import recipesJson from '../../resource/recipes'

import { Switch, Route, useRouteMatch } from 'react-router-dom'

function FoodRoute () {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route path={`${match.url}/*`} render={props => <Recipe {...props} recipes={recipesJson} />} />
      <Route path={match.url} exact render={props => <Recipes {...props} recipes={recipesJson} />} />
    </Switch>
  )
}

export default FoodRoute
