import * as React from 'react'
import { Link } from 'react-router'
import {
  Button,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem
} from 'reactstrap'

class NavBar extends React.Component {
  render () {
    return (
      <div>
        <Navbar color='dark' light expand='md'>
          <img width={75} height={75}
            src={this.props.picture} />
          <NavbarBrand href='/' style={{ 'marginLeft': '10px' }}>{this.props.name}</NavbarBrand>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <Button color='dark' href='/jsonresume'>Json Resume</Button>
            </NavItem>
            <NavItem>
              <Button color='dark' href='/teriyaki'>Teriyaki Chicken</Button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
