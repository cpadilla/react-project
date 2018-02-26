import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';
import Homepage from './components/homepage';
import Header from './components/header';
import Music from './components/music'
import Store from './components/store'
import Tour from './components/tour'
import Contact from './components/contact'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/music' component={Music}/>
          <Route exact path='/store' component={Store}/>
          <Route exact path='/tour' component={Tour}/>
          <Route exact path='/contact' component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
