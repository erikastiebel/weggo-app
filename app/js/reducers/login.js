import { RECEIVE_USERINFO } from '../actions/actions';

export default function reciveUserInfoReducer( state = {}, action ) {
  switch (action.type) {

  case RECEIVE_USERINFO:
    return action.userInfoData;

  default:
    return state;
  }
}
