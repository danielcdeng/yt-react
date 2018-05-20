import * as actionTypes from './actionTypes';

/***** Local Functions *****/

/***** Exported Functions *****/

export function onCatClick(link) {
  let action = null;
  switch (link) {
    case actionTypes.TAB_PORTFOLIO: action = {type: actionTypes.TAB_PORTFOLIO}; break;
    case actionTypes.TAB_INDICES:   action = {type: actionTypes.TAB_INDICES};   break;
    case actionTypes.TAB_HIGHTECH:  action = {type: actionTypes.TAB_HIGHTECH};  break;
    case actionTypes.TAB_FINANCIAL: action = {type: actionTypes.TAB_FINANCIAL}; break;
    case actionTypes.TAB_ASSET:     action = {type: actionTypes.TAB_ASSET};     break;
    case actionTypes.TAB_CRYPTO:    action = {type: actionTypes.TAB_CRYPTO};    break;
  }
  console.log('categoryActions, onCatClick, action created = ', action);
  return action;
}

// target and filter are the two keys in the state.portfolio object
// export function localeZHTW() {
//   return {type: actionTypes.LOCALE_ZHTW, locale: actionTypes.LOCALE_ZHTW};
// }

