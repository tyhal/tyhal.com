import * as React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'

class NavBar extends React.Component {
  render () {
    const routes = ['json', 'graph', 'food']
    return (
      <Navbar color='dark' light expand='md'>
        <NavbarBrand href='/' style={{ marginLeft: '10px' }}>{this.props.name}</NavbarBrand>
        <Nav className='ml-auto' navbar>
          {routes.map(route =>
            <NavItem>
              <Link to={route}>{route}</Link>
            </NavItem>)}
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar
