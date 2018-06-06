import * as types from './actionTypes';

// 3 actions:

export function ajaxCallError() {
  return {type: types.AJAX_CALL_ERROR};
}

export function ajaxCallSuccess() {
  return {type: types.AJAX_CALL_SUCCESS};
}

export function beginAjaxCall() {
  return {type: types.BEGIN_AJAX_CALL};
}
