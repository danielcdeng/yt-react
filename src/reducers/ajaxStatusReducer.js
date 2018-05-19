import * as actionTypes from "../actions/actionTypes";
import initReducerState from './initReducerState';

// function actionTypeEndsInSuccess(type) {
//   return type.substring(type.length - 8) == '_SUCCESS';
// }

export default function ajaxStatusReducer(state = initReducerState.ajaxCallsInProgress, action) {
  switch (action.type) {
    case actionTypes.BEGIN_AJAX_CALL:
      //console.log('ajaxStatusReducer BEGIN_AJAX_CALL');
      return state + 1;
    case actionTypes.AJAX_CALL_ERROR:
    case actionTypes.AJAX_CALL_SUCCESS:
      //console.log('ajaxStatusReducer AJAX_CALL_ERROR || action.type == actionTypes.AJAX_CALL_SUCCESS');
      return state - 1;
  }
  return state;
}
