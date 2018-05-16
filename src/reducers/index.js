import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import portfolio from './portfolioReducer';

const rootReducer = combineReducers({ajaxCallsInProgress, portfolio});

export default rootReducer;
