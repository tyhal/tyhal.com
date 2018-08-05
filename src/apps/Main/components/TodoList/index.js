import * as React from 'react';
import {ListGroup, ListGroupItem, Progress} from "reactstrap";


class TodoList extends React.Component {
    render() {

        const todolist = this.props.todolist
        const estimate = Math.max(this.props.total, Object.keys(todolist).length)

        const missing_list = Array.apply(null, {length: estimate - Object.keys(todolist).length}).map(Number.call, Number)

        const percentdone = (Object.keys(todolist)
            .filter(x => todolist[x])
            .length / estimate) * 100

        return (
            <div>
                <div className="text-center">{percentdone}%</div>
                <Progress multi>
                    <Progress bar value={percentdone}/>
                    <Progress bar color="danger" value={100 - percentdone}/>
                </Progress>
                <div className="text-center">-</div>
                <div className="text-center">this is in construction</div>

                <ListGroup>
                    {Object.keys(todolist).map(item =>
                        <ListGroupItem key={item} color={(todolist[item]) ? "success" : "default"}>
                            {((todolist[item]) ? "o - " : "x - ") + item}
                        </ListGroupItem>)}
                    {missing_list.map(
                        key => <ListGroupItem key={key} color="danger">
                            x - todo
                        </ListGroupItem>)}
                </ListGroup>
            </div>
        );
    }
}

export default TodoList;