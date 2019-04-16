import React, { Component } from 'react'
import recipes from '../../resource/recipes'

// app component
class Food extends Component {
  // render
  render () {
    return (<div>
      {React.cloneElement(this.props.children, { recipes: recipes })}
    </div>)
  }
}

export default Food
