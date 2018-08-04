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
                         src="https://render.bitstrips.com/v2/cpanel/e4f91d37-026a-44d0-91ea-b26cfdaa34a7-2b3e9ea9-00a9-46eb-a2a4-78a44de4f18a-v1.png?transparent=1&palette=1"/>
                    <NavbarBrand href="/" style={{"marginLeft": "10px"}}>Tyler Hale</NavbarBrand>
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