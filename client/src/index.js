import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
var dotenv = require('dotenv').config();;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
