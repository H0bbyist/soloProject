import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Dude</h1>
        <a href="http://localhost:8888">
        <button>Log in with Spotify</button>
        </a>
      </div>
    );
  }
}

export default App;
