import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

// app component
class NotFound extends Component {
  // render
  render () {
    return (<Jumbotron><h1>404</h1><h4>Page Not Found</h4></Jumbotron>)
  }
}

export default NotFound
