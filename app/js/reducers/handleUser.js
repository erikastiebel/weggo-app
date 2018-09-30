import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from '../actions/actions';

export default function handleUserReducer( state = {isLogedIn: false, isLoading: false, user:{}, error: null}, action ) {
  switch (action.type) {

  case LOGIN_USER:
    return {...state, isLoading: true};

  case LOGIN_USER_SUCCESS:
    return {...state, isLogedIn: true, isLoading: false, user: action.userData};

  case LOGIN_USER_FAILURE:
    return {...state, isLoading: false, error: action.userData};

  case LOGOUT_USER:
    return {...state, isLoading: true};

  case LOGOUT_USER_SUCCESS:
    return {...state, isLogedIn: false, isLoading: false, user: {}};

  case LOGOUT_USER_FAILURE:
    return {...state, isLoading: false, error: action.error, user: {}};

  default:
    return state;
  }
}
