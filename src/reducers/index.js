import { combineReducers } from 'redux';
import portfolio from './portfolioReducer';

const store = combineReducers({
  portfolio
});
export default store;
