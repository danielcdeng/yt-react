import * as types from './actionTypes';
import portfolioApi from '../api/portfolioApi';
import {ajaxCallError, ajaxCallSuccess, beginAjaxCall} from './ajaxStatusActions';

/***** Local Functions *****/

/***** Exported Functions *****/

export function getCatIndices(portfolio) {
  const action = {type: types.TAB_INDICES, portfolio};
  console.log('Action = ', action);
  return action;
}

export function loadPortfolioSuccess(target) {
  const action = {type: types.LOAD_PORTFOLIO_SUCCESS, target};
  console.log('Action = ', action);
  return action;
}

// target and filter are the two keys in the state.portfolio object
export function onViewFilter(filter) {
  const action = {type: types.ON_VIEW_FILTER, filter};
  console.log('Action = ', action);
  return action;
}

export function onViewReset() {
  const action = {type: types.ON_VIEW_RESET};
  console.log('Action = ', action);
  return action;
}

// In below, parameter target could be also from portfolio.filter if filterFlag is true.

export function onTickerBeginDateSort(filter, target) {
  console.log('Action onTickerBeginDateSort');
  return(filter.length > 0 ? {type: types.ON_TICKER_BEGIN_DATE_SORT, filter} : {type: types.ON_TICKER_BEGIN_DATE_SORT, target});
}

export function onTickerCycleSort(filter, target) {
  console.log('Action onTickerCycleSort');
  return(filter.length > 0 ? {type: types.ON_TICKER_CYCLE_SORT, filter} : {type: types.ON_TICKER_CYCLE_SORT, target});
}

export function onTickerHighestDateSort(filter, target) {
  console.log('Action onTickerHighestDateSort');
  return filter.length > 0 ?
    {type: types.ON_TICKER_HIGHEST_DATE_SORT, filter} :
    {type: types.ON_TICKER_HIGHEST_DATE_SORT, target};
}

export function onTickerHighestNetPerSort(filter, target) {
  console.log('Action onTickerHighestNetPerSort');
  return filter.length > 0 ?
    {type: types.ON_TICKER_HIGHEST_NETPER_SORT, filter} :
    {type: types.ON_TICKER_HIGHEST_NETPER_SORT, target};
}

export function onViewStateCodeClicked() {
  console.log('Action onViewStateCodeClicked');
  return {type: types.ON_VIEW_STATE_CODE_CLICKED};
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

