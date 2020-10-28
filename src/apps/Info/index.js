import React, { Component } from 'react'
import info from '../../resource/info.json'
import Basics from './components/Basics'
import Contacts from './components/Contact'
import {
  CardBody,
  CardHeader,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Row
} from 'reactstrap'
import TopCard from '../../components/TopLevelCard'

// TODO remove Iframe and replace functionality with react components
class Info extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col>
            <Jumbotron className='shadow'>
              <h1>{info.basics.name}</h1>
              <h4>{info.basics.label}</h4>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Basics title='About' basics={info.basics} />
          </Col>
          <Col>
            <Contacts title='Contact' basics={info.basics} />
          </Col>
        </Row>
        <Row>
          <Col>
            {info.work.map(
              wk =>
                <TopCard key={wk.company}>
                  <CardHeader>
                    <CardTitle>
                      <h3>Work Experience</h3>
                      {wk.company}
                    </CardTitle>
                    <CardSubtitle>
                      {wk.startDate} -> {wk.endData}
                    </CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <CardTitle>
                      {wk.position}
                    </CardTitle>
                    <CardText>
                      {wk.summary}
                    </CardText>
                    <ListGroup>
                      {wk.highlights.map(hl =>
                        <ListGroupItem key={hl}>
                          {hl}
                        </ListGroupItem>)}
                    </ListGroup>
                  </CardBody>
                </TopCard>
            )}
          </Col>
          <Col>
            <TopCard>
              <CardHeader>
                <CardTitle>
                  <h3>Education</h3>
                </CardTitle>
              </CardHeader>
              {info.education.map(edu =>
                <div key={edu.institution}>
                  <CardHeader>
                    <CardTitle>
                      {edu.institution}
                    </CardTitle>
                    <CardSubtitle>
                      {edu.startDate} -> {edu.endDate}
                    </CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <CardTitle>
                      {edu.studyType}{(edu.area !== '') ? ', ' + edu.area : null}
                    </CardTitle>
                    <ListGroup>
                      {edu.courses.map(crs =>
                        <ListGroupItem key={crs}>
                          {crs}
                        </ListGroupItem>)}
                    </ListGroup>
                  </CardBody>
                </div>
              )}
            </TopCard>
          </Col>
        </Row>
        <Row>
          <Col>
            {/*  TODO */}
            {/*  <TopCard basics={info.basics}> */}
            {/*    <CardHeader> */}
            {/*      <CardTitle> */}
            {/*        Awards */}
            {/*      </CardTitle> */}
            {/*    </CardHeader> */}
            {/*    <CardBody> */}
            {/*      sure */}
            {/*    </CardBody> */}
            {/*  </TopCard> */}
            {/* </Col> */}
            {/* <Col> */}
            {/*  <TopCard basics={info.basics}> */}
            {/*    <CardHeader> */}
            {/*      <CardTitle> */}
            {/*        Skills */}
            {/*      </CardTitle> */}
            {/*    </CardHeader> */}
            {/*    <CardBody> */}
            {/*      sure */}
            {/*    </CardBody> */}
            {/*  </TopCard> */}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Info
