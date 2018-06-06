import * as actionTypes from './actionTypes';

// 1 action:

export function onCatClick(link) {
  let action = null;
  switch (link) {
    case actionTypes.TAB_HOME:      action = {type: actionTypes.TAB_HOME};      break;
    case actionTypes.TAB_PORTFOLIO: action = {type: actionTypes.TAB_PORTFOLIO}; break;
    case actionTypes.TAB_INDICES:   action = {type: actionTypes.TAB_INDICES};   break;
    case actionTypes.TAB_HIGHTECH:  action = {type: actionTypes.TAB_HIGHTECH};  break;
    case actionTypes.TAB_FINANCIAL: action = {type: actionTypes.TAB_FINANCIAL}; break;
    case actionTypes.TAB_ASSET:     action = {type: actionTypes.TAB_ASSET};     break;
    case actionTypes.TAB_CRYPTO:    action = {type: actionTypes.TAB_CRYPTO};    break;
    case actionTypes.TAB_ABOUT:     action = {type: actionTypes.TAB_ABOUT};     break;
  }
  console.log('categoryActions, onCatClick, action created = ', action);
  return action;
}

// target and filter are the two keys in the state.portfolio object
// export function localeZHTW() {
//   return {type: actionTypes.LOCALE_ZHTW, locale: actionTypes.LOCALE_ZHTW};
// }

