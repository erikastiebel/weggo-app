import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from '../actions/actions';

export default function loginUserReducer( state = [], action ) {
  switch (action.type) {

  case LOGIN_USER:
    return action.userInfoData;

  default:
    return state;
  }
}
