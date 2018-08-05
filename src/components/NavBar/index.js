import * as React from 'react';
import {Link} from "react-router";
import {
    Button,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
} from 'reactstrap';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="light" light={true} expand="md">
                    <img width={75} height={75}
                         src={this.props.picture}/>
                    <NavbarBrand href="/" style={{"marginLeft": "10px"}}>{this.props.name}</NavbarBrand>
                    <Nav className="ml-auto" navbar={true}>
                        <NavItem>
                            <Button color="light"><Link to="/jsonresume">JSON Resume</Link></Button>
                        </NavItem>
                        <NavItem>
                            <Button color="light"><Link to="/teriyaki">Teriyaki Chicken</Link></Button>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;