import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CardBody, CardHeader, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'
import ReactCountryFlag from 'react-country-flag'
import TopLevelCard from '../../../../components/TopLevelCard'

import links from '../../../../resource/recipes.links'

// app component
class Recipes extends Component {
  static createItem (flag, link) {
    return (
      <ListGroupItem>
        <ReactCountryFlag
          countryCode={flag} svg
        />
        <span style={{ 'margin-right': '10px' }} />
        {link}
      </ListGroupItem>)
  }

  // render
  render () {
    return (
      <TopLevelCard>
        <CardHeader>
          <CardTitle>Snack Overflow <span role='img' />🍜</CardTitle>
        </CardHeader>
        <CardBody>
          <h6>Hosted Here</h6>
          <ListGroup>
            {Object.keys(this.props.recipes).map(
              recipe =>
                Recipes.createItem(this.props.recipes[recipe].origin,
                  <Link to={'food/' + recipe}>
                    {recipe}
                  </Link>)
            )}
          </ListGroup>
          <br />
          <h6>Linked from elsewhere</h6>
          <ListGroup>
            {Object.keys(links).map(
              recipe =>
                Recipes.createItem(links[recipe].origin,
                  <a href={links[recipe].source}>
                    {recipe}
                  </a>)
            )}
          </ListGroup>
        </CardBody>
      </TopLevelCard>)
  }
}

export default Recipes
