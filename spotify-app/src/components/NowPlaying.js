import React, { Component } from 'react';

import Spotify from 'spotify-web-api-js';
const spotify = new Spotify();


class NowPlaying extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          myAlbums: '',
          nowPlaying: {
            name: 'Not Checked',
            image: ''
          }
        }
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
    

      render() {
          return( 
            <div>
                <div>
          <h1>Now Playing: { this.state.nowPlaying.name } </h1>
        
        </div>
        <div>
          <img src={ this.state.nowPlaying.image }/>
          </div>
          <button onClick={() => this.getNowPlaying()}>Get Now Playing
          </button>
            </div>
          )
      }
}

export default NowPlaying