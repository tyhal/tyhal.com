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
          code={flag} svg
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
          <CardTitle>Recipes I use</CardTitle><span role='img' />🍜
        </CardHeader>
        <CardBody>
          <CardHeader>Hosted Here</CardHeader>
          <ListGroup>
            {Object.keys(this.props.recipes).map(
              recipe =>
                Recipes.createItem(this.props.recipes[recipe].origin,
                  <Link to={'food/' + recipe}>
                    {recipe}
                  </Link>)
            )}
          </ListGroup>
          <CardHeader>Linked from elsewhere</CardHeader>
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
