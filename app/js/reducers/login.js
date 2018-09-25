import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from '../actions/actions';

export default function loginUserReducer( state = {isLogedIn: false, isLoading: false, user:{}, error: null}, action ) {
  switch (action.type) {

  case LOGIN_USER:
    return {...state, isLoading: true};

  case LOGIN_USER_SUCCESS:
    return {...state, isLogedIn: true, isLoading: false, user: action.userData}

  case LOGIN_USER_FAILURE:
    return {...state, isLoading: false, error: action.userData}

  default:
    return state;
  }
}
