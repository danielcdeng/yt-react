import * as actionTypes from './actionTypes';

/***** Local Functions *****/

/***** Exported Functions *****/

export function localeENUS() {
  const action = {type: actionTypes.LOCALE_ENUS, locale: actionTypes.LOCALE_ENUS};
  //console.log('locale enus action: ', action);
  return action;
}

// target and filter are the two keys in the state.portfolio object
export function localeZHTW() {
  const action = {type: actionTypes.LOCALE_ZHTW, locale: actionTypes.LOCALE_ZHTW};
  //console.log('locale zhtw action: ', action);
  return action;
}

