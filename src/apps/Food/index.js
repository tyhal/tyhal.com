import React from 'react'

import Recipe from './components/Recipe'
import Recipes from './components/Recipes'
import recipes_json from '../../resource/recipes'

import { Switch, Route, useRouteMatch } from 'react-router-dom'

function FoodRoute () {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/*`} render={props => <Recipe {...props} recipes={recipes_json}/>}/>
      <Route path={match.url} exact render={props => <Recipes {...props} recipes={recipes_json}/>}/>
    </Switch>
  )

}

export default FoodRoute
