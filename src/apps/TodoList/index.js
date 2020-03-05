import * as React from 'react'
import { Badge, CardBody, CardHeader, CardTitle, ListGroup, ListGroupItem, Progress } from 'reactstrap'
import todolist from '../../resource/todo.json'
import TopCard from '../../components/TopLevelCard'

class TodoList extends React.Component {
  render () {
    // const todolist = this.props.todolist
    const total = 25
    const estimate = Math.max(total, Object.keys(todolist).length)

    const missingList = Array.apply(null, { length: estimate - Object.keys(todolist).length }).map(Number.call, Number)

    const percentdone = (Object.keys(todolist)
      .filter(x => todolist[x])
      .length / estimate) * 100

    return (
      <TopCard>
        <CardHeader>
          <CardTitle>TODO</CardTitle>
          <div className='text-center text-monospace'>this page is in construction</div>
          <Progress multi>
            <Progress bar color='success' value={percentdone} />
            <Progress bar color='danger' value={100 - percentdone} />
          </Progress>
          <div className='text-center text-monospace'>{percentdone}%</div>
        </CardHeader>
        <CardBody>
          <ListGroup>
            {Object.keys(todolist).map(item =>
              <ListGroupItem key={item} color='default'>
                {((todolist[item]) ? <Badge color='success' pill>done</Badge>
                  : <Badge color='secondary' pill>todo</Badge>)}
                {'\t'}
                {item}
              </ListGroupItem>)}
            {missingList.map(
              key =>
                <ListGroupItem key={key}>
                  <Badge color='warning'>unspecified</Badge>
                </ListGroupItem>)}
          </ListGroup>
        </CardBody>
      </TopCard>
    )
  }
}

export default TodoList
