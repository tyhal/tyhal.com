import * as React from 'react';
import {Card, CardText} from "reactstrap";

class NavBar extends React.Component {
    render() {
        return (
            <div className="row" style={{"marginTop": 20}}>
                <Card className="col-md-6" style={{textAlign: "left"}}>
                    <CardText>
                        <a href={this.props.website}>{this.props.name}</a>
                        <span>&copy; 2018.</span>
                    </CardText>
                </Card>
                <Card className="col-md-6" style={{textAlign: "right"}}>
                    <CardText>
                        <span>Powered by</span>
                        <a href="https://garden-place-noodle-bar.business.site/"> Spicy Dumplings</a>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default NavBar;