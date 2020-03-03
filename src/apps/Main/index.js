import React, { Component } from 'react'
import TodoList from './components/TodoList'
import todolist from '../../resource/todo.json'
import info from '../../resource/info.json'
import SimpleIntro from './components/SimpleIntro'

class Main extends Component {
  render () {
    return (
      <div>
        <SimpleIntro basics={info.basics} skills={info.skills} />
        {/* Under Construction */}
        <br style={{ marginTop: 200 }} />
        <TodoList todolist={todolist} total={25} />
      </div>)
  }
}

export default Main
