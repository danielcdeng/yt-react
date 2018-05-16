/* eslint-disable import/default */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import { Provider } from 'react-redux';

import routes from './routes';
import './styles/styles.css';
//import { loadPortfolioThunk } from "./actions/portfolioActions";
import configureStore from './store/configureStore';

const store = configureStore(); // to create the store

//const portfolioThunk = loadPortfolioThunk();
//store.dispatch(portfolioThunk);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

