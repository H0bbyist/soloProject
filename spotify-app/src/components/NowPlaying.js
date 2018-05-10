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

    componentDidMount() {
        this.getNowPlaying()
    }

    render() {
        return (
            <div>
                
                
                
                <div className="container bg-light">
                    <div className="row">
                        <div className="col-8-lg">
                            <img src={this.state.nowPlaying.image} />
                            <button className="btn btn-warning rale" onClick={() => this.getNowPlaying()}>Refresh Now Playing
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default NowPlaying


{/* <h1>Now Playing: {this.state.nowPlaying.name} </h1>
                   
                   <img src={this.state.nowPlaying.image} />
             
                   <button className="btn btn-warning rale" onClick={() => this.getNowPlaying()}>Refresh Now Playing
                   </button> */}