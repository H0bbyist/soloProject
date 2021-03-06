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
            songList: [],
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
                        artist: res.item.artists[0].name,
                    }
                })
                this.getSongList(res.item.album.id)
                
            })
    }

    getSongList(id) {
        spotify.getAlbumTracks(id)
        .then((res) => {
            this.setState({
                songList: []
            })
            let songs = []
            for (let i = 0; i < res.items.length; i++) {
                songs.push(res.items[i].name)
                
            }
            this.setState({
                songList: songs
            })
            console.log(this.state.songList)
        })
    }

    componentDidMount() {
        this.getNowPlaying()
    }


    render() {

        return (
            <div className="d-flex align-items-center" style={styles}>
            
                
            
                <div className="container bg-light mt-5">
                    <div className="row over">
                        <div className="col-6-lg">
                            <img src={this.state.nowPlaying.image} className="img-fluid"/>
                        </div>
                        <div className="col-6-lg mx-auto mt-3 test test2">
                        <div>
                            <h2 className="rale">{this.state.nowPlaying.artist} - {this.state.nowPlaying.song}</h2>
                        </div>
                        <div className="">
                            <h3 className="rale">Album Tracklist</h3>
                           <ol className="rale">
                           {this.state.songList.map((item, i) => <li key={i}>{item}</li>)}
                            </ol>
                        </div>
                        <div>
                            <button className="btn btn-warning rale" onClick={() => this.getNowPlaying()}>Refresh Now Playing
                            </button>
                        </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

export default NowPlaying

