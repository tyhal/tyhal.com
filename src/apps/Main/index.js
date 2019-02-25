import React, { Component } from 'react'
import { Card, CardBody, CardText, CardTitle,  } from 'reactstrap'
import TodoList from './components/TodoList'

import todolist from '../../resource/todo.json'
import Social from './components/Social'

// app component
class Main extends Component {
  // render
  render () {
    return (<Card>
      <CardBody>
        <CardTitle>Basic Summary</CardTitle>
        <CardText>{this.props.resume.basics.summary}</CardText>
        {this.props.resume.basics.profiles.map(soc => <Social data={soc} />)}
        <TodoList todolist={todolist} total={25} />
      </CardBody>
    </Card>)
  }
}

export default Main
