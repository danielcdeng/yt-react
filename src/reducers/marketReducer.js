import * as types from '../actions/actionTypes';
import initReducerState from './initReducerState';

export default function marketReducer(state = initReducerState.market, action) {

  console.log('marketReducer:');
  console.log('  par state.market = ', state.market);
  console.log('  par action = ', action);

  // Init the new state:
  let newState = {
    ajax:      state.ajax,
    view:      JSON.parse(JSON.stringify(state.view)),
    //-------------------
    portfolio: state.portfolio,
    indices:   state.indices,
    hightech:  state.hightech,
    financial: state.financial,
    asset:     state.asset,
    crypto:    state.crypto,
    //-------------------
    archive:   state.archive,
    stat:      state.stat
  };

  function median(values) {
    values.sort( function(a,b) {return a - b;} );
    const half = Math.floor(values.length/2);
    if(values.length % 2) return values[half];
    else return (values[half-1] + values[half]) / 2.0;
  }

  // Only called when actionCat is one of the data views:
  function switchMarketView(actionCat) {
    if (state.view.cat != actionCat) {
      const viewObj = JSON.parse(JSON.stringify(state.view));
      switch (actionCat) {
        case types.TAB_PORTFOLIO:
          newState.view = Object.assign({}, newState.portfolio);
          updateFilterInputBox(newState.view);
          break;
        case types.TAB_INDICES:
          newState.view = Object.assign({}, newState.indices);
          updateFilterInputBox(newState.view);
          break;
        case types.TAB_HIGHTECH:
          newState.view = Object.assign({}, newState.hightech);
          updateFilterInputBox(newState.view);
          break;
        case types.TAB_FINANCIAL:
          newState.view = Object.assign({}, newState.financial);
          updateFilterInputBox(newState.view);
          break;
        case types.TAB_ASSET:
          newState.view = Object.assign({}, newState.asset);
          updateFilterInputBox(newState.view);
          break;
        case types.TAB_CRYPTO:
          newState.view = Object.assign({}, newState.crypto);
          updateFilterInputBox(newState.view);
          break;
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
    } else {
      console.log('marketReducer: The view switch is not required.');
    }
  } // switchMarketView

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

  function updateTotalStateCodeSelect(view) {
    let noneSelectedCtr  = 0;
    let totalSelectedCtr = 0;
    if (view.filter.length > 0) {
      view.filter.forEach(ticker => {
        if (ticker.tick.scClicked) ++totalSelectedCtr;
        else ++noneSelectedCtr;
      });
      if (totalSelectedCtr == view.filter.length) view.scClicked = true;
      if (noneSelectedCtr == view.filter.length)  view.scClicked = false;
    } else if (view.target.length > 0) {
      view.target.forEach(ticker => {
        if (ticker.tick.scClicked) ++totalSelectedCtr;
        else ++noneSelectedCtr;
      });
      if (totalSelectedCtr == view.target.length) view.scClicked = true;
      if (noneSelectedCtr == view.target.length)  view.scClicked = false;
    }
  }

  switch (action.type) {

    case types.LOAD_ARCHIVE_SUCCESS:
      console.log('marketReducer, LOAD_ARCHIVE_SUCCESS');
      // Archives and Statistics:
      newState.archive = {};
      newState.stat = {};
      for (let idx = 0; idx < types.TICKERS_TOTAL.length; idx++) {
        const symbol = types.TICKERS_TOTAL[idx];
        newState.archive[symbol] = [];
        newState.stat[symbol] = {
          yang: {
            average: '',
            median: '',
            netp: [],
            beginMonth: [],
            endMonth: [],
            sortedNetp: []
          },
          yin: {
            average: '',
            median: '',
            netp: [],
            beginMonth: [],
            endMonth: [],
            sortedNetp: []
          }
        };
      }
      action.archive.forEach(ticker => newState.archive[ticker.tick.name].push(ticker));
      for (let idx = 0; idx < types.TICKERS_TOTAL.length; idx++) {
        const symbol = types.TICKERS_TOTAL[idx];
        const archive = newState.archive[symbol];
        const stat = newState.stat[symbol];
        archive.forEach(ticker => {
          if (ticker.tick.name == symbol) {
            if (ticker.door.type == 'yang'){
              stat.yang.netp.push(parseFloat(ticker.sess.netp));
              stat.yang.beginMonth.push(parseFloat(ticker.door.dat1.slice(5,7)));
              stat.yang.endMonth.push(parseFloat(ticker.sess.dat2.slice(5,7)));
            } else if (ticker.door.type == 'yin') {
              stat.yin.netp.push(parseFloat(ticker.sess.netp));
              stat.yin.beginMonth.push(parseFloat(ticker.door.dat1.slice(5,7)));
              stat.yin.endMonth.push(parseFloat(ticker.sess.dat2.slice(5,7)));
            }
          }
        });
        stat.yang.netp.pop(); stat.yang.beginMonth.pop(); stat.yang.endMonth.pop();
        stat.yin.netp.pop(); stat.yin.beginMonth.pop(); stat.yin.endMonth.pop();
        stat.yang.sortedNetp = JSON.parse(JSON.stringify(stat.yang.netp));
        stat.yin.sortedNetp = JSON.parse(JSON.stringify(stat.yin.netp));
        stat.yang.sortedNetp.sort((a, b) => (a - b));
        stat.yin.sortedNetp.sort((a, b) => (b - a));
        //
        let sum = 0.0;
        stat.yang.sortedNetp.forEach(netp => sum += netp);
        if (stat.yang.netp.length > 0) {
          stat.yang.average = '+' + (sum / stat.yang.netp.length).toFixed(1) + '%';
          stat.yang.median  = '+' + median(stat.yang.netp).toFixed(1) + '%';
        }
        else {
          stat.yang.average = 'N/A';
          stat.yang.median  = 'N/A';
        }
        //
        sum = 0.0;
        stat.yin.sortedNetp.forEach(netp => sum += netp);
        if (stat.yin.netp.length > 0) {
          stat.yin.average = (sum / stat.yin.netp.length).toFixed(1) + '%';
          stat.yin.median  = median(stat.yin.netp).toFixed(1) + '%';
        } else {
          stat.yin.average = 'N/A';
          stat.yin.median  = 'N/A';
        }
      }
      console.log('newState.archive = ', newState.archive);
      console.log('newState.stat     = ', newState.stat);
      break;

    case types.LOAD_PORTFOLIO_SUCCESS:
      console.log('marketReducer, LOAD_PORTFOLIO_SUCCESS');
      newState.view.cat = types.TAB_PORTFOLIO.slice(0);
      newState.view.target = JSON.parse(JSON.stringify(action.target));
      newState.view.target.forEach(ticker => { ticker.tick.scClicked = false; });
      // Portfolio:
      newState.portfolio = JSON.parse(JSON.stringify(action.target));
      // Indices:
      newState.indices = Object.assign({}, newState.view);
      newState.indices.cat = types.TAB_INDICES.slice(0);
      newState.indices.target = newState.view.target.filter(ticker => { return types.TICKERS_INDICES.indexOf(ticker.tick.name) >= 0 ? true : false; });
      // Hightech:
      newState.hightech = Object.assign({}, newState.view);
      newState.hightech.cat = types.TAB_HIGHTECH.slice(0);
      newState.hightech.target = newState.view.target.filter(ticker => { return types.TICKERS_HIGHTECH.indexOf(ticker.tick.name) >= 0 ? true : false; });
      // Financial:
      newState.financial = Object.assign({}, newState.view);
      newState.financial.cat = types.TAB_FINANCIAL.slice(0);
      newState.financial.target = newState.view.target.filter(ticker => { return types.TICKERS_FINANCIAL.indexOf(ticker.tick.name) >= 0 ? true : false; });
      // Asset:
      newState.asset = Object.assign({}, newState.view);
      newState.asset.cat = types.TAB_ASSET.slice(0);
      newState.asset.target = newState.view.target.filter(ticker => { return types.TICKERS_ASSET.indexOf(ticker.tick.name) >= 0 ? true : false; });
      // Crypto:
      newState.crypto = Object.assign({}, newState.view);
      newState.crypto.cat = types.TAB_CRYPTO.slice(0);
      newState.crypto.target = newState.view.target.filter(ticker => { return types.TICKERS_CRYPTO.indexOf(ticker.tick.name) >= 0 ? true : false; });
      break;

    case types.ON_TICKER_BEGIN_DATE_SORT:
      console.log('marketReducer, ON_TICKER_BEGIN_DATE_SORT');
      if (action.filter && action.filter.length > 0) {
        newState.view.filter = Object.assign([], action.filter); // sort would not mutate the state
        newState.view.filter.sort((a, b) => b.door.dat1 >= a.door.dat1 ? 1 : -1);
      } else {
        newState.view.target = Object.assign([], action.target);
        newState.view.target.sort((a, b) => b.door.dat1 >= a.door.dat1 ? 1 : -1);
      }
      break;

    case types.MARKET_AJAX_CALL_BEGIN:
      console.log('marketReducer, MARKET_AJAX_CALL_BEGIN');
      newState.ajax += 1;
      break;
    case types.MARKET_AJAX_CALL_ERROR:
    case types.MARKET_AJAX_CALL_SUCCESS:
      console.log('  marketReducer, MARKET_AJAX_CALL_ERROR || action.type == types.MARKET_AJAX_CALL_SUCCESS');
      newState.ajax -= 1;
      break;

    case types.ON_TICKER_CYCLE_SORT:
      console.log('marketReducer, ON_TICKER_CYCLE_SORT');
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
      console.log('marketReducer, ON_TICKER_HIGHEST_DATE_SORT');
      if (action.filter && action.filter.length > 0) {
        newState.view.filter = Object.assign([], action.filter); // sort would not mutate the state
        newState.view.filter.sort((a, b) => b.sess.dat2 >= a.sess.dat2 ? 1 : -1);
      } else {
        newState.view.target = Object.assign([], action.target);
        newState.view.target.sort((a, b) => b.sess.dat2 >= a.sess.dat2 ? 1 : -1);
      }
      break;

    case types.ON_TICKER_HIGHEST_NETPER_SORT:
      console.log('marketReducer, ON_TICKER_HIGHEST_NETPER_SORT');
      if (action.filter && action.filter.length > 0) {
        newState.view.filter = Object.assign([], action.filter);
        newState.view.filter.sort((a, b) => parseFloat(b.sess.netp) >= parseFloat(a.sess.netp) ? 1 : -1);
      } else {
        newState.view.target = Object.assign([], action.target);
        newState.view.target.sort((a, b) => parseFloat(b.sess.netp) >= parseFloat(a.sess.netp) ? 1 : -1);
      }
      break;

    case types.ON_TICKER_STATE_CODE_CLICKED:
      console.log('marketReducer, ON_TICKER_STATE_CODE_CLICKED');
      if (newState.view.filter.length > 0) {
        newState.view.filter.forEach(ticker => {
          if (ticker.tick.name == action.ticker.tick.name) {
            ticker.tick.scClicked = !ticker.tick.scClicked;
          }
        });
      } else if (newState.view.target.length > 0) {
        newState.view.target.forEach(ticker => {
          if (ticker.tick.name == action.ticker.tick.name) {
            ticker.tick.scClicked = !ticker.tick.scClicked;
          }
        });
      }
      updateTotalStateCodeSelect(newState.view);
      break;

    case types.ON_VIEW_FILTER:
      console.log('marketReducer, ON_VIEW_FILTER');
      newState.view.filter = Object.assign([], action.filter); // forr display only, so use Object.assign()
      break;

    case types.ON_VIEW_RESET:
      console.log('marketReducer, ON_VIEW_RESET');
      newState.view.filter = [];
      newState.view.scClicked = false;
      if (newState.view.target.length > 0) {
        newState.view.target = JSON.parse(JSON.stringify(newState.view.target));
        newState.view.target.forEach(ticker => ticker.tick.scClicked = false);
      }
      break;

    case types.ON_VIEW_STATE_CODE_CLICKED:
      console.log('marketReducer, ON_VIEW_STATE_CODE_CLICKED');
      newState.view.scClicked = !newState.view.scClicked;
      if (newState.view.filter.length > 0) {
        newState.view.filter = JSON.parse(JSON.stringify(newState.view.filter));
        newState.view.filter.forEach(ticker => {
          //if (ticker.door.type == 'yin') {
            ticker.tick.scClicked = newState.view.scClicked;
          //}
        });
      } else if (newState.view.target.length > 0) {
        newState.view.target = JSON.parse(JSON.stringify(newState.view.target));
        newState.view.target.forEach(ticker => {
          //if (ticker.door.type == 'yin') {
            ticker.tick.scClicked = newState.view.scClicked;
          //}
        });
      }
      break;

    case types.TAB_PORTFOLIO: console.log('marketReducer, TAB_PORTFOLIO'); switchMarketView(types.TAB_PORTFOLIO); break;
    case types.TAB_INDICES:   console.log('marketReducer, TAB_INDICES');   switchMarketView(types.TAB_INDICES);   break;
    case types.TAB_HIGHTECH:  console.log('marketReducer, TAB_HIGHTECH');  switchMarketView(types.TAB_HIGHTECH);  break;
    case types.TAB_FINANCIAL: console.log('marketReducer, TAB_FINANCIAL'); switchMarketView(types.TAB_FINANCIAL); break;
    case types.TAB_ASSET:     console.log('marketReducer, TAB_ASSET');     switchMarketView(types.TAB_ASSET);     break;
    case types.TAB_CRYPTO:    console.log('marketReducer, TAB_CRYPTO');    switchMarketView(types.TAB_CRYPTO);    break;

    default:
      console.log('marketReducer, undefined, action.type = "' + action.type + '"');
      break;

  }

  console.log('marketReducer, newState = ', newState);
  return newState;
}

