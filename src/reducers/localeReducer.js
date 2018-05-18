import * as actionTypes from "../actions/actionTypes";
import initReducerState from './initReducerState';

export default function localeReducer(state = initReducerState.locale, action) {
  switch (action.type) {
    case actionTypes.LOCALE_ENUS: // default
      state = actionTypes.LOCALE_ENUS;
      break;
    case actionTypes.LOCALE_ZHTW:
      state = actionTypes.LOCALE_ZHTW;
      break;
  }
  return state;
}
