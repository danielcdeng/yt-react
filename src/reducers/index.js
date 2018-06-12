import { combineReducers } from 'redux';
import primary   from './portfolioReducer';
import openweathermap from './weatherReducer';

// Init store:
const store = combineReducers({
  primary,        // primary menu, YouTiming
  openweathermap  // secondary menu
});
export default store;
