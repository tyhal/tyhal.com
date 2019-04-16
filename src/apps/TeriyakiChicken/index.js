import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardText, Col, ListGroup, ListGroupItem, Row } from 'reactstrap'

// TODO Make this template driven with a Recipe component

// app component
class Teriyaki extends Component {
  // render
  render () {
    return (<Row>
      <Col xl={6} lg={6} md={12}>
        <Card>
          <CardImg style={{ objectFit: 'cover' }} top width='100%'
            height={'150px'}
            src='https://images.unsplash.com/photo-1484211318645-c4eb6a7f10c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b02a3183f461b46e831736317d69eed5&auto=format&fit=crop&w=1347&q=80' />
          <CardBody>
            <CardText>
              <h1>Teriyaki Chicken</h1>
              <p>
                <h6>Source:</h6> Sachie's Kitchen
              </p>
              <Card>
                <CardBody>
                  <CardText>
                    <div className={'row'}>
                      <div className={'col'}>
                        <h6>Makes:</h6>
                      </div>
                      <div className={'col'}>
                          4 servings
                      </div>
                    </div>
                    <div className={'row'}>
                      <div className={'col'}>
                        <h6>Prep Time:</h6>
                      </div>
                      <div className={'col'}>
                          10 mins
                      </div>
                    </div>
                    <div className={'row'}>
                      <div className={'col'}>
                        <h6>Cook Time:</h6></div>
                      <div className={'col'}>
                          15 mins
                      </div>
                    </div>
                  </CardText>
                  <CardText>
                    <h3>Ingredients</h3>
                    <ListGroup>
                      <ListGroupItem>4 Chicken - Thigh Boneless</ListGroupItem>
                      <ListGroupItem>Salt - Sea</ListGroupItem>
                      <ListGroupItem>3 tbsp Flour - High Grade</ListGroupItem>
                      <ListGroupItem>Sesame - Seeds</ListGroupItem>
                      <ListGroupItem>225 ml Teriyaki Sauce, <a href={'#sauce'}>See recipe</a></ListGroupItem>
                      <ListGroupItem>Rice for 4, See recipe</ListGroupItem>
                      <ListGroupItem>Japanese Coleslaw, <a href={'#slaw'}>See recipe</a></ListGroupItem>
                      <ListGroupItem>2 Onions - Green / Spring</ListGroupItem>
                      <ListGroupItem>Olive Oil - Normal </ListGroupItem>
                    </ListGroup>
                  </CardText>

                  <CardText>
                    <h3>Notes / Directions</h3>
                    <p>Score the chicken and sprinkle salt. Cover the chicken with flour.</p>
                    <p>Heat a pan, add cooking oil and cook the chicken through - skin side first,
                        2-3
                        Minutes
                        each
                        side.</p>
                    <p>Pour the Teriyaki sauce over and simmer until the sauce becomes thick.</p>
                    <p>Slice the chicken and serve on a plate. Garnish with slices spring onion and
                        sesame
                        seeds
                        if
                        you
                        would
                        like.</p>
                    <p>Service with steamed rice and colslaw</p>
                  </CardText>
                </CardBody>
              </Card>
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6} lg={6} md={12}>
        <Card>
          <CardBody>
            <CardText>
              <h2 id={'sauce'}>Teriyaki Sauce</h2>

              <CardText>
                <div className={'row'}>
                  <div className={'col'}>
                    <h6>Makes:</h6>
                  </div>
                  <div className={'col'}>
                      4 servings
                  </div>
                </div>
                <div className={'row'}>
                  <div className={'col'}>
                    <h6>Prep Time:</h6>
                  </div>
                  <div className={'col'}>
                      10 mins
                  </div>
                </div>
                <div className={'row'}>
                  <div className={'col'}>
                    <h6>Cook Time:</h6></div>
                  <div className={'col'}>
                      10 mins
                  </div>
                </div>
              </CardText>

              <CardText>
                <h3>Ingredients</h3>
                <ListGroup>
                  <ListGroupItem>150 ml Cooking Sake</ListGroupItem>
                  <ListGroupItem>150 ml Mirin</ListGroupItem>
                  <ListGroupItem>150 ml Soy Sauce - Kikoman</ListGroupItem>
                  <ListGroupItem>75 g Sugar - Brown</ListGroupItem>
                </ListGroup>
              </CardText>

              <CardText>
                <h3>Notes / Directions</h3>
                <p>Combine sugar, mirin and sake in a small pot and bring to the boil. Simmer for 2
                    minutes
                    then add soy
                    and simmer for another 5 minutes or until it starts to thicken. Remove heat and cool
                    either use fresh or bottle and keep in the fridge.</p>
              </CardText>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardText>
              <h2 id={'slaw'}>Japanese Coleslaw</h2>
              <CardText>
                <div className={'row'}>
                  <div className={'col'}>
                    <h6>Makes:</h6>
                  </div>
                  <div className={'col'}>
                      3 servings
                  </div>
                </div>
                <div className={'row'}>
                  <div className={'col'}>
                    <h6>Prep Time:</h6>
                  </div>
                  <div className={'col'}>
                      5 mins
                  </div>
                </div>
              </CardText>
              <CardText>
                <h3>Ingredients</h3>
                <ListGroup>
                  <ListGroupItem>2 Handfuls Cabbage - Green, Shredded</ListGroupItem>
                  <ListGroupItem>2 Handfuls Cabbage - Red, Shredded</ListGroupItem>
                  <ListGroupItem>4 tbsp Mayonnaise - Japanese</ListGroupItem>
                  <ListGroupItem>Salt - Sea</ListGroupItem>
                  <ListGroupItem>Pepper - White</ListGroupItem>
                </ListGroup>
              </CardText>
              <CardText>
                <h3>Notes / Directions</h3>
                <p>Mix together in a bowl, serve on large plate to share</p>
              </CardText>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
    )
  }
}

export default Teriyaki
