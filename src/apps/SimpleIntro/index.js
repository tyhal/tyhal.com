import TopCard from '../../components/TopLevelCard'
import { CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import Social from './components/Social'
import React, { Component } from 'react'
import info from '../../resource/info.json'

class SimpleIntro extends Component {
  render () {
    const basics = info.basics
    const skills = info.skills
    return (

      <TopCard>
        <CardHeader>
          <img
            align='right'
            className='rounded-circle mt-4'
            alt='profile'
            style={{ backgroundColor: '#f8f8f2' }}
            width={100}
            height={100}
            src={basics.bitmoji}
          />
          <CardTitle>
            <h2>
              {basics.name}
            </h2>
          </CardTitle>
          <CardSubtitle>
            {basics.label} - {basics.short_summary}
          </CardSubtitle>
          <br />
          {
            basics.profiles.map(
              soc => <Social className='mx-4' key={soc.network} data={soc} />)
          }

        </CardHeader>
        <CardBody className='bg-dark'>
          <CardText>
            {skills.map(skill => <div className='text-monospace' key={skill.name}>::{skill.name}</div>)}
          </CardText>
        </CardBody>
      </TopCard>)
  }
}

export default SimpleIntro
