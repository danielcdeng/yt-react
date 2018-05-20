import * as actionTypes from './actionTypes';
import portfolioApi from '../api/portfolioApi';
import {ajaxCallError, ajaxCallSuccess, beginAjaxCall} from './ajaxStatusActions';

/***** Local Functions *****/

/***** Exported Functions *****/

export function getCatIndices(portfolio) {
  const action = {type: actionTypes.TAB_INDICES, portfolio};
  console.log('action = ', action);
  return action;
}

export function loadPortfolioSuccess(source) {
  const action = {type: actionTypes.LOAD_PORTFOLIO_SUCCESS, source};
  return action;
}

// target and filter are the two keys in the state.portfolio object
export function onPortfolioFilter(filter) {
  const action = {type: actionTypes.ON_PORTFOLIO_FILTER, filter};
  return action;
}

export function onRestorePortfolio() {
  const action = {type: actionTypes.ON_RESTORE_PORTFOLIO};
  return action;
}

// In below, parameter target could be also from portfolio.filter if filterFlag is true.

export function onTickerBeginDateSort(filter, target) {
  return(filter.length > 0 ? {type: actionTypes.ON_TICKER_BEGIN_DATE_SORT, filter} : {type: actionTypes.ON_TICKER_BEGIN_DATE_SORT, target});
}

export function onTickerCycleSort(filter, target) {
  return(filter.length > 0 ? {type: actionTypes.ON_TICKER_CYCLE_SORT, filter} : {type: actionTypes.ON_TICKER_CYCLE_SORT, target});
}

export function onTickerHighestDateSort(filter, target) {
  return filter.length > 0 ?
    {type: actionTypes.ON_TICKER_HIGHEST_DATE_SORT, filter} :
    {type: actionTypes.ON_TICKER_HIGHEST_DATE_SORT, target};
}

export function onTickerHighestNetPerSort(filter, target) {
  return filter.length > 0 ?
    {type: actionTypes.ON_TICKER_HIGHEST_NETPER_SORT, filter} :
    {type: actionTypes.ON_TICKER_HIGHEST_NETPER_SORT, target};
}

export function onTickerLowestDateSort(filter, target) {
  return filter.length > 0 ?
    {type: actionTypes.ON_TICKER_LOWEST_DATE_SORT, filter} :
    {type: actionTypes.ON_TICKER_LOWEST_DATE_SORT, target};
}

export function onTickerLowestNetPerSort(filter, target) {
  return filter.length > 0 ?
    {type: actionTypes.ON_TICKER_LOWEST_NETPER_SORT, filter} :
    {type: actionTypes.ON_TICKER_LOWEST_NETPER_SORT, target};
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

