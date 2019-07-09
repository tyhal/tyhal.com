import React, { Component } from 'react'
import ReactJson from 'react-json-view'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader } from 'reactstrap'

class JsonResume extends Component {
  render () {
    return (<Card>
      <CardHeader>
        <CardTitle>My details in json form</CardTitle>
        <CardSubtitle>
          https://jsonresume.org/
        </CardSubtitle>
      </CardHeader>
      <CardBody>
        <CardText>
          This whole website is driven by this json, with some additional ones for other separate or less important information
        </CardText>
      </CardBody>
      <CardBody>
        <ReactJson src={this.props.resume} theme={{
          base00: '#1f212d',
          base01: '#44475a',
          base02: '#44475a',
          base03: '#44475a',
          base04: '#3ec175',
          base05: '#E27D60',
          base06: '#E27D60',
          base07: '#0dc1c1',
          base08: '#ffb86c',
          base09: '#f7cf56',
          base0A: '#f7cf56',
          base0B: '#f7cf56',
          base0C: '#ffb86c',
          base0D: '#44475a',
          base0E: '#E27D60',
          base0F: '#0dc1c1'
        }} />
      </CardBody>
    </Card>)
  }
}

export default JsonResume
