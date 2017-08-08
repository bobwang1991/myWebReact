require('styles/reset.min.css');
require('styles/App.css');
require('styles/Header.css');
require('styles/index.css');
require('styles/Footer.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
