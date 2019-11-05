import React, { Component } from 'react'
import { Badge, Card, CardBody, CardImg, CardText, Col, ListGroup, ListGroupItem, Row } from 'reactstrap'
import RecipeComponent from './components/RecipeComponent'
import CardHeader from 'reactstrap/es/CardHeader'
import CardTitle from 'reactstrap/es/CardTitle'
import CardSubtitle from 'reactstrap/es/CardSubtitle'
import NotFound from '../../../NotFound'

// app component
class Recipe extends Component {
  static baseName (str) {
    return str.substring(str.lastIndexOf('/') + 1, str.length)
  }

  // render
  render () {
    const sel = Recipe.baseName(this.props.match.url)
    const recipe = this.props.recipes[sel]
    console.log(recipe)
    if (recipe === undefined) {
      return <NotFound />
    }
    return (
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardImg
              style={{ objectFit: 'cover' }} top width='100%'
              height='150px'
              src={recipe.banner}
            />
            <CardHeader>
              <CardTitle>{recipe.name}</CardTitle>
              <CardSubtitle>Source: <a href={recipe.source}>{recipe.source}</a></CardSubtitle>
            </CardHeader>
            <CardBody>

              <CardText>
                <div className='row'>
                  <div className='col'><h6>Makes:</h6></div>
                  <div className='col'>{recipe.makes} </div>
                </div>
                <div className='row'>
                  <div className='col'><h6>Prep Time:</h6></div>
                  <div className='col'> {recipe.prepTime}</div>
                </div>
                <div className='row'>
                  <div className='col'><h6>Cook Time:</h6></div>
                  <div className='col'>{recipe.cookTime}</div>
                </div>
              </CardText>
              <CardText>
                <h3>Ingredients</h3>
                <ListGroup>
                  {recipe.ingredients.map(ind =>
                    <ListGroupItem key={ind}>{ind}</ListGroupItem>
                  )}
                  {recipe.components.map(com =>
                    <ListGroupItem key={com}><Badge color='primary' pill>component</Badge> {com.needed} {com.name}</ListGroupItem>
                  )}
                </ListGroup>
              </CardText>
              <CardText>
                <h3>Directions</h3>
                {recipe.directions.map(x => <p key={x}>{x}</p>)}
                <h3>Notes</h3>
                {recipe.notes.map(x => <p key={x}>{x}</p>)}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        {recipe.components.map(com =>
          <Col key={com} xl={6} lg={6} md={12}>
            <RecipeComponent recipe={com} />
          </Col>
        )}
      </Row>
    )
  }
}

export default Recipe
