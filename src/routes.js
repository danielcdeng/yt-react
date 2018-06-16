import React from 'react';
import {hashHistory, Route, IndexRoute} from 'react-router';
import App         from './components/App';
import HomePage    from './components/home/HomePage';
import MarketPage  from './components/market/MarketPage';
import AboutPage   from './components/about/AboutPage';
import WeatherPage from './components/weather/WeatherPage';

export default (
  <Route path="/" onEnter={""} history={hashHistory} component={App}>
    <IndexRoute                  component={HomePage} />
    <Route path="portfolio"      component={MarketPage} />
    <Route path="portfolio/:cat" component={MarketPage} />
    <Route path="info"           component={AboutPage} />
    <Route path="weather"        component={WeatherPage} />
  </Route>
);
