import React, { Component } from 'react'
import TodoList from './components/TodoList'
import todolist from '../../resource/todo.json'
import info from '../../resource/info.json'
import Basics from './components/Basics'

class Main extends Component {
  render () {
    return (
      <div>
        <Basics basics={info.basics} />
        <br />
        <TodoList todolist={todolist} total={25} />
      </div>)
  }
}

export default Main
