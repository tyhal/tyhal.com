import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import TodoList from './components/TodoList'

import todolist from '../../resource/todo.json'

// app component
class Main extends Component {
  // render
  render () {
    return (<Jumbotron>
      <h4>Basic Summary</h4>
      {this.props.resume.basics.summary}
      <hr />
      <TodoList todolist={todolist} total={25} />
    </Jumbotron>)
  }
}

export default Main
