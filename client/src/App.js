import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import Header from './components/header/header';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Homepage}/>
        </div>
      </Router>
    );
  }
}

export default App;
