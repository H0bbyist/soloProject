import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Logo extends Component {

    render() {
        return(
            <div>
                <Link to="/"><h1 className="titan white logo">Code Musiccc</h1></Link>
            </div>
        )
    }
}


export default Logo