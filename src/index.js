import './sass/app.sass';

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import addSearchData from './actions/SearchArctions';
import App from './shared/App';
window._ = require('lodash');

hydrate(
  <BrowserRouter>
    <App initialData={window.initialData}/>
  </BrowserRouter>,
  document.getElementById('root'),
);