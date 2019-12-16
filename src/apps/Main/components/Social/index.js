import * as React from 'react'
import { SocialIcon } from 'react-social-icons'

class Social extends React.Component {
  render () {
    return (
      <SocialIcon
        url={this.props.data.url}
        network={this.props.data.network.toLowerCase()}
        style={{ margin: 4, height: 30, width: 30 }}
        bgColor='#e9ecef'
      />
    )
  }
}

export default Social
