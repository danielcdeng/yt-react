import * as actionTypes from './actionTypes';
import portfolioApi from '../api/portfolioApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

/***** Local Functions *****/

/***** Exported Functions *****/

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

export function onTickerBeginDateSort(target) {
  const action = {type: actionTypes.ON_TICKER_BEGIN_DATE_SORT, target};
  return action;
}

export function onTickerCycleSort(target) {
  const action = {type: actionTypes.ON_TICKER_CYCLE_SORT, target};
  return action;
}

export function onTickerHighestDateSort(target) {
  const action = {type: actionTypes.ON_TICKER_HIGHEST_DATE_SORT, target};
  return action;
}

export function onTickerHighestNetPerSort(target) {
  const action = {type: actionTypes.ON_TICKER_HIGHEST_NETPER_SORT, target};
  return action;
}

export function onTickerLowestDateSort(target) {
  const action = {type: actionTypes.ON_TICKER_LOWEST_DATE_SORT, target};
  return action;
}

export function onTickerLowestNetPerSort(target) {
  const action = {type: actionTypes.ON_TICKER_LOWEST_NETPER_SORT, target};
  return action;
}

/***** Thunk APIs *****/

export function loadPortfolioThunk() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return portfolioApi.getPortfolio().then(portfolio => {
      dispatch(loadPortfolioSuccess(portfolio));
    }).catch(error => {
      throw(error);
    });
  };
}

