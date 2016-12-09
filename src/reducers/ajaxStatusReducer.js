import * as types from '../actions/actionTypes';
import intialState from './initialState';

function actionTypeEndsInSucess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = intialState.numAjaxCallsInProgress, action) {
  if(action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  }
  else if (actionTypeEndsInSucess(action.type)) {
    return state - 1;
  }

  return state;
}
