import React, { Component } from 'react';

import Spotify from 'spotify-web-api-js';
const spotify = new Spotify();

let styles = {
    height: '100vh',
    width: '100vw'
}


class NowPlaying extends Component {
    constructor(props) {
        super(props);
        this.state = {

            myAlbums: '',
            nowPlaying: {
                song: 'Not Checked',
                image: '',
                artist: ''

            }
        }
    }

    getNowPlaying() {
        spotify.getMyCurrentPlaybackState()
            .then((res) => {
                this.setState({
                    nowPlaying: {
                        song: res.item.name,
                        image: res.item.album.images[0].url,
                        artist: res.item.artists[0].name
                    }
                })
                console.log(res)
            })
    }

    componentDidMount() {
        this.getNowPlaying()
    }

    render() {
        return (
            <div className="d-flex align-items-center" style={styles}>
                
            
                <div className="container bg-light">
                    <div className="row">
                        <div className="col-6-lg">
                            <img src={this.state.nowPlaying.image} className="img-fluid"/>
                        </div>
                        <div className="col-6-lg">
                            <h1 className="rale">{this.state.nowPlaying.artist} - {this.state.nowPlaying.song}</h1>
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