import React, { Component } from 'react'
import ReactJson from 'react-json-view'
import { Card, CardBody, CardTitle,CardSubtitle } from 'reactstrap'

class JsonResume extends Component {
  render () {
    return (<Card>
      <CardBody>
      <CardTitle>My details in json form</CardTitle>
        <CardSubtitle>
            https://jsonresume.org/
        </CardSubtitle>
      </CardBody>
      <CardBody>
        <ReactJson src={this.props.resume} theme={{
          base00: '#282a36',
          base01: '#44475a',
          base02: '#44475a',
          base03: '#44475a',
          base04: '#50fa7b',
          base05: '#ff5555',
          base06: '#ff5555',
          base07: '#f1fa8c',
          base08: '#ffb86c',
          base09: '#ff79c6',
          base0A: '#ff79c6',
          base0B: '#ff79c6',
          base0C: '#ffb86c',
          base0D: '#44475a',
          base0E: '#ff5555',
          base0F: '#f1fa8c'
        }} />
      </CardBody>
    </Card>)
  }
}

export default JsonResume
