import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Navbar, NavItem, Nav} from 'react-bootstrap';


class Logo extends Component {

    render() {
        return(
            <div>
                <ul>
                <li><Link to="/"><h1 className="titan white">Code Musiccc</h1></Link></li>
                <li><Link to="/suggest"><h5 className="titan white">Now Playing</h5></Link></li>
                <li><Link to="/options"><h5 className="titan white">Explore Albums</h5></Link></li>
                </ul>
            </div>
        )
    }
}


export default Logo