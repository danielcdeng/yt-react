import * as types from '../actions/actionTypes';
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

  // Only called when actionCat is one of the data views:
  function switchDataView(actionCat) {
    if (state.view.cat != actionCat) {
      const viewObj = Object.assign({}, state.view);
      switch (actionCat) {
        case types.TAB_PORTFOLIO: newState.view = Object.assign({}, newState.portfolio); updateFilterInputBox(newState.view); break;
        case types.TAB_INDICES:   newState.view = Object.assign({}, newState.indices);   updateFilterInputBox(newState.view); break;
        case types.TAB_HIGHTECH:  newState.view = Object.assign({}, newState.hightech);  updateFilterInputBox(newState.view); break;
        case types.TAB_FINANCIAL: newState.view = Object.assign({}, newState.financial); updateFilterInputBox(newState.view); break;
        case types.TAB_ASSET:     newState.view = Object.assign({}, newState.asset);     updateFilterInputBox(newState.view); break;
        case types.TAB_CRYPTO:    newState.view = Object.assign({}, newState.crypto);    updateFilterInputBox(newState.view); break;
      }
      // Backup:
      switch (viewObj.cat) {
        case types.TAB_PORTFOLIO: newState.portfolio = viewObj; break;
        case types.TAB_INDICES:   newState.indices   = viewObj; break;
        case types.TAB_HIGHTECH:  newState.hightech  = viewObj; break;
        case types.TAB_FINANCIAL: newState.financial = viewObj; break;
        case types.TAB_ASSET:     newState.asset     = viewObj; break;
        case types.TAB_CRYPTO:    newState.crypto    = viewObj; break;
      }
    } {
      console.log('portfolioReducer: The state.view switch is not required.');
    }
  }

  function updateFilterInputBox(view) {
    const inputEle = document.getElementById('filterinput');
    if (inputEle) {
      inputEle.value = '';
      if (view.filter.length > 0) {
        let filterTickers = '';
        view.filter.forEach(ticker => filterTickers += ticker.tick.name + ' ');
        inputEle.value = filterTickers;
      }
    } else {
      // The action control must come from a non-data-view tab. Taken care of by componentDidMount() in PortfolioPage.js.
    }
  }

  switch (action.type) {

    case types.BEGIN_AJAX_CALL:
      console.log('  ajaxStatusReducer BEGIN_AJAX_CALL');
      newState.ajax += 1;
      break;

    case types.AJAX_CALL_ERROR:
    case types.AJAX_CALL_SUCCESS:
      console.log('  ajaxStatusReducer AJAX_CALL_ERROR || action.type == types.AJAX_CALL_SUCCESS');
      newState.ajax -= 1;
      break;

    case types.LOAD_PORTFOLIO_SUCCESS:
      console.log('  ajaxStatusReducer LOAD_PORTFOLIO_SUCCESS');
      newState.view.cat = types.TAB_PORTFOLIO.slice(0);
      newState.view.target = Object.assign([], action.target);
      newState.view.target.forEach(ticker => {
        ticker.tick.scClicked = false;
      });
      //
      newState.portfolio = Object.assign({}, newState.view);
      //
      newState.indices = Object.assign({}, newState.view);
      newState.indices.cat = types.TAB_INDICES.slice(0);
      newState.indices.target = newState.view.target.filter(ticker => { return types.TICKERS_INDICES.indexOf(ticker.tick.name) >= 0 ? true : false; });
      //
      newState.hightech = Object.assign({}, newState.view);
      newState.hightech.cat = types.TAB_HIGHTECH.slice(0);
      newState.hightech.target = newState.view.target.filter(ticker => { return types.TICKERS_HIGHTECH.indexOf(ticker.tick.name) >= 0 ? true : false; });
      //
      newState.financial = Object.assign({}, newState.view);
      newState.financial.cat = types.TAB_FINANCIAL.slice(0);
      newState.financial.target = newState.view.target.filter(ticker => { return types.TICKERS_FINANCIAL.indexOf(ticker.tick.name) >= 0 ? true : false; });
      //
      newState.asset = Object.assign({}, newState.view);
      newState.asset.cat = types.TAB_ASSET.slice(0);
      newState.asset.target = newState.view.target.filter(ticker => { return types.TICKERS_ASSET.indexOf(ticker.tick.name) >= 0 ? true : false; });
      //
      newState.crypto = Object.assign({}, newState.view);
      newState.crypto.cat = types.TAB_CRYPTO.slice(0);
      newState.crypto.target = newState.view.target.filter(ticker => { return types.TICKERS_CRYPTO.indexOf(ticker.tick.name) >= 0 ? true : false; });
      break;

    case types.LOCALE_ENUS: // default
      newState.locale = types.LOCALE_ENUS;
      break;

    case types.LOCALE_ZHTW:
      newState.locale = types.LOCALE_ZHTW;
      break;

    case types.ON_VIEW_FILTER:
      newState.view.filter = Object.assign([], action.filter);
      break;

    case types.ON_VIEW_RESET:
      newState.view.filter = [];
      newState.view.scClicked = false;
      if (newState.view.target.length > 0) {
        newState.view.target = JSON.parse(JSON.stringify(newState.view.target));
        newState.view.target.forEach(ticker => ticker.tick.scClicked = false);
      }
      break;

    case types.ON_TICKER_BEGIN_DATE_SORT:
      if (action.filter && action.filter.length > 0) {
        newState.view.filter = Object.assign([], action.filter); // otherwise sort would mutate the state
        newState.view.filter.sort((a, b) => b.door.dat1 >= a.door.dat1 ? 1 : -1);
      } else {
        newState.view.target = Object.assign([], action.target); // otherwise sort would mutate the state
        newState.view.target.sort((a, b) => b.door.dat1 >= a.door.dat1 ? 1 : -1);
      }
      break;

    case types.ON_TICKER_CYCLE_SORT:
      // .filter and .map would make a new array, so no need of Object.assign().
      if (action.filter && action.filter.length > 0) {
        newState.view.filter = action.filter.filter(ticker => { return ticker.door.type == 'yang' ? true : false; });
        newState.view.filter = newState.view.filter.concat(action.filter.filter(ticker => { return ticker.door.type == 'yin' ? true : false; }));
      } else {
        newState.view.target = action.target.filter(ticker => { return ticker.door.type == 'yang' ? true : false; });
        newState.view.target = newState.view.target.concat(action.target.filter(ticker => { return ticker.door.type == 'yin' ? true : false; }));
      }
      break;

    case types.ON_TICKER_HIGHEST_DATE_SORT:
      if (action.filter && action.filter.length > 0) {
        newState.view.filter = Object.assign([], action.filter);
        newState.view.filter.sort((a, b) => b.sess.dat2 >= a.sess.dat2 ? 1 : -1);
      } else {
        newState.view.target = Object.assign([], action.target);
        newState.view.target.sort((a, b) => b.sess.dat2 >= a.sess.dat2 ? 1 : -1);
      }
      break;

    case types.ON_TICKER_HIGHEST_NETPER_SORT:
      if (action.filter && action.filter.length > 0) {
        newState.view.filter = Object.assign([], action.filter);
        newState.view.filter.sort((a, b) => parseFloat(b.sess.netp) >= parseFloat(a.sess.netp) ? 1 : -1);
      } else {
        newState.view.target = Object.assign([], action.target);
        newState.view.target.sort((a, b) => parseFloat(b.sess.netp) >= parseFloat(a.sess.netp) ? 1 : -1);
      }
      break;

    case types.ON_VIEW_STATE_CODE_CLICKED:
      newState.view.scClicked = !newState.view.scClicked;
      if (newState.view.filter.length > 0) {
        newState.view.filter = JSON.parse(JSON.stringify(newState.view.filter));
        newState.view.filter.forEach(ticker => ticker.tick.scClicked = !ticker.tick.scClicked);
      } else if (newState.view.target.length > 0) {
        newState.view.target = JSON.parse(JSON.stringify(newState.view.target));
        newState.view.target.forEach(ticker => ticker.tick.scClicked = !ticker.tick.scClicked);
      }
      break;

    case types.TAB_PORTFOLIO: console.log('  ajaxStatusReducer TAB_PORTFOLIO'); switchDataView(types.TAB_PORTFOLIO); break;
    case types.TAB_INDICES:   console.log('  ajaxStatusReducer TAB_INDICES');   switchDataView(types.TAB_INDICES);   break;
    case types.TAB_HIGHTECH:  console.log('  ajaxStatusReducer TAB_HIGHTECH');  switchDataView(types.TAB_HIGHTECH);  break;
    case types.TAB_FINANCIAL: console.log('  ajaxStatusReducer TAB_FINANCIAL'); switchDataView(types.TAB_FINANCIAL); break;
    case types.TAB_ASSET:     console.log('  ajaxStatusReducer TAB_ASSET');     switchDataView(types.TAB_ASSET);     break;
    case types.TAB_CRYPTO:    console.log('  ajaxStatusReducer TAB_CRYPTO');    switchDataView(types.TAB_CRYPTO);    break;

    default: break;

  }

  console.log('  newState = ', newState);
  return newState;
}

