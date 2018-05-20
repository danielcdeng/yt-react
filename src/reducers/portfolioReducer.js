import * as actionTypes from '../actions/actionTypes';
import initReducerState from './initReducerState';

export default function portfolioReducer(state = initReducerState, action) {

  console.log('portfolioReducer:');
  console.log('  par state = ', state);
  console.log('  par action = ', action);

  // The new state:
  let newState = {
    ajax:   state.ajax,
    cat:    state.cat,
    locale: state.locale,
    //-------------------
    source: state.source,
    filter: state.filter,
    filbak: state.filbak,
    target: state.target,
    tarbak: state.tarbak
  };

  function tabCommonProcessor(tabName, newState) {
    //document.getElementById('filterinput').value = '';
    newState.cat = tabName;
    newState.filter = [];
  }

  switch (action.type) {

    /*** For ajaxStatusActions ***/

    case actionTypes.BEGIN_AJAX_CALL:
      //console.log('ajaxStatusReducer BEGIN_AJAX_CALL');
      newState.ajax += 1;
      break;

    case actionTypes.AJAX_CALL_ERROR:
    case actionTypes.AJAX_CALL_SUCCESS:
      //console.log('ajaxStatusReducer AJAX_CALL_ERROR || action.type == actionTypes.AJAX_CALL_SUCCESS');
      newState.ajax -= 1;
      break;

    /*** For categoryActions (triggered in Header.js) ***/

    case actionTypes.TAB_PORTFOLIO:
      tabCommonProcessor(actionTypes.TAB_PORTFOLIO, newState);
      newState.target = Object.assign([], state.source);
      break;

    case actionTypes.TAB_INDICES:
      tabCommonProcessor(actionTypes.TAB_INDICES, newState);
      newState.target = newState.source.filter(ticker => {
        switch (ticker.tick.name) {
          case actionTypes.TICKER_DAX:
          case actionTypes.TICKER_KOSPI:
          case actionTypes.TICKER_NASDAQ:
          case actionTypes.TICKER_SHCOMP:
          case actionTypes.TICKER_SP500:
          case actionTypes.TICKER_TAIEX:
          case actionTypes.TICKER_TRAN:
            return true;
        }
        return false;
      });
      break;

    case actionTypes.TAB_HIGHTECH:
      tabCommonProcessor(actionTypes.TAB_HIGHTECH, newState);
      newState.target = newState.source.filter(ticker => {
        switch (ticker.tick.name) {
          case actionTypes.TICKER_AAPL:
          case actionTypes.TICKER_AMZN:
          case actionTypes.TICKER_BABA:
          case actionTypes.TICKER_CRM:
          case actionTypes.TICKER_FB:
          case actionTypes.TICKER_GOOGL:
          case actionTypes.TICKER_MSFT:
          case actionTypes.TICKER_NFLX:
          case actionTypes.TICKER_NVDA:
          case actionTypes.TICKER_TQQQ:
          case actionTypes.TICKER_TSLA:
          case actionTypes.TICKER_TSM:
            return true;
        }
        return false;
      });
      break;

    case actionTypes.TAB_FINANCIAL:
      tabCommonProcessor(actionTypes.TAB_FINANCIAL, newState);
      newState.target = newState.source.filter(ticker => {
        switch (ticker.tick.name) {
          case actionTypes.TICKER_XLF:
            return true;
        }
        return false;
      });
      break;

    case actionTypes.TAB_ASSET:
      tabCommonProcessor(actionTypes.TAB_ASSET, newState);
      newState.target = newState.source.filter(ticker => {
        switch (ticker.tick.name) {
          case actionTypes.TICKER_GLD:
          case actionTypes.TICKER_IYR:
          case actionTypes.TICKER_SLV:
          case actionTypes.TICKER_XLE:
            return true;
        }
        return false;
      });
      break;

    case actionTypes.TAB_CRYPTO:
      tabCommonProcessor(actionTypes.TAB_CRYPTO, newState);
      newState.target = newState.source.filter(ticker => {
        switch (ticker.tick.name) {
          case actionTypes.TICKER_BTC:
            return true;
        }
        return false;
      });
      break;

    /*** For localeActions ***/

    case actionTypes.LOCALE_ENUS: // default
      newState.locale = actionTypes.LOCALE_ENUS;
      break;

    case actionTypes.LOCALE_ZHTW:
      newState.locale = actionTypes.LOCALE_ZHTW;
      break;

    /*** For portfolioActions ***/

    case actionTypes.LOAD_PORTFOLIO_SUCCESS:
      newState.source = Object.assign([], action.source);
      newState.target = Object.assign([], action.source);
      break;

    case actionTypes.ON_PORTFOLIO_FILTER:
      newState.filter = Object.assign([], action.filter);
      break;

    case actionTypes.ON_RESTORE_PORTFOLIO:
      newState.filter = [];
      break;

    case actionTypes.ON_TICKER_BEGIN_DATE_SORT:
      if (action.filter && action.filter.length > 0) {
        newState.filter = Object.assign([], action.filter); // otherwise sort would mutate the state
        newState.filter.sort((a, b) => b.door.dat1 >= a.door.dat1 ? 1 : -1);
      } else {
        newState.target = Object.assign([], action.target); // otherwise sort would mutate the state
        newState.target.sort((a, b) => b.door.dat1 >= a.door.dat1 ? 1 : -1);
      }
      break;

    case actionTypes.ON_TICKER_CYCLE_SORT:
      // .filter (and .map) makes a new array, so no need of Object.assign().
      if (action.filter && action.filter.length > 0) {
        newState.filter = action.filter.filter(ticker => { return ticker.door.type == 'yang' ? true : false; });
        newState.filter = newState.filter.concat(action.filter.filter(ticker => { return ticker.door.type == 'yin' ? true : false; }));
      } else {
        newState.target = action.target.filter(ticker => { return ticker.door.type == 'yang' ? true : false; });
        newState.target = newState.target.concat(action.target.filter(ticker => { return ticker.door.type == 'yin' ? true : false; }));
      }
      break;

    case actionTypes.ON_TICKER_HIGHEST_DATE_SORT:
      if (action.filter && action.filter.length > 0) {
        newState.filter = Object.assign([], action.filter);
        newState.filter.sort((a, b) => b.sess.dat2 >= a.sess.dat2 ? 1 : -1);
      } else {
        newState.target = Object.assign([], action.target);
        newState.target.sort((a, b) => b.sess.dat2 >= a.sess.dat2 ? 1 : -1);
      }
      break;

    case actionTypes.ON_TICKER_HIGHEST_NETPER_SORT:
      if (action.filter && action.filter.length > 0) {
        newState.filter = Object.assign([], action.filter);
        newState.filter.sort((a, b) => parseFloat(b.sess.netp) >= parseFloat(a.sess.netp) ? 1 : -1);
      } else {
        newState.target = Object.assign([], action.target);
        newState.target.sort((a, b) => parseFloat(b.sess.netp) >= parseFloat(a.sess.netp) ? 1 : -1);
      }
      break;

    case actionTypes.ON_TICKER_LOWEST_DATE_SORT:
      if (action.filter && action.filter.length > 0) {
        newState.filter = Object.assign([], action.filter);
        newState.filter.sort((a, b) => b.sess.dat3 >= a.sess.dat3 ? 1 : -1);
      } else {
        newState.target = Object.assign([], action.target);
        newState.target.sort((a, b) => b.sess.dat3 >= a.sess.dat3 ? 1 : -1);
      }
      break;

    case actionTypes.ON_TICKER_LOWEST_NETPER_SORT:
      if (action.filter && action.filter.length > 0) {
        newState.filter = Object.assign([], action.filter);
        newState.filter.sort((a, b) => parseFloat(b.sess.afnp) >= parseFloat(a.sess.afnp) ? -1 : 1);
      } else {
        newState.target = Object.assign([], action.target);
        newState.target.sort((a, b) => parseFloat(b.sess.afnp) >= parseFloat(a.sess.afnp) ? -1 : 1);
      }
      break;

    /*** Others ***/

    default:
      break;

  }

  console.log('portfolioReducer, newState = ', newState);
  return newState;
}
