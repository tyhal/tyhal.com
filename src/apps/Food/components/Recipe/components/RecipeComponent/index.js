import React, {Component} from 'react'
import {Card, CardBody, CardText, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router";

// app component
class RecipeComponent extends Component {
    // render
    render() {
        const recipe = this.props.recipe
        return (
            <div>
                <Card style={{height: "100%"}}>
                    <CardBody>
                        <CardText>
                            <h2 id={'slaw'}>{recipe.name}</h2>
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
                                        <ListGroupItem>{com.needed} {com.name} <Link to={'food/' + com.name}>See
                                            recipe</Link></ListGroupItem>
                                    )}
                                </ListGroup>
                            </CardText>
                            <CardText>
                                <h3>Directions</h3>
                                {recipe.directions.map(x => <p>{x}</p>)}
                            </CardText>
                        </CardText>
                    </CardBody>
                </Card>
                {recipe.components.map(com =>
                    <RecipeComponent recipe={com}/>
                )}
            </div>
        )
    }
}

export default RecipeComponent
