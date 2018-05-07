import React, { Component } from 'react';
import './App.css';

import Spotify from 'spotify-web-api-js';
const spotify = new Spotify();

class App extends Component {

  constructor(props) {
    super(props);
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      myAlbums: '',
      nowPlaying: {
        name: 'Not Checked',
        image: ''
      }
    }
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

  getNowPlaying() {
    spotify.getMyCurrentPlaybackState() 
    .then((res) => {
      this.setState({
        nowPlaying: {
          name: res.item.name,
          image: res.item.album.images[0].url
        }
      })
    })
  }

  getSavedAlbums() {
    spotify.getMySavedAlbums()
    .then((res) => {
      this.setState({
        myAlbums: res.item.album
      })
    })
  }
  

  render() {
    return (
      <div className="App">
        <h1>Spotify App</h1>
        <a href="http://localhost:8888">
        <button>Log in with Spotify</button>
        </a>

        <div>Now Playing: { this.state.nowPlaying.name } </div>
        <div>
          <img src={ this.state.nowPlaying.image } style={{width: 300}}/>
          </div>
          <button onClick={() => this.getNowPlaying()}>Get Now Playing
          </button>
      </div>
    );
  }
}

export default App;
