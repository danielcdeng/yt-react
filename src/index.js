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
import * as types from './actions/actionTypes';
import { getArchive, getPortfolio } from "./actions/marketActions";
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(getPortfolio());
store.dispatch(getArchive());

// Extraction block:
// import { extractCityCountryList } from "./actions/weatherActions";
// store.dispatch(extractCityCountryList()); // one-time execution to generate the cities list per country

// Normal block: Comment out this block if the above Extraction Block is un-commented.
import { getCityCountryList } from "./actions/weatherActions";
store.dispatch(getCityCountryList(types.COUNTRY_US_NAME)); // 'US'

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

