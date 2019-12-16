import React, { Component } from 'react'
import ReactJson from 'react-json-view'
import { CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import TopLevelCard from '../../components/TopLevelCard'
import resume from '../../resource/resume.json'

const nautilusTheme = {
  // base00: '#1f212d', // Nautius
  base00: '#3a3f44', // Custom
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
}

class JsonResume extends Component {
  render () {
    return (
      <TopLevelCard>
        <CardHeader>
          <CardTitle>My details in json form</CardTitle>
          <CardSubtitle>
            https://jsonresume.org/
          </CardSubtitle>
        </CardHeader>
        <CardBody>
          <CardText>
            This whole website is driven by this json, with some additional ones for other separate or less
            important information
          </CardText>
        </CardBody>
        <CardBody>
          <ReactJson
            src={resume} theme={nautilusTheme}
          />
        </CardBody>
      </TopLevelCard>)
  }
}

export default JsonResume
