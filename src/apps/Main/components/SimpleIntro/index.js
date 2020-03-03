import TopCard from '../../../../components/TopLevelCard'
import { CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import Social from '../Social'
import React, { Component } from 'react'

class SimpleIntro extends Component {
  render () {
    return (

      <TopCard>
        <CardHeader>
          <img
            align='right'
            className='rounded-circle mt-4'
            alt='profile'
            style={{ backgroundColor: '#f8f8f2' }}
            // style={{ backgroundColor: '#515960' }}
            width={100}
            height={100}
            src={this.props.basics.bitmoji}
          />
          <CardTitle>
            <h3>
              {this.props.basics.label}
            </h3>
          </CardTitle>
          <CardSubtitle>
            {this.props.basics.short_summary}
          </CardSubtitle>
          <br />
          {
            this.props.basics.profiles.map(
              soc => <Social className='mx-4' key={soc.network} data={soc} />)
          }

        </CardHeader>
        <CardBody className='bg-dark'>
          <CardText>
            {this.props.skills.map(skill => <h6 key={skill.name}>{skill.name}</h6>)}
          </CardText>
        </CardBody>
      </TopCard>)
  }
}

export default SimpleIntro
