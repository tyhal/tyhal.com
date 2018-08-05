import React, {Component} from 'react'
import {Jumbotron} from "reactstrap";
import TodoList from "./components/TodoList"

const todolist = {
    "create 25 step plan": false,
    "summary at top of main page": false,
    "json resume info filled out": false,
    "terriyaki chicken ": true,
    "buttons to relevant sites ": false,
    "posts area ": false,
    "projects watching ": false,
    "json resume page ": false,
    "business card re-render": false,
    "i am become deaf, the ignorer of words": false,
    "info dump wiki ": false,
    "old art ": false,
    "dumpling leaderboard": false,
    "zsh is cool": false,
    "recommended books": false,
    "l2git": false
}

// app component
class Main extends Component {

    // render
    render() {
        return (<Jumbotron>
            <TodoList todolist={todolist} total={25}/>
        </Jumbotron>)
    }
}

export default Main
