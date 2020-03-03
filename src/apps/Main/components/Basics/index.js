// This class should show all the
import React, { Component } from 'react'
import TopLevelCard from '../../../../components/TopLevelCard'
import { CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'
import ReactCountryFlag from 'react-country-flag'
import Social from '../Social'

class Basics extends Component {
  render () {
    return (
      <TopLevelCard>
        <CardHeader>
          <CardTitle>
            <h3>
              {this.props.basics.label}
            </h3>
          </CardTitle>
          {
            this.props.basics.profiles.map(
              soc => <Social className='mx-4' key={soc.network} data={soc} />)
          }
        </CardHeader>
        <CardBody>
          <CardText>
            <img
              align='right'
              className='rounded-circle'
              alt='profile'
              style={{ backgroundColor: '#f8f8f2' }}
              // style={{ backgroundColor: '#515960' }}
              width={180}
              height={180}
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
        </CardBody>
      </TopLevelCard>)
  }
}

export default Basics
