import React, { Component } from 'react';


class Header extends Component {

    render() {
        return (
            <div>
                <h1 className="titan">Code Musiccc</h1>
                <a href="http://localhost:8888/login">
                <button className="btn btn-secondary">Log into Spotify</button>
                </a>
            </div>
        )
    }
}

export default Header