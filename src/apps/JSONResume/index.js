import React, { Component } from 'react'
import {Card,  CardText} from 'reactstrap'
import ReactJson from 'react-json-view'

class JsonResume extends Component {
  render () {
    return (<div>
            https://jsonresume.org/
            <ReactJson src={this.props.resume} theme={{
                base00: "#282a36",
                base01: "#44475a",
                base02: "#44475a",
                base03: "#44475a",
                base04: "#50fa7b",
                base05: "#ff5555",
                base06: "#ff5555",
                base07: "#f1fa8c",
                base08: "#ffb86c",
                base09: "#ff79c6",
                base0A: "#ff79c6",
                base0B: "#ff79c6",
                base0C: "#ffb86c",
                base0D: "#44475a",
                base0E: "#ff5555",
                base0F: "#f1fa8c"
            }}/>
        </div>)
  }
}

export default JsonResume