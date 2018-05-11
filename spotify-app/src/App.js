import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from './routes/Home';
import Suggest from './routes/Suggest';
import Options from './routes/Options';



class App extends Component {
  

  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/suggest" component={Suggest} />
            <Route exact path="/options" component={Options} />
          </div>
      </Router>
    );
  }
}

export default App;
