import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div>
                <h1 className="titan white">Code Musiccc</h1>
                <a href="http://localhost:8888/login">
                <button className="btn btn-warning rale">Spotify Login</button>
                </a>
            </div>
        )
    }
}

export default Header