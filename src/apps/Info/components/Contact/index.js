// This class should show all the
import React, { Component } from 'react'
import { CardBody, CardHeader, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'
import TopCard from '../../../../components/TopLevelCard'
import ReactCountryFlag from 'react-country-flag'
import info from '../../../../resource/info.json'
import Social from '../../../SimpleIntro/components/Social'

class Contacts extends Component {
  render () {
    return (
      <TopCard>
        <CardHeader>
          <CardTitle>
            <h3>
              {this.props.title}
            </h3>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            <ListGroup>
              <ListGroupItem>
                {
                  <ReactCountryFlag countryCode={this.props.basics.location.countryCode} svg />
                }
                {' '} {this.props.basics.location.region}, {this.props.basics.location.countryCode}
              </ListGroupItem>
              <ListGroupItem>
                {info.basics.phone}
              </ListGroupItem>
              <ListGroupItem>
                <a
                  href={'mailto:' + info.basics.email} rel='noopener noreferrer'
                  target='_blank'
                >{info.basics.email}
                </a>
              </ListGroupItem>
              <ListGroupItem>
                <a href={info.basics.website} rel='noopener noreferrer' target='_blank'>{info.basics.website}</a>
              </ListGroupItem>
              {
                info.basics.profiles.map(
                  soc =>
                    <ListGroupItem key={soc.network}>
                      <Social className='mx-4' key={soc.network} data={soc} />
                      {' '} {soc.network} - <a href={soc.url}>{soc.username}</a>
                    </ListGroupItem>
                )
              }
            </ListGroup>
          </CardText>
          {/* {info.basics.} */}
        </CardBody>
      </TopCard>)
  }
}

export default Contacts
