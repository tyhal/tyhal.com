import React, {Component} from 'react'
import {Card, CardBody, CardImg, CardText, Col, ListGroup, ListGroupItem, Row} from 'reactstrap'
import {Link} from "react-router";
import RecipeComponent from "./components/RecipeComponent";

const sel = 'tonkotsu_ramen'

// app component
class Recipe extends Component {
    // render
    render() {
        const recipe = this.props.recipes[sel]
        return (<Row>
                <Col xl={6} lg={6} md={12}>
                    <Card>
                        <CardImg style={{objectFit: 'cover'}} top width='100%'
                                 height={'150px'}
                                 src={recipe.banner}/>
                        <CardBody>
                            <CardText>
                                <h1>{recipe.name}</h1>
                                <p>
                                    <h6>Source:</h6>{recipe.source}
                                </p>
                                <Card>
                                    <CardBody>
                                        <CardText>
                                            <div className={'row'}>
                                                <div className={'col'}><h6>Makes:</h6></div>
                                                <div className={'col'}>{recipe.makes} </div>
                                            </div>
                                            <div className={'row'}>
                                                <div className={'col'}><h6>Prep Time:</h6></div>
                                                <div className={'col'}> {recipe.prepTime}</div>
                                            </div>
                                            <div className={'row'}>
                                                <div className={'col'}><h6>Cook Time:</h6></div>
                                                <div className={'col'}>{recipe.cookTime}</div>
                                            </div>
                                        </CardText>
                                        <CardText>
                                            <h3>Ingredients</h3>
                                            <ListGroup>
                                                {recipe.ingredients.map(ind =>
                                                    <ListGroupItem>{ind}</ListGroupItem>
                                                )}
                                                {recipe.components.map(com =>
                                                    <ListGroupItem>{com.needed} {com.name} <Link
                                                        to={'food/' + sel + '/' + com.name}>See
                                                        recipe</Link></ListGroupItem>
                                                )}
                                            </ListGroup>
                                        </CardText>

                                        <CardText>
                                            <h3>Directions</h3>
                                            {recipe.directions.map(x => <p>{x}</p>)}
                                            <h3>Notes</h3>
                                            {recipe.notes.map(x => <p>{x}</p>)}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                {recipe.components.map(com =>
                    <Col xl={6} lg={6} md={12}>
                        <RecipeComponent recipe={com}/>
                    </Col>
                )}
            </Row>
        )
    }
}

export default Recipe
