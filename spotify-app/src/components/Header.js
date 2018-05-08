import React, { Component } from 'react';


class Header extends Component {

    render() {
        return (
            <div>
                <h1>Spotify App</h1>
                <a href="http://localhost:8888">
                <button>Log in with Spotify</button>
                </a>
            </div>
        )
    }
}

export default Header