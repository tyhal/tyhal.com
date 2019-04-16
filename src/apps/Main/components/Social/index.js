import * as React from 'react'
import {
  CardLink
} from 'reactstrap'

class Social extends React.Component {
  render () {
    return (
      <CardLink href={this.props.data.url}>{this.props.data.network}</CardLink>
    )
  }
}

export default Social
