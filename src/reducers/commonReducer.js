import * as types from '../actions/actionTypes';
import initReducerState from './initReducerState';

export default function commonReducer(state = initReducerState.common, action) {

  console.log('commonReducer:');
  console.log('  par state = ', state);
  console.log('  par action = ', action);

  let newState = {
    locale: state.locale
  };

  switch (action.type) {

    case types.LOCALE_ENUS: // default
      console.log('commonReducer, LOCALE_ENUS');
      newState.locale = types.LOCALE_ENUS;
      break;

    case types.LOCALE_ZHTW:
      console.log('commonReducer, LOCALE_ZHTW');
      newState.locale = types.LOCALE_ZHTW;
      break;

    default:
      console.log('commonReducer, undefined, action.type = ' + action.type);
      break;

  }

  console.log('commonReducer, newState = ', newState);
  return newState;
}

