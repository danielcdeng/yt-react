import { combineReducers } from 'redux';
import common  from './commonReducer';
import market  from './marketReducer';
import weather from './weatherReducer';

// Init store:
const store = combineReducers({
  common, // common
  market, // market (YouTiming)
  weather // weather (OpenWeatherMap)
});
export default store;
