import React, { Component } from 'react';

import Spotify from 'spotify-web-api-js';
const spotify = new Spotify();


class MyAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myAlbums: '',
            
        }
    }



    getSavedAlbums() {
        spotify.getMySavedAlbums()
        .then((res) => {
          this.setState({
            myAlbums: res.items[9].album.images[0].url
          })
          console.log(res)
        })
      }
    
      getAnalysis() {
        spotify.getAudioFeaturesForTrack('4AH8GJVosfrbfhe5NVTAnx')
        .then((res) => {
          console.log(res)
        })
      }
    
    render() {
        return(
        <div>
            <div>
            <img src={this.state.myAlbums} />
          </div>
          <button onClick={() => this.getSavedAlbums()}>Get My Albums
          </button>
          <div>
            </div>
          <button onClick={() => this.getAnalysis()}>Get Song Analysis
          </button>
        </div>
        )
    }
}
export default MyAlbums