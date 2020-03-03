// This class should show all the
import React, { Component } from 'react'
import TopLevelCard from '../../../../components/TopLevelCard'
import { CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

class Basics extends Component {
  render () {
    return (
      <TopLevelCard>
        <CardHeader>
          <CardTitle>
            <h3>
              {this.props.title}
            </h3>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>{this.props.basics.summary}</CardText>
        </CardBody>
      </TopLevelCard>)
  }
}

export default Basics
