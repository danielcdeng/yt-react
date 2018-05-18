import * as actionTypes from '../actions/actionTypes';

export default {
  // 1. For Header.js:
  ajaxCallsInProgress: 0,
  // 2. For Locales.js:
  locale: actionTypes.LOCALE_ENUS,
  // 3. For PortfolioPage.js:
  portfolio: {
    source: [], // the original source portfolio
    //--------------------------------------------
    filter: [], // working portfolio for filtering
    target: []  // working portfolio for sorting
  }
};
