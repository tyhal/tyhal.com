import * as React from 'react'
import {
  NavItem
} from 'reactstrap'

class Social extends React.Component {
  render () {
    return (
      <NavItem>
        <a href={this.props.data.url}>{this.props.data.network}</a>
      </NavItem>
    )
  }
}

export default Social
