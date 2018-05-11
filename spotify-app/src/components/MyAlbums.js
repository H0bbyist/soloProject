import React, { Component } from 'react';

import Spotify from 'spotify-web-api-js';
const spotify = new Spotify();

const style = {
  width: '25rem',
  marginTop: '150px'

}


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
            myAlbums: res.items[2].album.images[0].url
          })
          
        })
      }
    
      getAnalysis(id) {
        spotify.getAudioFeaturesForTrack(id)
        .then((res) => {
          
        })
      }

      componentDidMount() {
        this.getSavedAlbums()
      }
    
    render() {


      const image = this.state.myAlbums;

        return(
          <div className="d-flex align-items-center">


            <div className="container">
              <div className="card" style={style}>
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Arist Name</h5>
                  <p className="card-text">Album Title</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>


        </div>


        )
    }
}
export default MyAlbums

{/* <div>
            <img src={this.state.myAlbums} />
          </div>
          <button onClick={() => this.getSavedAlbums()}>Get My Albums
          </button>
          <div>
            </div>
          <button onClick={() => this.getAnalysis()}>Get Song Analysis
          </button> */}