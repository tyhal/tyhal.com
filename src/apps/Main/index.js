import React, {Component} from 'react'
import {Jumbotron, ListGroup, ListGroupItem, Progress} from "reactstrap";

// app component
class Main extends Component {
    // render
    render() {
        return (<Jumbotron>
            <div className="text-center">5%</div>
            <Progress multi>
                <Progress bar value="5" />
                <Progress bar color="danger" value="95" />
            </Progress>
            <div className="text-center">-</div>
            <div className="text-center">this is in construction</div>

            <ListGroup>
                <ListGroupItem> x - create 20 step plan</ListGroupItem>
                <ListGroupItem> x - summary at top of main page</ListGroupItem>
                <ListGroupItem> x - json resume info filled out</ListGroupItem>
                <ListGroupItem> o - terriyaki chicken </ListGroupItem>
                <ListGroupItem> x - buttons to relevant sites </ListGroupItem>
                <ListGroupItem> x - posts area </ListGroupItem>
                <ListGroupItem> x - projects watching </ListGroupItem>
                <ListGroupItem> x - json resume page </ListGroupItem>
                <ListGroupItem> x - business card re-render</ListGroupItem>
                <ListGroupItem> x - i am become deaf, the ignorer of words</ListGroupItem>
                <ListGroupItem> x - info dump wiki </ListGroupItem>
                <ListGroupItem> x - old art </ListGroupItem>
                <ListGroupItem> x - recommended books</ListGroupItem>
                <ListGroupItem> x - dumpling leaderboard</ListGroupItem>
                <ListGroupItem> x - zsh is cool</ListGroupItem>
                <ListGroupItem> x - </ListGroupItem>
                <ListGroupItem> x - </ListGroupItem>
                <ListGroupItem> x - </ListGroupItem>
                <ListGroupItem> x - </ListGroupItem>
                <ListGroupItem> x - </ListGroupItem>


            </ListGroup>
        </Jumbotron>)
    }
}

export default Main
