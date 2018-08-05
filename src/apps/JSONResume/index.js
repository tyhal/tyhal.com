import React, { Component } from 'react'
import {CardText} from "reactstrap";
import ReactJson from 'react-json-view'

const my_json_object =

class JsonResume extends Component {
    // render
    render () {
        return (<CardText>
            <ReactJson src={my_json_object} />

            https://jsonresume.org/
        </CardText>)
    }
}

export default JsonResume
