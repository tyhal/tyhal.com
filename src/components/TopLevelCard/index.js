import React from 'react'
import { Card } from 'reactstrap'

const TopCard = (props) => {
  return (
    <Card className='shadow mt-4' color='primary'>
      {props.children}
    </Card>
  )
}

export default TopCard
