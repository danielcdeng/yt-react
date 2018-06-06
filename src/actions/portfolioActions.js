import * as types from './actionTypes';
import portfolioApi from '../api/portfolioApi';
import {ajaxCallError, ajaxCallSuccess, beginAjaxCall} from './ajaxStatusActions';

// 11 actions:

export function getCatIndices(portfolio) {
  console.log('Action getCatIndices');
  return {type: types.TAB_INDICES, portfolio};
}

export function loadArchiveSuccess(archive) {
  console.log('Action loadArchiveSuccess');
  return {type: types.LOAD_ARCHIVE_SUCCESS, archive};
}

export function loadPortfolioSuccess(target) {
  console.log('Action loadPortfolioSuccess');
  return {type: types.LOAD_PORTFOLIO_SUCCESS, target};
}

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

// Ticker row level:
export function onTickerStateCodeClicked(ticker) {
  console.log('Action onTickerStateCodeClicked');
  return {type: types.ON_TICKER_STATE_CODE_CLICKED, ticker};
}

// target and filter are the two data-view-objects in state.data
export function onViewFilter(filter) {
  console.log('Action onViewFilter');
  return {type: types.ON_VIEW_FILTER, filter};
}

export function onViewReset() {
  console.log('Action onViewFilter');
  return {type: types.ON_VIEW_RESET};
}

// Table view level:
export function onViewStateCodeClicked() {
  console.log('Action onViewStateCodeClicked');
  return {type: types.ON_VIEW_STATE_CODE_CLICKED};
}

/***** Thunk APIs *****/

export function getArchive() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return portfolioApi.getArchive().then(archive => {
      dispatch(loadArchiveSuccess(archive));
      dispatch(ajaxCallSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function getPortfolio() {
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

