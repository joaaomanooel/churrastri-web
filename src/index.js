/* eslint-disable import/first */
require('dotenv').config();

import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import App from './App';

render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));
