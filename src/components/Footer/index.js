
import * as React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <div className="app-footer">
                <div>
                    <a href="http://tyhal.com">Tyler Hale</a>
                    <span>&copy; 2018.</span>
                    <span>Powered by</span>
                    <a href="https://garden-place-noodle-bar.business.site/"> Spicy Dumplings</a>
                </div>
            </div>
        );
    }
}

export default NavBar;