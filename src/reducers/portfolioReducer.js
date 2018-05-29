import * as actionTypes from '../actions/actionTypes';
import initReducerState from './initReducerState';

export default function portfolioReducer(state = initReducerState, action) {

  console.log('portfolioReducer:');
  console.log('  par state = ', state);
  console.log('  par action = ', action);

  // Init the new state:
  let newState = {
    ajax:   state.ajax,
    locale: state.locale,
    //----------------------------
    view:      Object.assign({}, state.view),
    //----------------------------
    portfolio: state.portfolio,
    indices:   state.indices,
    hightech:  state.hightech,
    financial: state.financial,
    asset:     state.asset,
    crypto:    state.crypto
  };

  function switchView(actionCat) {
    if (state.view.cat != actionCat) {
      const viewObj = Object.assign({}, state.view);
      switch (actionCat) {
        case actionTypes.TAB_PORTFOLIO: newState.view = Object.assign({}, newState.portfolio); updateFilterInputBox(newState.view); break;
        case actionTypes.TAB_INDICES:   newState.view = Object.assign({}, newState.indices);   updateFilterInputBox(newState.view); break;
        case actionTypes.TAB_HIGHTECH:  newState.view = Object.assign({}, newState.hightech);  updateFilterInputBox(newState.view); break;
        case actionTypes.TAB_FINANCIAL: newState.view = Object.assign({}, newState.financial); updateFilterInputBox(newState.view); break;
        case actionTypes.TAB_ASSET:     newState.view = Object.assign({}, newState.asset);     updateFilterInputBox(newState.view); break;
        case actionTypes.TAB_CRYPTO:    newState.view = Object.assign({}, newState.crypto);    updateFilterInputBox(newState.view); break;
        default: break;
      }
      switch (viewObj.cat) {
        case actionTypes.TAB_PORTFOLIO: newState.portfolio = viewObj; break;
        case actionTypes.TAB_INDICES:   newState.indices   = viewObj; break;
        case actionTypes.TAB_HIGHTECH:  newState.hightech  = viewObj; break;
        case actionTypes.TAB_FINANCIAL: newState.financial = viewObj; break;
        case actionTypes.TAB_ASSET:     newState.asset     = viewObj; break;
        case actionTypes.TAB_CRYPTO:    newState.crypto    = viewObj; break;
        default: break;
      }
    } else {
      console.log('portfolioReducer: The state.view switch is not required.');
    }
  }

  function updateFilterInputBox(view) {
    document.getElementById('filterinput').value = '';
    if (view.filter.length > 0) {
      let filterTickers = '';
      view.filter.forEach(ticker => filterTickers += ticker.tick.name + ' ');
      document.getElementById('filterinput').value = filterTickers;
    }
  }

  switch (action.type) {

    case actionTypes.BEGIN_AJAX_CALL:
      console.log('  ajaxStatusReducer BEGIN_AJAX_CALL');
      newState.ajax += 1;
      break;

    case actionTypes.AJAX_CALL_ERROR:
    case actionTypes.AJAX_CALL_SUCCESS:
      console.log('  ajaxStatusReducer AJAX_CALL_ERROR || action.type == actionTypes.AJAX_CALL_SUCCESS');
      newState.ajax -= 1;
      break;

    case actionTypes.LOAD_PORTFOLIO_SUCCESS:
      console.log('  ajaxStatusReducer LOAD_PORTFOLIO_SUCCESS');
      newState.view.cat = actionTypes.TAB_PORTFOLIO.slice(0);
      newState.view.target = Object.assign([], action.target);
      //
      newState.portfolio = Object.assign({}, newState.view);
      //
      newState.indices = Object.assign({}, newState.portfolio);
      newState.indices.cat = actionTypes.TAB_INDICES.slice(0);
      newState.indices.target = newState.portfolio.target.filter(ticker => { return actionTypes.TICKERS_INDICES.indexOf(ticker.tick.name) >= 0 ? true : false; });
      //
      newState.hightech = Object.assign({}, newState.portfolio);
      newState.hightech.cat = actionTypes.TAB_HIGHTECH.slice(0);
      newState.hightech.target = newState.portfolio.target.filter(ticker => { return actionTypes.TICKERS_HIGHTECH.indexOf(ticker.tick.name) >= 0 ? true : false; });
      //
      newState.financial = Object.assign({}, newState.portfolio);
      newState.financial.cat = actionTypes.TAB_FINANCIAL.slice(0);
      newState.financial.target = newState.portfolio.target.filter(ticker => { return actionTypes.TICKERS_FINANCIAL.indexOf(ticker.tick.name) >= 0 ? true : false; });
      //
      newState.asset = Object.assign({}, newState.portfolio);
      newState.asset.cat = actionTypes.TAB_ASSET.slice(0);
      newState.asset.target = newState.portfolio.target.filter(ticker => { return actionTypes.TICKERS_ASSET.indexOf(ticker.tick.name) >= 0 ? true : false; });
      //
      newState.crypto = Object.assign({}, newState.portfolio);
      newState.crypto.cat = actionTypes.TAB_CRYPTO.slice(0);
      newState.crypto.target = newState.portfolio.target.filter(ticker => { return actionTypes.TICKERS_CRYPTO.indexOf(ticker.tick.name) >= 0 ? true : false; });
      break;

    case actionTypes.LOCALE_ENUS: // default
      newState.locale = actionTypes.LOCALE_ENUS;
      break;

    case actionTypes.LOCALE_ZHTW:
      newState.locale = actionTypes.LOCALE_ZHTW;
      break;

    case actionTypes.ON_VIEW_FILTER:
      newState.view.filter = Object.assign([], action.filter);
      break;

    case actionTypes.ON_VIEW_RESET:
      newState.view.filter = [];
      break;

    case actionTypes.ON_TICKER_BEGIN_DATE_SORT:
      if (action.filter && action.filter.length > 0) {
        newState.view.filter = Object.assign([], action.filter); // otherwise sort would mutate the state
        newState.view.filter.sort((a, b) => b.door.dat1 >= a.door.dat1 ? 1 : -1);
      } else {
        newState.view.target = Object.assign([], action.target); // otherwise sort would mutate the state
        newState.view.target.sort((a, b) => b.door.dat1 >= a.door.dat1 ? 1 : -1);
      }
      break;

    case actionTypes.ON_TICKER_CYCLE_SORT:
      // .filter and .map would make a new array, so no need of Object.assign().
      if (action.filter && action.filter.length > 0) {
        newState.view.filter = action.filter.filter(ticker => { return ticker.door.type == 'yang' ? true : false; });
        newState.view.filter = newState.view.filter.concat(action.filter.filter(ticker => { return ticker.door.type == 'yin' ? true : false; }));
      } else {
        newState.view.target = action.target.filter(ticker => { return ticker.door.type == 'yang' ? true : false; });
        newState.view.target = newState.view.target.concat(action.target.filter(ticker => { return ticker.door.type == 'yin' ? true : false; }));
      }
      break;

    case actionTypes.ON_TICKER_HIGHEST_DATE_SORT:
      if (action.filter && action.filter.length > 0) {
        newState.view.filter = Object.assign([], action.filter);
        newState.view.filter.sort((a, b) => b.sess.dat2 >= a.sess.dat2 ? 1 : -1);
      } else {
        newState.view.target = Object.assign([], action.target);
        newState.view.target.sort((a, b) => b.sess.dat2 >= a.sess.dat2 ? 1 : -1);
      }
      break;

    case actionTypes.ON_TICKER_HIGHEST_NETPER_SORT:
      if (action.filter && action.filter.length > 0) {
        newState.view.filter = Object.assign([], action.filter);
        newState.view.filter.sort((a, b) => parseFloat(b.sess.netp) >= parseFloat(a.sess.netp) ? 1 : -1);
      } else {
        newState.view.target = Object.assign([], action.target);
        newState.view.target.sort((a, b) => parseFloat(b.sess.netp) >= parseFloat(a.sess.netp) ? 1 : -1);
      }
      break;

    case actionTypes.TAB_PORTFOLIO: console.log('  ajaxStatusReducer TAB_PORTFOLIO'); switchView(actionTypes.TAB_PORTFOLIO); break;
    case actionTypes.TAB_INDICES:   console.log('  ajaxStatusReducer TAB_INDICES');   switchView(actionTypes.TAB_INDICES);   break;
    case actionTypes.TAB_HIGHTECH:  console.log('  ajaxStatusReducer TAB_HIGHTECH');  switchView(actionTypes.TAB_HIGHTECH);  break;
    case actionTypes.TAB_FINANCIAL: console.log('  ajaxStatusReducer TAB_FINANCIAL'); switchView(actionTypes.TAB_FINANCIAL); break;
    case actionTypes.TAB_ASSET:     console.log('  ajaxStatusReducer TAB_ASSET');     switchView(actionTypes.TAB_ASSET);     break;
    case actionTypes.TAB_CRYPTO:    console.log('  ajaxStatusReducer TAB_CRYPTO');    switchView(actionTypes.TAB_CRYPTO);    break;

    default: break;

  }

  console.log('  newState = ', newState);
  return newState;
}

