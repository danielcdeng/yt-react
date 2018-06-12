import React from 'react';
import {hashHistory, Route, IndexRoute} from 'react-router';
import App           from './components/App';
import HomePage      from './components/home/HomePage';
import PortfolioPage from './components/portfolio/PortfolioPage';
import AboutPage     from './components/about/AboutPage';
import OpenWeatherMapPage from './components/weather/OpenWeatherMapPage';

export default (
  <Route path="/" onEnter={""} history={hashHistory} component={App}>
    <IndexRoute                  component={HomePage} />
    <Route path="portfolio"      component={PortfolioPage} />
    <Route path="portfolio/:cat" component={PortfolioPage} />
    <Route path="info"           component={AboutPage} />
    <Route path="weather"        component={OpenWeatherMapPage} />
  </Route>
);
