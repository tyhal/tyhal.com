import React, { Component } from 'react'
import {CardText} from "reactstrap";
import ReactJson from 'react-json-view'

class JsonResume extends Component {
    render () {
        return (<CardText>
            https://jsonresume.org/
            <ReactJson src={this.props.resume} />
        </CardText>)
    }
}

export default JsonResume
