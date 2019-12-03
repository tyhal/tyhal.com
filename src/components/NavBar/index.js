import React, { useState } from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  const routes = ['/json', '/graph', '/food']
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <Navbar light expand='md'>
      <NavbarBrand className='mr-auto' href='/' style={{ marginLeft: '10px' }}>{props.name}</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className='mr-2' />
      <Collapse isOpen={!collapsed} navbar>
        <Nav className='ml-auto' navbar>
          {routes.map(route =>
            <NavItem key={route}>
              <Link to={route}><Button block color='link'>{route}</Button></Link>
            </NavItem>)}
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavBar
