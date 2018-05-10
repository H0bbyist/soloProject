import React, { Component } from 'react';
import '../routes/home.css';

import Header from '../components/Header';

import Spotify from 'spotify-web-api-js';
const spotify = new Spotify();


class Home extends Component {
    constructor(props) {
        super(props);
        const params = this.getHashParams();
        if (params.access_token) {
          spotify.setAccessToken(params.access_token);
        }
      }
    
      getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        console.log(hashParams)
        return hashParams;
      }

    render() {
        return(
            <div>
                <div className="login">
                <Header />
                </div>
            </div>
        )
    }
}

export default Home