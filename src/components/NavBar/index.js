import * as React from 'react'
import { Link } from 'react-router'
import Social from './components/Social'
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'

class NavBar extends React.Component {
  render () {
    const routes = ['json', 'teriyaki']
    return (
      <div>
        <Navbar color='dark' light expand='md'>
          <img alt='profile' width={75} height={75}
            src={this.props.picture} />
          <NavbarBrand href='/' style={{ 'marginLeft': '10px' }}>{this.props.name}</NavbarBrand>
          <Nav className='ml-auto' navbar>
            {this.props.profiles.map(soc => <Social data={soc} />)}
            {routes.map(route =>
              <NavItem>
                <Link to={route}>{route}</Link>
              </NavItem>)}
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
