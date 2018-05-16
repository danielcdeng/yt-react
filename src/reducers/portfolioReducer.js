import * as actionTypes from '../actions/actionTypes';
import initStoreState from './initStoreState';

export default function portfolioReducer(state = initStoreState.portfolio, action) {

  let resState = {
    ajaxCallsInProgress: 0,
    source: Object.assign([], state.source),
    filter: Object.assign([], state.filter),
    target: Object.assign([], state.target)
  };
  let tickers = [];

  switch (action.type) {

    case actionTypes.AJAX_CALL_ERROR:
      resState.ajaxCallsInProgress -= 1;
      console.log('resState.ajaxCallsInProgress = ', resState.ajaxCallsInProgress);
      break;

    case actionTypes.BEGIN_AJAX_CALL:
      resState.ajaxCallsInProgress += 1;
      console.log('resState.ajaxCallsInProgress = ', resState.ajaxCallsInProgress);
      break;

    case actionTypes.LOAD_PORTFOLIO_SUCCESS:
      resState.source = Object.assign([], action.source);
      resState.target = Object.assign([], action.source);
      break;

    case actionTypes.ON_PORTFOLIO_FILTER:
      resState.filter = Object.assign([], action.filter);
      break;

    case actionTypes.ON_RESTORE_PORTFOLIO:
      resState.filter = [];
      break;

    case actionTypes.ON_TICKER_BEGIN_DATE_SORT:
      resState.target = Object.assign([], action.target);         // otherwise sort would mutate the state
      resState.target.sort((a, b) => b.door.dat1 >= a.door.dat1 ? 1 : -1);
      break;

    case actionTypes.ON_TICKER_CYCLE_SORT:
      // .filter (and .map) makes a new array, so no need of Object.assign().
      resState.target = action.target.filter(ticker => { return ticker.door.type == 'yang' ? true : false; });
      resState.target = resState.target.concat(action.target.filter(ticker => { return ticker.door.type == 'yin' ? true : false; }));
      break;

    case actionTypes.ON_TICKER_HIGHEST_DATE_SORT:
      resState.target = Object.assign([], action.target);
      resState.target.sort((a, b) => b.sess.dat2 >= a.sess.dat2 ? 1 : -1);
      break;

    case actionTypes.ON_TICKER_HIGHEST_NETPER_SORT:
      resState.target = Object.assign([], action.target);
      resState.target.sort((a, b) => parseFloat(b.sess.netp) >= parseFloat(a.sess.netp) ? 1 : -1);
      break;

    case actionTypes.ON_TICKER_LOWEST_DATE_SORT:
      resState.target = Object.assign([], action.target);
      resState.target.sort((a, b) => b.sess.dat3 >= a.sess.dat3 ? 1 : -1);
      break;

    case actionTypes.ON_TICKER_LOWEST_NETPER_SORT:
      resState.target = Object.assign([], action.target);
      resState.target.sort((a, b) => parseFloat(b.sess.afnp) >= parseFloat(a.sess.afnp) ? -1 : 1);
      break;

    default:
      break;

  }

  return resState;
}
