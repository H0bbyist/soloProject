import React, { Component } from 'react';
import '../routes/options.css';

import Logo from '../components/Logo';
import MyAlbums from '../components/MyAlbums';

import Spotify from 'spotify-web-api-js';
const spotify = new Spotify();

class Options extends Component {
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
                <Logo />
                <MyAlbums />
            </div>
        )
    }
}

export default Options