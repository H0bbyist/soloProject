import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from './routes/Home';
import Suggest from './routes/Suggest';



class App extends Component {
  

  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/suggest" component={Suggest} />
          </div>
      </Router>
    );
  }
}

export default App;
