import React, { Component } from 'react'
import { Link } from 'react-router'
import { CardBody, Card, ListGroup, ListGroupItem, CardHeader, CardTitle, CardSubtitle } from 'reactstrap'
// app component
class Recipes extends Component {
  // render
  render () {
    return (<Card>
      <CardHeader>
        <CardTitle>Recipes I use</CardTitle>
        <CardSubtitle>All should be tasty <span role='img' />🍜</CardSubtitle>
      </CardHeader>
      <CardBody>
        <ListGroup>{Object.keys(this.props.recipes).map(
          recipe =>
            <ListGroupItem>
              <Link to={'food/' + recipe}>
                {recipe}
              </Link>
            </ListGroupItem>
        )}</ListGroup>
      </CardBody>
    </Card>)
  }
}

export default Recipes
