import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import ReactCountryFlag from 'react-country-flag'
import TodoList from './components/TodoList'

import todolist from '../../resource/todo.json'
import Social from './components/Social'

// This class should show all the
class Basics extends Component {
  render () {
    return (
      <Card>
        <CardHeader>
          <CardTitle>My Basic Summary</CardTitle>
          <CardSubtitle>{this.props.basics.label}</CardSubtitle>
        </CardHeader>
        <CardBody>
          <CardText>
            <img
              align='right' className='rounded-circle' alt='profile' width={180} height={180}
              src={this.props.basics.bitmoji}
            />
          </CardText>
          <CardText>Currently residing in the {this.props.basics.location.region} {
            <ReactCountryFlag
              code={this.props.basics.location.countryCode} svg
            />
          }
          </CardText>
          <CardText>{this.props.basics.summary}</CardText>
          {this.props.basics.profiles.map(soc => <Social key={soc} data={soc + '/'} />)}
        </CardBody>
      </Card>)
  }
}

class Main extends Component {
  render () {
    return (
      <div>
        <Basics basics={this.props.resume.basics} />
        <br />
        <TodoList todolist={todolist} total={25} />
      </div>)
  }
}

export default Main
