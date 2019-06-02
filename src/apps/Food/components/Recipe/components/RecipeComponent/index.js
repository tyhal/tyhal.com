import React, { Component } from 'react'
import { Badge, Card, CardBody, CardText, ListGroup, ListGroupItem } from 'reactstrap'
import CardHeader from 'reactstrap/es/CardHeader'
import CardTitle from 'reactstrap/es/CardTitle'

// app component
class RecipeComponent extends Component {
  // render
  render () {
    const recipe = this.props.recipe
    return (
      <div>
        <Card style={{ height: '100%' }}>
          <CardHeader>
            <CardTitle>{recipe.name}</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>
              <div className={'row'}>
                <div className={'col'}><h6>Makes:</h6></div>
                <div className={'col'}>{recipe.makes} </div>
              </div>
            </CardText>
            <CardText>
              <h3>Ingredients</h3>
              <ListGroup>
                {recipe.ingredients.map(ind =>
                  <ListGroupItem>{ind}</ListGroupItem>
                )}
                {recipe.components.map(com =>
                  <ListGroupItem><Badge color='secondary' pill>component</Badge> {com.needed} {com.name}</ListGroupItem>
                )}
              </ListGroup>
            </CardText>
            <CardText>
              <h3>Directions</h3>
              {recipe.directions.map(x => <p>{x}</p>)}
            </CardText>
          </CardBody>
        </Card>
        {recipe.components.map(com =>
          <RecipeComponent recipe={com} />
        )}
      </div>
    )
  }
}

export default RecipeComponent
