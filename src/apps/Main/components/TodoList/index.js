import * as React from 'react'
import { Badge, ListGroup, ListGroupItem, Progress } from 'reactstrap'

class TodoList extends React.Component {
  render () {
    const todolist = this.props.todolist
    const estimate = Math.max(this.props.total, Object.keys(todolist).length)

    const missingList = Array.apply(null, { length: estimate - Object.keys(todolist).length }).map(Number.call, Number)

    const percentdone = (Object.keys(todolist)
      .filter(x => todolist[x])
      .length / estimate) * 100

    return (
      <div>
        <div className='text-center'>this page is in construction</div>
        <Progress multi>
          <Progress bar color='success' value={percentdone} />
          <Progress bar color='danger' value={100 - percentdone} />
        </Progress>
        <div className='text-center'>{percentdone}%</div>
        <br />
        <ListGroup>
          {Object.keys(todolist).map(item =>
            <ListGroupItem key={item} color='default'>
              {((todolist[item]) ? <Badge color='success' pill>done</Badge> : <Badge color='danger' pill>todo</Badge>)}
              {'\t'}
              {item}
            </ListGroupItem>)}
          {missingList.map(
            key => <ListGroupItem key={key}>
              <Badge color='warning'>unspecified</Badge>
            </ListGroupItem>)}
        </ListGroup>
      </div>
    )
  }
}

export default TodoList
