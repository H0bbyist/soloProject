import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';



class App extends Component {
  

  render() {
    return (
      <Router>
          <div>
            <Route exat path="/" component={Home} />
          </div>
      </Router>
    );
  }
}

export default App;
