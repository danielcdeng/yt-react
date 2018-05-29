import * as actionTypes from './actionTypes';
import portfolioApi from '../api/portfolioApi';
import {ajaxCallError, ajaxCallSuccess, beginAjaxCall} from './ajaxStatusActions';

/***** Local Functions *****/

/***** Exported Functions *****/

export function getCatIndices(portfolio) {
  const action = {type: actionTypes.TAB_INDICES, portfolio};
  console.log('Action = ', action);
  return action;
}

export function loadPortfolioSuccess(target) {
  const action = {type: actionTypes.LOAD_PORTFOLIO_SUCCESS, target};
  console.log('Action = ', action);
  return action;
}

// target and filter are the two keys in the state.portfolio object
export function onViewFilter(filter) {
  const action = {type: actionTypes.ON_VIEW_FILTER, filter};
  console.log('Action = ', action);
  return action;
}

export function onViewReset() {
  const action = {type: actionTypes.ON_VIEW_RESET};
  console.log('Action = ', action);
  return action;
}

// In below, parameter target could be also from portfolio.filter if filterFlag is true.

export function onTickerBeginDateSort(filter, target) {
  console.log('Action onTickerBeginDateSort');
  return(filter.length > 0 ? {type: actionTypes.ON_TICKER_BEGIN_DATE_SORT, filter} : {type: actionTypes.ON_TICKER_BEGIN_DATE_SORT, target});
}

export function onTickerCycleSort(filter, target) {
  console.log('Action onTickerCycleSort');
  return(filter.length > 0 ? {type: actionTypes.ON_TICKER_CYCLE_SORT, filter} : {type: actionTypes.ON_TICKER_CYCLE_SORT, target});
}

export function onTickerHighestDateSort(filter, target) {
  console.log('Action onTickerHighestDateSort');
  return filter.length > 0 ?
    {type: actionTypes.ON_TICKER_HIGHEST_DATE_SORT, filter} :
    {type: actionTypes.ON_TICKER_HIGHEST_DATE_SORT, target};
}

export function onTickerHighestNetPerSort(filter, target) {
  console.log('Action onTickerHighestNetPerSort');
  return filter.length > 0 ?
    {type: actionTypes.ON_TICKER_HIGHEST_NETPER_SORT, filter} :
    {type: actionTypes.ON_TICKER_HIGHEST_NETPER_SORT, target};
}

/***** Thunk APIs *****/

export function loadPortfolioThunk() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return portfolioApi.getPortfolio().then(portfolio => {
      dispatch(loadPortfolioSuccess(portfolio));
      dispatch(ajaxCallSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

