import React, { Component } from 'react'
import TodoList from './components/TodoList'
import todolist from '../../resource/todo.json'
import resume from '../../resource/resume.json'
import Basics from './components/Basics'

class Main extends Component {
  render () {
    return (
      <div>
        <Basics basics={resume.basics} />
        <br />
        <TodoList todolist={todolist} total={25} />
      </div>)
  }
}

export default Main
