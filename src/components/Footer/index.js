import * as React from 'react'

class NavBar extends React.Component {
  render () {
    return (
      <div className='row' style={{ 'marginTop': 20 }}>
        <div className='col-md-6' style={{ textAlign: 'left' }}>
          <a href={this.props.website}>{this.props.name}</a>
          <span>&copy; 2018.</span>
        </div>
        <div className='col-md-6' style={{ textAlign: 'right' }}>

          <span>Powered by</span>
          <a href='https://garden-place-noodle-bar.business.site/'> Spicy Dumplings</a>
        </div>
      </div>
    )
  }
}

export default NavBar
