import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import locale from './localeReducer';
import portfolio from './portfolioReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  locale,
  portfolio
});

export default rootReducer;
