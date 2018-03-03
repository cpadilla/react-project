import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  // applyMiddleware,
  // compose,
  createStore } from 'redux';
import shoppingCart from './reducers';
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
import Checkout from './components/checkout'
import ItemContainer from './containers/ItemContainer'
import CartContainer from './containers/cartContainer'

const enhancers = [];
// if (process.env.NODE_EVN === 'development') {
  const devToolsExtension = (window.devToolsExtension) ? window.devToolsExtension() : f => f;
  enhancers.push(devToolsExtension);
// }

// const middleware = [];
// const composedMiddleware = compose(
//   applyMiddleware(...middleware), ...enhancers
// );

let store = createStore(shoppingCart, {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      itemId: 0
    }


  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Header />
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/music' component={Music} />
            <Route exact path='/store' component={Store}/>
            <Route exact path='/tour' component={Tour}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/item/:id' component={ItemContainer}/>
            <Route exact path='/cart' component={CartContainer}/>
            <Route exact path='/checkout' component={Checkout}/>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
