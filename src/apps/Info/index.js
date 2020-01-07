import React, { Component } from 'react'
import ReactJson from 'react-json-view'
import { CardBody } from 'reactstrap'
import TopLevelCard from '../../components/TopLevelCard'
import info from '../../resource/info.json'

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

// TODO remove Iframe and replace functionality with react components
class Info extends Component {
  render () {
    const githubs = info.basics.profiles.filter(prof => prof.network === 'Github')
    const externalInfo = 'https://registry.jsonresume.org/' + githubs[0].username
    return (
      <TopLevelCard>
        <CardBody>
          {
            (githubs.length > 0)
              ? <iframe width='100%' height={(window.outerHeight * 2) + 100} src={externalInfo} />
              : <ReactJson src={info} theme={nautilusTheme} />
          }
        </CardBody>
      </TopLevelCard>)
  }
}

export default Info
